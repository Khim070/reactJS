import React from 'react'
import { useLocation } from 'react-router-dom';
import AboutUsImage from '../img/about/about-us.jpg'

const AboutUs = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
  return (
    <div>
          {/* <!-- About Section Begin --> */}
          <section class="about spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="about__pic">
                              <img src={AboutUsImage} alt=""/>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="about__item">
                              <h4>{isKhmer ? 'តើពួកយើងជានរណា​ ?' : 'Who We Are ?'}</h4>
                                <p>{isKhmer
                                  ? 'ពួកយើងជា e-commerce platform ដែលមានបំណងផ្តល់ផលិតផលមានគុណភាពខ្ពស់ និងបទពិសោធន៍ទិញឥវ៉ាន់ដែលងាយស្រួលសម្រាប់អតិថិជនគ្រប់គ្នា ។'
                                  : "We are an e-commerce platform committed to providing high-quality products and a seamless shopping experience for all our customers."}
                                </p>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="about__item">
                              <h4>{isKhmer ? 'តើពួកយើងធ្វើអ្វី ?' : 'What We Do ?'}</h4>
                              <p>{isKhmer
                                  ? 'ពូកយើងផ្តល់សេវាកម្មទិញលក់ផលិតផលដែលមានគុណភាពល្អបំផុត និងចែកចាយយ៉ាងឆាប់រហ័ស ដើម្បីបំពេញតម្រូវការរបស់អតិថិជន ។'
                                  : "We provide a platform to buy and sell the best quality products with fast delivery, ensuring customer satisfaction and convenience."}
                              </p>                         </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="about__item">
                              <h4>{isKhmer ? 'ហេតុអ្វីជ្រើសរើសពួកយើង​ ?' : 'Why Choose Us ?'}</h4>
                              <p>{isKhmer
                                  ? 'យើងផ្តល់ផលិតផលមានគុណភាព សេវាដឹកជញ្ជូនលឿន និងសេវាកម្មអតិថិជនល្អបំផុត ។'
                                  : 'We offer quality products, fast delivery, and excellent customer service.'}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- About Section End --> */}
    </div>
  )
}

export default AboutUs