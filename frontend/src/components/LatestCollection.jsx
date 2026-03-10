import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const LatestCollection = () => {
  const {navigate} = useContext(ShopContext);
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-40 flex flex-col gap-10 justify-start items-center">
      <h1 className="text-5xl font-bold font-buenard mb-10">
        New Collection of Dealdex
      </h1>

      <div className="flex flex-row gap-10 items-center justify-around">
        <div className="w-[20vw] h-[50vh] bg-[#F8D0D2] rounded-t-full overflow-hidden flex items-center justify-center">
          <img
            src={assets.womanModel}
            className="w-auto h-full max-w-full max-h-full"
            alt="Woman Model"
          />
        </div>
        <div className="w-2/4 flex flex-col gap-5">
          <h2 className="text-4xl font-buenard font-bold text-right mr-10">
            Women’s Hot Collection
          </h2>
          <p>
            Featuring the latest trends and must-have pieces, this collection is
            designed to make you stand out. Elevate your style with bold, chic,
            and effortlessly glamorous outfits.
          </p>
          <a onClick={()=>{navigate('/collection')}} className="flex justify-center align-center gap-3  py-2 w-48 rounded-full text-orange text-lg font-bold ml-auto mr-10 cursor-pointer bg-gradient-to-r from-[#FF6B0130] to-white">
            Explore Now
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-10 items-center justify-around">
      <div className="w-[20vw] h-[50vh] bg-[#F8D0D2] rounded-t-full overflow-hidden flex items-center justify-center">
          <img
            src={assets.kidsModel}
            className="w-full h-auto max-w-full max-h-full"
            alt="Woman Model"
          />
        </div>
        <div className="w-2/4 flex flex-col gap-5">
          <h2 className="text-4xl font-buenard font-bold text-left ml-10">
            Kid's Hot Collection
          </h2>
          <p>
            Whether you're looking for a classic or a trendy vibe, we've got the
            perfect outfits to match your look. Find your new favourite and step
            out with confidence.
          </p>
          <a onClick={()=>{navigate('/collection')}} className="flex justify-center align-center gap-3  py-2 w-48 rounded-full text-orange text-lg font-bold mr-auto ml-10 cursor-pointer bg-gradient-to-r from-[#FF6B0130] to-white">
            Explore Now{" "}
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-10 items-center justify-around">
      <div className="w-[20vw] h-[50vh] bg-[#F8D0D2] rounded-t-full overflow-hidden flex items-center justify-center">
          <img
            src={assets.manModel}
            className="w-auto h-full max-w-full max-h-full"
            alt="Woman Model"
          />
        </div>
        <div className="w-2/4 flex flex-col gap-5">
          <h2 className="text-4xl font-buenard font-bold text-right mr-10">
            Men’s Hot Collection
          </h2>
          <p>
            From casual essentials to bold statement pieces, we've curated a
            collection that keeps you looking sharp and stylish for any
            occasion.
          </p>
          <a onClick={()=>{navigate('/collection')}} className="flex justify-center align-center gap-3  py-2 w-48 rounded-full text-orange text-lg font-bold ml-auto mr-10 cursor-pointer bg-gradient-to-r from-[#FF6B0130] to-white">
            Explore Now{" "}
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
