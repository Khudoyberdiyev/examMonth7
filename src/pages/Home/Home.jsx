import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaPlay } from "react-icons/fa";
import Phone from "../../img/phones.png";
import Phons from "../../img/phone.png";
import Tv from "../../img/tv.png";
import Nout from "../../img/laptop.png";
import Game from "../../img/vr.png";
import Vr from "../../img/console.png";
import HomeCards from "../../components/HomeCards/HomeCards";
import Card from "../../components/HomeCards/Card";
import Card1 from "../../components/Card/Card";
import "../Home/HomeBg.scss";

const Home = () => {
  return (
    <div className="bg ">
      <Header />
      <div className="container mt-[460px] ">
        <div className=" items-center justify-between text-center w-[1096px] h-[81px] static ml-40  sm:flex-row mt-8 flex-wrap">
          <h1 className="text-white font-[700] text-[46px] text-center ">
            The Best Streaming Experience
          </h1>
          <p className="text-[18px] h-[81px] text-[#999999] text-center font-[400]  mt-6 ">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
        <button className="text-white flex items-center gap-2 font-[600] bg-[#E50000] p-[15px] mt-32 border border-[#E50000] rounded-[6px] hover:text-[#E50000] hover:bg-[#141414] ml-[585px]">
          <FaPlay />
          Start Watching Now
        </button>
        <div className="mt-[50px]">
          <h1 className="text-white font-[700] text-[30px] ">
            We Provide you streaming experience across various devices.
          </h1>
          <p className="text-[#999999] font-[400] text-[18px] mt-[10px]">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
          <div className="flex flex-wrap items-center gap-7 mt-7 ml-10">
            <div className="card">
              <div className="flex items-center mt-4 ml-6 gap-4">
                <img src={Phone} alt="" className="w-[50px] h-[50px]" />
                <p className="font-[600] text-[18px] text-white">Smartphones</p>
              </div>
              <p className="text-[#999999] text-[16px] font-[400] w-[380px] mt-4 ml-6">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
            <div className="card">
              <div className="flex items-center mt-4 ml-6 gap-4">
                <img src={Phons} alt="" className="w-[50px] h-[50px]" />
                <p className="font-[600] text-[18px] text-white">Tablet</p>
              </div>
              <p className="text-[#999999] text-[16px] font-[400] w-[380px] mt-4 ml-6">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
            <div className="card">
              <div className="flex items-center mt-4 ml-6 gap-4">
                <img src={Tv} alt="" className="w-[50px] h-[50px]" />
                <p className="font-[600] text-[18px] text-white">Smart TV</p>
              </div>
              <p className="text-[#999999] text-[16px] font-[400] w-[380px] mt-4 ml-6">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
            <div className="card">
              <div className="flex items-center mt-4 ml-6 gap-4">
                <img src={Nout} alt="" className="w-[50px] h-[50px]" />
                <p className="font-[600] text-[18px] text-white">Laptops</p>
              </div>
              <p className="text-[#999999] text-[16px] font-[400] w-[380px] mt-4 ml-6">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
            <div className="card">
              <div className="flex items-center mt-4 ml-6 gap-4">
                <img src={Game} alt="" className="w-[50px] h-[50px]" />
                <p className="font-[600] text-[18px] text-white">
                  Gaming Consoles
                </p>
              </div>
              <p className="text-[#999999] text-[16px] font-[400] w-[380px] mt-4 ml-6">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
            <div className="card">
              <div className="flex items-center mt-4 ml-6 gap-4">
                <img src={Vr} alt="" className="w-[50px] h-[50px]" />
                <p className="font-[600] text-[18px] text-white">
                  VR Headsets{" "}
                </p>
              </div>
              <p className="text-[#999999] text-[16px] font-[400] w-[380px] mt-4 ml-6">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-white text-[38px] font-[700] mt-10">
            Frequently Asked Questions
          </h1>
          <p className="font-[400] text-[#999999] text-[18px] mt-5">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
          <div className="flex flex-wrap justify-around">
            <div>
              <HomeCards />
              <HomeCards />
              <HomeCards />
              <HomeCards />
            </div>
            <div>
              <HomeCards />
              <HomeCards />
              <HomeCards />
              <HomeCards />
            </div>
          </div>
        </div>
        <div>
          <Card />
        </div>
        <Card1 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
