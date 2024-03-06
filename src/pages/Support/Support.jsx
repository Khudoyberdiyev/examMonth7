import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card1 from "../../components/Card/Card";
import HomeCards from "../../components/HomeCards/HomeCards";
import Input from "../../components/Input/Input";

const Support = () => {
  return (
    <div>
      <Header />
    <div className="container">
      <Input />
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
      <Card1 />
    </div>
    <Footer />

    </div>
      
  );
};

export default Support;
