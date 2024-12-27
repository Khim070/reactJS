import React, {useState, useEffect} from 'react'
import {useLocation } from 'react-router-dom'
import PayPal from '../paypal';

const CheckoutSection = () => {
    const location = useLocation();
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const isKhmer = location.pathname.startsWith('/kh');

    const { state } = location || {};
    const { cart = [], total = 0, isCouponApplied = false } = state || {};

    const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const discount = isCouponApplied ? subtotal - 1 : 0;
    const finalTotal = isCouponApplied ? 1 : subtotal;

    useEffect(() => {
        console.log('Rendering PayPal Button');
        return () => {
            console.log('Unmounting PayPal Button');
        };
    }, []);


  return (
    <div>
          {/* <!-- Checkout Section Begin --> */}
          <section className="checkout spad">
              <div className="container">
                  <div className="checkout__form">
                      <form action="#">
                          <div className="row">
                              <div className="col-lg-8 col-md-6">
                                  <h6 className="coupon__code"><span className="icon_tag_alt"></span> Have a coupon? <a href="#">Click
                                      here</a> to enter your code</h6>
                                  <h6 className="checkout__title">{isKhmer ? 'សេចក្ដីលម្អិតនៃការចំណាយ' : 'Billing Details'}</h6>
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <div className="checkout__input">
                                              <p>Fist Name<span>*</span></p>
                                              <input type="text"/>
                                          </div>
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="checkout__input">
                                              <p>Last Name<span>*</span></p>
                                              <input type="text"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="checkout__input">
                                      <p>Country<span>*</span></p>
                                      <input type="text"/>
                                  </div>
                                  <div className="checkout__input">
                                      <p>Address<span>*</span></p>
                                      <input type="text" placeholder="Street Address" className="checkout__input__add"/>
                                          <input type="text" placeholder="Apartment, suite, unite ect (optinal)"/>
                                          </div>
                                            <div className="checkout__input">
                                              <p>Town/City<span>*</span></p>
                                              <input type="text"/>
                                          </div>
                                            <div className="checkout__input">
                                              <p>Country/State<span>*</span></p>
                                              <input type="text"/>
                                          </div>
                                            <div className="checkout__input">
                                              <p>Postcode / ZIP<span>*</span></p>
                                              <input type="text"/>
                                          </div>
                                            <div className="row">
                                             <div className="col-lg-6">
                                             <div className="checkout__input">
                                                      <p>Phone<span>*</span></p>
                                                      <input type="text"/>
                                                  </div>
                                              </div>
                                                <div className="col-lg-6">
                                                    <div className="checkout__input">
                                                      <p>Email<span>*</span></p>
                                                      <input type="text"/>
                                                  </div>
                                              </div>
                                          </div>
                                  </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="checkout__order">
                                      <h4 className="order__title">{isKhmer ? 'ការបញ្ចាទិញរបស់អ្នក' : 'Your order'}</h4>
                                      <div className="checkout__order__products">{isKhmer ? 'ផលិតផល' : 'Product'} <span>{isKhmer ? 'សរុប' : 'Total'}</span></div>
                                            {cart.length > 0 ? (
                                                <ul className="checkout__total__products">
                                                    {cart.map((product, index) => (
                                                        <li key={index}>
                                                            {product.title.length > 10
                                                                ? `${product.title.substring(0, 10)}...`
                                                                : product.title}
                                                            x {product.quantity}{' '}
                                                            <span>${(product.price * product.quantity).toFixed(2)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>No items in cart.</p>
                                            )}
                                            <ul className="checkout__total__all">
                                                {isCouponApplied && (
                                                    <li>Discount <span>-${discount.toFixed(2)}</span></li>
                                                )}
                                                <li>Subtotal <span>${subtotal.toFixed(2)}</span></li>
                                                <li>Total <span>${finalTotal.toFixed(2)}</span></li>
                                            </ul>
                                            <div>
                                                <div style={{ display: paymentMethod === 'paypal' ? 'block' : 'none' }}>
                                                    <PayPal total={finalTotal} />
                                                </div>
                                            </div>
                                      </div>
                                  </div>
                            </div>
                      </form>
                  </div>
              </div>
          </section>
          {/* <!-- Checkout Section End --> */}
    </div>
  )
}

export default CheckoutSection