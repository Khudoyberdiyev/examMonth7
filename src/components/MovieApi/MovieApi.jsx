import React from 'react'
import { useEffect , useState } from 'react';
import axios from "axios";


const MovieApi = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.themoviedb.org/3/movie/popular", {
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
    <div className='container mt-10 '>
        <div className='flex items-center gap-[30px] flex-wrap ml-[20px]'>
        {data.map((movie ) => (
        <div className='w-[220px] h-[400px]'>
          <div className='flex'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className='rounded-md'
           />
          </div>
          <p className='text-white'>{movie.original_title}</p>
          <p className='text-red-600'>{movie.release_date}</p>
            
        </div>
      ))}
      </div>
    </div>
  )
}

export default MovieApi