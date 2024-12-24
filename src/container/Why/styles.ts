import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { Container as ContainerGrid } from '../../components/';
import theme from '../../theme';

export const Section = styled.section``;

export const Container = styled(ContainerGrid)`
  background-color: ${theme.colors.blue};
  border-radius: 40px;
  margin-block: 56px;
  padding-top: 43px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 0;
  }

  & > h2 {
    margin-bottom: 24px;
    padding-left: 94px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      padding-left: 0;
    }
  }

  & > img {
    bottom: -12px;
    object-fit: cover;
    position: relative;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      margin-top: 37px;
    }
  }
`;

export const Content = styled.div`
  padding-left: 94px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 20px;
  }

  & > h2 {
    margin-bottom: 24px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      padding-left: 0;
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > img {
    bottom: -12px;
    object-fit: cover;
    position: relative;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      right: -6px;
    }
  }
`;

export const BoxData = styled.div`
  align-items: center;
  color: ${theme.colors.white};
  display: flex;
  gap: 16px;
  margin-bottom: 25px;
  margin-right: 20px;
  max-width: 498px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: flex-start;
    margin-bottom: 25px;
    margin-right: 0;
  }
`;

export const Swiper = styled(SwiperReact)`
  .swiper-pagination {
    bottom: -14px;

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
