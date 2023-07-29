import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../store/detailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { StatusCode } from '../utils/StateStatusThunk'

export default function DetailsPage() {

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const {productId} = useParams()
  const {productDetails: product, status} = useSelector(state => state.productDetails)

  useEffect(() => {
    dispatch(getProductDetails(productId))
  }, [productId])

  if(status === StatusCode.LOADING){
    return (
      <p className="min-h-[250px] py-4 text-center font-semibold text-xl">Loading...</p>
    )
  }

  return (
    <div className="px-8 py-4">
      <div className="flex gap-52 justify-center">
        <div className='flex items-center'>
          <img
            src={product?.image}
            alt={`Product: ${productId}`}
            className="max-h-[300px] max-w-[300px] object-contain"
          />
        </div>
        <div className="max-w-[400px] flex flex-col gap-2">
          <div>
            <span className="text-2xl font-semibold">{product?.title}</span>
          </div>
          <div>
            <span className="font-bold text-4xl">
              Price: ${(product?.price*quantity).toFixed(2)}
            </span>
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
              <button
                className="px-2 py-1 border border-black"
                onClick={() => {
                  if(quantity <= 1){
                    return
                  }
                  setQuantity(prev => prev-1)
                }}
              >-</button>
              <span className="px-2">
                Quantity (<span className="font-bold">{quantity}</span>)
              </span>
              <button
                className="px-2 py-1 border border-black"
                onClick={() => {
                  setQuantity(prev => prev+1)
                }}
              >+</button>
            </div>
            <div>
              <button
                className="px-4 py-1 border-2 border-black rounded-md hover:bg-black hover:text-white"
                onClick={() => {
                  dispatch(addToCart({product, quantity}))
                }}
              >Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
