import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useCart } from '../cartContext'
import search from '../img/icon/search.png'
import iconCart from '../img/icon/cart.png'
import heart from '../img/icon/heart.png'
import aimo_logo from '../img/aimo_logo.png'
import Khmer_flag from '../img/khmerFlag.png'
import English_flag from '../img/englishFlag.png'

const Section = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {cart} = useCart();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const currentPath = location.pathname;
    const totalProductCount = cart.reduce((total, product) => total + product.quantity, 0);
    const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const handleLanguageSwitch = (language) => {
        const pathWithoutLanguage = location.pathname.split('/').slice(2).join('/');
        navigate(`/${language}/${pathWithoutLanguage}`);
    };

  return (
    <div>
          {/* <!-- Header Section Begin --> */}
          <header className="header">
              <div className="header__top">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 col-md-7">
                              <div className="header__top__left">
                                  <p>{isKhmer ? 'ដឹកជញ្ចូនដោយឥតគិតថ្លៃ, ធានាសងប្រាក់គ្រប់វិញក្នុងរយៈពេល ៣០ ថ្ងៃ' : 'Free shipping, 30-day return or refund guarantee.'}</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-5">
                              <div className="header__top__right">
                                  <div className="header__top__links">
                                      <a href="#">{isKhmer ? 'ចុះឈ្មោះ' : 'Sign in'}</a>
                                      <a href="#">{isKhmer ? 'សំណួរខ្លីៗ' : 'FAQs'}</a>
                                  </div>
                                  <div className="header__top__hover">
                                      <span>
                                        {currentLanguage === 'en' ? 'English' : 'Khmer'}
                                          <i className="arrow_carrot-down"></i></span>
                                      <ul style={{width:'120px'}}>
                                          <li onClick={() => handleLanguageSwitch('en')} style={{ display: 'flex', alignItems:'center' }}><img src={English_flag} style={{ width: '30px', height: '30px',marginRight: '10px' }}/>English</li>
                                          <li onClick={() => handleLanguageSwitch('kh')} style={{ display: 'flex', alignItems: 'center' }}><img src={Khmer_flag} style={{ width: '30px', height: '30px', marginRight: '10px' }} />Khmer</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-md-3">
                          <div className="header__logo">
                              <Link to={`/${currentLanguage}/home`}><img src={aimo_logo} alt="" style={{width:'160px', height:'40px'}}/></Link>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <nav className="header__menu mobile-menu">
                              <ul>
                                  <li className={currentPath.includes('/home') ? 'active' : ''}><Link to={`/${currentLanguage}/home`}>{isKhmer ? 'ទំព័រដើម' : 'Home'}</Link></li>
                                  <li className={currentPath.includes('/shop') ? 'active' : ''}><Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទំនិញ' : 'Shop'}</Link></li>
                                  <li className={currentPath.includes('/about') ? 'active' : ''}><Link to="#">{isKhmer ? 'ទំព័រ' : 'Pages'}</Link>
                                      <ul className="dropdown">
                                          <li><Link to={`/${currentLanguage}/about`}>{isKhmer ? 'អំពីពូួកយើង' : 'About Us'}</Link></li>
                                          <li><Link to={`/${currentLanguage}/shop-details`}>{isKhmer ? 'ព័ត៌មានទំនិញ' : 'Shop Details'}</Link></li>
                                          <li><Link to={`/${currentLanguage}/shopping-cart`}>{isKhmer ? 'កន្រ្ដកទំនិញ' : 'Shopping Cart'}</Link></li>
                                          <li><Link to={`/${currentLanguage}/checkout`}>{isKhmer ? 'ទូទាត់ទំនិញ' : 'Check Out'}</Link></li>
                                          <li><Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'កំណត់ហេតុលម្អិត' : 'Blog Details'}</Link></li>
                                      </ul>
                                  </li>
                                  <li className={currentPath.includes('/blog') ? 'active' : ''}><Link to={`/${currentLanguage}/blog`}>{isKhmer ? 'កំណត់ហេតុ' : 'Blog'}</Link></li>
                                  <li className={currentPath.includes('/contact') ? 'active' : ''}><Link to={`/${currentLanguage}/contact`}>{isKhmer ? 'ទំនាក់ទំនង' : 'Contact'}</Link></li>
                              </ul>
                          </nav>
                      </div>
                      <div className="col-lg-3 col-md-3">
                          <div className="header__nav__option">
                              <a href="#" className="search-switch"><img src={search} alt="" /></a>
                              <a href="#"><img src={heart} alt="" /></a>
                              <Link to={`/${currentLanguage}/shopping-cart`}><img src={iconCart} alt="" /> <span>{totalProductCount}</span></Link>
                              <div className="price">${subtotal.toFixed(2)}</div>
                          </div>
                      </div>
                  </div>
                  <div className="canvas__open"><i className="fa fa-bars"></i></div>
              </div>
          </header>
          {/* <!-- Header Section End --> */}
    </div>
  )
}

export default Section