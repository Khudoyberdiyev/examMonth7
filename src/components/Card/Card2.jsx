import React from "react";

const Card2 = () => {
  return (
    <div className="ml-20">
      <h1 className="text-white font-[700] text-[29px] mt-20 ">
        Choose the plan that's right for you
      </h1>
      <p className="text-[#999999] font-[400] text-[15px] mt-4">
        Join StreamVibe and select from our flexible subscription options
        tailored to suit your viewing preferences. Get ready for non-stop
        entertainment!
      </p>
      <div className="flex items-center gap-[80px] ml-[20px] sm:flex-row mt-4">
        <div className="w-[350px] h-[250px] bg-[#1A1A1A] pt-[20px] rounded-md">
          <div className="ml-8">
            <p className="text-white font-[400]">Basic Plan</p>
            <p className="text-[15px] font-[400] text-[#999999] mt-3 w-[265px]">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
            <p className="font-[600] text-white text-[20px] mt-3">
              $9.99<span className="text-[#999999] text-[13px]">/month</span>
            </p>
            <div className="mt-3">
              <button
                className="text-white bg-black rounded-md w-[120px] h-[40px] text-[14px] border-[1px] 
            border-[#999999]"
              >
                Start Free Trial
              </button>
              <button
                className="text-white bg-[#E50000] rounded-md w-[120px] h-[40px] text-[14px] 
             ml-5"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[250px] bg-[#1A1A1A] pt-[20px] rounded-md">
          <div className="ml-8">
            <p className="text-white font-[400]">Standard Plan</p>
            <p className="text-[15px] font-[400] text-[#999999] mt-3 w-[265px]">
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content
            </p>
            <p className="font-[600] text-white text-[20px] mt-3">
              $12.99<span className="text-[#999999] text-[13px]">/month</span>
            </p>
            <div className="mt-3">
              <button
                className="text-white bg-black rounded-md w-[120px] h-[40px] text-[14px] border-[1px] 
            border-[#999999]"
              >
                Start Free Trial
              </button>
              <button
                className="text-white bg-[#E50000] rounded-md w-[120px] h-[40px] text-[14px] 
             ml-5"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[250px] bg-[#1A1A1A] pt-[20px] rounded-md">
          <div className="ml-8">
            <p className="text-white font-[400]">Premium Plan</p>
            <p className="text-[15px] font-[400] text-[#999999] mt-3 w-[265px]">
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing
            </p>
            <p className="font-[600] text-white text-[20px] mt-3">
              $14.99<span className="text-[#999999] text-[13px]">/month</span>
            </p>
            <div className="mt-3">
              <button
                className="text-white bg-black rounded-md w-[120px] h-[40px] text-[14px] border-[1px] 
            border-[#999999]"
              >
                Start Free Trial
              </button>
              <button
                className="text-white bg-[#E50000] rounded-md w-[120px] h-[40px] text-[14px] 
             ml-5"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
