import React from "react";
import logo from './images/Brand.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faBagShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return ( <> <header className="main-header">
        <nav className="container container-xxl navbar-expand-lg">
            <div className="top-nav">
                <ul className="list-unstyled d-flex justify-content-between custom-divider">
                    <li>
                        <a className="nav-link" href="#">Chat with us</a>
                        <a className="nav-link" href="tel:+420 336 775 664">+420 336 775 664</a>
                        <a className="nav-link" href="mailto:quiksix@gmail.com">quiksix@gmail.com</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">
                            Blog
                        </a>
                        <a className="nav-link" href="#">
                            About Us
                        </a>
                        <a className="nav-link" href="#">
                            Careers
                        </a>
                    </li>
                </ul>
            </div>
            <div className="center-nav d-flex justify-content-between align-items-center">
                <div className="brand"><img src={logo} alt="Brand Logo"/></div>
                <form class="d-flex search-container position-relative">
                    <div className="select-wrap">
                        <select className="form-control">
                            <option value="#">Category</option>
                            <option value="option1">Option</option>
                            <option value="option1">beauty and fashion</option>
                            <option value="option1">Option</option>
                            <option value="option1">Option</option>
                        </select>
                    </div>
                    <div className="search-input position-relative w-100">
                        <input
                            class="form-control w-100"
                            type="text"
                            placeholder="Search Products, categories ..."
                            aria-label="Search"/>
                    </div>
                    <a href="#" className="magnifying-glass"><FontAwesomeIcon icon={faMagnifyingGlass}/></a>
                </form>
                <div className="custom-icons">
                    <a href="">
                        <span className="me-2">Login</span>
                        <FontAwesomeIcon icon={faUser}/>
                    </a>
                    <a href="">
                        <span className="me-2">Cart</span>
                        <FontAwesomeIcon icon={faBagShopping}/>
                    </a>
                </div>
            </div>
            <div className="bottom-nav">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Category</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Blog</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link active" href="#">About us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header> </>
    )
}

export default Header;