import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";
import SliderCards from './SliderCards';
import { DataDealoftheDay } from '@/data/DataDealoftheDay';

function DealoftheDay() {
  return (
    <div className='2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>
        <div className='xl:px-2'>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-2 md:space-y-0">
                <div>
                    <h1 className="text-center font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-2xl  text-gray-900">Deal of The Day</h1>
                </div>
                <div className="flex items-center 2xl:space-x-16 xl:space-x-12 md:space-x-8">
                    <div className="2xl:w-[680px] xl:w-[520px] lg:w-[450px] hidden md:block w-[240px] border-b-2 border-white"></div>
                    <div className="flex items-center">
                        <button className='select-none bg-[#0989FF] hover:bg-gray-900 transition-all duration-500 rounded-md md:px-[15px] px-[10px] md:py-[9px] py-[7px] text-base font-semibold text-gray-50 flex items-center justify-center space-x-0.5'>
                            <p>View All Deals</p>
                            <IoArrowForwardSharp className='text-xl'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='pt-10'>
          <SliderCards DataDealoftheDay={DataDealoftheDay}/>
        </div>
        {/* <div className='grid grid-cols-3 gap-8 pt-16 '>
            <div className='group bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-300'>
                <div className='h-[342px] border-b overflow-hidden relative'>
                    <div className='w-full h-full flex items-center'>
                        <Image className='w-full group-hover:scale-105 transition-all duration-500' src="/Assets/products/headphone-5.png" width={500} height={500} alt=''/>
                    </div>

                    <div className='bg-white shadow absolute bottom-[50%] translate-y-[70%] group-hover:right-6 transition-all duration-500 -right-20 text-[20px] text-gray-800 border *:py-2.5 *:px-3 px-[0.5px] rounded'>
                        <div className='border-b'>
                          <button className=' focus:underline flex items-center'>
                            <FiShoppingCart className=' -translate-x-0.5'/>
                          </button>
                        </div>     
                        <div className='border-b flex items-center justify-center'>
                          <button className=' focus:underline'>
                            <FiEye/>
                          </button>
                        </div>
                  <div>

                  <button className=' focus:underline flex items-center justify-center'>
                    <LuHeart/>
                  </button>
                  </div>
                </div>
                </div>
                <div className=' space-y-1 pl-8 py-7'>
                    <p className='text-xs font-semibold text-gray-600 hover:text-[#0989FF] transition-all duration-300 cursor-pointer'>{"Headphones"}</p>
                    <h1 className='font-semibold hover:text-[#0989FF] text-gray-700 transition-all duration-300 cursor-pointer'>{"Gaming Headphone"}</h1>
                    <div className='flex items-center space-x-1.5 pt-1'>
                      <div className='flex items-center space-x-1 text-[#FFB21D]'>
                        <IoStar/>
                        <IoStar/>
                        <IoStar/>
                        <IoIosStarHalf/>
                      </div>
                      <div className='text-xs text-gray-800 font-semibold'>
                        ({2} Review)
                      </div>
                    </div>
    
                    <div>
                      {
                        10 <= 0? 
                        <div className='text-[#0989FF] font-semibold'>${130}</div>:
                        <div className='flex items-center space-x-1'>
                          <div className='text-xs font-semibold text-gray-600 line-through'>${130}</div>
                          <div className='text-[#0989FF] font-semibold'>${130 - 10}</div>
                        </div>
                      }
                    </div>
    
                    <div className='*:uppercase flex items-center space-x-1 pt-5'>
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>day</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>hrs</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>min</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>sec</p>
                        </button>
    
                    </div>
                </div>
            </div>
            
            <div className='group bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-300'>
                <div className='h-[342px] border-b overflow-hidden relative'>
                    <div className='w-full h-full flex items-center'>
                        <Image className='w-full group-hover:scale-105 transition-all duration-500' src="/Assets/products/cpu-5.png" width={500} height={500} alt=''/>
                    </div>

                    <div className='bg-white shadow absolute bottom-[50%] translate-y-[70%] group-hover:right-6 transition-all duration-500 -right-20 text-[20px] text-gray-800 border *:py-2.5 *:px-3 px-[0.5px] rounded'>
                        <div className='border-b'>
                          <button className=' focus:underline flex items-center'>
                            <FiShoppingCart className=' -translate-x-0.5'/>
                          </button>
                        </div>     
                        <div className='border-b flex items-center justify-center'>
                          <button className=' focus:underline'>
                            <FiEye/>
                          </button>
                        </div>
                  <div>

                  <button className=' focus:underline flex items-center justify-center'>
                    <LuHeart/>
                  </button>
                  </div>
                </div>
                </div>
                <div className=' space-y-1 pl-8 py-7'>
                    <p className='text-xs font-semibold text-gray-600 hover:text-[#0989FF] transition-all duration-300 cursor-pointer'>{"CPU Heat Pipes"}</p>
                    <h1 className='font-semibold hover:text-[#0989FF] text-gray-700 transition-all duration-300 cursor-pointer'>{"Antec Air Cooler"}</h1>
                    <div className='flex items-center space-x-1.5 pt-1'>
                      <div className='flex items-center space-x-1 text-[#FFB21D]'>
                        <IoStar/>
                        <IoStar/>
                        <IoStar/>
                        <IoIosStarHalf/>
                      </div>
                      <div className='text-xs text-gray-800 font-semibold'>
                        ({3} Review)
                      </div>
                    </div>
    
                    <div>
                      {
                        0 <= 0? 
                        <div className='text-[#0989FF] font-semibold'>${80}</div>:
                        <div className='flex items-center space-x-1'>
                          <div className='text-xs font-semibold text-gray-600 line-through'>${80}</div>
                          <div className='text-[#0989FF] font-semibold'>${80 - 0}</div>
                        </div>
                      }
                    </div>
    
                    <div className='*:uppercase flex items-center space-x-1 pt-5'>
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>day</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>hrs</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>min</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>sec</p>
                        </button>
    
                    </div>
                </div>
            </div>

            <div className='group bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-300'>
                <div className='h-[342px] border-b overflow-hidden relative'>
                    <div className='w-full h-full flex items-center'>
                        <Image className='w-full group-hover:scale-105 transition-all duration-500' src="/Assets/products/cpu-1.png" width={500} height={500} alt=''/>
                    </div>

                    <div className='bg-white shadow absolute bottom-[50%] translate-y-[70%] group-hover:right-6 transition-all duration-500 -right-20 text-[20px] text-gray-800 border *:py-2.5 *:px-3 px-[0.5px] rounded'>
                        <div className='border-b'>
                          <button className=' focus:underline flex items-center'>
                            <FiShoppingCart className=' -translate-x-0.5'/>
                          </button>
                        </div>     
                        <div className='border-b flex items-center justify-center'>
                          <button className=' focus:underline'>
                            <FiEye/>
                          </button>
                        </div>
                  <div>

                  <button className=' focus:underline flex items-center justify-center'>
                    <LuHeart/>
                  </button>
                  </div>
                </div>
                </div>
                <div className=' space-y-1 pl-8 py-7'>
                    <p className='text-xs font-semibold text-gray-600 hover:text-[#0989FF] transition-all duration-300 cursor-pointer'>{"Smart Watch"}</p>
                    <h1 className='font-semibold hover:text-[#0989FF] text-gray-700 transition-all duration-300 cursor-pointer'>{"Sony Lady Fitness Watch"}</h1>
                    <div className='flex items-center space-x-1.5 pt-1'>
                      <div className='flex items-center space-x-1 text-[#FFB21D]'>
                        <IoStar/>
                        <IoStar/>
                        <IoStar/>
                        <IoIosStarHalf/>
                      </div>
                      <div className='text-xs text-gray-800 font-semibold'>
                        ({1} Review)
                      </div>
                    </div>
    
                    <div>
                      {
                        4.5 <= 0? 
                        <div className='text-[#0989FF] font-semibold'>${150}</div>:
                        <div className='flex items-center space-x-1'>
                          <div className='text-xs font-semibold text-gray-600 line-through'>${150}</div>
                          <div className='text-[#0989FF] font-semibold'>${150 - 4.5}</div>
                        </div>
                      }
                    </div>
    
                    <div className='*:uppercase flex items-center space-x-1 pt-5'>
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>day</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>hrs</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>min</p>
                        </button>
    
                        <button className="border rounded px-3.5 py-1 -space-y-0.5">
                            <p className='text-[16px] font-bold text-gray-700'>0</p>
                            <p className='text-[10px] font-semibold text-gray-700'>sec</p>
                        </button>
    
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default DealoftheDay