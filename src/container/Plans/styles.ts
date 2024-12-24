import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components/';
import theme from '../../theme';

export const Section = styled.section`
  background-color: ${theme.colors.gray.light[1]};
  padding-block: 56px;
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-top: 48px;
    border-radius: 50px;
    padding-top: 24px;
  }

  & > img {
    bottom: 0;
    position: absolute;
    right: 0;
  }
`;

export const Container = styled(ContainerGrid)`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 0;

    & > h2 {
      padding-inline: 20px;
    }
  }

  & > img {
    bottom: -24px;
    position: relative;
    right: -1121px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      bottom: -24px;
      right: -274px;
    }
  }
`;

export const Content = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 40px;
  margin-top: 16px;
  padding: 24px;
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
  }

  & > button {
    margin: 0 auto;
  }
`;

export const BoxPlan = styled.div`
  border-radius: 30px;
  margin-bottom: 11px;
  padding-top: 24px;
`;
