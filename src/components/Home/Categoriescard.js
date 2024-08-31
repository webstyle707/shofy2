import React from 'react'
import { Categories } from '@/data/Categories'
import Image from 'next/image'
function Categoriescard() {
  return (
    <div className='2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4 py-16'>
        <ul className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 xl:gap-0 gap-4 lg:gap-6'>
            {
                Categories.length > 0 && Categories.map((e,i)=>
                <li key={e+i} className=' space-y-3'>
                    <div className='flex items-center justify-center w-full'>
                        <div className='group cursor-pointer xl:w-[180px] xl:h-[180px] w-[150px] h-[150px] bg-[#E6F2FF] flex items-center justify-center rounded-full'>
                            <Image className='xl:w-20 w-16 group-hover:scale-110 transition-all duration-500' src={`/Assets/${e.photo}`} width={500} height={500} alt="" />
                        </div>
                    </div>
                    <div className=' text-center'>
                        <h1 className='lg:text-lg font-semibold flex justify-center items-center'>
                            <button className='focus:outline-none hover:text-[#0989FF] transition-all duration-300 cursor-pointer'>
                              {e.name}
                            </button>
                        </h1>
                        <p className='text-sm text-gray-600'>{e.product} <span>Product</span></p>
                    </div>
                </li>)
            }
        </ul>
    </div>
  )
}

export default Categoriescard