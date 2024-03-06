import React, { useEffect, useState } from 'react'
import MovieApi from '../../components/MovieApi/MovieApi'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'

const Search = () => {
  const [searchText , setSearchText] = useState("")
  const [data, setData] = useState([])
  console.log(searchText);
  const handleSearch = (e) =>{
    setSearchText(e.target.value)
  }
  const searchedData = async () => {

   try{
    const response = await axios
    .get("https://api.themoviedb.org/3/search/movie", {
     params: {
       api_key: "4b7feb4a7688c3c46324165839ad0ffd",
       query:searchText,
     },
   })
     if (response.status !== 200) throw new Error("Could not fetch");
     // console.log(response.data.results);
     return setData(response.data.results);
  
   }catch(err){
    console.log(err.message);
   }
  }
  useEffect(() => {
   const debounceFunc = setTimeout(() => {
    if(searchText.trim() !== ""){
      searchedData()
  }
   },50)
   return () => clearTimeout(debounceFunc)
  }, [searchText])
  const conditionalRender = data.length > 0 && searchText.trim() !== ''
  return (
    <div className='container'>
        <Header />
        <div>
            <input type="search"  placeholder='search films......'  className='w-[1200px] ml-8 mt-[20px] rounded-[20px] py-1' onChange={handleSearch} value={searchText}/>
        </div>
          <div>
            {
              conditionalRender ?(
              
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
              
              ) : (
                <MovieApi />
              )
            }
          </div>
        <Footer />
    </div>
  )
}

export default Search