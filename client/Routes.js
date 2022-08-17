import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { me } from './store'
import { Login, Signup } from './components/AuthForm'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
/**
 * COMPONENT
 */

const AllRoutes = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => !!state.auth.id)
  console.log('login?', isLoggedIn)

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            {/*Show these links AFTER you log in */}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        ) : (
          <Routes>
            {/*Show these links BEFORE you log in */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default AllRoutes
