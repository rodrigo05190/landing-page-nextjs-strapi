import styled from 'styled-components';
import theme from '../../theme';
import Text from '../Text';

export const Floating = styled.div`
  align-items: flex-end;
  bottom: 50%;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  transform: translateY(50%);
  z-index: 10;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background-color: ${theme.colors.yellow};
    bottom: 0;
    flex-direction: row;
    gap: 32px;
    height: 60px;
    justify-content: center;
    padding-inline: 20px;
    right: 0;
    transform: translateY(0);
    width: 100%;
  }
`;

export const Btn = styled.button`
  align-items: center;
  background-color: ${theme.colors.yellow};
  display: flex;
  justify-content: flex-end;
  position: relative;

  & + & {
    &::before {
      background-color: ${theme.colors.blue};
      content: '';
      position: absolute;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        height: 24px;
        left: -16px;
        width: 1px;
      }

      @media (min-width: ${theme.breakpoints.desktop.px}) {
        height: 1px;
        right: 9px;
        top: 0;
        width: 40px;
      }
    }
  }

  &:hover {
    & > p {
      padding-left: 20px;
      padding-right: 8px;
      width: 100%;
    }
  }
`;

export const BoxText = styled(Text)`
  color: ${theme.colors.green.dark[1]};
  overflow: hidden;
  padding: 0;
  transition: 0.4s ease-in-out;
  white-space: nowrap;
  width: 0;
`;

export const BoxIcon = styled.div`
  align-items: center;
  display: flex;
  height: 56px;
  justify-content: center;
  min-width: 56px;
  width: 56px;
`;
