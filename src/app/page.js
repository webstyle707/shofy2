"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Products } from "@/data/Products";
import Slider from "@/components/Home/Slider";
import Categoriescard from "@/components/Home/Categoriescard";
import Services from "@/components/Home/Services";
import CardsProduct from "@/components/Home/CardsProduct";
import DealoftheDay from "@/components/Home/DealoftheDay";
import CardsProducts2 from "@/components/Home/CardsProducts2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";
import Slider2 from "@/components/Home/slider2";
import NewArrivals from "@/components/Home/NewArrivals";
import Discount_Featured_selling from "@/components/Home/Discount_Featured_selling";
import LatestNewsandArticles from "@/components/Home/LatestNewsandArticles";
import Instagram from "@/components/Home/Instagram";
import Footerhome from "@/components/Home/Footerhome";

export default function Home() {
  const [ishover,sethover] = useState(false)
  const handlehover = ()=>{
    sethover(!ishover)
  }
  const [ishover2,sethover2] = useState(false)
  const handlehover2 = ()=>{
    sethover2(!ishover2)
  }

  const [Discountproducts, setDiscountproducts] = useState([]);
  const [Featuredproducts, setFeaturedproducts] = useState([]);
  const [Sellingproducts, setSellingproducts] = useState([]);
   const handlediscountproducts = ()=>{
     const discountproducts = Products.filter(iterm => 
       (iterm.typeproduct === "discount")
     ).reduce((unique, iterm) => {
       if (!unique.some(e => e.id === iterm.id)) {
         unique.push(iterm);
       }
       return unique;
     }, []);
     
     setDiscountproducts(discountproducts);
   }
   const handledfeaturedproducts = ()=>{
     const featuredproducts = Products.filter(iterm => 
       (iterm.typeproduct === "featured")
     ).reduce((unique, iterm) => {
       if (!unique.some(e => e.id === iterm.id)) {
         unique.push(iterm);
       }
       return unique;
     }, []);
     
     setFeaturedproducts(featuredproducts);
   }
   const handlesellingproducts = ()=>{
     const sellingproducts = Products.filter(iterm => 
       (iterm.typeproduct === "selling")
     ).reduce((unique, iterm) => {
       if (!unique.some(e => e.id === iterm.id)) {
         unique.push(iterm);
       }
       return unique;
     }, []);
     setSellingproducts(sellingproducts);
   }
  useEffect(() => {
    handlediscountproducts();
    handledfeaturedproducts();
    handlesellingproducts();
  }, [Products]);
  return (
   <div className="">
     <div>
       <Slider/>
     </div>
     
     <div className="max-w-[1320px] mx-auto">
        <div className="">
          <Categoriescard/>
        </div>

        <div className="">
          <Services/>
        </div>
   
        <div className="flex md:flex-row flex-col  items-center md:justify-between space-y-2 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4">
         <div>
           <h1 className="font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-gray-900">Trending Products</h1>
         </div>
         <div className="flex md:flex-row flex-col items-center 2xl:space-x-24 xl:space-x-16 lg:space-x-10 md:space-x-6">
           <div className="md:block hidden 2xl:w-[480px] xl:w-[400px] lg:w-[360px] w-[180px] border-b-2 border-gray-200"></div>

           <div className="text-base 2xl:text-xl flex items-center space-x-4 lg:space-x-5 2xl:space-x-8">
             <p className="text-gray-950 cursor-pointer">New</p>
             <p className="text-gray-500 cursor-pointer">Featured</p>
             <p className="text-gray-500 cursor-pointer">Top Sellers</p>
           </div>
         </div>
        </div>

        <div className="py-16 w-full">
          <CardsProduct/>
        </div>

        <div className="pt-8 py-20 flex flex-col lg:flex-row items-center lg:justify-between space-y-7 lg:space-y-0 lg:space-x-6 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4">
          <div className="relative xl:w-[856.02px] lg:w-[560px] h-[260px] 2xl:h-[280.77px] rounded-lg overflow-hidden bg-[#F1F1F1] group">
            <div className=" absolute w-full h-full py-16 pl-6 md:p-16 z-10 space-y-2 top-0 left-0 ">
              <p className="text-gray-700">Sale 20% off all store</p>

              <div className=" font-semibold 2xl:text-3xl lg:text-2xl text-xl text-gray-800">
                  <Link  className="hover:text-blue-600 transition-all duration-500" href="/">Smartphone <br/> BLU G91 Pro 2022</Link>
              </div>

              <div className="pt-3.5">
                <button onMouseEnter={handlehover} onMouseLeave={handlehover} className="select-none flex items-center text-gray-700 hover:text-gray-900 transition-all duration-500">
                  <p className="text-sm font-semibold">Shop Now</p>
                  <IoIosArrowRoundForward className={`text-3xl transition-all duration-500 ${ishover?"translate-x-1":"translate-x-0"}`} />
                </button>
              </div>
            </div>
            <div className="w-full flex items-end md:items-start overflow-hidden h-full rounded-lg">
              <Image className="md:w-full md:h-full rounded-lg group-hover:scale-105 transition-all duration-500" src="/Assets/4.png" width={700} height={500} alt=""/>
            </div>
          </div>

          <div className="bg-[#90DAFF] xl:w-[422.55px] lg:w-[376px] w-full h-[260px] 2xl:h-[280.77px] rounded-lg overflow-hidden group relative">
            <div className="absolute w-full h-full py-16 pl-6 md:px-11 z-20 space-y-2 top-0 left-0">

              <div className=" font-semibold text-xl text-gray-800">
                  <Link  className="" href="/">HyperX Cloud II<br/>Wireless</Link>
              </div>

              <p className="text-gray-800 font-semibold">Sale 20% off</p>

              <div className="pt-3.5">
                <button onMouseEnter={handlehover2} onMouseLeave={handlehover2} className="select-none flex items-center text-gray-700 hover:text-gray-900 transition-all duration-500">
                  <p className="text-sm font-semibold">Shop Now</p>
                  <IoIosArrowRoundForward className={`text-3xl transition-all duration-500 ${ishover2?"translate-x-1":"translate-x-0"}`} />
                </button>
              </div>
            </div>

            <div className="w-full h-full rounded-lg flex justify-end items-center overflow-hidden">
              <Image className="lg:w-full md:w-8/12 w-10/12 translate-x-4 md:translate-x-0 lg:translate-y-0 md:-translate-y-2 translate-y-0 rounded-lg group-hover:scale-105 transition-all duration-500" src="/Assets/5.png" width={700} height={500} alt=""/>
            </div>
          </div>
        </div>
     </div>

     <div className="py-16 bg-[#ECF2F7]">
        <div className="max-w-[1326px] mx-auto">
          <DealoftheDay/>
        </div>
     </div>

      <div className="pt-20 pb-16">
        <div className="max-w-[1320px] mx-auto flex lg:flex-row flex-col space-y-3 lg:space-y-0 lg:space-x-6 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4">
          <div className="xl:w-[416px] lg:w-[516px] space-y-3">
            <div className="h-[352px] border-[3px] border-[#FF3494] rounded-lg overflow-hidden w-full flex items-center *:w-6/12">

              <div className="h-full flex flex-col justify-center w-full pl-10 pr-5 space-y-5">
                <div className="w-full space-y-1">
                  <h1 className=" font-semibold text-lg">
                    Electronics<br/>Gadgets
                  </h1>
                  <div className="border-b w-40 lg:w-full border-[#0989FF]"></div>
                </div>

                <div className="">
                  <ul className="list-disc pl-5 space-y-1 font-semibold text-sm text-gray-600">
                    <li>Micrscope</li>
                    <li>Remote Control</li>
                    <li>Monitor</li>
                    <li>Thermometer</li>
                    <li>Backpack</li>
                    <li>Headphones</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <button className="select-none flex items-center space-x-1 text-gray-800 group text-xs font-semibold">
                    <p>More Products</p>
                    <HiOutlineArrowRight className=" group-hover:translate-x-1 transition-all duration-300 text-lg"/>
                  </button>
                </div>
              </div>

              <div className="flex items-end justify-end h-full">
                <Image className="w-[190px] translate-x-3" src="/Assets/gadget-girl.png" width={500} height={500} alt=""/>
              </div>
            </div>
            
            <div>
              <Slider2/>
            </div>
          </div>

          <div className="xl:w-[904px] lg:w-[804px]">
            <CardsProducts2/>
          </div>
        </div>
     </div>

     <div className="pt-5 pb-10 max-w-[1326px] mx-auto">
       <NewArrivals/>
     </div>

     <div className="pb-20 max-w-[1320px] mx-auto">
       <Discount_Featured_selling Discountproducts={Discountproducts} Featuredproducts={Featuredproducts} Sellingproducts={Sellingproducts}/>
     </div> 

     <div className="pb-20 max-w-[1320px] mx-auto ">
       <LatestNewsandArticles/>
     </div>

     <div className="pb-20 max-w-[1320px] mx-auto">
       <Instagram/>
     </div>

     <div className="">
       <Footerhome/>
     </div>
   </div>
  );
}