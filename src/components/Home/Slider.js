"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export default function Slider() {
  return (
    <div className='group'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-[#115061] w-full h-[713.50px] md:h-[516px] overflow-hidden'>
              <div className=' relative py-20 md:py-0 px-4 md:px-0 mx-auto max-w-[1320px] 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 h-full md:flex md:justify-between md:items-center'>
                <div className='lg:w-[526px] md:w-6/12 w-full text-white space-y-1'>
                  <div className='text-start'>
                    <span className=''>Starting at <b>$274.00</b></span>
                  </div>
                  <div className='text-start font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl'>
                    The best tablet Collection 2023
                  </div>

                  <div className='text-start font-semibold pt-2'>
                    <p className='text-xl lg:text-2xl font-extralight'>
                      Exclusive offer<span className='text-[#FFD43A] font-semibold'>-10% </span> 
                      <span>off this week</span>
                    </p>
                    <div className='flex justify-center items-center pr-28 md:pr-20 lg:pr-44 text-[#FFD43A]'>
                      <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="c">
                        <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>

                  <div className='text-start pt-4'>
                    <button className='select-none z-10 sticky flex items-center justify-center rounded-md space-x-1 shadow border-white border hover:text-white transition-all duration-300 hover:bg-[#115061]  text-gray-800 font-semibold bg-white h-[46px] w-[144.38px]'>
                      <p className='text-sm'>Shop Now</p>
                      <p>
                        <FaArrowRightLong/>
                      </p>
                    </button>
                  </div>
                </div>

                <div className='md:absolute xl:right-0 lg:-right-40 md:-right-80 top-0 w-full flex md:justify-end'>
                  <div className='xl:w-[738px] lg:w-[700px] w-full h-full 2xl:pt-7 pt-10'>
                    <div className='hidden md:flex justify-end'>
                      <div className=' sticky z-10 pr-52'>
                        <Image className='translate-y-2' src="/Assets/3.png" height={1000} width={1000} priority alt=''/>
                      </div>
                    </div>
                    <div className='w-full'>
                      <Image className='' src="/Assets/2.png" height={2000} width={2000} priority alt=''/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden md:block absolute top-0 right-0'>
                <Image className='' src="/Assets/for-slide.png" alt='' height={500} width={500} priority />
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-[#115061] w-full h-[713.50px] md:h-[516px] overflow-hidden'>
              <div className=' relative py-20 md:py-0 px-4 md:px-0 mx-auto max-w-[1320px] 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 h-full md:flex md:justify-between md:items-center'>
                <div className='lg:w-[526px] md:w-6/12 w-full text-white space-y-1'>
                  <div className='text-start'>
                    <span className=''>Starting at <b>$999.00</b></span>
                  </div>
                  <div className=' text-start font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl'>
                      The best note book collection 2023
                  </div>

                  <div className='text-start font-semibold pt-2'>
                    <p className=' text-xl lg:text-2xl font-extralight'>
                      Exclusive offer<span className='text-[#FFD43A] font-semibold'>-35% </span> 
                      <span>off this week</span>
                    </p>
                    <div className='flex justify-center items-center pr-28 md:pr-20 lg:pr-44 text-[#FFD43A]'>
                      <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="c">
                        <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>

                  <div className='text-start pt-4'>
                    <button className='select-none z-10 sticky flex items-center justify-center rounded-md space-x-1 shadow border-white border hover:text-white transition-all duration-300 hover:bg-[#115061]  text-gray-800 font-semibold bg-white h-[46px] w-[144.38px]'>
                      <p className='text-sm'>Shop Now</p>
                      <p>
                        <FaArrowRightLong/>
                      </p>
                    </button>
                  </div>
                </div>

                <div className='md:absolute xl:right-0 lg:-right-40 md:-right-80 top-0 w-full flex md:justify-end'>
                  <div className='xl:w-[738px] lg:w-[700px] w-full h-full 2xl:pt-7 pt-10'>
                    <div className='hidden md:flex justify-end'>
                      <div className='pr-52'>
                        <Image className='translate-y-2' src="/Assets/3.png" height={1000} width={1000} priority alt=''/>
                      </div>
                    </div>
                    
                    <div className='z-10 sticky 2xl:pl-80 2xl:pr-0 xl:px-40 lg:pl-10 lg:pr-64 w-10/12 mx-auto md:mx-0 md:w-6/12 lg:w-full'>
                      <Image className='md:translate-x-20 lg:translate-x-0' src="/Assets/slide2.png" height={1000} width={1000} priority alt=''/>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute top-0 right-0 hidden md:block'>
                <Image className='' src="/Assets/for-slide.png" alt='' priority height={500} width={500}/>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-[#E3EDF6] w-full h-[713.50px] md:h-[516px] overflow-hidden'>
              <div className=' relative py-20 md:py-0 px-4 md:px-0 mx-auto max-w-[1320px] 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 h-full md:flex md:justify-between md:items-center'>
                <div className='lg:w-[526px] md:w-6/12 w-full text-white space-y-1'>
                  <div className='text-start'>
                    <span className='text-gray-800'>Starting at <b>$999.00</b></span>
                  </div>
                  <div className='text-gray-800 text-start font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl'>
                      The best note book collection 2023
                  </div>

                  <div className='text-start font-semibold pt-2'>
                    <p className='text-gray-800 text-xl lg:text-2xl font-extralight'>
                      Exclusive offer<span className='text-[#FFD43A] font-semibold'>-10% </span> 
                      <span>off this week</span>
                    </p>
                    <div className='flex justify-center items-center pr-28 md:pr-20 lg:pr-44 text-[#FFD43A]'>
                      <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="c">
                        <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>

                  <div className='text-start pt-4'>
                    <button className='select-none z-10 sticky flex items-center justify-center rounded-md space-x-1 shadow border-white border hover:border-[#0989FF] hover:text-white transition-all duration-300 hover:bg-[#0989FF]  text-gray-800 font-semibold bg-white h-[46px] w-[144.38px]'>
                      <p className='text-sm'>Shop Now</p>
                      <p>
                        <FaArrowRightLong/>
                      </p>
                    </button>
                  </div>
                </div>

                <div className='md:absolute xl:right-0 lg:-right-40 md:-right-80 top-0 w-full flex md:justify-end'>
                  <div className='xl:w-[738px] lg:w-[700px] w-full h-full 2xl:pt-7 pt-10'>
                    <div className='hidden md:flex justify-end'>
                      <div className='pr-52'>
                        <Image className='translate-y-2' src="/Assets/3.png" height={1000} width={1000} priority alt=''/>
                      </div>
                    </div>
                    
                    <div className='z-10 sticky 2xl:pl-80 2xl:pr-0 xl:px-40 lg:pl-10 lg:pr-64 w-10/12 mx-auto md:mx-0 md:w-6/12 lg:w-full'>
                      <Image className='' src="/Assets/slide3.png" height={1000} priority width={1000} alt=''/>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute top-0 right-0 hidden md:block'>
                <Image className='' src="/Assets/for-slide.png" alt='' height={500} priority width={500}/>
              </div>
            </div>
        </SwiperSlide>


        <div className="custom-prev select-none absolute left-5 hover:bg-white hover:border-white hover:text-gray-800 top-1/2 -translate-x-32 group-hover:translate-x-0 text-white transform -translate-y-1/2 z-10 cursor-pointer border border-gray-400 rounded-full p-2.5 transition-all duration-500">
          <SlArrowLeft className='text-lg'/>
        </div>

        <div className="custom-next select-none absolute right-5 hover:bg-white hover:border-white hover:text-gray-800 top-1/2 translate-x-32 group-hover:translate-x-0 text-white transform -translate-y-1/2 z-10 cursor-pointer border border-gray-400 rounded-full p-2.5 transition-all duration-500">
          <SlArrowRight className='text-lg'/>
        </div>
      </Swiper>
    </div>
  );
}