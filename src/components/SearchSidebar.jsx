import React, {useState} from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchSidebar() {

  // const [categoriesList, setCategoriesList] = useState([])
  // const [showCategoriesList, setShowCategoriesList] = useState(false)
  // const [productCategory, setProductCategory] = useState('')
  const [productName, setProductName] = useState('')
  const navigate = useNavigate()
  /* useEffect(() => {
    const getCategoriesList = async () => {
      const response = await axios.get("https://fakestoreapi.com/products/categories")
      setCategoriesList([...response.data])
    }
    getCategoriesList()
  }, []) */

  return (
    <div className="flex flex-col gap-4">
      <div>
        <span>Product Name</span>
        <input
          className="w-full px-2 py-1 bg-transparent outline-none border-2 border-black rounded-md"
          type="text"
          placeholder="e.g. Hard Drive"
          value={productName}
          onChange={(e) => {setProductName(e.target.value)}}
        />
      </div>
      {/* <div className="relative">
        <span>Product Category</span>
        <input
          className="w-full px-2 py-1 bg-transparent outline-none border-2 border-black rounded-md"
          type="text"
          placeholder="e.g. electronics"
          value={productCategory}
          onChange={() => {}}
          onClick={() => {setShowCategoriesList(true)}}
        />
        <div className="absolute top-full w-full max-h-[100px] overflow-auto bg-white">
          {
            showCategoriesList &&
            categoriesList?.map((each, idx) => {
              return (
                <div
                  key={idx}
                  className="px-2 py-1 hover:bg-black hover:text-white cursor-pointer"
                  onClick={(e) => {
                    setProductCategory(e.target.innerText)
                    setShowCategoriesList(false)
                  }}
                >
                  {each}
                </div>
              )
            })
          }
        </div>
      </div> */}
      <div>
        <button
          className="py-2 px-4 bg-slate-800 rounded-md text-white"
          onClick={() => {
            navigate({
              pathname: "/search",
              search: createSearchParams({
                s: productName ? productName : 'any'
              }).toString()
            })
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className="px-2">Search</span>
        </button>
      </div>
    </div>
  )
}
