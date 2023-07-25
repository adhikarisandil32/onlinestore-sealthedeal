import React, {useEffect} from 'react'
import EachProductCard from '../components/EachProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFromAPI } from '../store/productsSlice'
import { StatusCode } from '../utils/StateStatusThunk'

export default function HomePage() {

  const dispatch = useDispatch()
  const {products, status} = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProductsFromAPI())
  }, [])

  if(status === StatusCode.LOADING){
    return(
      <p className="min-h-[250px] py-4 text-center font-semibold text-xl">Loading...</p>
    )
  } else if(status === StatusCode.ERROR){
    return(
      <div className="min-h-[250px] flex items-center bg-red-800">
        <p className="w-full py-4 text-center font-semibold text-xl text-white">
          <span className="text-6xl">
            😟
          </span> <br />
          <span>
            Something went wrong. <br /> Please try again!!!
          </span>
        </p>
      </div>
    )
  }

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
