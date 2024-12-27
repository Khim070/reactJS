import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const ShopBreadcrumb = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
  return (
    <div>
          {/* <!-- Breadcrumb Section Begin --> */}
          <section class="breadcrumb-option">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="breadcrumb__text">
                              <h4>{isKhmer ? 'ទំនិញ' : 'Shop'}</h4>
                              <div class="breadcrumb__links">
                                  <Link to={`/${currentLanguage}/home`}>{isKhmer ? 'ទំព័រដើម' : 'Home'}</Link>
                                  <span>{isKhmer ? 'ទំនិញ' : 'Shop'}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Breadcrumb Section End --> */}
    </div>
  )
}

export default ShopBreadcrumb