import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const Container = styled(ContainerGrid)`
  padding-bottom: 54px;
  padding-top: 80px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 40px;
    padding-top: 64px;
  }
`;

export const Title = styled.h3`
  font-family: 'Nexa';
  font-size: 28px;
  font-weight: 900;
  line-height: 38px;
  margin-bottom: 32px;
  color: ${theme.colors.black};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextIcon = styled.div`
  font-family: 'Nexa';
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  margin-top: 16px;
  color: ${theme.colors.black};

  & > strong {
    font-size: 28px;
    line-height: 25px;
  }
`;

export const SwiperReact = styled(Swiper)`
  padding-bottom: 48px;

  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background-color: transparent;
    border: 1px solid ${theme.colors.blue};
    border-radius: 0;
    height: 8px;
    opacity: 1;
    width: 8px;

    &.swiper-pagination-bullet-active {
      background-color: ${theme.colors.blue};
      position: relative;

      &::before {
        background-color: transparent;
        border: 1px solid ${theme.colors.black};
        content: '';
        height: 14px;
        left: -4px;
        position: absolute;
        top: -4px;
        width: 14px;
      }
    }
  }
`;
