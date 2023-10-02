import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='header'>
      <nav className='container'>
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
           <li>About</li>
          </Link>
          <Link href={"/product"}>
           <li >Product</li>
          </Link> 
          <Link href={"/user"}>
            <li>User</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header