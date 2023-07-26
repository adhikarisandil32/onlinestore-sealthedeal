import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EachProductCard from '../components/EachProductCard'
import { removeFromCart } from '../store/cartSlice'

export default function StorePage() {

  const {cart: cartProducts} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  return (
    <div className="min-h-[250px] px-8 py-4 flex gap-4 flex-wrap justify-center">
      {
        cartProducts?.map((product, idx) => {
          return (
            <div key={idx} className="relative">
              <EachProductCard
                productId={product.id}
                imgSrc={product.image}
                productTitle={product.title}
                productPrice={product.price}
              />
              <div
                className="absolute top-1 right-1 bg-white cursor-pointer"
                onClick={() => {
                  dispatch(removeFromCart(idx))
                }}
              >
                <img className="h-5 w-5" src="/static/cross.jpg"/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
