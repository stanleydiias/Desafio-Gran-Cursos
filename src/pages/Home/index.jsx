/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from '../../assets/images/LogoGranCursos.svg';
import './styles.css';
import cursoImg from '../../assets/images/cursoImg.svg';
import addToCartImg from '../../assets/icons/shopping-bag.svg';
import shoppingCart from '../../assets/icons/shopping-cart.svg';
import Sidebar from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar';
import Filters from '../../Components/Filters';
import Search from '../../Components/Search';
import ModalFilters from '../../Components/ModalFilters';
import ModalCategories from '../../Components/ModalCategories';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="d-none d-lg-block">
        <div className="row">
          <div id="containerSidebar" className="col-3">
            <Sidebar />
          </div>
          <div id="containerData" className="col-9">
            <Navbar />
            <div className="row">
              <div className="col-4">
                <Filters />
              </div>
              <div id="teste" className="col-8">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-xl-none d-sm-block">
        <header className="page-header">
          <div className="top-bar-container">
            <Link to="/">
              <div>
                <img src={logoImg} alt="Logo Gran Cursos Online" />
              </div>
            </Link>
            <div>
              <Link to="/">
                <FontAwesomeIcon className="icons" icon="star" />
              </Link>
              <Link to="/">
                <FontAwesomeIcon className="icons" icon="user-circle" />
              </Link>
              <Link to="/">
                <FontAwesomeIcon className="icons" icon="cart-plus" />
              </Link>
            </div>
          </div>
          <div className="header-content">
            <form id="search-teachers">
              <div className="input-block">
                <input type="text" placeholder="Which course are you looking for:" />
                <FontAwesomeIcon icon="search" />
              </div>
            </form>
          </div>
          <div className="filter-container">
            <div>
              <ModalCategories />
            </div>
            <div>
              <ModalFilters />
            </div>
          </div>
        </header>

        <main>
          <article className="teacher-item" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <header>
              <img src={cursoImg} alt="curso" />
              <div>
                <div className="row justify-content-start">
                  <strong>Apple Watch Series 4 GPS</strong>
                </div>
                <div className="row justify-content-start">
                  <span>By Apple</span>
                  <span className="star">
                    3.4
                    <Link to="/">
                      <FontAwesomeIcon id="iconStar" icon="star" />
                    </Link>
                  </span>
                </div>
              </div>
            </header>
            <div className="row">
              <p className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                <strong id="price">$399</strong>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                <img id="cart" src={shoppingCart} alt="shopping Cart" />
                Free Shipping
              </p>
            </div>
            <footer>
              <div className="buttonContainer">
                <button id="wishList" type="button">
                  <FontAwesomeIcon icon="heart" />
                  WISHLIST
                </button>
                <button id="addToCart" type="button">
                  <img src={addToCartImg} alt="add to cart" />
                  ADD TO CART
                </button>
              </div>
            </footer>
          </article>
          <article className="teacher-item" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <header>
              <img src={cursoImg} alt="curso" />
              <div>
                <div className="row justify-content-start">
                  <strong>Apple Watch Series 4 GPS</strong>
                </div>
                <div className="row justify-content-start">
                  <span>By Apple</span>
                  <span className="star">
                    3.4
                    <Link to="/">
                      <FontAwesomeIcon id="iconStar" icon="star" />
                    </Link>
                  </span>
                </div>
              </div>
            </header>
            <div className="row">
              <p className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                <strong id="price">$399</strong>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                <img id="cart" src={shoppingCart} alt="shopping Cart" />
                Free Shipping
              </p>
            </div>
            <footer>
              <div className="buttonContainer">
                <button id="wishList" type="button">
                  <FontAwesomeIcon icon="heart" />
                  WISHLIST
                </button>
                <button id="addToCart" type="button">
                  <img src={addToCartImg} alt="add to cart" />
                  ADD TO CART
                </button>
              </div>
            </footer>
          </article>
          <article className="teacher-item">
            <header>
              <img src={cursoImg} alt="curso" />
              <div>
                <div className="row justify-content-start">
                  <strong>Apple Watch Series 4 GPS</strong>
                </div>
                <div className="row justify-content-start">
                  <span>By Apple</span>
                  <span className="star">
                    3.4
                    <Link to="/">
                      <FontAwesomeIcon id="iconStar" icon="star" />
                    </Link>
                  </span>
                </div>
              </div>
            </header>
            <div className="row">
              <p className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                <strong id="price">$399</strong>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                <img id="cart" src={shoppingCart} alt="shopping Cart" />
                Free Shipping
              </p>
            </div>
            <footer>
              <div className="buttonContainer">
                <button id="wishList" type="button">
                  <FontAwesomeIcon icon="heart" />
                  WISHLIST
                </button>
                <button id="addToCart" type="button">
                  <img src={addToCartImg} alt="add to cart" />
                  ADD TO CART
                </button>
              </div>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
}
