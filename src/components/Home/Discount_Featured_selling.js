import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoStar } from "react-icons/io5";

function DiscountFeaturedSelling(props) {
  const { Discountproducts, Featuredproducts, Sellingproducts } = props;
  
  return (
    <div className='2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-12 gap-10">
        
        {/* Discount Products Section */}
        <div className=' space-y-10'>
          <h1 className="text-2xl font-semibold">Discount Products</h1>
          <ul className="space-y-2">
            {Discountproducts?.length > 0 && Discountproducts.map((e, i) => (
              <li
                key={i + e.name}
                className={`pb-2 group ${i === Discountproducts.length - 1 ? "" : "border-b"}`}
              >
                <div className="flex items-center space-x-5">
                  
                  {/* Product Image */}
                  <div className="w-[124.85px] cursor-pointer bg-[#ECEFF4] rounded overflow-hidden">
                    <Image
                      className="rounded group-hover:scale-110 transition-all duration-500"
                      src={`/Assets/products/${e.photo}`}
                      width={500}
                      height={500}
                      alt={e.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className=' space-y-1.5'>
                    <div className=' -space-y-1'>
                      <div>
                        <Link
                          href="/"
                          className="text-xs font-semibold text-gray-800 hover:text-[#0989FF] transition-all duration-300 cursor-pointer"
                        >
                          {e.categoryname}
                        </Link>
                      </div>

                      <div>
                        <Link
                          href="/"
                          className="text-sm font-semibold hover:text-[#0989FF] transition-all duration-300 cursor-pointer"
                        >
                          {e.name}
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-1.5 pt-1">
                        <div className="flex items-center space-x-1 text-[#FFB21D]">
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </div>
                        <div className="text-xs text-gray-800 font-semibold">
                          ({e.review} Review)
                        </div>
                      </div>

                      <div className='text-[#0989FF] font-semibold'>${(e.price - e.discount).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className=' space-y-10'>
          <h1 className="text-2xl font-semibold">Featured Products</h1>
          <ul className="space-y-2">
            {Featuredproducts?.length > 0 && Featuredproducts.map((e, i) => (
              <li
                key={i + e.name}
                className={`pb-2 group ${i === Featuredproducts.length - 1 ? "" : "border-b"}`}
              >
                <div className="flex items-center space-x-5">
                  
                  {/* Product Image */}
                  <div className="cursor-pointer w-[124.85px] bg-[#ECEFF4] rounded overflow-hidden">
                    <Image
                      className="rounded group-hover:scale-110 transition-all duration-500"
                      src={`/Assets/products/${e.photo}`}
                      width={500}
                      height={500}
                      alt={e.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className=' space-y-1.5'>
                    <div className=' -space-y-1'>
                      <div>
                        <Link
                          href="/"
                          className="text-xs font-semibold text-gray-800 hover:text-[#0989FF] transition-all duration-300 cursor-pointer"
                        >
                          {e.categoryname}
                        </Link>
                      </div>

                      <div>
                        <Link
                          href="/"
                          className="text-sm font-semibold hover:text-[#0989FF] transition-all duration-300 cursor-pointer"
                        >
                          {e.name}
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-1.5 pt-1">
                        <div className="flex items-center space-x-1 text-[#FFB21D]">
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </div>
                        <div className="text-xs text-gray-800 font-semibold">
                          ({e.review} Review)
                        </div>
                      </div>

                      <div className='text-[#0989FF] font-semibold'>${(e.price - e.discount).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      
        <div className=' space-y-10'>
          <h1 className="text-2xl font-semibold">Selling Products</h1>
          <ul className="space-y-2">
            {Sellingproducts?.length > 0 && Sellingproducts.map((e, i) => (
              <li
                key={i + e.name}
                className={`pb-2 group ${i === Sellingproducts.length - 1 ? "" : "border-b"}`}
              >
                <div className="flex items-center space-x-5">
                  
                  {/* Product Image */}
                  <div className="cursor-pointer w-[124.85px] bg-[#ECEFF4] rounded overflow-hidden">
                    <Image
                      className="rounded group-hover:scale-110 transition-all duration-500"
                      src={`/Assets/products/${e.photo}`}
                      width={500}
                      height={500}
                      alt={e.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className=' space-y-1.5'>
                    <div className=' -space-y-1'>
                      <div>
                        <Link
                          href="/"
                          className="text-xs font-semibold text-gray-800 hover:text-[#0989FF] transition-all duration-300 cursor-pointer"
                        >
                          {e.categoryname}
                        </Link>
                      </div>

                      <div>
                        <Link
                          href="/"
                          className="text-sm font-semibold hover:text-[#0989FF] transition-all duration-300 cursor-pointer"
                        >
                          {e.name}
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-1.5 pt-1">
                        <div className="flex items-center space-x-1 text-[#FFB21D]">
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </div>
                        <div className="text-xs text-gray-800 font-semibold">
                          ({e.review} Review)
                        </div>
                      </div>

                      <div className='text-[#0989FF] font-semibold'>${(e.price - e.discount).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DiscountFeaturedSelling;
