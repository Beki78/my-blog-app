import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="bg-gray-600  h-screen text-white p-8 flex flex-col justify-center items-center">
      <Link className="bg-slate-800 rounded  p-2" to="/">
        Go Back Home
      </Link>
      <h1 className='pt-2 text-3xl font-bold'>Page Not Found</h1>
    </section>
  );
}

export default ErrorPage
