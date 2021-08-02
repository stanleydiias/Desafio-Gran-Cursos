import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gridImg from '../../assets/icons/grid.svg';
import listImg from '../../assets/icons/list.svg';

import Repositories from '../Repositories';
import { ContainerSearch } from './styles';

export default function Search() {
  return (
    <>
      <ContainerSearch>
        <div className="cardSelect">
          <p>7,618 results found in 5ms</p>
          <div>
            <select name="Default">
              <option>Default</option>
            </select>
            <img src={gridImg} alt="Grid" />
            <img src={listImg} alt="list" />
          </div>
        </div>
        <article>
          <form>
            <div className="input-block">
              <input type="text" id="curso" placeholder="Search hear" />
              <FontAwesomeIcon icon="search" />
            </div>
          </form>
        </article>
        <Repositories />
        <Repositories />
        <Repositories />
        <Repositories />
        <Repositories />
      </ContainerSearch>
    </>
  );
}
