import React from 'react'
import { useLocation } from 'react-router-dom'
import team1 from '../img/about/team-1.jpg'
import team2 from '../img/about/team-2.jpg'
import team3 from '../img/about/team-3.jpg'
import team4 from '../img/about/team-4.jpg'

const AboutUsTeam = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
          {/* <!-- Team Section Begin --> */}
          <section class="team spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="section-title">
                              <span>{isKhmer ? 'ក្រុមការងារពួកយើង' : 'Our Team'}</span>
                              <h2>{isKhmer ? 'ជួបជាមួយក្រុមការងារពួកយើង' : 'Meet Our Team'}</h2>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="team__item">
                              <img src={team1} alt=""/>
                                <h4>John Smith</h4>
                                <span>{isKhmer ? 'អ្នករចនាម៉ូតសម្លៀកបំពាក់' : 'Fashion Design'}</span>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="team__item">
                              <img src={team2} alt=""/>
                                  <h4>Christine Wise</h4>
                              <span>{isKhmer ? 'នាយកប្រតិបត្តិ' : 'C.E.O'}</span>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="team__item">
                              <img src={team3} alt=""/>
                                  <h4>Sean Robbins</h4>
                              <span>{isKhmer ? 'អ្នកគ្រប់គ្រង' : 'Manager'}</span>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="team__item">
                              <img src={team4} alt=""/>
                                  <h4>Lucy Myers</h4>
                              <span>{isKhmer ? 'អ្នកដឹកជញ្ចូន' : 'Delivery'}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Team Section End --> */}
    </div>
  )
}

export default AboutUsTeam