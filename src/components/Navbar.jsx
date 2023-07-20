import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faStore, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [userProfileFlag, setUserProfileFlag] = useState(false)

  const changeUserProfileFlag = () => {
    setUserProfileFlag(!userProfileFlag)
  }

  return (
    <div className="px-2 py-2 bg-slate-100 sticky top-0">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="px-2 py-1 w-fit rounded-lg cursor-pointer border-2 border-black">
          <Link to="/">
            <img
              className="h-[50px]"
              src="/static/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="w-full md:w-fit text-center border-2 border-black rounded-md">
            <Link
              to="/"
              className="font-bold block md:inline-block py-1 px-4 hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faHouse} />
              <span className="px-2">Home</span>
            </Link>
          </div>
          <div className="w-full md:w-fit text-center border-2 border-black rounded-md">
            <Link
              to="/search"
              className="font-bold block md:inline-block py-1 px-4 hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="px-2">Search</span>
            </Link>
          </div>
          <div className="w-full md:w-fit text-center border-2 border-black rounded-md">
            <Link
              to="/store"
              className="font-bold block md:inline-block py-1 px-4 hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faStore} />
              <span className="px-2">Store</span>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center">
          <div
            className="relative px-4 py-2 border-2 border-black cursor-pointer rounded-lg ml-auto"
            onClick={changeUserProfileFlag}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="px-2">Hello, John</span>
            {
              userProfileFlag && <div className="absolute top-full -right-px w-[150px] shadow-lg bg-white rounded-lg">
                <span
                  className="block w-full px-4 py-1 hover:bg-black hover:text-white"
                >Profile</span>
                <span
                  className="block w-full px-4 py-1 hover:bg-black hover:text-white"
                >Settings</span>
                <span
                  className="block w-full px-4 py-1 hover:bg-black hover:text-white font-semibold"
                >Log Out</span>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
