import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Image from 'next/image';



const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;


    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={props.Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/home">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-3">Home style 3</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                        <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/team">Doctor</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Marlene-Henry">Doctor Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/shop-single/Wheelchair">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                                <li><Link onClick={ClickHandler} href="/faq">FAQ</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/services">Services</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/services">Services</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-single/Dental-Care">Services Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/project">Portfolio</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Portfolio</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project-single/Heart-Institure">Portfolio Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="#">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="mini-cart">
                                        <Link href="/cart" className="cart-toggle-btn">
                                            {" "}
                                            <i className="flaticon-shopping-bag"></i>
                                            <span className="cart-count">{carts.length}</span>
                                        </Link>
                                    </div>
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ${menuActive ? "ti-close" : "flaticon-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);