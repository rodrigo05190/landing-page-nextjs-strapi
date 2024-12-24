import styled from 'styled-components';
import theme from '../../theme';

export const Section = styled.section`
  align-items: center;
  background-color: #041c3e;
  display: flex;
  min-height: 362px;
  position: relative;
  margin-bottom: 56px;

  & > div {
    align-items: center;
    display: flex;
    gap: 70px;
  }

  & > img {
    bottom: 0;
    position: absolute;
    right: 0;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 335px;

    & > div {
      flex-direction: column;
      z-index: 1;
    }

    & > img {
      bottom: 0;
      right: 50%;
      transform: translateX(50%);
    }
  }
`;

export const Sobre = styled.div`
  max-width: 355px;

  & > p {
    color: ${theme.colors.white};
    margin: 0 0 25px;
  }

  & > a {
    align-items: center;
    background-color: transparent;
    border: solid 1px ${theme.colors.white};
    color: ${theme.colors.white};
    display: flex;
    font-family: 'Nexa';
    font-size: 18px;
    height: 52px;
    justify-content: center;
    padding: 16px;
    width: 100%;
  }
`;
