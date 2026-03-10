import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { assets } from '../assets/assets';

const BestSeller = () => {


  return (
    <div className='flex flex-row  gap-14 mt-32'>
      <div className='flex flex-col gap-5 bg-[#EDFAEF] relative flex-1 '>
        <div className='bg-[#40D08A] w-20 h-20 flex items-center justify-center absolute translate-y-[-50%]  ml-6'>
          <img className='w-1/2 ' src={assets.spaceShip}/>
        </div>
        <div className='h-72 flex items-start justify-center flex-col p-6 gap-3'>
          <h2 className='font-buenard text-4xl font-semibold'>Free Shipping</h2>
          <p>Enjoy free shipping on all orders, no minimum purchase required!</p>
        </div>
      </div>

      <div className='flex flex-col gap-5 bg-[#FFF6DA] relative flex-1'>
        <div className='bg-[#FDC20B] w-20 h-20 flex items-center justify-center absolute translate-y-[-50%]  ml-6'>
          <img className='w-1/2 ' src={assets.textWrap}/>
        </div>
        <div className='h-72 flex items-start justify-center flex-col p-6 gap-3'>
          <h2 className='font-buenard text-4xl font-semibold'>14 Days Easy Return</h2>
          <p>Shop with confidence! We offer a 14 day return policy to ensure you’re satisfied with every purchase.</p>
        </div>
      </div>

      <div className='flex flex-col gap-5 bg-[#EFF6FF] relative flex-1'>
        <div className='bg-[#177CFF] w-20 h-20 flex items-center justify-center absolute translate-y-[-50%]  ml-6'>
          <img className='w-1/2' src={assets.customerService}/>
        </div>
        <div className='h-72 flex items-start justify-center flex-col p-6 gap-3'>
          <h2 className='font-buenard text-4xl font-semibold'>24/7 Customer Support</h2>
          <p>Need help? Our 24/7 customer support is always here to assist you.</p>
        </div>
      </div>
      
     
    </div>
  )
}

export default BestSeller
