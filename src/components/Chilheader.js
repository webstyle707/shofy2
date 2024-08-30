import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { RiArrowUpDownFill } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";

function Chilheader() {
  return (
    <div>
         <div className='hidden lg:block h-[67px] shadow-md '>
          <div className='max-w-[1320px] mx-auto flex items-center justify-between h-full 2xl:px-3 xl:px-20 px-10'>
            <div className='w-[306px]'>
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
            
            <div className='w-[629px] flex items-center space-x-7 pl-4 text-sm font-semibold text-gray-800'>
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

            <div className='w-[330px] flex items-center justify-end'>
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

    </div>
  )
}

export default Chilheader