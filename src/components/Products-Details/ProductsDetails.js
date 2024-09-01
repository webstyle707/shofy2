"use client";
import React,{useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { IoStar } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { SlQuestion } from "react-icons/sl";
import { RiHeart3Line } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

function ProductsDetails(props) {
    const {Card,Index,Quantity,handleDecrease,handleIncrease,handleIndex,isShowMoreDiscription,handleShowMoreDiscription} = props;
  return (
    <div>
        <div className=' space-y-6'>
            <div className='flex items-center space-x-1.5 text-sm text-gray-600'>
                <div className='flex space-x-1'>
                    <AiOutlineHome className='text-lg'/>
                    <Link href={"/"} className=' outline-none focus:outline-none hover:text-[#0989FF] transition-all duration-500'>Home</Link>
                </div>
                <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                <Link href={"/"} className=' outline-none focus:outline-none hover:text-[#0989FF] transition-all duration-500'>{Card[0]?.categoryname}</Link>
                <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                <Link href={"/"} className=' outline-none focus:outline-none hover:text-[#0989FF] transition-all duration-500'>{Card[0]?.company}</Link>
                <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                <span className='text-gray-700 font-medium'>{Card[0]?.name}</span>
            </div>
            <div className='flex justify-between'>
                <div className=' space-x-2.5 flex'>
                    <div>
                        <ul className=' space-y-2.5'>
                            {
                                Card[0]?.photodetails?.length > 0 && Card[0]?.photodetails.map((img,i)=>
                                <li onClick={()=>handleIndex(i)} key={i+img} className=' cursor-pointer'>
                                   <Image className={`h-[100px] w-[78px] bg-[#F4F5F7] hover:border-gray-800 border transition-all duration-75 ease-out 
                                    ${Index==i?"border-gray-800":"border-[#F4F5F7]"}`} src={`/Assets/products/${img}`} width={600} height={600} alt='' />
                                </li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <Image className={`w-[580px] bg-[#F4F5F7]`} src={`/Assets/products/${Card[0]?.photodetails[Index]}`} width={600} height={600} alt='' />
                    </div>
                </div>
                <div className='w-[505px] space-y-3'>
                    <div className=''>
                        <h2 className=' text-gray-500 text-sm'>{Card[0]?.categoryname}</h2>
                        <h1 className=' text-3xl text-gray-800 font-semibold'>{Card[0]?.name}</h1>
                    </div>

                    <div className='flex items-center space-x-3'>
                       <button className=' outline-none bg-[#F1F8FF] text-[#0989FF] text-sm py-0.5 px-2.5 rounded'>
                        {
                            Card[0]?.status == 1? "in-stock": "out-of-stock"
                        }
                       </button>
                       <div className='flex items-center space-x-1 text-[#FFB21D]'>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                            <IoStar/>
                       </div>
                       <p className='text-sm text-gray-500'>({Card[0]?.review} Reviews)</p>
                    </div>

                    <div className='text-sm text-gray-600'>
                        {
                            isShowMoreDiscription ? 
                            <div>
                                {Card[0]?.discription} 
                                <span>{" "}</span> 
                                <button onClick={handleShowMoreDiscription} className=' focus:outline-none outline-none font-semibold text-sm text-[#0989FF]'>See less</button> 
                            </div>:
                            <div className=''>
                                {Card[0]?.discription.substring(0,100)}... <span>{" "}</span> 
                                <button onClick={handleShowMoreDiscription} className=' focus:outline-none outline-none font-semibold text-sm text-[#0989FF]'>See more</button>
                            </div>
                        }
                    </div>

                    <div>
                        {
                          Card[0]?.discount <= 0? 
                          <div className='text-gray-800 font-semibold text-xl'>
                            {Card[0]?.price.toFixed(2)}
                          </div>:
                          <div className='flex items-center space-x-1.5'>
                            <div className='text-gray-600 text-sm line-through'>${Card[0]?.price}</div>
                            <div className='text-gray-800 font-semibold text-xl'>${(Card[0]?.price - Card[0]?.discount).toFixed(2)}</div>
                          </div>
                        }
                    </div>

                    <div className='pt-3 space-y-2.5'>
                        <p className='text-gray-700'>Quantity</p>

                        <div className='w-full flex items-center justify-between space-x-4'>
                            <div className='w-[122px] px-4 flex items-center justify-between space-x-2 bg-[#F3F5F6] border border-[#F3F5F6] py-2.5'>
                                <button onClick={handleDecrease} className='p-1 outline-none focus:outline-none select-none hover:bg-white rounded-full transition-all duration-500 flex items-center justify-center'>
                                    <AiOutlineMinus className='text-sm'/>
                                </button>
                                <p className=''>{Quantity}</p>
                                <button onClick={handleIncrease} className='p-1 outline-none focus:outline-none select-none hover:bg-white rounded-full transition-all duration-500 flex items-center justify-center'>
                                    <GoPlus/>
                                </button>
                            </div>
                            <div className='w-[368px]'>
                                <button className='select-none text-gray-700 w-full border py-2.5 hover:bg-gray-800 transition-all duration-500 hover:text-white outline-none focus:outline-none'>
                                    Add To Card
                                </button>
                            </div>
                        </div>

                        <div>
                            <button className='outline-none focus:outline-none w-full bg-[#0989FF] hover:bg-gray-800 transition-all duration-500 text-white font-semibold py-2.5 border border-[#0989FF] hover:border-gray-800 select-none'>Buy Now</button>
                        </div>

                        <div className='flex items-center space-x-2.5 pt-2.5'>
                            <button className='flex items-center  group space-x-1 focus:outline-none outline-none'>
                                <IoIosGitCompare className='text-gray-700 group-hover:text-[#0989FF] transition-all duration-300'/>
                                <p className='text-gray-500 group-hover:text-[#0989FF] transition-all duration-300 text-sm'>Compare</p>
                            </button>
                            
                            <button className='flex items-center  group space-x-1 focus:outline-none outline-none'>
                                <RiHeart3Line className='text-gray-700 group-hover:text-[#0989FF] transition-all duration-300'/>
                                <p className='text-gray-500 group-hover:text-[#0989FF] transition-all duration-300 text-sm'>Add Wishlist</p>
                            </button>

                            <button className='flex items-center  group space-x-1 focus:outline-none outline-none'>
                                <SlQuestion className='text-gray-700 group-hover:text-[#0989FF] transition-all duration-300 text-sm'/>
                                <p className='text-gray-500 group-hover:text-[#0989FF] transition-all duration-300 text-sm'>Ask a question</p>
                            </button>
                        </div>

                        {/* line */}
                        <div className='border-b w-full pt-3'></div>
                    </div>

                    <div className='pt-3 space-y-6'>
                        <div className='text-sm space-y-1.5'>
                            <p>
                                <span className='text-gray-600 font-medium'>SKU: </span>
                                <span className='text-gray-600'> AF7SDVX65</span>
                            </p>

                            <p>
                                <span className='text-gray-600 font-medium'>Category: </span>
                                <span className='text-gray-600'> {Card[0]?.categoryname}</span>
                            </p>

                            <p>
                                <span className='text-gray-600 font-medium'>Tag: </span>
                                <span className='text-gray-600'> Android</span>
                            </p>
                        </div>

                        <div className='flex items-center space-x-1'>
                            <p className=' text-sm text-gray-600'>Share:</p>
                            <div className='flex items-center space-x-1.5 *:p-3 *:flex *:items-center *:justify-center'>
                                <button className=' focus:outline-none select-none border rounded-full bg-white group hover:bg-[#0989FF] hover:border-[#0989FF] transition-all duration-500'>
                                    <RiFacebookFill className=' text-gray-700 group-hover:text-white transition-all duration-500'/>
                                </button>
                                <button className=' focus:outline-none select-none border rounded-full bg-white group hover:bg-[#0989FF] hover:border-[#0989FF] transition-all duration-500'>
                                    <GrTwitter className=' text-gray-700 group-hover:text-white transition-all duration-500'/>
                                </button>
                                <button className=' focus:outline-none select-none border rounded-full bg-white group hover:bg-[#0989FF] hover:border-[#0989FF] transition-all duration-500'>
                                    <FaLinkedinIn className='text-gray-700 group-hover:text-white transition-all duration-500'/>
                                </button>
                                <button className=' focus:outline-none select-none border rounded-full bg-white group hover:bg-[#0989FF] hover:border-[#0989FF] transition-all duration-500'>
                                    <FaVimeoV className='text-gray-700 group-hover:text-white transition-all duration-500'/>
                                </button> 
                            </div>
                        </div>

                        <div className=' space-y-3.5'>
                            <div className='text-sm space-y-1'>
                                <div  className='flex space-x-1.5'>
                                    <p><FaRegCircleCheck className=' text-gray-500 text-base'/></p>
                                    <p className='text-gray-600'>30 days easy returns</p>
                                </div>
                                <div  className='flex space-x-1.5'>
                                    <p><FaRegCircleCheck className=' text-gray-500 text-base'/></p>
                                    <p className='text-gray-600'>Order yours before 2.30pm for same day dispatch</p>
                                </div>
                            </div>

                            <div className='bg-[#F3F5F6] py-[17px] px-8 flex items-center justify-between'>
                                <div className=' text-sm font-medium text-gray-600 -space-y-1'>
                                    <p>Guaranteed safe</p>
                                    <p>& secure checkout</p>
                                </div>
                                <div>
                                    <Image className='w-[236px]' src="/Assets/footer-pay.png" width={600} height={600} alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsDetails;