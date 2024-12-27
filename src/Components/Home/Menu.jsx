import React from 'react'
import cart from '../img/icon/cart.png'
import heart from '../img/icon/heart.png'
import search from '../img/icon/search.png'

const Menu = () => {
  return (
      <div>
        {/* <!-- Offcanvas Menu Begin --> */}
          <div class="offcanvas-menu-overlay"></div>
          <div class="offcanvas-menu-wrapper">
              <div class="offcanvas__option">
                  <div class="offcanvas__links">
                      <a href="#">Sign in</a>
                      <a href="#">FAQs</a>
                  </div>
                  <div class="offcanvas__top__hover">
                      <span>English <i class="arrow_carrot-down"></i></span>
                      <ul>
                          <li>English</li>
                          <li>Khmer</li>
                      </ul>
                  </div>
              </div>
              <div class="offcanvas__nav__option">
                  <a href="#" class="search-switch"><img src={search} alt="" /></a>
                  <a href="#"><img src={heart} alt="" /></a>
                  <a href="#"><img src={cart} alt="" /> <span>0</span></a>
                  <div class="price">$0.00</div>
              </div>
              <div id="mobile-menu-wrap"></div>
              <div class="offcanvas__text">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
          </div>
    </div>
  )
}

export default Menu