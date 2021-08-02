import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Wrapper } from './styles';
import starImg from '../../assets/icons/star.svg';

export default function MyVerticallyCenteredModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
        <>
            <Wrapper>
                <Container>
                    <button type="button" variant="primary" onClick={handleShow}>
                        <FontAwesomeIcon icon="filter" />
                        <span>Filters</span>
                    </button>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Filter</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Wrapper>
                                <Container>
                                    <article>
                                        <ul>
                                            <span>Multi Range</span>
                                            <li>
                                                <div>
                                                    <input type="radio" value="10" name="range" />
                                                    $10
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="radio" value="100" name="range" />
                                                    $10-$100
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="radio" value="100-500" name="range" /> $100-$500
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="radio" value="500" name="range" /> $500
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="radio" value="all" name="range" /> ALL
                                                </div>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="line" />
                                            <li>
                                                Slider<span>1.99 - 4098</span>
                                            </li>
                                            <li>
                                                <input type="range" min="1" max="100" className="inputRange" />
                                            </li>
                                            <li className="line" />
                                        </ul>
                                        <ul>
                                            <span>Category</span>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Cell Phones
                                                </div>
                                                <span>1920</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Computers & Tablets
                                                </div>
                                                <span>1820</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Cell Phone Accessories
                                                </div>
                                                <span>462</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Appliances
                                                </div>
                                                <span>6556</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Audio
                                                </div>
                                                <span>120</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    iPhone Accessories
                                                </div>
                                                <span>353</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Cameras & Camcorders
                                                </div>
                                                <span>45</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    iPhone Cases & Clips
                                                </div>
                                                <span>456</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    TV & Home Theater
                                                </div>
                                                <span>55</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Small Kitchen Appliances
                                                </div>
                                                <span>10</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="line" />
                                            <span>Brand</span>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Insigni
                                                </div>
                                                <span>220</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Samsung
                                                </div>
                                                <span>120</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Apple
                                                </div>
                                                <span>320</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    HP
                                                </div>
                                                <span>32</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Sony
                                                </div>
                                                <span>520</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Metra
                                                </div>
                                                <span>55</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Dyne
                                                </div>
                                                <span>120</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    LG
                                                </div>
                                                <span>98</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Canon
                                                </div>
                                                <span>99</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <input type="Checkbox" value="all" name="range" />
                                                    Speck
                                                </div>
                                                <span>575</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="line" />
                                            <span>Rating</span>
                                            <li>
                                                <div className="containerStar">
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />& UP
                                                </div>
                                                <span>8500</span>
                                            </li>
                                            <li>
                                                <div className="containerStar">
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />& UP
                                                </div>
                                                <span>3250</span>
                                            </li>
                                            <li>
                                                <div className="containerStar">
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />
                                                    <img src={starImg} alt="star" />& UP
                                                </div>
                                                <span>1120</span>
                                            </li>
                                        </ul>
                                    </article>
                                    <button type="button">CLEAR ALL FILTERS</button>
                                </Container>
                            </Wrapper>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary">
                            CLEAR ALL FILTERS
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                SAVE CHANGES
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Wrapper>
        </>
  );
}
