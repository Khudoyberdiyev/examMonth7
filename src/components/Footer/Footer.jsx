import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='bg-[#0F0F0F] h-[300px] mt-[100px]'>
    <div className='container '>
         <div className="md:flex items-center justify-between px-20 sm:flex-row mt-8">
          <ul className='flex gap-[140px] mt-[50px] flex-wrap'>
            <li className='cursor-pointer '>
              <p className='font-[400] text-white '>Home</p> 
              <p className='text-[#999999] text-[200] mt-[10px]'>Categories</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>Devices</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>Pricing</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>FAQ</p>
            </li>
            <li className='cursor-pointer'>
              <p className='font-[400] text-white '>Movies</p> 
              <p className='text-[#999999] text-[200] mt-[10px]'>Gernes</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>Trending</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>New Release</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>Popular</p>
            </li>
            <li className='cursor-pointer'>
              <p className='font-[400] text-white '>Shows</p> 
              <p className='text-[#999999] text-[200] mt-[10px]'>Gernes</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>Trending</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>New Release</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>Popular</p>
            </li>
            <li className='cursor-pointer'>
              <p className='font-[400] text-white'>Support</p>
              <p className='text-[#999999] text-[200] mt-[10px]'>Contact Us</p>
            </li>
            <li className='cursor-pointer'>
            <p className='font-[400] text-white'>Subscription</p>
              <p className='text-[#999999] text-[200] mt-[10px]'>Plans</p>
              <p className='text-[#999999] text-[200] mt-[5px]'>Features</p>
            </li>
            <li className='cursor-pointer'>
              <p className='font-[400] text-white'>Connect With Us</p>
               <div className="flex gap-4 mt-4">
                <a href="#" className='bg-[#1A1A1A] p-[10px] rounded-[6px]'>
                <FaFacebook className='text-white'/>
                </a>
               <a href="#" className='bg-[#1A1A1A] p-[10px] rounded-[6px]'>
               <FaTwitter className='text-white'/>
               </a>
               <a href="#" className='bg-[#1A1A1A] p-[10px] rounded-[6px]'>
               <FaLinkedin className='text-white'/>
               </a>
               </div>
            </li>
          </ul>
         </div>
         <hr className='mt-[20px] border-[#262626]'/>
         <div className='flex justify-between items-center mt-[25px]'>
          <p className='text-[#999999]'>@2023 streamvib, All Rights Reserved</p>
          <ul className='flex gap-5'>
            <li className='text-[#999999]'>Terms of Use</li>
            <li className='text-[#999999]'>Privacy Policy</li>
            <li className='text-[#999999]'>Cookie Policy</li>
          </ul>
         </div>
    </div>
    </div>
  )
}

export default Footer