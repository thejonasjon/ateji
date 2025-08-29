import {BrowserRouter as Router, Routes, Route} from 'react-router'
import { Suspense, lazy } from 'react'
import Home from '../pages/home'
import Category from '../pages/category'
import ProductDetailsPage from '../pages/productDetailsPage'
import Cart from '../pages/cart'
import NotFound from '../pages/notFound'
import Checkout from '../pages/checkout'
import AddressFormPage from '../pages/AddUpdateAddress'
import Order from '../pages/order'
import OrderSummary from '../pages/orderSummary'
import OrderSuccessful from '../pages/orderSuccessful'
import Bookmark from '../pages/bookmark'


export default function AppRoutes(){
    return (
        <Router>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path='' element={''} />
                    <Route path='/address' element={<AddressFormPage/>} />
                    <Route index element={<Home />} /> // Index page
                    <Route path='/bookmarks' element={<Bookmark />} />
                    <Route path='/categories' element={<Category />} />
                    <Route path='/product/:id' element={<ProductDetailsPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/summary' element={<OrderSummary />} />
                    <Route path='/successful' element={<OrderSuccessful />} />
                    <Route path='/orders' element={<Order />} />
                    <Route path='*' element={<NotFound />} /> // 404 page
                </Routes>
            </Suspense>
        </Router>
    )
}