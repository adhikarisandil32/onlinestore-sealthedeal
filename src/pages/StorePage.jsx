import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StoreProductCard from '../components/StoreProductCard'
import { removeFromCart } from '../store/cartSlice'

export default function StorePage() {

  const {cart: cartProducts} = useSelector(state => state.cart)
  //cartProducts is an array of objects with two keys, one - product which contains the details of product and two - quantity. Visit cartSlice for more details
  const dispatch = useDispatch()
  
  return (
    <div className="min-h-[250px] px-8 py-4 flex gap-4 flex-wrap justify-center">
      {
        cartProducts?.map((product, idx) => {
          return (
            <div key={idx} className="relative">
              <StoreProductCard
                productId={product.product.id}
                imgSrc={product.product.image}
                productTitle={product.product.title}
                productPrice={product.product.price}
                productQty={product.quantity}
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
