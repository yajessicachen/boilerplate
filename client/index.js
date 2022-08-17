import React from 'react'
import { createRoot } from 'react-dom/client'
import AllRoutes from './Routes'
import store from './store'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Router } from 'react-router-dom'
import history from './history'

const root = createRoot(document.getElementById('app'))
root.render(
  <Provider store={store}>
    <Navbar />
    <AllRoutes />
  </Provider>,
)
