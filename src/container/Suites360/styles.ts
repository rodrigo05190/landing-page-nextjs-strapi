import styled from 'styled-components';
import {
  Swiper as SwiperReact,
  SwiperSlide as SwiperSlideReact,
} from 'swiper/react';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

export const Section = styled.section`
  background-color: ${theme.colors.gray[360]};
  padding-block: 56px;
  position: relative;

  & > img {
    bottom: 0;
    position: absolute;
    right: 0;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-top: 0px;
  }
`;

export const Container = styled(ContainerGrid)`
  position: relative;
  z-index: 1;

  & > img {
    position: absolute;
    right: 100px;
    top: 38px;
  }

  & > button {
    margin: 56px auto 0;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      margin-bottom: 124px;
      margin-top: 40px;
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
  }
`;

export const BoxData = styled.div`
  display: flex;
`;

export const BoxContent = styled.div`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-right: 90px;

  & + & {
    border-left: 1px dotted ${theme.colors.white};
    padding-left: 90px;
  }

  &:last-of-type {
    padding-right: 0;
  }

  & > p {
    color: ${theme.colors.white};
    max-width: 270px;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-right: 24px;
    width: 270px;
  }
`;

export const BoxIcon = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;

  & > span {
    color: ${theme.colors.orange};
    max-width: 174px;
  }
`;

export const Swiper = styled(SwiperReact)`
  .swiper-pagination {
    bottom: -14px;
    position: relative;

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
  max-width: 100%;
  width: auto;

  & + & {
    border-left: 1px dotted ${theme.colors.white};
    padding-left: 24px;
    padding-right: 24px;
  }
`;
