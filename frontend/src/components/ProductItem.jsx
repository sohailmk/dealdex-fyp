import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ProductItem = ({id,image,name,price}) => {
    
  const { currency, addToWishlist, removeFromWishlist, wishlist } = useContext(ShopContext);

  const isInWishlist = wishlist.includes(id);

    const handleWishlistClick = (event) => {
      event.preventDefault(); // Prevent default behavior (Link navigation)

      event.stopPropagation(); // Prevent Link navigation
      
      if (isInWishlist) {
        removeFromWishlist(id);
      } else {
        addToWishlist(id);
      }
    };


  return (




        <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer basis-1/3' to={`/product/${id}`}>

      <div className=" px-10">
          <div className="relative">
            <img
              src={image[0]}
              className="w-full h-[60vh] bg-[#E7D3D3]"
              alt="placeholder_image"
            />
            <span             onClick={handleWishlistClick} // Wishlist button handler
 className="absolute top-7 right-7 w-12 h-12 flex justify-center items-center text-white  bg-orange">
              {!isInWishlist ? 
                <img
                className="filter invert brightness-200 w-8"
                src={assets.wishlist_icon}
              /> : <FontAwesomeIcon className='text-3xl' icon={faXmark}/>
              }
            </span>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="flex flex-col gap-2">
              <h4 className="text-3xl font-buenard font-bold">{name}</h4>
              <p className="text-lg">{currency}{price}</p>
            </div>
            <div className="h-full">
              <button className="flex justify-center items-center h-20 w-20  bg-orange py-1 px-2">
                <img className="w-10" src={assets.cart} alt="" />
              </button>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default ProductItem
