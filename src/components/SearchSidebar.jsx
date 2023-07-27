import React, {useState, useEffect} from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { getProductsCategories } from '../store/categoriesSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function SearchSidebar() {

  // const [categoriesList, setCategoriesList] = useState([])
  // const [showCategoriesList, setShowCategoriesList] = useState(false)
  // const [productCategory, setProductCategory] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  
  const [productName, setProductName] = useState('')
  let productCategory = 'all'

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate({
      search: createSearchParams({
        s: productName,
        category: productCategory ? productCategory : 'all'
      }).toString()
    })
  }

  useEffect(() => {
    dispatch(getProductsCategories())
  }, [])

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <span className="font-semibold">Product Name</span>
        <input
          className="w-full px-2 py-1 bg-transparent outline-none border-2 border-black rounded-md text-sm"
          type="text"
          placeholder="e.g. hard drive"
          value={productName}
          onChange={(e) => {setProductName(e.target.value)}}
        />
      </div>
      <div className="relative">
        <span className="font-semibold">Product Category</span>
        <ul className="px-2">
          <li
            className="w-fit hover:underline cursor-pointer text-sm"
            onClick={(e) => {
              productCategory = 'all'
              handleSubmit(e)
            }}
          >All</li>
          {
            categories.map((category, idx) => {
              return (
                <li
                  key={idx}
                  className="w-fit hover:underline cursor-pointer text-sm"
                  onClick={(e) => {
                    productCategory = category
                    handleSubmit(e)
                  }}
                >{category}</li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <button
          className="py-2 px-4 bg-slate-800 rounded-md text-white text-sm"
          type="submit"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className="px-2">Search</span>
        </button>
      </div>
    </form>
  )
}
