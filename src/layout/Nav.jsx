import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-blue-500 text-xl p-5 text-center  bg-slate-900'> 
        <Link to={'/'} className='p-2 hover:border-b-2 hover:border-white hover:text-blue-700  '>Home</Link>
        <Link to={'/AddBook'} className='p-2 hover:border-b-2 hover:border-white hover:text-blue-700  '>Add-book</Link>
        <Link to={'/Showbook'} className='p-2 hover:border-b-2 hover:border-white hover:text-blue-700  '>Show-book</Link>
    </div>
  )
}

export default Nav