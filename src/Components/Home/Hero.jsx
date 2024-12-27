import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero1 from "../img/hero/hero1.jpg";
import Hero2 from "../img/hero/hero2.jpg";

const Hero = () => {
    const location = useLocation();
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const isKhmer = location.pathname.startsWith('/kh');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };
    return (
        <section className="hero">
            <Slider {...settings} className="hero__slider">
                <div>
                    <div className="hero__items" style={{ backgroundImage: `url(${Hero1})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div>
                                        <h6>{isKhmer ? 'ម៉ូតប្រចាំរដូវក្ដៅ' : 'Summer Collection'}</h6>
                                        <h2>{isKhmer ? 'សម្លៀកបំពាក់ប្រចាំរដូវស្លឹកឈើជ្រុះ - រដូវរងា ក្នុងឆ្នាំ 2030' : 'Fall - Winter Collections 2030'}</h2>
                                        <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                            commitment to exceptional quality.</p>
                                        <Link to={`/${currentLanguage}/shop`} className="primary-btn">{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'} <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div>
                    <div className="hero__items" style={{ backgroundImage: `url(${Hero2})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div>
                                        <h6>{isKhmer ? 'សម្លៀកបំពាក់ប្រចាំរដូវក្ដៅ' : 'Summer Collection'}</h6>
                                        <h2>{isKhmer ? 'សម្លៀកបំពាក់ប្រចាំរដូវស្លឹកឈើជ្រុះ - រដូវរងា ក្នុងឆ្នាំ 2030' : 'Fall - Winter Collections 2030'}</h2>
                                        <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                            commitment to exceptional quality.</p>
                                        <Link to={`/${currentLanguage}/shop`} className="primary-btn">{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'} <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );

}

export default Hero