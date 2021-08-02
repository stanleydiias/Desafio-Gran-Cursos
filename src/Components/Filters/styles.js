import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  
`;

export const Container = styled.aside`
  width: 100%;
  height: 100%;
  margin: 20px;

  button {
    margin: 1.8rem 0 10rem;
    width: 100%;
    border: 0;

    height: 4.6rem;
    background: var(--color-primary-blue600);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    &:hover {
      background: var(--color-secondary-dark);
    }
  }

  article {
    box-shadow: 0px 2px 5px var( --color-mid500);
    background: #fff;
    width: 100%;
    padding: 2rem;
    border-radius: 0.8rem;
    margin-top: 10px;
  }

  p {
    font: 400 1.8rem 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
    flex-flow: column nowrap;

    .line {
      border-bottom: 1px solid var(--color-light300);
    }

    span {
      margin: 0.1rem;
      display: block;
      padding: 1.8rem 0 1.2rem;
      color: var(--color-dark600);
    }

    li {
      width: 100%;
      height: 2.8rem;
      list-style-type: none;
      position: relative;
      font: 400 1.4rem 'Montserrat', sans-serif;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      input {
        margin-right: 0.6rem;
      }
      .inputRange {
        width: 100%;
      }

      .containerStar {
        img {
          height: 1.4rem;
          margin: 0.4rem;
        }
      }
    }
  }
`;
