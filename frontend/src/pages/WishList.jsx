import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import ProductItem from '../components/ProductItem';

const WishList = () => {

  const { products, currency, cartItems, updateQuantity, navigate, getWishlistItems, addToCart, removeFromWishlist } = useContext(ShopContext);
  const wishlistItems = getWishlistItems();


  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products])

  return (
    <div className='border-t pt-14'>

      <div className=' text-2xl mb-3'>
      <h2 className='font-buenard text-5xl font-semibold'>WISHLIST</h2>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6'>
      {
          wishlistItems.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))
        }
      </div>

      

    </div>
  )
}

export default WishList
