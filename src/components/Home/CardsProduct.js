import React from 'react'
import { Products } from '@/data/Products'
import Link from 'next/link';
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
function CardsProduct() {
  return (
    <div className='2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>
      <ul className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-5 gap-4'>
        {
          Products?.length > 0 && Products?.slice(0, 8).map((e,i)=>
          <li key={e+i} className={`group w-full hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gray-100 rounded-md`}>
            <div className=''>
              <div className='overflow-hidden cursor-pointer border-b border-gray-200 flex items-center justify-center relative'>
                {
                  e.status == 1?"":
                <button className='absolute bg-[#FD2D6C] font-semibold text-white px-3 py-0.5 text-sm rounded-md right-6 top-4'>
                  Out-Of-Stock
                </button>
                }

                <Link href={`/product-details/${e.id}`}>
                    <Image className='w-full group-hover:scale-110 transition-all duration-500' src={`/Assets/products/${e.photo}`} width={600} height={600} alt='' />
                </Link>

                <div className='bg-white shadow absolute bottom-6 group-hover:right-6 transition-all duration-500 -right-20 text-[20px] text-gray-800 border *:p-2.5 px-[0.5px] rounded'>
                  <div className='border-b'>
                    <button className=' focus:underline flex items-center justify-center'>
                      <FiShoppingCart className='-translate-x-0.5'/>
                    </button>
                  </div>     
                  <div className='border-b'>
                    <button className=' focus:underline flex items-center justify-center'>
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

              <div className=' space-y-1 pl-6 pt-4 pb-6'>
                <div>
                    <Link href="/product-details/${e.id}" className='text-xs font-semibold text-gray-800 hover:text-[#0989FF] transition-all duration-300 cursor-pointer'>
                      {e.categoryname}
                    </Link>
                </div>
                <div>
                  <Link href={`/product-details/${e.id}`} className='font-semibold hover:text-[#0989FF] transition-all duration-300 cursor-pointer'>{e.name}</Link>
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
                  {
                    e.discount <= 0? 
                    <div className='text-[#0989FF] font-semibold'>${e.price.toFixed(2)}</div>:
                    <div className='flex items-center space-x-1.5'>
                      <div className='text-xs font-semibold text-gray-600 line-through'>${e.price}</div>
                      <div className='text-[#0989FF] font-semibold'>${(e.price - e.discount).toFixed(2)}</div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </li>)
        }
      </ul>
    </div>
  )
}

export default CardsProduct