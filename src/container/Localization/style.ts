import styled from 'styled-components';
import theme from '../../theme';

interface ContentProps {
  open?: boolean;
}

export const Section = styled.section`
  margin-bottom: 66px;
  margin-top: 56px;
`;

export const Content = styled.div<ContentProps>`
  @media (min-width: ${theme.breakpoints.desktop.px}) {
    left: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: center;
    backdrop-filter: blur(20px);
    background: linear-gradient(
      72.98deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: ${({ open }) => (open ? 1 : 0)};
    padding: 20px;
    position: fixed;
    top: ${({ open }) => (open ? 0 : '100vh')};
    transition: 0.4s ease-in-out;
    width: 100%;
    z-index: 9999;
  }
`;

export const Placeholder = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 40px;
  display: flex;
  height: 544px;
  justify-content: center;
  width: 370px;
`;

export const ButtonClose = styled.button`
  background-color: white;
  border-radius: 50%;
  height: 54px;
  position: absolute;
  right: -9px;
  top: -1px;
  width: 54px;
  z-index: 2;
`;

export const CardInfo = styled.div`
  display: grid;
  gap: 24px;

  & > h3 {
    max-width: 250px;
  }

  & > img {
    margin: 0 auto;
  }
`;

export const BoxMap = styled.div`
  position: relative;
`;
