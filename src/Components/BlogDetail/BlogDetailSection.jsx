import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogDetail from '../img/blog/details/blog-details.jpg'
import BlogAuthor from '../img/blog/details/blog-author.jpg'

const BlogDetailSection = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
          {/* <!-- Blog Details Section Begin --> */}
          <section class="blog-details spad">
              <div class="container">
                  <div class="row d-flex justify-content-center">
                      <div class="col-lg-12">
                          <div class="blog__details__pic">
                              <img src={BlogDetail} alt=""/>
                          </div>
                      </div>
                      <div class="col-lg-8">
                          <div class="blog__details__content">
                              <div class="blog__details__share">
                                  <span>{isKhmer ? 'ចែករម្លែកបន្ដ' : 'share'}</span>
                                  <ul>
                                      <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                      <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                      <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                  </ul>
                              </div>
                              <div class="blog__details__text">
                                  <p>{isKhmer
                                        ? `Hydroderm គឺជា​គ្រីមប្រឆាំងការចាស់របស់ស្បែកដែលមានការពេញចិត្តខ្លាំងបំផុត។ សេរ៉ូមនេះទប់ស្កាត់ការបង្ហាញសញ្ញាចាស់របស់ស្បែកឆាប់ពេក ហើយរក្សាស្បែកឱ្យនៅក្មេង តឹងនឹងមានសុខភាពល្អ។ វាកាត់បន្ថយស្នាមជ្រួញ និងការរលុងរបស់ស្បែក។ គ្រីមនេះផ្តល់សារធាតុចិញ្ចឹមដល់ស្បែក និងយកមកវិញនូវស្រស់ស្អាតដែលបានបាត់បង់ក្នុងរយៈពេលសែនរវល់ជាច្រើនឆ្នាំ។`
                                        : `Hydroderm is the highly desired anti-aging cream on the block. This serum restricts the occurrence of early aging sings on the skin and keeps the skin younger, tighter and healthier. It reduces the wrinkles and loosening of skin. This cream nourishes the skin and brings back the glow that had lost in the run of hectic years.`}
                                    </p>
                                  <p>{isKhmer
                                        ? `សារធាតុសំខាន់បំផុតដែលធ្វើឱ្យ Hydroderm មានប្រសិទ្ធភាពខ្លាំងណាស់គឺ Vyo-Serum ដែលជាផលិតផលពីប្រូតេអ៊ីនធម្មជាតិដែលបានជ្រើសរើស។ សារធាតុបញ្ចូលនេះធ្វើការជាអ្នកចលនា ដើម្បីបង្កើតស្រស់ស្អាតយុវវ័យដ៏ធម្មជាតិលើស្បែក។ វាធ្វើឱ្យស្បែកតឹងឡើង និងផ្តល់សំណើមដល់ស្បែក។ សារធាតុសំខាន់ផ្សេងទៀតដែលធ្វើឱ្យ Hydroderm មានប្រសិទ្ធភាពនោះគឺ “Marine Collagen” ដែលនៅជាមួយ Vyo-Serum ជួយផ្ដល់សុភមង្គលដល់ស្បែក។`
                                        : `The most essential ingredient that makes hydroderm so effective is Vyo-Serum, which is a product of natural selected proteins. This concentrate works actively in bringing about the natural youthful glow of the skin. It tightens the skin along with its moisturizing effect on the skin. The other important ingredient, making hydroderm so effective is “marine collagen” which along with Vyo-Serum helps revitalize the skin.`}</p>
                              </div>
                              <div class="blog__details__quote">
                                  <i class="fa fa-quote-left"></i>
                                    <p>{isKhmer
                                      ? `“នៅពេលរចនាពាណិជ្ជកម្មសម្រាប់ផលិតផលជាក់លាក់ណាមួយ ត្រូវធ្វើការស្រាវជ្រាវអំពីរឿងជាច្រើនដូចជាកន្លែងដែលវាត្រូវបានបង្ហាញ។”`
                                        : `“When designing an advertisement for a particular product many things should be researched like where it should be displayed.”`}
                                    </p>
                                  <h6>_ John Smith _</h6>
                              </div>
                              <div class="blog__details__text">
                                  <p>{isKhmer
                                      ? `Vyo-Serum ព្រមទាំងធ្វើឱ្យស្បែកតឹងឡើង វានឹងកាត់បន្ថយស្នាមស្ដើងដែលបង្ហាញពីសញ្ញាចាស់របស់ស្បែក។ បញ្ហាដូចជា ស្មៅខ្មៅក្រោមភ្នែក ស្បែករឹត និងស្នាមជ្រួញត្រជាក់ អាចត្រូវបានទប់ស្កាត់ដោយប្រសិទ្ធិភាពខ្លាំងរបស់សេរ៉ូមនេះ។`
                                      : `Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of skin. Problems like dark circles, puffiness, and crow's feet can be control from the strong effects of this serum.`}
                                    </p>
                                  <p>{isKhmer
                                      ? `Hydroderm គឺជាផលិតផលពហុមុខងារដែលជួយកាត់បន្ថយស្បែករលុង និងផ្តល់ឱ្យរាងកាយមានទម្រង់តឹងណែន ហើយជួយសម្អាតស្បែកចេញពីឬស និងមិនឱ្យរន្ធញើសត្រូវបានឃាំងទៀតផង។ ទោះយ៉ាងណាក៏ដោយ វានៅតែជួយបំបាត់ស្នាមជ្រួញ និងសញ្ញាចាស់ទាំងអស់ពីតំបន់ស្បែកប្រកបដោយភាពងាយរងជិតភ្នែក។`
                                      : `Hydroderm is a multi-functional product that helps in reducing the cellulite and giving the body a toned shape, also helps in cleansing the skin from the root and not letting the pores clog, nevertheless also let's sweeps out the wrinkles and all signs of aging from the sensitive near the eyes.`}</p>
                              </div>
                              <div class="blog__details__option">
                                  <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-6">
                                          <div class="blog__details__author">
                                              <div class="blog__details__author__pic">
                                                  <img src={BlogAuthor} alt=""/>
                                              </div>
                                              <div class="blog__details__author__text">
                                                  <h5>Aiden Blair</h5>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-lg-6 col-md-6 col-sm-6">
                                          <div class="blog__details__tags">
                                              <a href="#">#Fashion</a>
                                              <a href="#">#Trending</a>
                                              <a href="#">#2020</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="blog__details__btns">
                                  <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-6">
                                          <a href="" class="blog__details__btns__item">
                                              <p><span class="arrow_left"></span>{isKhmer ? 'Pod ពីមុន' : 'Previous Pod'}</p>
                                              <h5>{isKhmer ? 'វាជាការរៀបចំរបៀបប្រើប្រាស់តំបន់ផ្សាយពាណិជ្ជកម្មឥតគិតថ្លៃ។' : 'It S Classified How To Utilize Free Classified Ad Sites'}</h5>
                                          </a>
                                      </div>
                                      <div class="col-lg-6 col-md-6 col-sm-6">
                                          <a href="" class="blog__details__btns__item blog__details__btns__item--next">
                                              <p>{isKhmer ? 'Pod បន្ទាប់' : 'Next Pod'} <span class="arrow_right"></span></p>
                                              <h5>{isKhmer ? 'គន្លឹះសម្រាប់ជ្រើសរើស Perfect Gloss សម្រាប់បបូរមាត់របស់អ្នក' : 'Tips For Choosing The Perfect Gloss For Your Lips'}</h5>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="blog__details__comment">
                                  <h4>{isKhmer ? 'បញ្ចេញមតិរបស់អ្នកនៅទីនេះ' : 'Leave A Comment'}</h4>
                                  <form action="#">
                                      <div class="row">
                                          <div class="col-lg-4 col-md-4">
                                              <input type="text" placeholder="Name"/>
                                          </div>
                                          <div class="col-lg-4 col-md-4">
                                              <input type="text" placeholder="Email"/>
                                          </div>
                                          <div class="col-lg-4 col-md-4">
                                              <input type="text" placeholder="Phone"/>
                                          </div>
                                          <div class="col-lg-12 text-center">
                                              <textarea placeholder="Comment"></textarea>
                                              <button type="submit" class="site-btn">Post Comment</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Blog Details Section End --> */}
    </div>
  )
}

export default BlogDetailSection