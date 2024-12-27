import React, {useEffect, useState} from 'react'
import { useLocation, Link } from 'react-router-dom';
// import productSale from "../img/product-sale.png"

const Categories = () => {
    const [product, setProduct] = useState('');
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1');
                const data = await response.json();
                setProduct(data);
            } catch (e) {console.log(e);}
        };

        fetchProduct();
    }, []);
  return (
    <div>
          {/* <!-- Categories Section Begin --> */}
          <section className="categories spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="categories__text">
                              <h2>{isKhmer ? 'សម្លៀកបំពាក់រដូវក្ដៅ' : 'Clothings Hot'} <br /> <span>{isKhmer ? 'កាបូប' : 'Bag Collection'}</span> <br />{isKhmer ? 'គ្រឿងបន្ថែម' : 'Accessories'} </h2>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="categories__hot__deal">
                              <img src={product.image} alt="" style={{width:'auto', height:'400px'}}/>
                              <div className="hot__deal__sticker">
                                  <span>{isKhmer ? 'តម្លៃសល់ត្រឹម' : 'Sale Of'}</span>
                                  <h5>$29.99</h5>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 offset-lg-1">
                          <div className="categories__deal__countdown">
                              <span>{isKhmer ? 'តម្លៃប្រចាំសប្ដាហ៍' : 'Deal Of The Week'}</span>
                              <h4 style={{margin:'15px 0'}}>{product.title}</h4>
                              <div className="categories__deal__countdown__timer" id="countdown">
                                  <div className="cd-item">
                                      <span>{isKhmer ? '៣' : '3'}</span>
                                      <p>{isKhmer ? 'ថ្ងៃ' : 'Days'}</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>{isKhmer ? '១' : '1'}</span>
                                      <p>{isKhmer ? 'ម៉ោង' : 'Hours'}</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>{isKhmer ? '៥០' : '50'}</span>
                                      <p>{isKhmer ? 'នាទី' : 'Minutes'}</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>{isKhmer ? '១៨' : '18'}</span>
                                      <p>{isKhmer ? 'វិនាទី' : 'Seconds'}</p>
                                  </div>
                              </div>
                              <Link to={`/${currentLanguage}/shop`} className="primary-btn">{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'}</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Categories Section End --> */}
    </div>
  )
}

export default Categories