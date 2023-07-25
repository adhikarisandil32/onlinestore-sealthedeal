import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import EachProductCard from './EachProductCard'

export default function SearchedContents() {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const products = useSelector(state => state.products)
  let filteredProducts = []

  // if(searchParams.get('s') !== 'any' && searchParams.get('s') !== null){
  //   filteredProducts = products.filter(product => {
  //     return product.title.toLowerCase().includes(searchParams.get('s'))
  //   })
    
  // } else {
  //   filteredProducts = [...products]
  // }
  
  // useEffect(() => {
  //   callAPI({dispatch: dispatch, dispatchAction: pushProductsToState})
  // }, [])
  
  return (
    <div className="px-8 py-4 flex gap-4 flex-wrap justify-center">
      {
        filteredProducts?.map((product, idx) => {
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
  )
}
