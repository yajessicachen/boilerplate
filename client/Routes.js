import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { me } from './store'
import Login from './components/Login'
import Signup from './components/SignUp'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
/**
 * COMPONENT
 */

const AllRoutes = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => !!state.auth.id)

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            {/*Show these links AFTER you log in */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            {/*will redirect to this errorPage if the page does not exist*/}
          </Routes>
        ) : (
          <Routes>
            {/*Show these links BEFORE you log in */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default AllRoutes
