import styled from 'styled-components';
import theme from '../../theme';

export const Section = styled.div`
  padding-top: 16px;
  position: relative;
`;

export const Container = styled.div`
  background-color: ${theme.colors.green.light};
  border-radius: 40px;
  position: relative;
`;

export const Before = styled.div`
  background-color: ${theme.colors.gray.light[1]};
  border-radius: 40px 40px 0 0;
  position: absolute;
  height: 234px;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  width: calc(100% - 80px);

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    width: calc(100% - 40px);
  }
`;

export const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  padding-left: 44px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      #89a757 0.43%,
      rgba(137, 167, 87, 0) 59.74%
    );
    height: 100%;
    width: 100%;
    border-radius: 40px;
  }
`;

export const Content = styled.div`
  align-items: center;
  border-radius: 40px;
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 24px;
  padding-left: 40px;
  position: relative;

  & > h1,
  & > h2 {
    max-width: 350px;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 24px;
    gap: 36px;

    & > img {
      border-radius: 30px;
      height: 200px;
      object-fit: cover;
      width: 206px;
    }
  }
`;

export const Highlight = styled.div`
  align-items: flex-end;
  position: absolute;
  display: flex;
  gap: 30px;
  bottom: 0;
  right: 418px;

  & > img:nth-child(1) {
    position: relative;
    bottom: 178px;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    right: -14px;

    & > img:nth-child(1) {
      bottom: 18px;
    }

    & > img:nth-child(2) {
      height: 292px;
    }
  }
`;
