import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible] = useState(false);

    const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

  return (
    <div className='flex items-center justify-between py-6 font-outfit bg-background/90 backdrop-blur-md sticky top-0 z-[50] border-b border-gray-200/50'>
      
      <Link to='/'><h1 className='font-prata text-3xl font-bold tracking-wider text-primary'>DEALDEX</h1></Link>

      <ul className='hidden lg:flex gap-8 text-sm font-medium text-primary tracking-wide'>
        
        <NavLink to='/collection' className='group flex flex-col items-center gap-1 overflow-hidden relative'>
            <p className='group-hover:text-accent transition-colors duration-300'>Men</p>
            <hr className='w-full border-none h-[1.5px] bg-accent absolute bottom-0 -left-full group-hover:left-0 transition-all duration-300' />
        </NavLink>
        <NavLink to='/collection' className='group flex flex-col items-center gap-1 overflow-hidden relative'>
            <p className='group-hover:text-accent transition-colors duration-300'>Women</p>
            <hr className='w-full border-none h-[1.5px] bg-accent absolute bottom-0 -left-full group-hover:left-0 transition-all duration-300' />
        </NavLink>
        <NavLink to='/collection' className='group flex flex-col items-center gap-1 overflow-hidden relative'>
            <p className='group-hover:text-accent transition-colors duration-300'>Accessories</p>
            <hr className='w-full border-none h-[1.5px] bg-accent absolute bottom-0 -left-full group-hover:left-0 transition-all duration-300' />
        </NavLink>
        <NavLink to='/collection' className='group flex flex-col items-center gap-1 overflow-hidden relative'>
            <p className='group-hover:text-accent transition-colors duration-300'>New Arrivals</p>
            <hr className='w-full border-none h-[1.5px] bg-accent absolute bottom-0 -left-full group-hover:left-0 transition-all duration-300' />
        </NavLink>
        <NavLink to='/collection' className='group flex flex-col items-center gap-1 overflow-hidden relative'>
            <p className='group-hover:text-accent transition-colors duration-300'>Sale</p>
            <hr className='w-full border-none h-[1.5px] bg-accent absolute bottom-0 -left-full group-hover:left-0 transition-all duration-300' />
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
        <div className='hidden sm:flex items-center gap-2 border-b border-gray-300 pb-1 mr-4 focus-within:border-primary transition-colors'>
            <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-4 cursor-pointer opacity-70 hover:opacity-100 transition-opacity' alt="" />
            <input 
              type="text" 
              placeholder="Search..." 
              className='bg-transparent outline-none text-sm w-32 focus:w-48 transition-all duration-500'
              onClick={()=> { setShowSearch(true); navigate('/collection') }}
            />
        </div>
        <Link to='/cart' className='relative group'>
            <img src={assets.cart_icon} className='w-5 min-w-5 group-hover:scale-110 transition-transform duration-300' alt="" />
            <p className='absolute right-[-6px] top-[-6px] w-4 text-center leading-4 bg-accent text-white aspect-square rounded-full text-[9px]'>{getCartCount()}</p>
        </Link> 
            
          
            
            <Link to='/wishlist' className='relative group'>
                <img src={assets.wishlist_icon} className='w-6 min-w-6 group-hover:scale-110 transition-transform duration-300' alt="" />
            </Link> 
            <div className='group relative'>
                <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer group-hover:scale-110 transition-transform duration-300' src={assets.profile_icon} alt="" />
                {/* Dropdown Menu */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 glass rounded-xl text-primary text-sm shadow-xl'>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-accent transition-colors'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-accent transition-colors'>Logout</p>
                    </div>
                </div>}
            </div> 
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer lg:hidden' alt="" /> 
      </div>

        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
        </div>

    </div>
  )
}

export default Navbar
