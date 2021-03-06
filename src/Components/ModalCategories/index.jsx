import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ovalImg from '../../assets/icons/Oval.svg';
import mailImg from '../../assets/icons/mail.svg';
import chatImg from '../../assets/icons/message-square.svg';
import todoImg from '../../assets/icons/check-square.svg';
import calendarImg from '../../assets/icons/calendar.svg';
import gridImg from '../../assets/icons/layout.svg';
import colorsImg from '../../assets/icons/droplet.svg';
import cardImg from '../../assets/icons/credit-card.svg';
import tableImg from '../../assets/icons/grid.svg';
import componentsImg from '../../assets/icons/archive.svg';
import formElementsImg from '../../assets/icons/copy.svg';
import formLayoutsImg from '../../assets/icons/sidebar.svg';
import formWizardImg from '../../assets/icons/file-text.svg';
import formValidationImg from '../../assets/icons/check-circle.svg';
import rightArrowImg from '../../assets/icons/right_arrow.svg';
import Select from '../Select';
import { Container, Wrapper, WrapperContainer } from './styles';

export default function MyVerticallyCenteredModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
        <>
            <WrapperContainer>
                <button type="button" variant="primary" onClick={handleShow}>
                    <FontAwesomeIcon icon="list-ul" />
                    <span>Category</span>
                </button>
            </WrapperContainer>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Wrapper>
                        <Container>
                            <div className="select-block">
                                <Select />
                                <p>
                                    <img src={ovalImg} alt="Oval" />
                                    eCommerce
                                </p>
                            </div>

                            <article>
                                <ul>
                                    <span>APPS</span>
                                    <li>
                                        <img src={mailImg} alt="Email" />
                                        Email
                                    </li>
                                    <li>
                                        <img src={chatImg} alt="Chat" />
                                        Chat
                                    </li>
                                    <li>
                                        <img src={todoImg} alt="todo" />
                                        Todo
                                    </li>
                                    <li>
                                        <img src={calendarImg} alt="Calendario" />
                                        Calendar
                                    </li>
                                </ul>
                                <ul>
                                    <span>UI ELEMENTS</span>
                                    <li>
                                        <img src={gridImg} alt="Grid" />
                                        Grid
                                        <img src={rightArrowImg} alt="rightArrow" />
                                    </li>
                                    <li>
                                        <img src={colorsImg} alt="colors" />
                                        Colors
                                    </li>
                                    <li>
                                        <img src={cardImg} alt="Card" />
                                        Card
                                        <img src={rightArrowImg} alt="rightArrow" />
                                    </li>
                                    <li>
                                        <img src={tableImg} alt="table" />
                                        Table
                                    </li>
                                    <li>
                                        <img src={componentsImg} alt="components" />
                                        Components
                                        <img src={rightArrowImg} alt="rightArrow" />
                                    </li>
                                </ul>
                                <ul>
                                    <span>FORMS</span>
                                    <li>
                                        <img src={formElementsImg} alt="Form Elements" />
                                        Form Elements
                                        <img src={rightArrowImg} alt="rightArrow" />
                                    </li>
                                    <li>
                                        <img src={formLayoutsImg} alt="Form Layouts" />
                                        Form Layouts
                                    </li>
                                    <li>
                                        <img src={formWizardImg} alt="Form Wizard" />
                                        Form Wizard
                                    </li>
                                    <li>
                                        <img src={formValidationImg} alt="Form Validation" />
                                        Form Validation
                                    </li>
                                </ul>
                            </article>
                        </Container>
                    </Wrapper>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
  );
}
