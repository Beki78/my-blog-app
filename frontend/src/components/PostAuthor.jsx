import React from 'react'
import { Link } from 'react-router-dom'
import chrstian from '../assets/chrstian.jpg'

const PostAuthor = () => {
  return (
    <>
      <Link to={`/posts/users/sdfdsf`}>
      <div className="flex gap-3 mb-2 pt-4">
        <div>
          <img className="w-12 rounded-full" src={chrstian} alt="" />
        </div>
        <div className=''>
          <h5>By: Bereket Getachew</h5>
          <small>Just now</small>
        </div>
      </div>
      </Link>
    </>
  );
}

export default PostAuthor
