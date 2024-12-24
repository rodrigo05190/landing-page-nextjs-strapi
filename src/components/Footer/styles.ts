import styled from 'styled-components';
import theme from '../../theme';
import { Container as ContainerGrid } from '../Grid';

export const Section = styled.div`
  overflow: hidden;
  padding-top: 40px;
`;

export const Content = styled(ContainerGrid)`
  & > p {
    color: ${theme.colors.gray.medium};
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export const BoxDescription = styled.div`
  border-top: 1px solid ${theme.colors.gray};
  padding-bottom: 40px;
  padding-top: 24px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 100px;
  }
`;

export const Container = styled(ContainerGrid)`
  display: flex;
  justify-content: space-between;
`;

export const BoxTrisul = styled.div`
  border-top: 1px solid ${theme.colors.gray.light[2]};
  color: ${theme.colors.black};
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding-top: 24px;
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
  }

  & > div {
    align-items: flex-end;
    display: flex;
    gap: 16px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 40px;
    }
  }
`;
