import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Banner = () => {
    const [images, setImages] = useState([]);
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const fetchProductsByIds = async (ids) => {
        try {
            const urls = ids.map((id) => `https://fakestoreapi.com/products/${id}`);
            const productPromises = urls.map((url) =>
                fetch(url).then((response) => response.json())
            );
            const products = await Promise.all(productPromises);

            const productImages = products.map((product) => product.image);
            setImages(productImages);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProductsByIds([3, 6, 15]);
    }, []);
  return (
    <div>
          {/* <!-- Banner Section Begin --> */}
          <section class="banner spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-7 offset-lg-4">
                          <div class="banner__item">
                              <div class="banner__item__pic">
                                  <img src={images[0]} alt="" style={{height:'auto', width:'300px'}}/>
                              </div>
                              <div class="banner__item__text">
                                  <h3>{isKhmer ? 'សម្លៀកបំពាក់បុរសប្រចាំឆ្នាំ ២០៣០' : "Men's Clothing Collections 2030"}</h3>
                                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-5">
                          <div class="banner__item banner__item--middle">
                              <div class="banner__item__pic">
                                  <img src={images[1]} alt="" style={{ height: 'auto', width: '300px' }} />
                              </div>
                              <div class="banner__item__text">
                                  <h3>{isKhmer ? 'គ្រឿងអលង្ការ' : 'Jewelery'}</h3>
                                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'}</Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-7">
                          <div class="banner__item banner__item--last">
                              <div class="banner__item__pic">
                                  <img src={images[2]} alt="" style={{ height: 'auto', width: '300px' }} />
                              </div>
                              <div class="banner__item__text">
                                  <h3>{isKhmer ? 'សម្លៀកបំពាក់នារីប្រចាំឆ្នាំ ២០៣០' : "Women's Clothing Collections 2030"}</h3>
                                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'}</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Banner Section End --> */}
    </div>
  )
}

export default Banner