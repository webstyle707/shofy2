"use client";
import React, { useState,useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebookF } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpDownFill } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
function HeaderDetails() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`bg-white w-full fixed left-0 z-30 top-0 -translate-y-28 
        ${scrollY >= 250?"transition-all duration-300 top-0 translate-y-0":"transition-all duration-300 -translate-y-28"}`}>
        <div className=' shadow-md shadow-gray-200 py-3.5'>
          <div className='max-w-[1320px] mx-auto flex items-center justify-between 2xl:px-2 xl:px-20 lg:px-10 md:px-9 px-3'>
            <div className='flex items-center space-x-14'>
              <div>
              <Image
                    src="/Assets/logo.svg" // Path to your image
                    alt=""
                    width={135} // Desired width
                    height={300} // Desired height
              />
              </div>
              <div className='items-center space-x-5 text-sm hidden xl:flex'>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Shop</Link>
                <Link href={"/"}>Products</Link>
                <Link href={"/"}>Coupons</Link>
                <Link href={"/"}>Blog</Link>
                <Link href={"/"}>Contact</Link>
              </div>
            </div>
          
            <div className='flex items-center lg:space-x-8 space-x-14'>
              <div className='hidden md:block'>
                <button className=' relative 2xl:w-[363px] xl:w-[295px] lg:w-[310px] w-[240px]'>
                <input className='bg-[#F8F8F8] border transition-all duration-300 focus:border-[#0989FF] border-gray-300 text-xs outline-none py-3.5 pl-6 pr-12 w-full' placeholder='Search for Products...'/>
                  <IoSearchOutline className=' absolute right-4 top-2.5 text-[22px] text-gray-600'/>
                </button>
              </div>
              
              <div className='flex items-center space-x-6'>
                <div>
                  <div className='space-x-4 hidden lg:flex items-center'>
                    <button>
                      <RiArrowUpDownFill className='text-[20px]'/>
                    </button>
                    <button className=' relative'>
                        <IoMdHeartEmpty className='text-[22px]'/>
                        <p className='bg-[#0989FF] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-[22px]
                         h-[22px] tracking-wider'>0</p>
                    </button>
                    <button className='relative'>
                        <SlHandbag className='text-[20px]'/>
                        <p className='bg-[#0989FF] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-[22px] 
                        h-[22px]'>9+</p>
                    </button>
                  </div>
                  <div className='lg:hidden'>
                     <button className='relative'>
                        <SlHandbag className='text-[20px]'/>
                        <p className='bg-[#0989FF] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-[22px] 
                        h-[22px]'>9+</p>
                     </button>
                  </div>
                </div>
                <div className='xl:hidden'>
                  <button className='xl:hidden'>
                      <CgMenuRight className='xl:text-gray-500 md:text-gray-600 text-gray-500 xl:text-[24px] md:text-[26px] text-[24px]'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='py-2.5 border-b border-gray-200 hidden md:block'>
        <div className='max-w-[1320px] mx-auto flex items-center justify-between 2xl:px-2 xl:px-20 lg:px-10 md:px-9'>
          <div className='flex items-center justify-center space-x-5'>
            <div className='flex items-center space-x-1'>
               <FaFacebookF className='text-[#0989FF]' />
               <p className='text-sm text-gray-600'>
                  7500k Followers
               </p>
            </div>

            <div className='border-r border-gray-300 h-4'></div>

            <div className='flex items-center space-x-2'>
            <FiPhoneCall className='text-[#0989FF]' />
            <p className='text-sm text-gray-600'>
              +(402) 763 282 46
            </p>
            </div>
          </div>

          <div className='flex items-center justify-center space-x-4'>
            <div className='flex items-center space-x-1'>
               <p className='text-sm text-gray-700 font-semibold'>
               English
               </p>
               <IoIosArrowDown className='text-gray-700 font-semibold'/>
            </div>

            <div className='border-r border-gray-300 h-4'></div>

            <div className='flex items-center space-x-1'>
               <p className='text-sm text-gray-700 font-semibold'>USD</p>
               <IoIosArrowDown className='text-gray-700' />
            </div>

            <div className='border-r border-gray-300 h-4'></div>

            <div className='flex items-center space-x-1'>
               <p className='text-sm text-gray-700 font-semibold'>Setting</p>
               <IoIosArrowDown className='text-gray-700' />
            </div>

          </div>
        </div>
      </div>

      {/* ---------------- */}

      <div className=' shadow-md shadow-gray-200 py-3.5'>
        <div className='max-w-[1320px] mx-auto flex items-center justify-between 2xl:px-2 xl:px-20 lg:px-10 md:px-9 px-3'>
          <div className='flex items-center space-x-14'>
            <div>
            <Image
                  src="/Assets/logo.svg" // Path to your image
                  alt=""
                  width={135} // Desired width
                  height={300} // Desired height
            />
            </div>
            <div className='items-center space-x-5 text-sm hidden xl:flex'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Shop</Link>
              <Link href={"/"}>Products</Link>
              <Link href={"/"}>Coupons</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Contact</Link>
            </div>
          </div>
  
          <div className='flex items-center lg:space-x-8 space-x-14'>
            <div className='hidden md:block'>
              <button className=' relative 2xl:w-[363px] xl:w-[295px] lg:w-[310px] w-[240px]'>
              <input className='bg-[#F8F8F8] border transition-all duration-300 focus:border-[#0989FF] border-gray-300 text-xs outline-none py-3.5 pl-6 pr-12 w-full' placeholder='Search for Products...'/>
                <IoSearchOutline className=' absolute right-4 top-2.5 text-[22px] text-gray-600'/>
              </button>
            </div>
            
            <div className='flex items-center space-x-6'>
              <div>
                <div className='space-x-4 hidden lg:flex items-center'>
                  <button>
                    <RiArrowUpDownFill className='text-[20px]'/>
                  </button>
                  <button className=' relative'>
                      <IoMdHeartEmpty className='text-[22px]'/>
                      <p className='bg-[#0989FF] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-[22px]
                       h-[22px] tracking-wider'>0</p>
                  </button>
                  <button className='relative'>
                      <SlHandbag className='text-[20px]'/>
                      <p className='bg-[#0989FF] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-[22px] 
                      h-[22px]'>9+</p>
                  </button>
                </div>
                <div className='lg:hidden'>
                   <button className='relative'>
                      <SlHandbag className='text-[20px]'/>
                      <p className='bg-[#0989FF] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-[22px] 
                      h-[22px]'>9+</p>
                   </button>
                </div>
              </div>
              <div className='xl:hidden'>
                <button className='xl:hidden'>
                    <CgMenuRight className='xl:text-gray-500 md:text-gray-600 text-gray-500 xl:text-[24px] md:text-[26px] text-[24px]'/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDetails