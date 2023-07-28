import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import EachProductCard from './EachProductCard'
import { getSearchedProducts } from '../store/searchSlice'
import { StatusCode } from '../utils/StateStatusThunk'

export default function SearchedContents() {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  
  const {searchedProducts, status} = useSelector(state => state.searchedProducts)

  useEffect(() => {
    dispatch(
      getSearchedProducts(searchParams.get("category") ? searchParams.get("category") : 'all')
    )
  }, [searchParams])

  if(status === StatusCode.LOADING){
    return(
      <p className="min-h-[250px] py-4 text-center font-semibold text-xl">Loading...</p>
    )
  }
  
  return (
    <div className="px-8 py-4 flex gap-4 flex-wrap justify-center">
      {
        searchedProducts?.map((product, idx) => {
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
