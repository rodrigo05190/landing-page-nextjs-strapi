import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const Section = styled.section`
  background-color: ${theme.colors.gray[360]};
  padding-block: 56px;
  margin-block: 56px;
  position: relative;

  & > img {
    bottom: 0;
    position: absolute;
    right: 0;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-top: 0;
  }
`;

export const Container = styled(ContainerGrid)`
  & > img {
    position: absolute;
    right: 100px;
    top: 38px;
  }

  & > button {
    margin-top: 16px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      margin-bottom: 171px;
    }
  }
`;

export const BoxTitle = styled.div`
  align-items: center;
  color: ${theme.colors.white};
  display: flex;
  gap: 30px;
  padding-bottom: 48px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: flex-start;
    margin-top: 21px;
    padding-bottom: 0;
    padding-top: 40px;
  }
`;
