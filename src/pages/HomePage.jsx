import React, {useEffect, useState} from 'react'
import EachProductCard from '../components/EachProductCard'
import axios from 'axios'

export default function HomePage() {

  const [products, setProducts] = useState()

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products")
      setProducts([...response.data])
    }
    getProducts()
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
