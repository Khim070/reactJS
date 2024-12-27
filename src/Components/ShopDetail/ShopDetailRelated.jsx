import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import heart from "../img/icon/heart.png"
import compare from "../img/icon/compare.png"
import search from "../img/icon/search.png"
import product1 from "../img/product/product-1.jpg"
import product2 from "../img/product/product-2.jpg"
import product3 from "../img/product/product-3.jpg"
import product4 from "../img/product/product-4.jpg"

const ShopDetailRelated = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';

    // useEffect(() => {
    //     document.querySelectorAll('.set-bg').forEach((element) => {
    //         const bg = element.getAttribute('data-setbg');
    //         element.style.backgroundImage = `url(${bg})`;
    //     });
    // }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/");
                const data = await response.json();
                setProducts(data.slice(0, 4));
            } catch (error) { console.error("Error fetching products:", error); }
        };

        fetchProducts();
    }, []);

    const handleSearchClick = (product) => {
        navigate(`/${currentLanguage}/shop-details`, { state: { product } });
    };

  return (
    <div>
          {/* <!-- Related Section Begin --> */}
          <section class="related spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <h3 class="related-title">{isKhmer ? 'ផលិតផលដែលទាក់ទង' : 'Related Product'}</h3>
                      </div>
                  </div>
                  <div class="row">
                      {products.map((product) => (
                          <div key={product.id} class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                              <div class="product__item">
                                  <div class="product__item__pic" className="product__item__pic"
                                      style={{
                                          backgroundImage: `url(${product.image})`,
                                          backgroundSize: 'contain',
                                          backgroundPosition: 'center',
                                          width: '200px',
                                          backgroundRepeat: 'no-repeat'
                                      }}>
                                      <ul class="product__hover">
                                          <li><a href="#"><img src={heart} alt="" /></a></li>
                                          <li><a href="#"><img src={compare} alt="" /> <span>{isKhmer ? 'ប្រៀបធៀប' : 'Compare'}</span></a>
                                          </li>
                                          <li><a onClick={() => handleSearchClick(product)}><img src={search} alt="" style={{ cursor: 'pointer' }} /><span>{isKhmer ? 'ព័ត៌មានលម្អិត' : 'View details'}</span></a></li>
                                      </ul>
                                  </div>
                                  <div class="product__item__text">
                                      <h6>{product.title}</h6>
                                      <a href="#" class="add-cart">+ Add To Cart</a>
                                      <div class="rating">
                                          <i class="fa fa-star-o"></i>
                                          <i class="fa fa-star-o"></i>
                                          <i class="fa fa-star-o"></i>
                                          <i class="fa fa-star-o"></i>
                                          <i class="fa fa-star-o"></i>
                                      </div>
                                      <h5>${product.price}</h5>
                                  </div>
                              </div>
                          </div>
                      ))}
                      {/* <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                          <div class="product__item">
                              <div class="product__item__pic set-bg" data-setbg={product2}>
                                  <ul class="product__hover">
                                      <li><a href="#"><img src={heart} alt="" /></a></li>
                                      <li><a href="#"><img src={compare} alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src={search} alt="" /></a></li>
                                  </ul>
                              </div>
                              <div class="product__item__text">
                                  <h6>Piqué Biker Jacket</h6>
                                  <a href="#" class="add-cart">+ Add To Cart</a>
                                  <div class="rating">
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                  </div>
                                  <h5>$67.24</h5>
                                  <div class="product__color__select">
                                      <label for="pc-4">
                                          <input type="radio" id="pc-4"/>
                                      </label>
                                      <label class="active black" for="pc-5">
                                          <input type="radio" id="pc-5"/>
                                      </label>
                                      <label class="grey" for="pc-6">
                                          <input type="radio" id="pc-6"/>
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                          <div class="product__item sale">
                              <div class="product__item__pic set-bg" data-setbg={product3}>
                                  <span class="label">Sale</span>
                                  <ul class="product__hover">
                                      <li><a href="#"><img src={heart} alt="" /></a></li>
                                      <li><a href="#"><img src={compare} alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src={search} alt="" /></a></li>
                                  </ul>
                              </div>
                              <div class="product__item__text">
                                  <h6>Multi-pocket Chest Bag</h6>
                                  <a href="#" class="add-cart">+ Add To Cart</a>
                                  <div class="rating">
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star-o"></i>
                                  </div>
                                  <h5>$43.48</h5>
                                  <div class="product__color__select">
                                      <label for="pc-7">
                                          <input type="radio" id="pc-7"/>
                                      </label>
                                      <label class="active black" for="pc-8">
                                          <input type="radio" id="pc-8"/>
                                      </label>
                                      <label class="grey" for="pc-9">
                                          <input type="radio" id="pc-9"/>
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                          <div class="product__item">
                              <div class="product__item__pic set-bg" data-setbg={product4}>
                                  <ul class="product__hover">
                                      <li><a href="#"><img src={heart} alt="" /></a></li>
                                      <li><a href="#"><img src={compare} alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src={search} alt="" /></a></li>
                                  </ul>
                              </div>
                              <div class="product__item__text">
                                  <h6>Diagonal Textured Cap</h6>
                                  <a href="#" class="add-cart">+ Add To Cart</a>
                                  <div class="rating">
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                  </div>
                                  <h5>$60.9</h5>
                                  <div class="product__color__select">
                                      <label for="pc-10">
                                          <input type="radio" id="pc-10"/>
                                      </label>
                                      <label class="active black" for="pc-11">
                                          <input type="radio" id="pc-11"/>
                                      </label>
                                      <label class="grey" for="pc-12">
                                          <input type="radio" id="pc-12"/>
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div> */}
                  </div>
              </div>
          </section>
          {/* <!-- Related Section End --> */}
    </div>
  )
}

export default ShopDetailRelated