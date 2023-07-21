import React, {useEffect, useState} from 'react'
import EachProductCard from '../components/EachProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { pushProductsToState } from '../store/slices/productSlice'
import { callAPI } from '../api/callAPI'

export default function HomePage() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    callAPI({dispatch: dispatch, dispatchAction: pushProductsToState})
  }, [])

  return (
    <>
      <div className="min-h-screen px-8 py-4 flex gap-4 flex-wrap justify-center">
        {
          products?.map((product, idx) => {
            return (
              <EachProductCard
                key={idx}
                productId={product.id}
                imgSrc={product.image}
                productTitle={product.title}
                productPrice={product.price}
              />
            )
          })
        }
      </div>
    </>
  )
}
