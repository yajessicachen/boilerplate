import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from '../store'

const Login = () => {
  const dispatch = useDispatch()

  const { error } = useSelector((state) => {
    return state.auth
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const formName = event.target.name
    const email = event.target.email.value
    const password = event.target.password.value
    dispatch(authenticate(email, password, formName))
  }
  return (
    <div>
      <form onSubmit={handleSubmit} name="login">
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit" href="/">
            Log In
          </button>
        </div>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}
export default Login
