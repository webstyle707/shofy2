import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";

function RelateProducts({RelatedProducts}) {
  return (
    <div className=''>
      <ul className='grid grid-cols-4 gap-6'>
        {
          RelatedProducts?.length > 0 && RelatedProducts.map((e,i)=>
            <li key={e+i} className='group'>
              <div className=' space-y-3'>
                <div className='w-full'>
                  <Link href={`/product-details/${e.id}`}>
                     <div className='bg-[rgb(246,246,246)] relative overflow-hidden'>
                       <div className='w-full flex items-center justify-center overflow-hidden cursor-pointer'>
                         <Image className='w-[306px] group-hover:scale-105 transition-all duration-500' src={`/Assets/products/${e.photo}`} width={600} height={600} alt='' />
                       </div>
                       <div className='cursor-pointer text-sm bg-gray-900 absolute bottom-0 translate-y-10 group-hover:translate-y-0 transition-all duration-500 left-0 w-full z-10 text-center text-white py-2'>
                         Add To Card
                       </div>
     
                       <div className='space-y-1 absolute top-4 translate-x-20 group-hover:translate-x-0 right-4 transition-all duration-500 text-[20px] text-gray-800 *:p-2.5 px-[0.5px]'>
                           <div className='border border-gray-200 hover:border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:text-white bg-white'>
                             <button className=' focus:underline flex items-center justify-center'>
                               <FiShoppingCart className='-translate-x-0.5'/>
                             </button>
                           </div>    
                            
                           <div className='border border-gray-200 hover:border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:text-white bg-white'>
                             <button className=' focus:underline flex items-center justify-center'>
                               <FiEye/>
                             </button>
                           </div>
     
                           <div className='border border-gray-200 hover:border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:text-white bg-white'>
                           <button className=' focus:underline flex items-center justify-center'>
                             <LuHeart/>
                           </button>
                           </div>
                       </div>
     
                     </div>
                  </Link>
                </div>
                <div className=''>
                  <div>
                    <Link href={`/product-details/${e.id}`} className=' focus:outline-none hover:text-red-400 transition-all duration-300 text-sm text-gray-600'>{e.categoryname}</Link>
                  </div>
                  <div>
                    <Link href={`/product-details/${e.id}`} className='focus:outline-none hover:text-[#0989FF] transition-all duration-300'>{e.name}</Link>
                  </div>
                  <p className=' pt-1 font-semibold text-gray-800'>$ {e.price - e.discount}</p>
                </div>
              </div>
            </li>
        )}
      </ul>
    </div>
  )
}

export default RelateProducts