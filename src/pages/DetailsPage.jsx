import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DetailsPage() {

  const {productId} = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      setProduct(response.data)
    }
    getProductDetails()
  })

  return (
    <div className="px-8 py-4">
      <div className="flex gap-52 justify-center">
        <div className='flex items-center'>
          <img
            src={product?.image}
            alt={`Product: ${productId}`}
            className="max-h-[300px] object-contain"
          />
        </div>
        <div className="max-w-[400px] flex flex-col gap-2">
          <div>
            <span className="text-2xl font-semibold">{product?.title}</span>
          </div>
          <div>
            <span className="font-bold text-4xl">Price: ${product?.price}</span>
          </div>
          <div className="text-l">
            <span className="font-semibold">Product Description:</span> <br />
            <span>
              {product?.description}
            </span>
          </div>
          <div className="text-center font-bold">
            <span>Rated {product?.rating?.rate}/5 by {product?.rating?.count} customers</span>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div>
              <button className="px-2 border border-black">-</button>
              <span className="px-2">Quantity (<span className="font-bold">0</span>)</span>
              <button className="px-2 border border-black">+</button>
            </div>
            <div>
              <button className="px-4 py-1 border-2 border-black rounded-md hover:bg-black hover:text-white">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
