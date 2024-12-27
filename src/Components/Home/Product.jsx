import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../cartContext'
import heart from '../img/icon/heart.png'
import compare from '../img/icon/compare.png'
import search from '../img/icon/search.png'

const Product = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [activeFilter, setActiveFilter] = useState('Electronics');
    const [products, setProducts] = useState([]);
    const categories = [
        { name: "Electronics", khmerName: "គ្រឿងអេឡិចត្រូនិច", api: "https://fakestoreapi.com/products/category/electronics" },
        { name: "Men's clothing", khmerName: "សម្លៀកបំពាក់បុរស", api: "https://fakestoreapi.com/products/category/men's clothing" },
        { name: "Women's clothing", khmerName: "សម្លៀកបំពាក់នារី", api: "https://fakestoreapi.com/products/category/women's clothing" },
    ];

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const categoryPromises = categories.map(async (category) => {
                    const response = await fetch(category.api);
                    const data = await response.json();
                    return {
                        category: category.name,
                        products: data.slice(0, 4),
                    };
                });

                const results = await Promise.all(categoryPromises);
                setProducts(results);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleSearchClick = (product) => {
        navigate(`/${currentLanguage}/shop-details`, { state: { product } });
    };

    return (
        <div>
            {/* Product Section */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                {categories.map((category) => (
                                    <li
                                        key={category.name}
                                        className={activeFilter === category.name ? 'active' : ''}
                                        onClick={() => handleFilterClick(category.name)}>
                                        {isKhmer ? category.khmerName : category.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        {products
                            .filter((categoryData) => activeFilter === categoryData.category)
                            .map((categoryData, index) =>
                                categoryData.products.map((product) => (
                                    <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 mix">
                                        <div className="product__item">
                                            <div
                                                className="product__item__pic set-bg"
                                                style={{
                                                    backgroundImage: `url(${product.image})`,
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    height: '200px',
                                                    width: '100%',
                                                }}>
                                                <ul className="product__hover">
                                                    <li>
                                                        <a href="#">
                                                            <img src={heart} alt="Heart Icon" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src={compare} alt="Compare Icon" />
                                                            <span>Compare</span>
                                                        </a>
                                                    </li>
                                                    <li><a onClick={() => handleSearchClick(product)}><img src={search} alt="" style={{ cursor: 'pointer' }} /><span>{isKhmer ? 'ព័ត៌មានលម្អិត' : 'View details'}</span></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6>{product.title}</h6>
                                                <a style={{ cursor: 'pointer' }} onClick={() => handleAddToCart(product)} class="add-cart">+ Add To Cart</a>
                                                <div className="rating">
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5>${product.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product