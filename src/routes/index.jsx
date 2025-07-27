import {BrowserRouter as Router, Routes, Route} from 'react-router'
import { Suspense, lazy } from 'react'
import Home from '../pages/home'
import Category from '../pages/category'
import ProductDetail from '../pages/productDetail'


export default function AppRoutes(){
    return (
        <Router>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path='' element={''} />
                    <Route index element={<Home />} /> // Index page
                    <Route path='/categories' element={<Category />} />
                    <Route path='/2' element={<ProductDetail />} />
                    <Route path='*' element={''} /> // 404 page
                </Routes>
            </Suspense>
        </Router>
    )
}