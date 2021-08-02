import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import homeImg from '../../assets/icons/home.svg';
import { Container } from './styles';

export default function Select() {
  // const iconOption = <FontAwesomeIcon icon="home" />;
  return (
    <>
      <Container>
        <div>
          <FontAwesomeIcon icon="home" />
          <select defaultValue="">
            <option icon="home">
            &nbsp;&nbsp; Dashboard
            </option>
            <option value="home">
              Option
            </option>
          </select>
        </div>
      </Container>
    </>
  );
}
