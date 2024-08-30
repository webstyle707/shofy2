import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from 'next/image';
import { Categories } from '@/data/Categories';

function DropdownCategories({dropdown}) {
  return (
    <div  className={`w-full bg-white shadow absolute z-10 left-0 cursor-text top-full transition-all duration-300 select-none ${dropdown?"opacity-100" : "opacity-0"}`}>
      <ul className='px-8 py-1'>
        {
          Categories?.length > 0 && Categories.map((e,i)=> 
            <li key={e+i} className={`cursor-pointer flex items-center justify-between py-2.5 border-gray-200 ${Categories.length==i+1?"border-none":"border-b"}`}>
                <div className='flex items-center space-x-2.5'>
                  <div className='w-[50px] h-[50px] px-1.5'>
                    <Image className='w-full h-full' src={`/Assets/${e.photo}`} width={1000} height={1000} alt='' priority />
                  </div>
                  <h1 className=' font-semibold text-gray-700 text-sm'>{e.name}</h1>
                </div>
                <div><MdOutlineArrowForwardIos className='text-sm text-gray-500'/></div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default DropdownCategories