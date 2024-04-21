import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <ul className='bg-slate-900 text-white font-light text-sm p-6 pb-12 grid grid-cols-8 pl-12 pr12 gap-0 fixed bottom-4 w-screen'>
        <li className='inline bg-slate-800 p-1 rounded mx-auto hover:bg-slate-600 pl-4 pr-4'><Link to="posts/categories/Agriculture">Agriculture</Link></li>
        <li className='inline bg-slate-800 p-1 rounded mx-auto hover:bg-slate-600 pl-4 pr-4'><Link to="posts/categories/Business">Business</Link></li>
        <li className='inline bg-slate-800 p-1 rounded mx-auto hover:bg-slate-600 pl-4 pr-4'><Link to="posts/categories/Education">Education</Link></li>
        <li className='inline bg-slate-800 p-1 rounded mx-auto hover:bg-slate-600 pl-4 pr-4'><Link to="posts/categories/Entertainment">Entertainment</Link></li>
        <li className='inline bg-slate-800 p-1 rounded mx-auto hover:bg-slate-600 pl-4 pr-4'><Link to="posts/categories/Art">Art</Link></li>
        <li className='inline bg-slate-800 p-1 rounded mx-auto hover:bg-slate-600 pl-4 pr-4'><Link to="posts/categories/Culture">Culture</Link></li>
        <li className='inline bg-slate-800 p-1 rounded mx-auto hover:bg-slate-600 pl-4 pr-4'><Link to="posts/categories/Tech">Tech</Link></li>
        <li className='inline bg-slate-800 p-1 rounded mx-auto hover:bg-slate-600 pl-4 pr-4'><Link to="posts/categories/Uncategorized">Uncategorized</Link></li>

      </ul>
      <div>
        <small className='bg-black text-white m-0 p-2 text-center block fixed bottom-0 w-screen'>All Rights Reserved &copy; Copyright, Bereket Getachew.</small>
      </div>
    </footer>
  )
}

export default Footer
