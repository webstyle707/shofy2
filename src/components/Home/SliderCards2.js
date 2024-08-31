"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

function SliderCards2({ Products }) {

  return (
    <div className='relative'>
      <div className='px-2 pb-10'>
          <div className="flex items-center justify-between">
              <div>
                  <h1 className="font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-gray-900">New Arrivals</h1>
              </div>
              <div className="flex md:flex-row flex-col items-center lg:space-x-16 space-x-6">
                  <div className="2xl:w-[700px] xl:w-[600px] lg:w-[500px] md:w-[350px] border-b-2 border-gray-100 md:block hidden"></div>
                  <div className="flex items-center space-x-2.5">
                      <button className='custom-prev flex items-center group hover:border-white justify-center focus:outline-none outline-none md:p-3 p-2.5 rounded-full border border-gray-300 hover:bg-[#0989FF] transition-all duration-500'>
                          <SlArrowLeft className='text-base text-gray-400 group-hover:text-white transition-all duration-500 -translate-x-0.5'/>
                      </button>

                      <button className='custom-next hover:bg-[#0989FF] transition-all group hover:border-white duration-500  flex items-center justify-center focus:outline-none outline-none md:p-3 p-2.5 rounded-full border border-gray-300'>
                          <SlArrowRight className='text-base text-gray-400 translate-x-0.5 group-hover:text-white transition-all duration-500'/>
                      </button>
                  </div>
              </div>
          </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        // pagination={{ clickable: true }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper pb-20"
      >
        {Products.length > 0 && Products.map((e, i) => (
          <SwiperSlide key={e + i}>
            <div className='pb-16 xl:px-2 pt-4 bg-[#FFFFFF]'>
              <div className='group bg-white rounded-md border shadow hover:shadow-xl transition-all duration-300'>
                <div className='h-[342px] border-b overflow-hidden relative'>
                  <div className='w-full h-full flex items-center cursor-pointer'>
                    <Image className='w-full group-hover:scale-105 transition-all duration-500' src={`/Assets/products/${e.photo}`} width={500} height={500} alt={e.name} />
                  </div>

                  <div className='bg-white shadow absolute bottom-[50%] translate-y-[70%] group-hover:right-6 transition-all duration-500 -right-20 text-[20px] text-gray-800 border *:py-2.5 *:px-3 px-[0.5px] rounded'>
                    <div className='border-b'>
                      <button className='focus:underline flex items-center'>
                        <FiShoppingCart className='-translate-x-0.5' />
                      </button>
                    </div>
                    <div className='border-b flex items-center justify-center'>
                      <button className='focus:underline'>
                        <FiEye />
                      </button>
                    </div>
                    <div>
                      <button className='focus:underline flex items-center justify-center'>
                        <LuHeart />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='space-y-1 pl-8 py-7'>
                  <div>
                    <Link href="/" className='text-xs font-semibold text-gray-600 hover:text-[#0989FF] transition-all duration-300 cursor-pointer'>
                      {e.categoryname}
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className='font-semibold hover:text-[#0989FF] text-gray-700 transition-all duration-300 cursor-pointer'>
                      {e.name}
                    </Link>
                  </div>
                  <div className='flex items-center space-x-1.5 pt-1'>
                    <div className='flex items-center space-x-1 text-[#FFB21D]'>
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoIosStarHalf />
                    </div>
                    <div className='text-xs text-gray-800 font-semibold'>
                      ({e.review} Review)
                    </div>
                  </div>

                  <div>
                    {e.discount <= 0 ?
                      <div className='text-[#0989FF] font-semibold'>${e.price.toFixed(2)}</div> :
                      <div className='flex items-center space-x-1'>
                        <div className='text-xs font-semibold text-gray-600 line-through'>${e.price}</div>
                        <div className='text-[#0989FF] font-semibold'>${(e.price - e.discount).toFixed(2)}</div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderCards2;
