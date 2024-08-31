"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { IoArrowForwardSharp } from "react-icons/io5";

function LatestNewsandArticles() {

  return (
    <div className='relative 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>

        <div className='xl:px-2'>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-2 md:space-y-0">
                <div>
                    <h1 className="select-none text-center font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-2xl  text-gray-900">
                        Latest news & articles
                    </h1>
                </div>
                <div className="flex items-center 2xl:space-x-16 xl:space-x-12 md:space-x-8">
                    <div className="2xl:w-[580px] xl:w-[520px] lg:w-[450px] hidden md:block w-[240px] border-b-2 border-gray-200"></div>
                    <div className="flex items-center">
                        <button className='bg-[#0989FF] hover:bg-gray-900 transition-all duration-500 rounded-md md:px-[15px] px-[10px] md:py-[9px] py-[7px] text-base font-semibold text-gray-50 flex items-center justify-center space-x-0.5 select-none'>
                            <p>View All Blog</p>
                            <IoArrowForwardSharp className='text-xl'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className=' pt-12'>
            <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            modules={[Autoplay, Navigation]}
            className="mySwiper pb-20">
                <SwiperSlide>
                  <div>
                      <div className='relative rounded-lg'>
                          <button className=' absolute top-0 left-0 bg-gray-900 text-white text-sm font-semibold px-[19.1px] py-[6.2px]'>
                              14 January, 2023
                          </button>
      
                          <div className='rounded-r-lg rounded-b-lg overflow-hidden'>
                              <Image className='rounded-r-lg rounded-b-lg' src="/Assets/blog/blog-1.jpg" width={600} height={600} alt=''/>
                          </div>
                      </div>
                      <div className='py-4 space-y-3'>
                          <div className=' space-y-0.5'>
                              <h1>
                                  <Link className='font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>
                                      The Modern Art Clay Ceramics.
                                  </Link>
                              </h1>
                              <div className='flex items-center'>
                                  <div className='w-4'>
                                    <Image className='w-full' src="/Assets/8.png" width={600} height={600} alt=''/>
                                  </div>
                                  <Link className='text-sm text-gray-600 font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>Tablet</Link>,
                                  <Link className='text-sm text-gray-600 font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>News</Link>
                              </div>
                          </div>
      
                          <div className='text-sm text-gray-600'>
                              The world is an amazing place providing an incredible assortment of interesting locations across.
                          </div>
      
                          <div className='pt-4'>
                              <button className=' flex justify-center items-center space-x-1 focus:outline-none select-none border-2 rounded px-3.5 py-1.5 hover:bg-[#0989FF] transition-all duration-500 hover:border-[#0989FF] hover:text-white group'>
                                  <p className='text-sm'>Read More</p>
                                  <IoArrowForwardSharp className='text-gray-700 text-xl group-hover:text-white transition-all duration-500'/>
                              </button>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
    
                <SwiperSlide>
                  <div>
                      <div className='relative rounded-lg'>
                          <button className=' absolute top-0 left-0 bg-gray-900 text-white text-sm font-semibold px-[19.1px] py-[6.2px]'>
                              14 January, 2023
                          </button>
      
                          <div className='rounded-r-lg rounded-b-lg overflow-hidden'>
                              <Image className='rounded-r-lg rounded-b-lg' src="/Assets/blog/blog-2.jpg" width={600} height={600} alt=''/>
                          </div>
                      </div>
                      <div className='py-4 space-y-3'>
                          <div className=' space-y-0.5'>
                              <h1>
                                  <Link className='font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>
                                      How clothes are linked to climate
                                  </Link>
                              </h1>
                              <div className='flex items-center'>
                                  <div className='w-4'>
                                    <Image className='w-full' src="/Assets/8.png" width={600} height={600} alt=''/>
                                  </div>
                                  <Link className='text-sm text-gray-600 font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>Tablet</Link>,
                                  <Link className='text-sm text-gray-600 font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>News</Link>
                              </div>
                          </div>
      
                          <div className='text-sm text-gray-600'>
                              The world is an amazing place providing an incredible assortment of interesting locations across.
                          </div>
      
                          <div className='pt-4'>
                              <button className=' flex justify-center items-center space-x-1 focus:outline-none select-none border-2 rounded px-3.5 py-1.5 hover:bg-[#0989FF] transition-all duration-500 hover:border-[#0989FF] hover:text-white group'>
                                  <p className='text-sm'>Read More</p>
                                  <IoArrowForwardSharp className='text-gray-700 text-xl group-hover:text-white transition-all duration-500'/>
                              </button>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
    
                <SwiperSlide>
                  <div>
                      <div className='relative rounded-lg'>
                          <button className=' absolute top-0 left-0 bg-gray-900 text-white text-sm font-semibold px-[19.1px] py-[6.2px]'>
                              14 January, 2023
                          </button>
      
                          <div className='rounded-r-lg rounded-b-lg overflow-hidden'>
                              <Image className='rounded-r-lg rounded-b-lg' src="/Assets/blog/blog-3.jpg" width={600} height={600} alt=''/>
                          </div>
                      </div>
                      <div className='py-4 space-y-3'>
                          <div className=' space-y-0.5'>
                              <h1>
                                  <Link className='font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>
                                      The Sound Of Fashion: Malcolm
                                  </Link>
                              </h1>
                              <div className='flex items-center'>
                                  <div className='w-4'>
                                    <Image className='w-full' src="/Assets/8.png" width={600} height={600} alt=''/>
                                  </div>
                                  <Link className='text-sm text-gray-600 font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>Tablet</Link>,
                                  <Link className='text-sm text-gray-600 font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>News</Link>
                              </div>
                          </div>
      
                          <div className='text-sm text-gray-600'>
                              The world is an amazing place providing an incredible assortment of interesting locations across.
                          </div>
      
                          <div className='pt-4'>
                              <button className=' flex justify-center items-center space-x-1 focus:outline-none select-none border-2 rounded px-3.5 py-1.5 hover:bg-[#0989FF] transition-all duration-500 hover:border-[#0989FF] hover:text-white group'>
                                  <p className='text-sm'>Read More</p>
                                  <IoArrowForwardSharp className='text-gray-700 text-xl group-hover:text-white transition-all duration-500'/>
                              </button>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
    
                <SwiperSlide>
                  <div>
                      <div className='relative rounded-lg'>
                          <button className=' absolute top-0 left-0 bg-gray-900 text-white text-sm font-semibold px-[19.1px] py-[6.2px]'>
                              14 January, 2023
                          </button>
      
                          <div className='rounded-r-lg rounded-b-lg overflow-hidden'>
                              <Image className='rounded-r-lg rounded-b-lg' src="/Assets/blog/blog-4.jpg" width={600} height={600} alt=''/>
                          </div>
                      </div>
                      <div className='py-4 space-y-3'>
                          <div className=' space-y-0.5'>
                              <h1>
                                  <Link className='font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>
                                      How clothes are linked to climate
                                  </Link>
                              </h1>
                              <div className='flex items-center'>
                                  <div className='w-4'>
                                    <Image className='w-full' src="/Assets/8.png" width={600} height={600} alt=''/>
                                  </div>
                                  <Link className='text-sm text-gray-600 font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>Tablet</Link>,
                                  <Link className='text-sm text-gray-600 font-semibold hover:text-[#0989FF] transition-all duration-500' href={'/'}>News</Link>
                              </div>
                          </div>
      
                          <div className='text-sm text-gray-600'>
                              The world is an amazing place providing an incredible assortment of interesting locations across.
                          </div>
      
                          <div className='pt-4'>
                              <button className=' flex justify-center items-center space-x-1 focus:outline-none select-none border-2 rounded px-3.5 py-1.5 hover:bg-[#0989FF] transition-all duration-500 hover:border-[#0989FF] hover:text-white group'>
                                  <p className='text-sm'>Read More</p>
                                  <IoArrowForwardSharp className='text-gray-700 text-xl group-hover:text-white transition-all duration-500'/>
                              </button>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
}

export default LatestNewsandArticles;

