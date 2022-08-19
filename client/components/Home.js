import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/**
 * COMPONENT
 */

const Home = () => {
  const dispatch = useDispatch()

  const firstName = useSelector((state) => {
    return state.auth.firstName
  })

  return (
    <div>
      <h3>Welcome {firstName}!</h3>
    </div>
  )
}

export default Home
