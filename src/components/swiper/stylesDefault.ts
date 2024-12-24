import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import theme from '../../theme';
import { Container } from '../Grid';

export const SwiperContainer = styled(Container)`
  max-width: 1224px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 20px;
  }
`;

export const Swiper = styled(SwiperReact)`
  padding-bottom: 34px;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 27px;
  }

  /* ========================================= */
  /* Pagination                                */
  /* ========================================= */
  .swiper-pagination {
    bottom: 0;

    &-bullet {
      background-color: transparent;
      border: 1px solid ${theme.colors.gray.medium};
      height: 8px;
      opacity: 1;
      width: 8px;

      &-active {
        background-color: ${theme.colors.gray.medium};
      }
    }
  }

  /* ========================================= */
  /* Navigation                                */
  /* ========================================= */
  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray.light[1]};
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    height: 54px;
    transition: 0.2s ease-in-out;
    width: 54px;

    &::after {
      color: ${theme.colors.gray.medium};
      font-size: 16px;
      transition: 0.2s ease-in-out;
    }

    &:hover {
      box-shadow: none;
    }
  }

  .swiper-button-prev {
    left: 0;

    &:hover {
      &::after {
        transform: translateX(-4px);
      }
    }
  }

  .swiper-button-next {
    right: 0;

    &:hover {
      &::after {
        transform: translateX(4px);
      }
    }
  }
`;
