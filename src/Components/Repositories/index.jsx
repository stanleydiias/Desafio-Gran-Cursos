import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css';
import cursoImg from '../../assets/images/cursoImg.svg';
import shoppingCart from '../../assets/icons/shopping-cart.svg';
import addToCartImg from '../../assets/icons/shopping-bag.svg';

import { Container, Wrapper } from './styles';

export default function Repositories() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Wrapper>
      <Container>
        <div data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Link to="/">
            <img src={cursoImg} alt="curso" />
            <div>
              <strong id="typography">Apple Watch Series 4 GPS</strong>
              <span id="by">By <b>Apple</b></span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </p>
            </div>
            <div className="containerRight">
              <span className="star">
                3.4
                <FontAwesomeIcon icon="star" />
              </span>
              <div id="price">
                <strong>$399</strong>
              </div>
              <span id="free">
                <img src={shoppingCart} alt="shopping Cart" className="Cartshopping" />
                Free Shipping
              </span>
              <div className="buttonContainer">
                <button id="wishList" type="button">
                  <FontAwesomeIcon icon="heart" />
                  WISHLIST
                </button>
                <button type="button">
                  <img src={addToCartImg} alt="add to cart" />
                  ADD TO CART
                </button>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
}
