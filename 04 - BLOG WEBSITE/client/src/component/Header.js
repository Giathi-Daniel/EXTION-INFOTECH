import React from 'react'

const Header = () => {
  return (
    <header>
        <Link className="logo">MyBlog</Link>
        <nav>
          <link to="/login">Login</link>
          <link to="/register">Register</link>
        </nav>
      </header>
  )
}

export default Header