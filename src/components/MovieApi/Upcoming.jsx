import React from 'react'
import { useEffect , useState } from 'react';
import axios from "axios";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Upcoming = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.themoviedb.org/3/movie/upcoming", {
          params: {
            api_key: "4b7feb4a7688c3c46324165839ad0ffd",
          },
        })
        .then((response) => {
          if (response.status !== 200) throw new Error("Could not fetch");
          // console.log(response.data.results);
          return setData(response.data.results);
        })
        .catch((error) => {
          console.log(error.message);
        }, []);
    });
  return (
    <div className='w-[1150px] m-auto'>
        <div className='mt-20 items-center'>
        <Slider {...settings}>
        {data.map((movie ) => (
        <div className='w-[350px] h-[300px] bg-[#1A1A1A] api-card rounded-md'>
      
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className='rounded-md w-[180px] h-[200px] ml-[15px] mt-[10px]'
           />
          <p className='text-white ml-[15px] mt-[5px]' >{movie.original_title}</p>
          <p className='text-red-600  ml-[15px] mt-[5px]'>{movie.release_date}</p>
            
        </div>
      ))}
      </Slider>
      </div>
      </div>

  )
}

export default Upcoming