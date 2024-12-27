import React from 'react'
import { useLocation } from 'react-router-dom';

const ContactSection = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
          {/* <!-- Contact Section Begin --> */}
          <section class="contact spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-md-6">
                          <div class="contact__text">
                              <div class="section-title">
                                  <span>{isKhmer ? 'ព័ត៌មានបន្ថែម' : 'Information'}</span>
                                  <h2>{isKhmer ? 'ទាក់ទងមកពួកយើង' : 'Contact Us'}</h2>
                                    <p>{isKhmer
                                      ? 'ដូចដែលអ្នកអាចរំពឹងពីក្រុមហ៊ុនដែលបានចាប់ផ្ដើមជា high-end interiors contractor យើងផ្តល់នូវការយកចិត្តទុកដាក់យ៉ាងម៉ឺងម៉ាត់ចំពោះអតិថិជនពួកយើង។'
                                        : 'As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.'}
                                    </p>
                              </div>
                              <ul>
                                  <li>
                                      <h4>{isKhmer ? 'កម្ពុជា' : 'Cambodia'}</h4>
                                      <p>{isKhmer ? 'សង្កាត់ ទន្លេបាសាក់ ខណ្ឌ ចំការមន​ រាជធានីភ្នំពេញ' : 'Tonle Basac, DaunPenh, PhnomPenh '}<br />+855 10-202-974</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                          <div class="contact__form">
                              <form action="#">
                                  <div class="row">
                                      <div class="col-lg-6">
                                          <input type="text" placeholder="Name"/>
                                      </div>
                                      <div class="col-lg-6">
                                          <input type="text" placeholder="Email"/>
                                      </div>
                                      <div class="col-lg-12">
                                          <textarea placeholder="Message"></textarea>
                                          <button type="submit" class="site-btn">{isKhmer ? 'ផ្ញើសារមកពួកយើង' : 'Send Message'}</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Contact Section End --> */}
    </div>
  )
}

export default ContactSection