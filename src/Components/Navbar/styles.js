import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ContainerNav = styled.div`
  width: 96.5%;
  margin: 20px;
  
  margin-top: 10px;
  margin-right: 10px;

  nav {
    background: #fff;
    display: flex;
    padding: 0 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    border-radius: 8px;
    box-shadow: 0px 2px 10px var( --color-mid500);
    .ContainerLeft {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 150px;

      img {
        height: 1.4rem;
      }
    }

    .ContainerRight {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 300px;

      p {
        font-size: 1rem;
      }
      p strong {
        font-size: 1.4rem;
        display: block;
      }
    }
  }
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.8rem;

    p {
      font: 400 2.4rem 'Montserrat', sans-serif;
      margin-left: 0.6rem;

      svg {
        font-size: 1.4rem;
        margin: 0 1rem;
      }
      span {
        font-size: 1.4rem;
        margin: 0 1rem;
      }
    }

    .rightArrowImg {
      width: 0.6rem;
    }

    .settingsImg {
      background: #666;
      height: 3rem;
      width: 3rem;
      padding: 0.6rem;
      border-radius: 50%;
    }
  }
`;

// export const Logo = styled.img`
//   margin: 15px;
//   width: 80%;
// `;
