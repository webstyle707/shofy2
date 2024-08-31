import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div className='pb-20 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-1.5 *:h-[99.19px] *:flex *:items-center'>
            <div className='flex space-x-3 bg-[#F6F7F9] px-8'>
                <div>
                    <Image className='w-[33px] h-[27px]' src="/Assets/car1.png" height={500} width={500} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold lg:text-lg'>Free Delivary</h1>
                    <p className='text-sm text-gray-700'>Orders from all item</p>
                </div>
            </div>
            
            <div className='flex space-x-3 bg-[#F6F7F9] px-8'>
                <div>
                    <Image className='w-[21px] h-[35px]' src="/Assets/$.png" height={500} width={500} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold lg:text-lg'>Return & Refunf</h1>
                    <p className='text-sm text-gray-700'>Maney back guarantee</p>
                </div>
            </div>

            <div className='flex space-x-3 bg-[#F6F7F9] px-8'>
                <div>
                    <Image className='w-[31px] h-[30px]' src="/Assets/discount.png" height={500} width={500} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold lg:text-lg'>Member Discount</h1>
                    <p className='text-sm text-gray-700'>One very order over $140.00</p>
                </div>
            </div>

            <div className='flex space-x-3 bg-[#F6F7F9] px-8'>
                <div>
                    <Image className='w-[31px] h-[30px]' src="/Assets/car1.png" height={500} width={500} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold lg:text-lg'>Support 24/7</h1>
                    <p className='text-sm text-gray-700'>Contact us 24 hours a day</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;