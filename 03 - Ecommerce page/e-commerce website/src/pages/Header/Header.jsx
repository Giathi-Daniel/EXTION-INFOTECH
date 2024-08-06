import React from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate()
  return (
    <header>
        <div className='container header__container'>
            <div><img src="" alt="" /></div>
            <ul className="nav__links">
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/sign-in")}>Login</li>
            </ul>
            <li>Login</li>
            <li>Cart</li>
        </div>
    </header>
  )
}

export default Header