import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../cartContext";
import search from "../img/icon/search.png";
import iconCart from "../img/icon/cart.png";
import heart from "../img/icon/heart.png";
import aimo_logo from "../img/aimo_logo.png";
import Khmer_flag from "../img/khmerFlag.png";
import English_flag from "../img/englishFlag.png";

const Section = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isKhmer = location.pathname.startsWith("/kh");
    const currentLanguage = location.pathname.split("/")[1] || "en";
    const currentPath = location.pathname;
    const totalProductCount = cart.reduce((total, product) => total + product.quantity, 0);
    const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const handleLanguageSwitch = (language) => {
        const pathWithoutLanguage = location.pathname.split("/").slice(2).join("/");
        navigate(`/${language}/${pathWithoutLanguage}`);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const handleResize = () => {
            if (mediaQuery.matches) {
                setIsMenuOpen(false);
            }
        };

        // Attach listener
        mediaQuery.addEventListener("change", handleResize);

        // Clean up listener
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Enable scrolling
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <div>
            <header className="header">
                {/* Top Bar */}
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header__top__left">
                                    <p>
                                        {isKhmer
                                            ? "ដឹកជញ្ចូនដោយឥតគិតថ្លៃ, ធានាសងប្រាក់គ្រប់វិញក្នុងរយៈពេល ៣០ ថ្ងៃ"
                                            : "Free shipping, 30-day return or refund guarantee."}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        <a href="#">{isKhmer ? "ចុះឈ្មោះ" : "Sign in"}</a>
                                        <a href="#">{isKhmer ? "សំណួរខ្លីៗ" : "FAQs"}</a>
                                    </div>
                                    <div className="header__top__hover">
                                        <span>
                                            {currentLanguage === "en" ? "English" : "Khmer"}
                                            <i className="arrow_carrot-down"></i>
                                        </span>
                                        <ul style={{ width: "120px" }}>
                                            <li
                                                onClick={() => handleLanguageSwitch("en")}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <img
                                                    src={English_flag}
                                                    style={{ width: "30px", height: "30px", marginRight: "10px" }}
                                                />
                                                English
                                            </li>
                                            <li
                                                onClick={() => handleLanguageSwitch("kh")}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <img
                                                    src={Khmer_flag}
                                                    style={{ width: "30px", height: "30px", marginRight: "10px" }}
                                                />
                                                Khmer
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <Link to={`/${currentLanguage}/home`}>
                                    <img src={aimo_logo} alt="" style={{ width: "160px", height: "40px" }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className={currentPath.includes("/home") ? "active" : ""}>
                                        <Link to={`/${currentLanguage}/home`}>
                                            {isKhmer ? "ទំព័រដើម" : "Home"}
                                        </Link>
                                    </li>
                                    <li className={currentPath.includes("/shop") ? "active" : ""}>
                                        <Link to={`/${currentLanguage}/shop`}>
                                            {isKhmer ? "ទំនិញ" : "Shop"}
                                        </Link>
                                    </li>
                                    <li className={currentPath.includes("/about") ? "active" : ""}>
                                        <Link to="#">
                                            {isKhmer ? "ទំព័រ" : "Pages"}
                                        </Link>
                                        <ul className="dropdown">
                                            <li>
                                                <Link to={`/${currentLanguage}/about`}>
                                                    {isKhmer ? "អំពីពូួកយើង" : "About Us"}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={`/${currentLanguage}/shop-details`}>
                                                    {isKhmer ? "ព័ត៌មានទំនិញ" : "Shop Details"}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={`/${currentLanguage}/shopping-cart`}>
                                                    {isKhmer ? "កន្រ្ដកទំនិញ" : "Shopping Cart"}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={`/${currentLanguage}/checkout`}>
                                                    {isKhmer ? "ទូទាត់ទំនិញ" : "Check Out"}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={`/${currentLanguage}/blog-details`}>
                                                    {isKhmer ? "កំណត់ហេតុលម្អិត" : "Blog Details"}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={currentPath.includes("/blog") ? "active" : ""}>
                                        <Link to={`/${currentLanguage}/blog`}>
                                            {isKhmer ? "កំណត់ហេតុ" : "Blog"}
                                        </Link>
                                    </li>
                                    <li className={currentPath.includes("/contact") ? "active" : ""}>
                                        <Link to={`/${currentLanguage}/contact`}>
                                            {isKhmer ? "ទំនាក់ទំនង" : "Contact"}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <a href="#" className="search-switch">
                                    <img src={search} alt="" />
                                </a>
                                <a href="#">
                                    <img src={heart} alt="" />
                                </a>
                                <Link to={`/${currentLanguage}/shopping-cart`}>
                                    <img src={iconCart} alt="" />
                                    <span>{totalProductCount}</span>
                                </Link>
                                <div className="price">${subtotal.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>

            {/* Sidebar Menu */}
            {isMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 1)",
                            zIndex: 999,
                        }}
                        onClick={toggleMenu}
                    ></div>

                    {/* Sidebar Menu */}
                    {isMenuOpen && (
                            <div className="side-menu">
                                <button onClick={toggleMenu} className="close-menu" style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    color: "red",
                                    border: "1px solid red",
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    backgroundColor: "white",
                                    }}>
                                    X
                                </button>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        padding: "20px",
                                        width: "100%",
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    <div
                                        style={{
                                            marginBottom: "20px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Link to={`/${currentLanguage}/home`}>
                                            <img
                                                src={aimo_logo}
                                                alt=""
                                                style={{ width: "160px", height: "40px" }}
                                            />
                                        </Link>
                                    </div>
                                    <nav
                                        style={{
                                            flex: 1,
                                            marginBottom: "20px",
                                        }}
                                    >
                                        <ul
                                            style={{
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0,
                                            }}
                                        >
                                            <li
                                                className={currentPath.includes("/home") ? "activePhone" : ""}
                                                style={{
                                                    marginBottom: "10px",
                                                    borderBottom: currentPath.includes("/home") ? "2px solid red" : "none",
                                                    width: currentLanguage === "kh" ? "55px" : "50px"
                                                }}
                                            >
                                                <Link to={`/${currentLanguage}/home`} style={{color: 'black', fontWeight: 'bold', fontSize: '16px'}}>
                                                    {isKhmer ? "ទំព័រដើម" : "Home"}
                                                </Link>
                                            </li>
                                            <li
                                                className={currentPath.includes("/shop") ? "activePhone" : ""}
                                                style={{
                                                    marginBottom: "10px",
                                                    borderBottom: currentPath.includes("/shop") ? "2px solid red" : "none",
                                                    width: "40px"
                                                }}
                                            >
                                                <Link to={`/${currentLanguage}/shop`} style={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                                    {isKhmer ? "ទំនិញ" : "Shop"}
                                                </Link>
                                            </li>
                                            <li
                                                className={currentPath.includes("/about") ? "activePhone" : ""}
                                                style={{
                                                    marginBottom: "10px",
                                                }}
                                            >
                                                <Link to="#"
                                                    style={{
                                                        color: 'black',
                                                        fontWeight: 'bold',
                                                        fontSize: '16px',
                                                        borderBottom: currentPath.includes("/about") ? "2px solid red" : "none",
                                                        width: "150px"
                                                }}>{isKhmer ? "ទំព័រ" : "Pages"}</Link>
                                                <ul
                                                    style={{
                                                        listStyle: "none",
                                                        padding: "10px 20px",
                                                        marginTop: "10px",
                                                        backgroundColor: "#f9f9f9",
                                                        borderRadius: "4px",
                                                    }}
                                                >
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <Link to={`/${currentLanguage}/about`}
                                                            style={{
                                                                color: 'black',
                                                                fontWeight: 'bold',
                                                                fontSize: '16px',
                                                                borderBottom: currentPath.includes("/about") ? "2px solid red" : "none",
                                                                width: "150px"
                                                            }}>
                                                            {isKhmer ? "អំពីពូួកយើង" : "About Us"}
                                                        </Link>
                                                    </li>
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <Link to={`/${currentLanguage}/shop-details`}
                                                            style={{
                                                                color: 'black',
                                                                fontWeight: 'bold',
                                                                fontSize: '16px',
                                                                borderBottom: currentPath.includes("/shop-details") ? "2px solid red" : "none",
                                                                width: "150px"
                                                            }}>
                                                            {isKhmer ? "ព័ត៌មានទំនិញ" : "Shop Details"}
                                                        </Link>
                                                    </li>
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <Link to={`/${currentLanguage}/shopping-cart`}
                                                            style={{
                                                                color: 'black',
                                                                fontWeight: 'bold',
                                                                fontSize: '16px',
                                                                borderBottom: currentPath.includes("/shopping-cart") ? "2px solid red" : "none",
                                                                width: "160px"
                                                            }}>
                                                            {isKhmer ? "កន្រ្ដកទំនិញ" : "Shopping Cart"}
                                                        </Link>
                                                    </li>
                                                    <li style={{ marginBottom: "10px" }}>
                                                        <Link to={`/${currentLanguage}/checkout`}
                                                            style={{
                                                                color: 'black',
                                                                fontWeight: 'bold',
                                                                fontSize: '16px',
                                                                borderBottom: currentPath.includes("/checkout") ? "2px solid red" : "none",
                                                                width: "150px"
                                                            }}>
                                                            {isKhmer ? "ទូទាត់ទំនិញ" : "Check Out"}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/${currentLanguage}/blog-details`}
                                                            style={{
                                                                color: 'black',
                                                                fontWeight: 'bold',
                                                                fontSize: '16px',
                                                                borderBottom: currentPath.includes("/blog-details") ? "2px solid red" : "none",
                                                                width: "150px"
                                                            }}>
                                                            {isKhmer ? "កំណត់ហេតុលម្អិត" : "Blog Details"}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className={currentPath.includes("/blog") ? "activePhone" : ""}
                                                style={{
                                                    marginBottom: "10px",
                                                    borderBottom: currentPath.includes("/blog") ? "2px solid red" : "none",
                                                    width: currentLanguage === "kh" ? "80px" : "35px", }}
                                            >
                                                <Link to={`/${currentLanguage}/blog`} style={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                                    {isKhmer ? "កំណត់ហេតុ" : "Blog"}
                                                </Link>
                                            </li>
                                            <li
                                                className={currentPath.includes("/contact") ? "activePhone" : ""}
                                                style={{
                                                    marginBottom: "10px",
                                                    borderBottom: currentPath.includes("/contact") ? "2px solid red" : "none",
                                                    width: currentLanguage === "kh" ? "67px" : "62px",}}
                                            >
                                                <Link to={`/${currentLanguage}/contact`} style={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                                    {isKhmer ? "ទំនាក់ទំនង" : "Contact"}
                                                </Link>
                                            </li>
                                            {/* Language Switcher */}
                                            <li style={{  display: "flex", flexDirection: "column", gap: "10px" }}>
                                                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                                                    {isKhmer ? "ជ្រើសរើសភាសា:" : "Choose Language:"}
                                                </span>
                                                <div style={{ display: "flex", gap: "10px" }}>
                                                    <button
                                                        onClick={() => handleLanguageSwitch("en")}
                                                        style={{
                                                            padding: "10px 20px",
                                                            backgroundColor: currentLanguage === "en" ? "red" : "#f0f0f0",
                                                            color: currentLanguage === "en" ? "white" : "black",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        English
                                                    </button>
                                                    <button
                                                        onClick={() => handleLanguageSwitch("kh")}
                                                        style={{
                                                            padding: "10px 20px",
                                                            backgroundColor: currentLanguage === "kh" ? "red" : "#f0f0f0",
                                                            color: currentLanguage === "kh" ? "white" : "black",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Khmer
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                        <style>
                            {`
                            .side-menu {
                                position: fixed;
                                top: 0;
                                right: 0;
                                width: 300px;
                                height: 100%;
                                background: #fff;
                                box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
                                padding: 20px;
                                z-index: 1000;
                            }
                            .close-menu {
                                background: none;
                                border: none;
                                font-size: 18px;
                                cursor: pointer;
                            }
                        `}
                    </style>
                </>
            )}
        </div>
    );
};

export default Section;