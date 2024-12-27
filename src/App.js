import Home from './Pages/home'
import About from './Pages/about'
import BlogDetail from './Pages/blogDetail'
import Blog from './Pages/blog'
import Checkout from './Pages/checkout'
import Contact from './Pages/contact'
import ShopDetails from './Pages/shopDetail'
import Shop from './Pages/shop'
import ShoppingCart from './Pages/shoppingCart'
import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import {CartProvider} from './Components/cartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/en/home"/>}></Route>
          {/* English */}
          <Route path="/en/home" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/blog-details" element={<BlogDetail />} />
          <Route path="/en/blog" element={<Blog />} />
          <Route path="/en/checkout" element={<Checkout />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/shop-details" element={<ShopDetails />} />
          <Route path="/en/shop" element={<Shop />} />
          <Route path="/en/shopping-cart" element={<ShoppingCart />} />
          {/* Khmer */}
          <Route path="/kh/home" element={<Home />} />
          <Route path="/kh/about" element={<About />} />
          <Route path="/kh/blog-details" element={<BlogDetail />} />
          <Route path="/kh/blog" element={<Blog />} />
          <Route path="/kh/checkout" element={<Checkout />} />
          <Route path="/kh/contact" element={<Contact />} />
          <Route path="/kh/shop-details" element={<ShopDetails />} />
          <Route path="/kh/shop" element={<Shop />} />
          <Route path="/kh/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
