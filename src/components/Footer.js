import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { RiFacebookFill } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
function Footer() {
  return (
    <div className='bg-[rgb(244,247,249)] pb-5 pt-2'>
      <div className="max-w-[1320px] mx-auto">
        <div className='grid lg:grid-cols-4 md:grid-cols-2 2xl:gap-7 gap-4 py-16 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>
          <div className=' space-y-5'>
            <div className='w-[135px] h-[35px]'>
              <Image src={'/Assets/logo.png'} width={600} height={600} alt=''/>
            </div>
            <p className=''>We are a team of designers and developers that create high quality WordPress</p>
            <div className='flex items-center space-x-1.5 *:p-3 *:flex *:items-center *:justify-center'>
              <button className=' shadow-md bg-white rounded group hover:bg-[#0989FF] transition-all duration-500'>
                <RiFacebookFill className=' text-gray-700 group-hover:text-white transition-all duration-500'/>
              </button>
              <button className=' shadow-md bg-white rounded group hover:bg-[#0989FF] transition-all duration-500'>
                <GrTwitter className=' text-gray-700 group-hover:text-white transition-all duration-500'/>
              </button>
              <button className=' shadow-md bg-white rounded group hover:bg-[#0989FF] transition-all duration-500'>
                <FaLinkedinIn className='text-gray-700 group-hover:text-white transition-all duration-500'/>
              </button>
              <button className=' shadow-md bg-white rounded group hover:bg-[#0989FF] transition-all duration-500'>
                <FaVimeoV className='text-gray-700 group-hover:text-white transition-all duration-500'/>
              </button>
            </div>
          </div>

          <div className=' space-y-1'>
            <h1 className=' font-bold text-xl'>My Account</h1>
            <ul className='text-gray-500 font-semibold text-sm'>
              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Track Orders</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Shipping</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Wishlist</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>My Account</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Order History</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Returns</span>
                  </Link>
                </button>
              </li>
            </ul>
          </div>

          <div className=' space-y-1'>
            <h1 className=' font-bold text-xl'>Infomation</h1>
            <ul className='text-gray-500 font-semibold text-sm'>
              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Our Story</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Careers</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Privacy Policy</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Terms & Conditions</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Latest News</span>
                  </Link>
                </button>
              </li>

              <li>
                <button className='focus:outline-none'>
                  <Link href={'/'} className=' cursor-pointer hover:text-[#0989FF] transition-all duration-300 flex items-center space-x-0.5'>
                    <span className=' -translate-y-1.5 text-2xl'>.</span>
                    <span className=''>Contact Us</span>
                  </Link>
                </button>
              </li>
            </ul>
          </div>


          <div className=' space-y-2.5'>
            <h1 className=' font-bold text-xl'>Talk To Us</h1>
            <div className=' space-y-0.5'>
              <p className='text-sm text-gray-600'>Got Questions? Call us</p>
              <div>
                  <Link href={'/'} className=' text-nowrap w-0 hover:text-[#0989FF] transition-all duration-300 flex items-center font-bold text-xl'>
                    +670 413 90 762
                  </Link>
              </div>
            </div>
            <div className='flex items-center space-x-2 pt-1'>
              <RiMailSendLine/>
              <p className='text-gray-600'>shofy@support.com</p>
            </div>
            
            <div className='flex space-x-1 pt-1 -translate-x-1'>
              <CiLocationOn className='text-2xl translate-y-1'/>
              <p className='text-gray-600 w-0 text-nowrap'>79 Sleepy Hollow St.<br/>Jamaica, New York 1432</p>
            </div>
          </div>
        </div>

        <div className=' pb-4 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>
          <div className='border-t border-gray-300 pb-4'></div>
          <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 items-center md:justify-between'>
            <p className='text-center md:text-start text-sm md:text-sm text-gray-500'>© 2024 All Rights Reserved | vue nuxt 3 Template by <Link href={'/'} className='w-0 text-nowrap text-[#0989FF] transition-all duration-300'>ThemePure.</Link></p>

            <div className='w-[234px]'>
              <Image className='w-full' src={'/Assets/footer-pay.png'} width={700} height={700} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer