import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: flex;
`;
export const Container = styled.div`
  margin-top: 30px;
  max-width: 100%;
  

  a {
    padding: 8px;
    background: #fff;
    border-radius: 8px;
    max-height: 250px
    padding: 10px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 5px var( --color-mid500);

    img {
      width: 180px;
      height: 210px;
      border-radius: 5px;
    }
    .Cartshopping {
      width: 1.6rem;
      height: 1.2rem;
    }
    .containerRight {
      border-left: 1px solid var(--color-mid400);
    }
    div {
      margin-left: 16px;

      span {
        margin-left: 2rem;
      }

      article {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        flex-direction: row-reverse;
        margin-top: 0;

        strong {
          margin-right: 7rem;
        }
      }
      .star {
        display: flex;
        color: var(--color-secondary-yellow500);
        margin-left: 14rem;
        margin-top: -2rem;
      }

      strong {
        font-size: 14px;
        color: #666;
        display: block;
      }
      span {
        font-size: 16px;
        color: #666;
      }
      p {
        font-size: 13px;
        color: #666;
      }

      #price {
        justfy-content: center;
        text-align: center;
        font-size: 15px;
      }

      #free {
        font-size: 13px;
        font-weight: 300;
      }

      #typography {
        margin-bottom: 10px;
      }

      b {
        font-weight: 600;
      }

      #by {
        font-size: 12px;
        margin-left: -1px;
        margin-bottom: 25px;
        font-weight: 200;
      }

      #wishList {
       background var(--color-secondary-green500);
      }

      #wishList:hover {
       background var(--color-secondary-dark);
      }

      button {
        width: 15rem;
        height: 4rem;
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
        margin: 0.6rem;

        &:hover {
          background: var(--color-primary-dark900);
        }
        svg {
          margin-right: 2rem;
        }
        img {
          margin-right: 1rem;
          width: 1.4rem;
        }
      }
    }
  }
`;
