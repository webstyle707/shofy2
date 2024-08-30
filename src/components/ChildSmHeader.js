import React from 'react'
import Image from 'next/image';
import { SlHandbag } from "react-icons/sl";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
function ChildSmHeader() {
  return (
    <div>
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
  )
}

export default ChildSmHeader