import styled from 'styled-components';
import { SwiperSlide as SwiperSlideReact } from 'swiper/react';
import { Container } from '../../components';
import {
  SwiperContainer as SwiperContainerReact,
  Swiper as SwiperReact,
} from '../../components/swiper/stylesDefault';
import theme from '../../theme';

export const Section = styled.section`
  padding-bottom: 32px;
  padding-top: 56px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 16px;
    padding-top: 48px;
  }
`;

export const Block = styled(Container)`
  position: relative;
  padding-top: 16px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 0;
  }
`;

export const Before = styled.div`
  background-color: ${theme.colors.green.light};
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

export const Content = styled.div`
  background-color: ${theme.colors.green.dark};
  border-radius: 40px;
  color: ${theme.colors.white};
  padding: 48px 48px 48px 72px;
  position: relative;

  & > div {
    & > p {
      font-weight: 700;
      max-width: 904px;
    }
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding: 40px 20px;

    button {
      margin-inline: auto;
    }
  }
`;

export const Pin = styled.div`
  align-items: center;
  background-color: ${theme.colors.green.light};
  border-radius: 50%;
  color: ${theme.colors.green.dark};
  display: flex;
  font-size: 30px;
  height: 50px;
  justify-content: center;
  position: absolute;
  right: 48px;
  top: 48px;
  width: 50px;
`;

export const SwiperContainer = styled(SwiperContainerReact)`
  left: -72px;
  padding-inline: 20px;
  position: relative;
  width: calc(100% + 120px);
`;

export const Swiper = styled(SwiperReact)`
  padding-bottom: 38px;
  padding-left: 72px;
  padding-right: 48px;

  &::before,
  &::after {
    background-color: ${theme.colors.green.dark};
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    width: 54px;
    z-index: 2;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  .swiper-pagination {
    bottom: 0;

    &-bullet {
      background-color: transparent;
      border: 1px solid ${theme.colors.white};
      height: 8px;
      opacity: 1;
      width: 8px;

      &-active {
        background-color: ${theme.colors.white};
      }
    }
  }
`;

export const SwiperSlide = styled(SwiperSlideReact)`
  @media (min-width: ${theme.breakpoints.desktop.px}) {
    /* max-width: fit-content; */
    max-width: inherit;
  }
`;

export const CloseTo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: fit-content;

  & > i {
    color: ${theme.colors.green.light};
    font-size: 32px;
    margin-left: 8px;
  }

  p {
    color: ${theme.colors.white};
    font-weight: 700;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-inline: auto;
  }
`;
