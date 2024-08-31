"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";

function SliderCards({ DataDealoftheDay }) {
  const [timeLeftMap, setTimeLeftMap] = useState({});

  useEffect(() => {
    const updateTimeLeft = () => {
      const updatedTimeLeft = DataDealoftheDay.reduce((acc, item) => {
        acc[item.id] = calculateTimeLeft(item.deadline);
        return acc;
      }, {});
      setTimeLeftMap(updatedTimeLeft);
    };

    updateTimeLeft();
    const timer = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [DataDealoftheDay]);

  const calculateTimeLeft = (targetDate) => {
    const target = new Date(targetDate);
    const now = new Date();
    const difference = target - now;
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
  };

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween:16
          },
          1024: {
            slidesPerView: 3,
            spaceBetween:16
          },
          1280: {
            slidesPerView: 3,
            spaceBetween:0
          },
        }}
        className="mySwiper pb-20"
      >
        {DataDealoftheDay.length > 0 && DataDealoftheDay.map((e,i) => (
          <SwiperSlide key={e + i}>
            <div className='xl:pb-16 md:pb-14 pb-12 xl:px-4 pt-4 bg-[#ECF2F7]'>
              <div className='group bg-white rounded-md shadow-md xl:hover:shadow-xl transition-all duration-300'>
                <div className='h-[342px] border-b overflow-hidden relative'>
                  <div className='w-full h-full flex items-center cursor-pointer'>
                    <Image className='w-full group-hover:scale-105 transition-all duration-500' src={`/Assets/products/${e.photo}`} width={500} height={500} alt={e.name}/>
                  </div>

                  <div className='bg-white shadow absolute bottom-[50%] translate-y-[70%] group-hover:right-6 transition-all duration-500 -right-20 text-[20px] text-gray-800 border *:py-2.5 *:px-3 px-[0.5px] rounded'>
                    <div className='border-b'>
                      <button className='focus:underline flex items-center'>
                        <FiShoppingCart className='-translate-x-0.5'/>
                      </button>
                    </div>
                    <div className='border-b flex items-center justify-center'>
                      <button className='focus:underline'>
                        <FiEye/>
                      </button>
                    </div>
                    <div>
                      <button className='focus:underline flex items-center justify-center'>
                        <LuHeart/>
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
                      <IoStar/>
                      <IoStar/>
                      <IoStar/>
                      <IoIosStarHalf/>
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

                  <div className='*:uppercase flex items-center space-x-1 pt-5'>
                    <button className=" outline-none border rounded px-3.5 py-1 -space-y-0.5">
                      <p className='text-[16px] font-bold text-gray-700'>{timeLeftMap[e.id]?.days || 0}</p>
                      <p className='text-[10px] font-semibold text-gray-700'>day</p>
                    </button>

                    <button className=" outline-none border rounded px-3.5 py-1 -space-y-0.5">
                      <p className='text-[16px] font-bold text-gray-700'>{timeLeftMap[e.id]?.hours || 0}</p>
                      <p className='text-[10px] font-semibold text-gray-700'>hrs</p>
                    </button>

                    <button className=" outline-none border rounded px-3.5 py-1 -space-y-0.5">
                      <p className='text-[16px] font-bold text-gray-700'>{timeLeftMap[e.id]?.minutes || 0}</p>
                      <p className='text-[10px] font-semibold text-gray-700'>min</p>
                    </button>

                    <button className=" outline-none border rounded px-3.5 py-1 -space-y-0.5">
                      <div className='text-[16px] font-bold text-gray-700'>{timeLeftMap[e.id]?.seconds || 0}</div>
                      <p className='text-[10px] font-semibold text-gray-700'>sec</p>
                    </button>
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

export default SliderCards;