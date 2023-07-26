import React from 'react'
import MyImage from './MyImage'
import { Link } from 'react-router-dom'

export default function EachProductCard({imgSrc, productTitle, productPrice, productId}) {

  return(
    <Link
      to={`/details/${productId}`}
    >
      <div className="h-full px-2 py-2 border-2 border-black w-[200px] shadow-xl cursor-pointer flex flex-col justify-between">
        <div>
          <MyImage src={imgSrc}/>
          <div className="text-center">
            <span className="text-sm font-semibold line-clamp-2">{productTitle}</span>
          </div>
        </div>
        <div className="text-center">
          <span className="text-sm font-bold">Price: ${productPrice}</span>
        </div>
      </div>
    </Link>
  )
}
