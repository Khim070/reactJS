import React from 'react'
import {useLocation} from 'react-router-dom'

const BlogDetailHero = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
          {/* <!-- Blog Details Hero Begin --> */}
          <section class="blog-hero spad">
              <div class="container">
                  <div class="row d-flex justify-content-center">
                      <div class="col-lg-9 text-center">
                          <div class="blog__hero__text">
                              <h2>{isKhmer ? 'តើអ្នកជាម្នាក់ក្នុងចំណោមម្ចាស់ iPhone រាប់ពាន់នាក់ដែលមិនដឹងអ្វីទេឬ?' : 'Are you one of the thousands of Iphone owners who has no idea'}</h2>
                              <ul>
                                  <li>{isKhmer ? 'ដោយ Deercreative' : 'By Deercreative'}</li>
                                  <li>{isKhmer ? 'ខែកុម្ភៈ ថ្ងៃទី២១, ឆ្នាំ២០១៩' : 'February 21, 2019'}</li>
                                  <li>{isKhmer ? 'បញ្ចេញមតិចំនួន​ ៨ នាក់' : '8 Comments'}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Blog Details Hero End --> */}
    </div>
  )
}

export default BlogDetailHero