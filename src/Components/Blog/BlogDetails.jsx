import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import calender from '../img/icon/calendar.png'
import blog1 from '../img/blog/blog-1.jpg'
import blog2 from '../img/blog/blog-2.jpg'
import blog3 from '../img/blog/blog-3.jpg'
import blog4 from '../img/blog/blog-4.jpg'
import blog5 from '../img/blog/blog-5.jpg'
import blog6 from '../img/blog/blog-6.jpg'
import blog7 from '../img/blog/blog-7.jpg'
import blog8 from '../img/blog/blog-8.jpg'
import blog9 from '../img/blog/blog-9.jpg'

const BlogDetails = () => {

    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';

    useEffect(() => {
        document.querySelectorAll('.set-bg').forEach((element) => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
    }, []);

  return (
    <div>
          {/* <!-- Blog Section Begin --> */}
          <section class="blog spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog1}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" />{isKhmer ? '១៦ កុម្ភៈ ២០២០' : '16 February 2020'} </span>
                                  <h5>{isKhmer ? 'តើ Curling Irons មួយណាដែលល្អបំផុត?' : 'What Curling Irons Are The Best Ones?'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog2}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" /> {isKhmer ? '២១ កុម្ភៈ ២០២០' : '21 February 2020'}</span>
                                  <h5>{isKhmer ? 'តើចិញ្ចៀនអចិន្រ្តៃយ៍មានភាពរឹងមាំជារៀងរហូតមែនទេ?' : 'Eternity Bands Do Last Forever?'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog3}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" />{isKhmer ? '២៨ កុម្ភៈ ២០២០' : '28 February 2020'}</span>
                                  <h5>{isKhmer ? 'អត្ថប្រយោជន៍នៃវែនតាការពារកំដៅថ្ងៃ' : 'The Health Benefits Of Sunglasses'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog4}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" /> {isKhmer ? '១៦ កុម្ភៈ ២០២០' : '16 February 2020'}</span>
                                  <h5>{isKhmer ? 'តើអ្នកកំពុងសម្លឹងទៅការសម្រាកទឹកដោះនៅកម្ពស់ខ្ពស់ជាងមុនមែនទេ?' : 'Aiming For Higher The Mastopexy?'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog5}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" /> {isKhmer ? '២១ កុម្ភៈ ២០២០' : '21 February 2020'}</span>
                                  <h5>{isKhmer ? 'តើចញ្ចៀនរៀបការជាកាដូក៏មានតម្លៃបំផុតក្នុងជីវិតមែនទេ?' : 'Wedding Rings A Gift For A Lifetime?'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog6}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" /> {isKhmer ? '២៨ កុម្ភៈ ២០២០' : '28 February 2020'}</span>
                                  <h5>{isKhmer ? 'វិធីក្នុងការជម្រុះរោមនៅលើខ្លួនប្រាណមានជាច្រើន' : 'The Different Methods Of Hair Removal'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog7}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" />{isKhmer ? '១៦ កុម្ភៈ ២០២០' : '16 February 2020'}</span>
                                  <h5>{isKhmer ? 'ក្រវិលមូលជាស្ទាយដែលបែបប្រវត្តិសាស្រ្តមែនទេ?' : 'Hoop Earrings A Style From History?'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog8}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" />{isKhmer ? '២១ កុម្ភៈ ២០២០' : '21 February 2020'}</span>
                                  <h5>{isKhmer ? 'ការវះកាត់ភ្នែកឡាស៊ិក តើអ្នកបានត្រៀមរួចរាល់ហើយឬនៅ?' : 'Lasik Eye Surgery Are You Ready?'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                          <div class="blog__item">
                              <div class="blog__item__pic set-bg" data-setbg={blog9}></div>
                              <div class="blog__item__text">
                                  <span><img src={calender} alt="" />{isKhmer ? '២៨ កុម្ភៈ ២០២០' : '28 February 2020'}</span>
                                  <h5>{isKhmer ? 'ការវះកាត់ភ្នែកឡាស៊ិក តើអ្នកបានត្រៀមរួចរាល់ហើយឬនៅ?' : 'Lasik Eye Surgery Are You Ready?'}</h5>
                                  <Link to={`/${currentLanguage}/blog-details`}>{isKhmer ? 'អានបន្ថែម' : 'Read More'}</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Blog Section End --> */}
    </div>
  )
}

export default BlogDetails