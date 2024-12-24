import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const Section = styled.section`
  background-color: ${theme.colors.green.light};
  border-radius: 40px;
  padding-bottom: 87px;
  position: relative;
  margin-top: 56px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 0;
  }

  &::after,
  &::before {
    border-radius: 0px 0px 40px 40px;
    bottom: 0;
    content: '';
    height: 62px;
    position: absolute;
    width: 100%;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: none;
    }
  }

  &::after {
    background-color: #749044;
    bottom: 25px;
  }

  &::before {
    background-color: #688538;
  }

  & > span {
    color: #749044;
    height: 62px;
    width: 100%;
  }
`;

export const Container = styled(ContainerGrid)`
  padding-block: 48px;
  position: relative;

  header {
    color: ${theme.colors.white};
    display: grid;
    gap: 24px;
    margin-bottom: 32px;

    & > h2 {
      ${theme.typography.h2Desktop};
      font-weight: 900;
    }
  }

  & > img {
    position: absolute;
    right: -8%;
    top: 26%;

    &:last-of-type {
      top: 34%;
      z-index: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    header {
      gap: 20px;
      margin-bottom: 20px;
      text-align: left;

      & > h2 {
        ${theme.typography.h2Mobile};
      }
    }

    & > img {
      left: auto;
      right: 20px;
      top: 64px;
      width: 90px;
    }
  }
`;

export const BoxForm = styled.div`
  max-width: 570px;
`;
