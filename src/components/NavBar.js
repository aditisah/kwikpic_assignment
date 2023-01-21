import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar=()=>{
  return(
     <nav className='nav'>
         <ul>
          <li>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/create-order">Create Order</Link>
            <Link className='link' to="/order-invoice">show Order Invoice</Link>
          
            
          </li>
        </ul>
      </nav>
  )
}
export default NavBar;