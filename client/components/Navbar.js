import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store'
import history from '../history'

const Navbar = () => {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => {
    return !!state.auth.id
  })

  const handleClick = () => {
    dispatch(logout())
    history.push('/login')
  }

  return (
    <div>
      <h1>Project Template</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <a href="/">Home</a>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

export default Navbar
