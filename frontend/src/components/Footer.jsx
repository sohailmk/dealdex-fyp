import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

const Footer = () => {
    const {navigate} = useContext(ShopContext);

  return (
    <div className='bg-primary text-surface'>
      <div className='flex flex-col justify-center items-center sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 text-sm py-16 px-6 sm:px-[10vw] font-outfit'>
        <div>
            <h1 className='text-4xl font-bold font-prata tracking-wider mb-6'>DEALDEX</h1>
            <p className='w-full md:w-4/5 text-muted leading-relaxed'>
            We believe in empowering your individuality through fashion. Our collections are crafted with care, blending quality, style, and comfort to bring you timeless pieces. Thank you for choosing us to be a part of your journey in expressing your unique style.            
            </p>
        </div>

        <div>
            <p className='text-lg font-prata mb-5 text-accent tracking-wide'>Useful Links</p>
            <ul className='flex flex-col gap-3 text-muted'>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300' onClick={()=>{navigate('/collection')}}>Men</li>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300' onClick={()=>{navigate('/collection')}}>Women</li>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300' onClick={()=>{navigate('/collection')}}>Kids</li>
            </ul>
        </div>

        <div>
            <p className='text-lg font-prata mb-5 text-accent tracking-wide'>Company</p>
            <ul className='flex flex-col gap-3 text-muted'>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300' onClick={()=>{navigate('/about')}}>About Us</li>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300' onClick={()=>{navigate('/contact')}}>Contact Us</li>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300'>Shipping Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-lg font-prata mb-5 text-accent tracking-wide'>Legal</p>
            <ul className='flex flex-col gap-3 text-muted'>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300'>Privacy Policy</li>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300'>Help Center</li>
                <li className='hover:text-surface cursor-pointer transition-colors duration-300'>FAQ</li>
            </ul>
        </div>
      </div>

        <div className='border-t border-white/10'>
            <p className='py-6 text-sm text-center text-muted tracking-widest uppercase'>© 2024 DEALDEX. All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
