import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import ProtectedRoute from './ProtectedRoute'


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={ <Navigate to='/home' /> } />
        <Route path='home' element={ <Home/> } />
        <Route path='products' element={ <Products/> } />
        <Route path='products/:id' element={ <ProductDetails/> } />
        <Route path='cart' element={ <Cart/> } />
        <Route 
          path='checkout' 
          element={ 
            <ProtectedRoute>
                <Checkout/>
            </ProtectedRoute> } 
        />
        <Route path='login' element={ <Login/> } />
        <Route path='signup' element={ <Signup/> } />
    </Routes>
  )
}

export default Router