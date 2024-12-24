import Link from 'next/link';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import { Container as ContainerGrid } from '../Grid';

interface ActionProps {
  isOpen: boolean;
}

interface ButtonNavProps {
  isContact?: boolean;
}

export const BoxContainer = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 11;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background-color: ${theme.colors.white};
    border-radius: 0px 0px 30px 30px;
  }
`;

export const Container = styled(ContainerGrid)`
  align-items: flex-start;
  background-color: ${theme.colors.white};
  border-radius: 0px 0px 30px 30px;
  display: flex;
  justify-content: space-between;
  max-width: 1226px;
  padding: 18px 20px 16px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: center;
  }
`;

export const BoxBrand = styled(Link)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    & img {
      max-width: 204px;
      padding-top: 24px;
    }
  }
`;

export const ButtonMobile = styled.button<ActionProps>`
  align-items: center;
  background-color: ${theme.colors.green.dark};
  border-radius: 10px;
  color: ${theme.colors.white};
  display: flex;
  gap: 8px;
  padding: 16px;

  &:hover {
    background-color: ${theme.colors.green.light};
    color: ${theme.colors.white};
  }

  p {
    font-weight: 900;
    line-height: 16px;
    position: relative;
    top: 1px;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: flex-end;
    flex-direction: column;
  }
`;

export const ButtonNav = styled.button<ButtonNavProps>`
  ${theme.typography.bodyNav}
  background-color: transparent;
  color: ${theme.colors.gray.medium};
  position: relative;

  &:hover {
    color: ${theme.colors.black};
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    color: ${theme.colors.green.dark[1]};
    text-align: right;

    &::before,
    &::after {
      display: none;
    }
  }

  ${({ isContact }) =>
    isContact &&
    css`
      align-items: center;
      background-color: ${theme.colors.green.dark};
      border-radius: 30px;
      color: ${theme.colors.white};
      display: flex;
      gap: 8px;
      padding: 8px 30px;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: ${theme.colors.green.light};
        color: ${theme.colors.white};
      }

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        background-color: ${theme.colors.green.dark};
        font-weight: 600;
        padding: 14px 30px;
        text-transform: uppercase;

        &:hover {
          background-color: ${theme.colors.green.light};
          color: ${theme.colors.white};
        }

        &::before,
        &::after {
          display: none;
        }
      }
    `}
`;

export const Aside = styled.div<ActionProps>`
  background-color: ${theme.colors.white};
  height: 100vh;
  padding: 16px 20px;
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? 0 : '-200vw')};
  top: 0;
  transition: 0.2s ease-in-out;
  width: 100%;
  z-index: 10;

  & > header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 68px;
  }
`;
