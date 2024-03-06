import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carusel from '../../components/Carusel/Carusel'
import TopRated from '../../components/MovieApi/TopRated'
import NowPlaying from '../../components/MovieApi/NowPlaying'
import Upcoming from '../../components/MovieApi/Upcoming'
import ShowsApi from '../../components/ShowsApi/ShowsApi'
import Card1 from '../../components/Card/Card'

const Movies = () => {
 
  let slides = [
    "https://images.alphacoders.com/128/1289451.jpg",
    "https://xxboxnews.blob.core.windows.net/prod/sites/2/2021/09/avengers_title_hero_art_1920x1080.jpg",
    "https://images8.alphacoders.com/113/1130048.jpg",
    "https://images2.alphacoders.com/280/280472.jpg"

  ]
  return (
    <div>
        <Header />
    <div className='container'>
        <Carusel slides={slides}/>
        <div className='h-[1450px] border-[2px] border-gray-800 mt-10 rounded-[10px] relative'>  
        
        <h1 className='font-[700] text-[40px] text-white ml-[50px] mt-[20px]'>Trending Now</h1> 
           <TopRated />
        <h1 className='font-[700] text-[40px] text-white ml-[50px] mt-[10px]'>New Releases</h1> 
           <NowPlaying />
        <h1 className='font-[700] text-[40px] text-white ml-[50px] mt-[10px]'>Must - Watch Movies</h1> 
           <Upcoming />
        </div>
       
        <Card1 />

    </div>
    <Footer />

    </div>
  )
}

export default Movies