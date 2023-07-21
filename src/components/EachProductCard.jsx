import React, {useState} from 'react'
import MyImage from './MyImage'
import { Link } from 'react-router-dom'

export default function EachProductCard({imgSrc, productTitle, productPrice, productId}) {

  return (
    <div
      className="px-2 py-2 border-2 border-black w-[200px] shadow-xl cursor-pointer"
    >
      <Link
        to={`/details/${productId}`}
      >
        <div className="h-full">
          <MyImage src={imgSrc}/>
          <div className="text-center">
            <span className="text-sm font-semibold line-clamp-2">{productTitle}</span>
          </div>
          <div className="text-center">
            <span className="text-sm font-bold">Price: ${productPrice}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
