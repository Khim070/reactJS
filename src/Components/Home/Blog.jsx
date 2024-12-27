import React, {useEffect, useState} from 'react'
import { useLocation , Link} from 'react-router-dom'
import calender from "../img/icon/calendar.png"
import blog1 from "../img/blog/blog-1.jpg"
import blog2 from "../img/blog/blog-2.jpg"
import blog3 from "../img/blog/blog-3.jpg"

const Blog = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const [products, setProducts] = useState([]);
    const currentLanguage = location.pathname.split('/')[1] || 'en';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
                const data = await response.json();
                setProducts(data.slice(1, 4));
            } catch (error) { console.error("Error fetching products:", error); }
        };

        fetchProducts();
    }, []);

  return (
    <div>
          {/* <!-- Latest Blog Section Begin --> */}
          <section className="latest spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title">
                              <span>{isKhmer ? 'ព័ត៍មានចុងក្រោយ' : 'Latest News'}</span>
                              <h2>{isKhmer ? 'ម៉ូតសម្លៀកបំពាក់ថ្មី' : 'Fashion New Trends'}</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      {products.map((product, index) => (
                          <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                              <div className="blog__item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <div className="blog__item__pic">
                                      <img
                                          src={product.image}
                                          alt={product.title}
                                          style={{
                                              width: '200px',
                                              height: 'auto',
                                              marginBottom: '10px',
                                              backgroundPosition: 'center',
                                              backgroundRepeat: 'no-repeat',
                                              backgroundSize:'contain'
                                          }}
                                      />
                                  </div>
                                  <div className="blog__item__text" style={{ textAlign: 'center' }}>
                                      <span>
                                          <img
                                              src={calender}/>
                                          {isKhmer ? '១៦ កុម្ភៈ ២០២៥' : '16 February 2025'}
                                      </span>
                                      <h5>{product.title}</h5>
                                      <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទិញឥឡូវនេះ' : 'Buy Now'}</Link>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          {/* <!-- Latest Blog Section End --> */}
    </div>
  )
}

export default Blog