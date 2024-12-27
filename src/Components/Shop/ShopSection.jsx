import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../cartContext'
import heart from "../img/icon/heart.png"
import compare from "../img/icon/compare.png"
import search from "../img/icon/search.png"

const ShopSection = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const [categoryCounts, setCategoryCounts] = useState({});
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const categories = [
        { key: "men's clothing", en: "Men's Clothing", kh: "សម្លៀកបំពាក់បុរស" },
        { key: "women's clothing", en: "Women's Clothing", kh: "សម្លៀកបំពាក់ស្រី" },
        { key: "jewelery", en: "Jewelery", kh: "គ្រឿងអលង្ការ" },
        { key: "electronics", en: "Electronics", kh: "ឧបករណ៍អេឡិចត្រូនិច" },
    ];

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const url = currentCategory
                    ? `https://fakestoreapi.com/products/category/${currentCategory}`
                    : "https://fakestoreapi.com/products";
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };


        const fetchCategoryCounts = async () => {
            const counts = {};
            for (const category of categories) {
                try {
                    const response = await fetch(`https://fakestoreapi.com/products/category/${category.key}`);
                    const data = await response.json();
                    counts[category.key] = data.length;
                } catch (error) {
                    console.error(`Error fetching category ${category.key}:`, error);
                }
            }
            setCategoryCounts(counts);
        };

        fetchCategoryCounts();
        fetchProducts();
    }, [currentCategory]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
        setCurrentPage(1);
    };

    const handleSearchClick = (product) => {
        navigate(`/${currentLanguage}/shop-details`, { state: { product } });
    };

  return (
    <div>
          {/* <!-- Shop Section Begin --> */}
          <section class="shop spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3">
                          <div class="shop__sidebar">
                              <div class="shop__sidebar__accordion">
                                  <div class="accordion" id="accordionExample">
                                      <div class="card">
                                          <div class="card-heading">
                                              <a data-toggle="collapse" data-target="#collapseOne">{isKhmer ? 'ប្រភេទទំនិញ' : 'Categories'}</a>
                                          </div>
                                          <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                                              <div class="card-body">
                                                  <div class="shop__sidebar__categories">
                                                      <ul className="nice-scroll">
                                                          {categories.map((category) => (
                                                              <li key={category.key}>
                                                                  <a
                                                                      href="#!"
                                                                      onClick={() => handleCategoryClick(category.key)}
                                                                      className={
                                                                          currentCategory === category.key
                                                                              ? 'active-category'
                                                                              : ''
                                                                      }>
                                                                      {isKhmer ? category.kh : category.en} (
                                                                      {categoryCounts[category.key] || 0})
                                                                  </a>
                                                              </li>
                                                          ))}
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card">
                                          <div class="card-heading">
                                              <a data-toggle="collapse" data-target="#collapseSix">{isKhmer ? 'សម្គាល់' : 'Tags'}</a>
                                          </div>
                                          <div id="collapseSix" class="collapse show" data-parent="#accordionExample">
                                              <div class="card-body">
                                                  <div class="shop__sidebar__tags">
                                                      {categories.map((category) => (
                                                          <a key={category.key} href="#!" onClick={() => handleCategoryClick(category.key)}>{isKhmer ? category.kh : category.en}</a>
                                                      ))}
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-9">
                          <div class="shop__product__option">
                              <div class="row">
                                  <div class="col-lg-6 col-md-6 col-sm-6">
                                      <div class="shop__product__option__left">
                                          <p>{isKhmer ? `បង្ហាញពី 1-${Math.min(products.length, productsPerPage)} នៃ ${products.length} ផលិតផលសរុប` : `Showing 1-${Math.min(products.length, productsPerPage)} of ${products.length} results`}</p>
                                      </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 col-sm-6">
                                      <div class="shop__product__option__right">
                                          <p>{isKhmer ? 'តម្រៀបទៅតាមតម្លៃ: ' : 'Sort by Price: '}</p>
                                          <select>
                                              <option value="">{isKhmer ? 'ទាបទៅខ្ពស់' : 'Low To High'}</option>
                                              <option value="">$0 - $55</option>
                                              <option value="">$55 - $100</option>
                                          </select>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              {currentProducts.map((product) => (
                                <div key={product.id} class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic" className="product__item__pic"
                                            style={{
                                                backgroundImage: `url(${product.image})`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                                height: '200px',
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
                                              <a style={{cursor:'pointer'}} onClick={() => handleAddToCart(product)} class="add-cart">+ Add To Cart</a>
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
                          </div>
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="product__pagination">
                                      {[...Array(totalPages)].map((_, index) => (
                                          <a
                                              key={index}
                                              href="#!"
                                              onClick={() => handlePageChange(index + 1)}
                                              className={currentPage === index + 1 ? 'active' : ''}>
                                              {index + 1}
                                          </a>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Shop Section End --> */}
    </div>
  )
}

export default ShopSection