import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const Section = styled.section`
  margin-block: 56px;
  position: relative;
  display: grid;

  & > img {
    height: 480px;
    object-fit: cover;
    width: 100%;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      height: 476px;
    }
  }
`;

export const Container = styled(ContainerGrid)`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 0;
  }
`;

export const ContainerTrisul = styled.div`
  align-items: center;
  display: flex;
  gap: 130px;
  position: absolute;
  top: 0;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
    gap: 40px;
    width: 100%;
  }
`;

export const BoxLogo = styled.div`
  background-color: ${theme.colors.white};
  padding: 208px 70px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-top: 24px;
    padding-block: 40px;
    padding-inline: 200px;
  }
`;

export const BoxText = styled.div`
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  max-width: 670px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-bottom: 40px;
    max-width: 335px;
  }
`;
