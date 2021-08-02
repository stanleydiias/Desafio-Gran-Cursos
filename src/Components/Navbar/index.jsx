import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mailImg from '../../assets/icons/mail.svg';
import chatImg from '../../assets/icons/message-square.svg';
import todoImg from '../../assets/icons/check-square.svg';
import calendarImg from '../../assets/icons/calendar.svg';
import starImg from '../../assets/icons/star.svg';
import OvalUserImg from '../../assets/icons/OvalUser.svg';
import searchImg from '../../assets/icons/search.svg';
import bellImg from '../../assets/icons/bell.svg';
import rightArrowImg from '../../assets/icons/right_arrow.svg';
import settingsImg from '../../assets/icons/settings.svg';

import { ContainerNav } from './styles';

export default function Navbar() {
  return (
    <ContainerNav>
      <nav>
        <div className="ContainerLeft">
          <img src={todoImg} alt="todo" />
          <img src={chatImg} alt="Chat" />
          <img src={mailImg} alt="Email" />
          <img src={calendarImg} alt="Calendario" />
          <img src={starImg} alt="star" />
        </div>
        <div className="ContainerRight">
          <span>English</span>
          <img src={bellImg} alt="bell" />
          <img src={searchImg} alt="search" />
          <p>
            <strong>Stanley Dias</strong>
            Available
          </p>
          <img src={OvalUserImg} alt="user" />
        </div>
      </nav>
      <article>
        <p>
          Card Actions | <FontAwesomeIcon icon="home" />
          <img src={rightArrowImg} alt="rightArrow" className="rightArrowImg" />
          <img src={rightArrowImg} alt="rightArrow" className="rightArrowImg" />
          <span>eCommerce</span>
          <img src={rightArrowImg} alt="rightArrow" className="rightArrowImg" />
          <img src={rightArrowImg} alt="rightArrow" className="rightArrowImg" />
          <span>Electronics</span>
        </p>

        <img src={settingsImg} alt="settings" className="settingsImg" />
      </article>
    </ContainerNav>
  );
}
