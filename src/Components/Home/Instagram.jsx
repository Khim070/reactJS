import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const Instagram = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
                const data = await response.json();
                setProducts(data.slice(0, 6));
            }catch(error) {console.error("Error fetching products:", error);}
        };

        fetchProducts();
    }, []);

  return (
    <div>
          {/* <!-- Instagram Section Begin --> */}
          <section className="instagram spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8">
                          <div className="instagram__pic">
                            {products.map((product, index) =>(
                                <div
                                    key={index}
                                    className="instagram__pic__item set-bg"
                                    style={{
                                        display:'inline-block',
                                        backgroundImage: `url(${product.image})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        height: '300px',
                                        width: '200px',
                                    }}></div>
                            ))}
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="instagram__text">
                              <h2>Instagram</h2>
                                <p>{isKhmer
                                    ? 'ស្វែងរកការធ្វើបច្ចុប្បន្នភាពចុងក្រោយបំផុតនៃម៉ូដនារីតាមរយៈ Instagram របស់យើងដែលបានរៀបចំយ៉ាងយកចិត្តទុកដាក់។ បង្ហាញភាពសុីវិល័យរបស់អ្នកតាមរយៈសម្លៀកបំពាក់របស់យើងខ្ញុំ។'
                                    : 'Explore the latest trends in female fashion through our curated Instagram collection. Elevate your wardrobe with modern, stylish outfits perfect for any occasion.'}
                                </p>
                              <h3>{isKhmer ? '#សម្លៀកបំពាក់នារីទាន់សម័យ' : '#Female_Fashion'}</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Instagram Section End --> */}
    </div>
  )
}

export default Instagram