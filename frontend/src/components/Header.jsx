import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="">
      <div className="p-5  bg-slate-400 flex items-center justify-between font-mono fixed top-0 w-full bg-opacity-95">
        <Link to="/" className="text-2xl ml-12">
          MY BLOG
        </Link>
        <ul className="flex content-center font-mono  lg:gap-16 md:gap-12  ">
          <li className="hover:text-gray-600">
            <Link to="/profile/asdji">Bereket Getachew</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/create">Create post</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/authors">Authors</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/logout">Logout</Link>
          </li>
          <button>
            <IoCloseSharp className="sm:invisible visible" />
            {/* <FaBars /> */}
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Header
