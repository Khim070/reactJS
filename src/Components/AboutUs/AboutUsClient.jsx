import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutUsClient = () => {

    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');

  return (
    <div>
          {/* <!-- Counter Section Begin --> */}
          <section class="counter spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="counter__item">
                              <div class="counter__item__number">
                                  <h2 class="cn_num">102</h2>
                              </div>
                              <span>{isKhmer ? <>អតិថិជន <br/>ពួកយើង</> : <>Our <br /> Clients</>}</span>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="counter__item">
                              <div class="counter__item__number">
                                  <h2 class="cn_num">4</h2>
                              </div>
                              <span>{isKhmer ? <>ប្រភេទទំនិញ <br />សរុបទាំងអស់</> : <>Total <br />Categories</>}</span>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="counter__item">
                              <div class="counter__item__number">
                                  <h2 class="cn_num">102</h2>
                              </div>
                              <span>{isKhmer ? <>ទូទាំងប្រទេស <br />ក្នុងពិភពលោក</> : <>In <br />Country</>}</span>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="counter__item">
                              <div class="counter__item__number">
                                  <h2 class="cn_num">98</h2>
                                  <strong>%</strong>
                              </div>
                              <span>{isKhmer ? <>អតិថិជនពេញចិត្ត <br />ផលិតផលពួកយើង</> : <>Happy <br />Customer</>}</span>
                              <span></span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Counter Section End --> */}
    </div>
  )
}

export default AboutUsClient