import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const CheckoutBreadcrumb = () => {
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
                              <h4>{isKhmer ? 'គិតលុយ' : 'Check Out'}</h4>
                              <div class="breadcrumb__links">
                                  <Link to={`/${currentLanguage}/home`}>{isKhmer ? 'ទំព័រដើម' : 'Home'}</Link>
                                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទំនិញ' : 'Shop'}</Link>
                                  <span>{isKhmer ? 'គិតលុយ' : 'Check Out'}</span>
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

export default CheckoutBreadcrumb