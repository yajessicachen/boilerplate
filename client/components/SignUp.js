import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authenticateSignUp } from '../store'

const SignUp = () => {
  const [passwordError, setPasswordError] = useState('')

  const dispatch = useDispatch()

  const { error } = useSelector((state) => {
    return state.auth
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formName = e.target.name
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value
    if (confirmPassword === password) {
      dispatch(
        authenticateSignUp(firstName, lastName, email, password, formName),
      )
    }
    if (confirmPassword !== password) {
      setPasswordError('Passwords do not match')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} name="signup">
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" />
        </div>
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
          <label htmlFor="confirmPassword">
            <small>Confirm Password</small>
          </label>
          <input name="confirmPassword" type="password" />
        </div>

        <button type="submit">Sign Up</button>

        <p>
          Already Have An Account? <a href="/login">Log In</a>
        </p>
        {error && error.response && <div> {error.response.data} </div>}
        <div style={{ color: 'red' }}>{passwordError}</div>
      </form>
    </div>
  )
}
export default SignUp
