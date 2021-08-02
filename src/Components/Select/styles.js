import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      position: absolute;
      margin-left: 2.6rem;
      left: 0;
    }
  }
  select {
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white); //cor atualizada
    outline: 0;
    margin: 12px 0;
    width: 100%;
    padding-left: 2.2rem;

    font: 16px 'Archivo', sans-serif;
    border-radius: 2px;
    color: #666360;
    height: 36px;
  }
`;
