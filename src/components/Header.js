"use client";
import React, { useState,useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import DropdownCategories from './DropdownCategories';
import Chilheader from './Chilheader';
import ChildSmHeader from './ChildSmHeader';

import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpDownFill } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Header() {
  const [dropdown,setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

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

  useEffect(() => {
    // Select the target node
    const targetNode = document.getElementById('your-element-id');
    // Define the callback function to execute when mutations are observed
    const callback = (mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
      }
    };
    const observer = new MutationObserver(callback);
    const config = { attributes: true, childList: true, subtree: true };
    if (targetNode) {
      observer.observe(targetNode, config);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className=''>
      <div className={`bg-white w-full fixed left-0 z-40 top-0 -translate-y-28 
        ${scrollY >= 250?"transition-all duration-300 top-0 translate-y-0":"transition-all duration-300 -translate-y-28"}`}>
         <Chilheader/>
         <ChildSmHeader/>
      </div>
      
      <div className=''>
        <div className='hidden md:block bg-[#010F1C]'>
          <div className='max-w-[1320px] mx-auto flex items-center justify-between 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9'>
            <div className='flex items-center space-x-[7px]'>
              <div>
                <Image
                  className='w-[28px]'
                  src="/Assets/car.png"
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ height: 'auto', objectFit: 'contain' }} 
                  priority
                />

              </div>
              <p className='text-xs font-semibold text-gray-300'>FREE Express Shipping On Orders $570+</p>
            </div>
            <div className='flex items-center justify-center space-x-4'>
              <div className='flex items-center space-x-1'>
                 <p className='text-xs text-gray-100 font-semibold'>
                    English
                 </p>
                 <IoIosArrowDown className='text-gray-100 text-[15px] -translate-y-[1px]' />
              </div>
  
              <div className='border-r border-gray-700 h-[34px]'></div>
  
              <div className='flex items-center space-x-1'>
                 <p className='text-xs text-gray-100 font-semibold'>USD</p>
                 <IoIosArrowDown className='text-gray-100 text-[15px] -translate-y-[1px]' />
              </div>
  
              <div className='border-r border-gray-700 h-[34px]'></div>
  
              <div className='flex items-center space-x-1'>
                 <p className='text-xs text-gray-100 font-semibold'>Setting</p>
                 <IoIosArrowDown className='text-gray-100 text-[15px] -translate-y-[1px]' />
              </div>
              <div className='border-r border-gray-700 h-[34px]'></div>
            </div>
          </div>
        </div>

        <div className='hidden lg:block h-[104px] border-b border-gray-200'>
          <div className='max-w-[1320px] mx-auto flex items-center justify-between h-full 2xl:px-3 xl:px-20 px-10'>
            <div className=''>
                <div className='w-[135px] h-[135px] relative'>
                  <Image
                    className='w-full h-full'
                    src="/Assets/logo.png"
                    alt="Logo"
                    fill
                    sizes="(max-width: 768px) 100vw, 135px" 
                    style={{ objectFit: 'contain' }} 
                    priority
                  />
                </div>
            </div>    
            <div className='xl:pl-24 2xl:pl-6'>
               <div className='2xl:w-[554px] max-w-[554px] border-2 border-[#0989FF] h-[50px] flex items-center'>
                 <button className='h-[46px] text-sm focus:outline-none flex items-center pr-4 2xl:pr-0'>
                   <div className='h-full lg:w-[300px] xl:w-[277.95px] 2xl:w-[320.16px]'>
                       <input className='w-full h-full px-6 focus:outline-none' placeholder='Search for Products...'/>
                   </div>
                   <div className='flex items-center w-[135.95px] h-full cursor-pointer border-blue-200 space-x-3'>
                       <p className='h-4 border-l border-gray-400'></p>
                       <select className='h-full focus:outline-none cursor-pointer'>
                         <option>Select Category</option>
                         <option>Electronics</option>
                         <option>Fashion</option>
                         <option>Beauty</option>
                         <option>Jewelry</option>
                       </select>
                   </div>
                 </button>
                 <div className='cursor-pointer w-[60px] h-[46px] bg-[#0989FF] flex justify-center items-center ml-auto'>
                     <FiSearch className='text-white text-2xl'/>
                 </div>
               </div>
            </div>
            <div className='flex items-center 2xl:space-x-12 space-x-10'>
              <div className='flex items-center space-x-2'>
                <div className='text-xl text-gray-500 w-[44px] h-[44px] flex justify-center items-center border-2 border-gray-200 rounded-full'>
                  <FaRegUser/>
                </div>
                <div className='hidden xl:block'>
                  <p className='text-gray-500 text-[11.5px] -tracking-wide font-semibold'>
                    Hello, Sign In
                  </p>
                  <p className='text-gray-700 text-[13.5px] -tracking-wide font-semibold'>
                    Your Account
                  </p>
                </div>
              </div>
              <div className=''>
                <div className='flex items-center space-x-4 xl:space-x-3 2xl:space-x-4'>
                  <button>
                    <RiArrowUpDownFill className='text-[25px]'/>
                  </button>
                  <button className=' relative'>
                      <IoMdHeartEmpty className='text-[27px]'/>
                      <p className='bg-[#FD4B6B] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-6 h-6 tracking-wider'>0</p>
                  </button>
                  <button className='relative'>
                      <SlHandbag className='text-[25px]'/>
                      <p className='bg-[#FD4B6B] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-6 h-6'>9+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden lg:block shadow-md'>
          <div className='2xl:px-3 xl:px-20 px-10 max-w-[1320px] h-[50px] mx-auto flex items-center justify-between'>
              <div className='h-full flex items-center'>
                <div className='relative h-full 2xl:w-[306px] xl:w-[261px] w-[230px]'>
                  <div onClick={handleDropdown} className='select-none h-full 2xl:w-[306px] xl:w-[261px] w-[230px] bg-[#0989FF] hover:bg-[#010F1C] transition-all duration-500 px-7 cursor-pointer flex justify-between items-center'>
                    <div className='flex items-center h-full space-x-2'>
                       <HiOutlineMenuAlt2 className=' text-2xl text-white' />
                       <p className=' font-semibold text-gray-50 text-sm'>All Categories</p>
                    </div>  
                    <MdKeyboardArrowDown className='text-2xl text-white'/>
                  </div>
                    <DropdownCategories dropdown={dropdown}/>
                </div>
                <div className='flex items-center space-x-7 pl-8 text-sm font-semibold text-gray-800'>
                  <Link href={"/"}>
                     Home
                  </Link>                 
                  <Link href={"/"}>
                     Shop
                  </Link>                 
                  <Link href={"/"}>
                     Products
                  </Link>                 
                  <Link href={"/"}>
                     Coupons
                  </Link>                 
                  <Link href={"/"}>
                     Blog
                  </Link>                 
                  <Link href={"/"}>
                     Contact
                  </Link>                   
                </div>
              </div>
              <div className='flex items-center space-x-2'>
                 <div>
                   <TbPhoneCall className='text-[#0989FF] text-2xl'/>
                 </div>
                 <div className=' -space-y-1.5'>
                  <div className='text-[12.5px] font-semibold text-gray-500 -tracking-wide'>Hotline:</div>
                   <div className='text-[14px] font-semibold text-gray-700 -tracking-wide'>+(885 ) 763 282 46</div>
                 </div>
              </div>
          </div>     
        </div>

        <div className='lg:hidden flex items-center justify-between  shadow shadow-gray-300 md:pl-8 md:pr-9 pl-3.5 pr-4 h-[65px]'>
          <div>
            <div className='w-[135px] h-[135px] relative'>
              <Image
                className='w-full h-full'
                src="/Assets/logo.png"
                alt="Logo"
                fill
                sizes="(max-width: 768px) 100vw, 135px" 
                style={{ objectFit: 'contain' }} 
                priority
              />
            </div>
          </div>

          <div className='bg-white'>
            <div className='flex items-center space-x-5'>
              <button className='relative'>
                  <SlHandbag className='text-[25px]'/>
                  <p className='bg-[#FD4B6B] absolute -top-3 -right-2.5 rounded-full text-white font-semibold text-xs flex justify-center items-center w-6 h-6'>9+</p>
              </button>
              <button className='relative'>
                  <HiOutlineMenuAlt3 className='text-[28px]'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header