import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ContainerSearch = styled.div`
  article {
    background: #fff;
    border-radius: 0.8rem;
    margin-top: 10px;
    box-shadow: 0px 2px 5px var( --color-mid500);
  }
  .cardSelect {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      select {
        background: #fff;
        border: 1px solid var(--color-line-in-white); //cor atualizada
        outline: 0;
        margin: 0;
        text-indent: 2px;
        width: 100px;

        font: 14px 'Archivo', sans-serif;
        border-radius: 8px;
        color: #666360;
        height: 32px;
      }

      img {
        background: #fff;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        padding: 0.6rem;
        margin: 0 1rem;
      }
    }
  }

  p {
    font: 400 1.8rem 'Montserrat', sans-serif;
  }
  form {
    width: 60.5vw;
    position: relative;
    display: flex;
    justify-content: space-between;

    .input-block {
      position: relative;
      display: flex;
      justify-content: space-between;

      input {
        width: 48.5vw;
        height: 5.6rem;

        border-radius: 0.8rem;
        background: var(--color-light100);
        border: 1px solid var(--color-light200);
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
      }
      svg {
        margin: 20px 0px 0px 15px;
        cursor: pointer;
        right: 0;
        margin-right: 2rem;
        font-size: 2rem;
        position: absolute;
      }
    }
  }
`;
