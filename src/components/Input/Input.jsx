import React from 'react'
import Con from '../../img/Container.png'
import './Input.css'

const Input = () => {
  return (
    <div className="pt-14 flex items-center justify-around">
      <div className="left">
        <h1 className="font-[700] text-white text-[30px] mb-[10px]">
          Welcome to our support page!
        </h1>
        <p className="text-[#999999]">
          We're here to help you with any problems you may be having with our
          product.
        </p>
        <img
          src={Con}
          alt=""
          className="border-[1px] border-[#999999] rounded-md mt-[10px]"
        />
      </div>
      <div className="right w-[600px] bg-[#0F0F0F] h-[480px] rounded-md">
        <form action="" className="flex  justify-around mt-[50px]">
          <div>
            <p className="text-white font-[400] text-[15px]">First Name</p>
            <input
              type="text"
              placeholder="Enter First Name"
              className="rounded-md p-[10px] text-white bg-[#141414] mt-[10px]"
            />
          </div>
          <div>
            <p className="text-white font-[400] text-[15px]">Last Name</p>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="rounded-md p-[10px] text-white bg-[#141414] mt-[10px]"
            />
          </div>
        </form>
        <form action="" className="flex  justify-around mt-[20px]">
          <div>
            <p className="text-white font-[400] text-[15px]">Email</p>
            <input
              type="text"
              placeholder="Enter your Email"
              className="rounded-md p-[10px] text-white bg-[#141414] mt-[10px]"
            />
          </div>
          <div>
            <p className="text-white font-[400] text-[15px]">Last Name</p>
            <div className="flex items-center">
              <select className="bg-[#141414] text-white w-[60px] h-[30px] border-[1px] border-[#999999] rounded-md mt-[10px]">
                <option value="UZB" className="text-white">
                  UZB
                </option>
              </select>
              <input
                type="text"
                placeholder="Enter Last Name"
                className=" ml-[10px] rounded-md w-[150px] text-white p-[10px] bg-[#141414] mt-[10px]"
              />
            </div>
          </div>
        </form>
        <form>
          <p className="text-white font-[400] text-[15px] ml-[45px] mt-[20px]">
            Message
          </p>
          <input
            type="text"
            placeholder="Message"
            className="rounded-md text-white px-7 font-semibold font-sans bg-[#141414] mt-[10px] w-[510px] ml-[45px] h-[80px]"
          />
        </form>
        <form
          action=""
          className="flex items-center ml-[45px] mt-[50px] space-x-2"
        >
          <input type="checkbox" className="w-[15px] h-[15px] bg-black " />
          <p className="text-[#999999] text-[16px] font-[400]">
            {" "}
            I agree with Terms of Use and Privacy Policy
          </p>
          <button
            className="text-white bg-[#E50000] rounded-md w-[120px] h-[40px] text-[14px] 
             ml-[85px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input