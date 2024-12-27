import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import productBig2 from '../img/shop-details/product-big-2.png'
import detailsPayment from "../img/shop-details/details-payment.png"

const ShopDetailSection = () => {

    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const [product, setProduct] = useState('');
    const productData = location.state?.product;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productId = productData?.id || 1;
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [productData]);

  return (
    <div>
          {/* <!-- Shop Details Section Begin --> */}
          <section class="shop-details">
              <div class="product__details__pic">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="product__details__breadcrumb">
                                  <Link to={`/${currentLanguage}/home`}>{isKhmer ? 'ទំព័រដើម' : 'Home'}</Link>
                                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទំនិញ' : 'Shop'}</Link>
                                  <span>{isKhmer ? 'ព័ត៌មានទំនិញ' : 'Product Details'}</span>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-lg-3 col-md-3">
                          </div>
                          <div class="col-lg-6 col-md-9">
                              <div class="tab-content">
                                  <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                      <div class="product__details__pic__item">
                                          <img src={product.image} alt="" style={{ width: '300px', height: 'auto' }} />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="product__details__content">
                  <div class="container">
                      <div class="row d-flex justify-content-center">
                          <div class="col-lg-8">
                              <div class="product__details__text">
                                  <h4>{product.title}</h4>
                                  <div class="rating">
                                      <div className="rating">
                                          {[...Array(Math.ceil(product.rating?.rate || 0))].map((_, index) => (
                                              <i key={index} className="fa fa-star"></i>
                                          ))}
                                          {[...Array(5 - Math.ceil(product.rating?.rate || 0))].map((_, index) => (
                                              <i key={index} className="fa fa-star-o"></i>
                                          ))}
                                          <span style={{marginLeft:'10px'}}> {product.rating?.rate || 0} Reviews</span>
                                      </div>
                                  </div>
                                  <h3>${product.price}</h3>
                                    <p>
                                        {product.description}
                                    </p>
                                  <div class="product__details__cart__option">
                                      <div class="quantity">
                                          <div class="pro-qty">
                                              <input type="text" value="1"/>
                                          </div>
                                      </div>
                                      <a href="#" class="primary-btn">{isKhmer ? 'ដាក់ចូលកន្រ្ដក' : 'add to cart'}</a>
                                  </div>
                                  <div class="product__details__btns__option">
                                      <a href="#"><i class="fa fa-heart"></i> add to wishlist</a>
                                      <a href="#"><i class="fa fa-exchange"></i> Add To Compare</a>
                                  </div>
                                  <div class="product__details__last__option">
                                        <h5><span>{isKhmer ? 'ធានាសុវត្ថិភាពនៅពេល checkout' : 'Guaranteed Safe Checkout'}</span></h5>
                                        <img src={detailsPayment} alt=""/>
                                            <ul>
                                                <li><span>{isKhmer ? 'ផលិតផលនៅមានក្នុង​ស្ដុក' : 'Remain stock'}:</span> {product.rating?.count}</li>
                                                <li><span>{isKhmer ? 'ប្រភេទទំនិញ' : 'Categories'}:</span> {product.category}</li>
                                                <li><span>{isKhmer ? 'លក្ខណៈសម្គាល់' : 'Tag'}:</span> {product.category}</li>
                                            </ul>
                                    </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Shop Details Section End --> */}
    </div>
  )
}

export default ShopDetailSection