import React from 'react'
import { useLocation } from 'react-router-dom'
import client1 from '../img/clients/client-1.png'
import client2 from '../img/clients/client-2.png'
import client3 from '../img/clients/client-3.png'
import client4 from '../img/clients/client-4.png'
import client5 from '../img/clients/client-5.png'
import client6 from '../img/clients/client-6.png'
import client7 from '../img/clients/client-7.png'
import client8 from '../img/clients/client-8.png'

const AboutUsPartnerClient = () => {

    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');

  return (
    <div>
          {/* <!-- Client Section Begin --> */}
          <section class="clients spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="section-title">
                              <span>{isKhmer ? 'ដៃគូសហការរបស់ពួកយើង' : 'Partner'}</span>
                              <h2>{isKhmer ? 'អតិថិជនដែលសប្បាយរីករាយ' : 'Happy Clients'}</h2>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                          <a href="#" class="client__item"><img src={client1} alt=""/></a>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                          <a href="#" class="client__item"><img src={client2} alt=""/></a>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                          <a href="#" class="client__item"><img src={client3} alt=""/></a>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                          <a href="#" class="client__item"><img src={client4} alt=""/></a>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                          <a href="#" class="client__item"><img src={client5} alt=""/></a>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                          <a href="#" class="client__item"><img src={client6} alt=""/></a>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                          <a href="#" class="client__item"><img src={client7} alt=""/></a>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                          <a href="#" class="client__item"><img src={client8} alt=""/></a>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Client Section End --> */}
    </div>
  )
}

export default AboutUsPartnerClient