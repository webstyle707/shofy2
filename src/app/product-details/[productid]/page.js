"use client";
import React, { useEffect, useState } from 'react'
import HeaderDetails from '@/components/HeaderDetails';
import { Products } from '@/data/Products';
import ProductsDetails from '@/components/Products-Details/ProductsDetails';
import RelateProducts from '@/components/Products-Details/RelateProducts';
function Page({params}) {
  const id = params.productid;
  const [Card,setCard] = useState([])
  const [RelatedProducts,setRelatedProducts] = useState([])
  const handleSetCard = ()=>{
    const card = Products.filter(e=>e.id === id);
    setCard(card)
  }
  const handleRelatedProducts = ()=>{
    const relatedProducts = Products.filter(e=>e.categoryname === Card[0]?.categoryname && e.id !== Card[0]?.id);
    setRelatedProducts(relatedProducts)
  }
  useEffect(()=>{
    handleSetCard();
  },[id]);

  useEffect(()=>{
    handleRelatedProducts();
  },[Card]);



  const [Index,setIndex] = useState(0);
  let [Quantity,setQuantity] = useState(1);
  const handleIndex = (val) => {
      setIndex(val)
  } 
  const [isShowMoreDiscription,setShowMoreDiscription] = useState(false)
  const handleShowMoreDiscription = ()=>{
      setShowMoreDiscription(!isShowMoreDiscription)
  }
  const handleDecrease = ()=>{
      if(Quantity!==1){
          setQuantity(p=>p-1) 
      }
  }
  const handleIncrease = ()=>{
      setQuantity(p=>p+1) 
  }

  return (
    <div>
      <div>
        <HeaderDetails/>
      </div>
      {/* ==============> */}

      <div className='mx-auto max-w-[1320px] 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4 py-12'>
          <ProductsDetails Card={Card} Index={Index} Quantity={Quantity} handleDecrease={handleDecrease} handleIncrease={handleIncrease} handleIndex={handleIndex} handleShowMoreDiscription={handleShowMoreDiscription} isShowMoreDiscription={isShowMoreDiscription} />
      </div>
        <div className='border-t py-12'>
          <div className='mx-auto max-w-[1320px] 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4 space-y-10'>
            <div className='text-center space-y-0.5'>
              <p className=' text-[#0989FF]'>Next day Products</p>
              <div className=' font-semibold text-4xl text-gray-800'>Related Products</div>
            </div>
             
            <div>
               <RelateProducts RelatedProducts={RelatedProducts}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page