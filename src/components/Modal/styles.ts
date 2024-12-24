import styled from 'styled-components';
import theme from '../../theme';

export const Section = styled.section`
  background-color: ${theme.colors.green.light};
`;

export const Container = styled.div`
  background-color: ${theme.colors.green.light};
  display: flex;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

export const Content = styled.div`
  align-items: center;
  background-color: ${theme.colors.green.light};
  display: flex;
  flex: 1;
  justify-content: center;
  overflow-y: auto;
  padding: 24px 100px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px 20px;

    & > img {
      margin-bottom: 16px;
      padding-top: 24px;
    }
  }

  & > form {
    max-width: 570px;
    width: 100%;
  }

  & > img:nth-child(1) {
    left: 21%;
    margin-bottom: 16px;
    padding-inline: auto;
    position: absolute;
    z-index: 1;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      left: 0;
      object-fit: cover;
      position: relative;
      width: 160px;
    }
  }

  & > img:nth-child(2) {
    margin-bottom: 16px;
    margin: 0 auto;
    padding-inline: auto;
    position: relative;
  }
`;

export const ButtonClose = styled.button`
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  border: 1px solid ${theme.colors.green.dark[1]};
  color: ${theme.colors.gray.medium};
  display: flex;
  font-size: 28px;
  height: 54px;
  justify-content: center;
  position: fixed;
  right: 16px;
  top: 16px;
  transition: 0.2s ease-in-out;
  width: 54px;
  z-index: 100;
`;
