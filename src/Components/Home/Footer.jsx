import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import payment from '../img/payment.png'
import aimo_logo from '../img/aimo_logo.png'

const Footer = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
  return (
    <div>
          {/* <!-- Footer Section Begin --> */}
          <footer class="">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="footer__about">
                              <div class="footer__logo">
                                  <Link to="/home"><img src={aimo_logo} alt="" /></Link>
                              </div>
                              <p style={{ color: '#4A4947' }}>{isKhmer ? 'អតិថិជនគឺជាបេះដូងនៃអាជីវកម្មតែមួយគត់របស់ពួកយើង រួមបញ្ចូលការរចនាគេហទំព័រ។' : 'The customer is at the heart of our unique business model, which includes design.'}</p>
                              <a ><img src={payment} alt="" /></a>
                          </div>
                      </div>
                      <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                          <div class="footer__widget">
                              <h6 style={{ color: '#173B45' }}>{isKhmer ? 'ប្រភេទទំនិញ' : 'Categories'}</h6>
                              <ul>
                                  <li><a href={`/${currentLanguage}/shop`} style={{ color: '#4A4947' }}>{isKhmer ? 'គ្រឿងអេឡិចត្រូនិច' : 'Electronics'}</a></li>
                                  <li><a href={`/${currentLanguage}/shop`} style={{ color: '#4A4947' }}>{isKhmer ? 'គ្រឿងអលង្ការ' : 'Jewelry'}</a></li>
                                  <li><a href={`/${currentLanguage}/shop`} style={{ color: '#4A4947' }}>{isKhmer ? 'សម្លៀកបំពាក់បុរស' : "Men's clothing"}</a></li>
                                  <li><a href={`/${currentLanguage}/shop`} style={{ color: '#4A4947' }}>{isKhmer ? 'សម្លៀកបំពាក់នារី' : "Women's clothing"}</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-2 col-md-3 col-sm-6">
                          <div class="footer__widget">
                              <h6 style={{ color: '#173B45' }}>{isKhmer ? 'ការទិញទំនិញ' : 'Shopping'}</h6>
                              <ul>
                                  <li><Link to={`/${currentLanguage}/shop`} style={{ color: '#4A4947' }}>{isKhmer ? 'ទំនិញ' : 'Shop'}</Link></li>
                                  <li><Link to={`/${currentLanguage}/contact`} style={{ color: '#4A4947' }}>{isKhmer ? 'ទំនាក់ទំនង' : 'Contact'}</Link></li>
                                  <li><Link to={`/${currentLanguage}/about`} style={{ color: '#4A4947' }}>{isKhmer ? 'អំពីពូួកយើង' : 'About Us'}</Link></li>
                                  <li><Link to={`/${currentLanguage}/blog`} style={{ color: '#4A4947' }}>{isKhmer ? 'កំណត់ហេតុ' : 'Blog'}</Link></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                          <div class="footer__widget">
                              <h6 style={{ color: '#173B45' }}>{isKhmer ? 'សារព័ត៌មាន' : 'NewLetter'}</h6>
                              <div class="footer__newslatter">
                                  <p style={{ color: '#4A4947' }}>{isKhmer ? 'ឱកាសក្លាយជាមនុស្សដំបូងគេដែលដឹងអំពីការមកដល់ថ្មីៗទាក់ទងនឹងប្រូម៉ូសិននានា!' : 'Be the first to know about new arrivals, look books, sales & promos!'}</p>
                                  <form action="#" style={{ borderBottom: '1px solid #4A4947' }}>
                                      <input type="text" style={{ color: '#4A4947' }} placeholder={isKhmer ? 'email របស់អ្នក' : 'Your email'} />
                                      <button type="submit"><span class="icon_mail_alt" style={{ color: '#4A4947' }}></span></button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12 text-center">
                          <div class="footer__copyright__text">
                              <p style={{ color: '#4A4947' }}>{isKhmer ? `Copyright © ${new Date().getFullYear()}. រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ LEANG Vakhim` : `Copyright © ${new Date().getFullYear()}. ALL rights reserved by LEANG Vakhim`}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
          {/* <!-- Footer Section End --> */}
    </div>
  )
}

export default Footer