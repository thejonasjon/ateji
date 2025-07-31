import {BrowserRouter as Router, Routes, Route} from 'react-router'
import { Suspense, lazy } from 'react'
import Home from '../pages/home'
import Category from '../pages/category'
import ProductDetailsPage from '../pages/productDetailsPage'
import Cart from '../pages/cart'
import NotFound from '../pages/notFound'
import Checkout from '../pages/checkout'


export default function AppRoutes(){
    return (
        <Router>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path='' element={''} />
                    <Route index element={<Home />} /> // Index page
                    <Route path='/categories' element={<Category />} />
                    <Route path='/product/:id' element={<ProductDetailsPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='*' element={<NotFound />} /> // 404 page
                </Routes>
            </Suspense>
        </Router>
    )
}