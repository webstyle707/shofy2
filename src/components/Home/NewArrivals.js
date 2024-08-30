"use client";
import React, { useEffect, useState } from 'react'
import { Products } from '@/data/Products';
import SliderCards2 from './SliderCards2';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
function NewArrivals() {
    const [filterProducts, setFilterProducts] = useState([]);
    useEffect(() => {
      const filteredItems = Products.filter(iterm => 
        (iterm.categoryname === "Smart Watch" || iterm.categoryname === "Bluetooth")
      ).reduce((unique, iterm) => {
        if (!unique.some(e => e.id === iterm.id)) {
          unique.push(iterm);
        }
        return unique;
      }, []);
      
      setFilterProducts(filteredItems);
    }, [Products]);

  return (
    <div className='2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>
        <div className=''>
            <SliderCards2 Products={filterProducts}/>
        </div>
    </div>
  )
}

export default NewArrivals