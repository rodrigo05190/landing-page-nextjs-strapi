import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import {
  Container as ContainerGrid,
  Text,
} from '../../components';
import theme from '../../theme';

export const Section = styled.section`
  background-color: ${theme.colors.gray[360]};
  padding-block: 56px;
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-block: 40px;
  }
`;

export const BoxBg = styled.div`
  display: grid;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    display: flex;
    left: 0;
    margin-top: 88px;
  }
`;

export const Container = styled(ContainerGrid)`
  position: relative;

  & > img {
    bottom: 220px;
    position: absolute;
    right: 0;
    transform: translate(50%);
  }
`;

export const Content = styled.div`
  max-width: 940px;
`;

export const Header = styled.div`
  color: ${theme.colors.white};
  display: grid;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    gap: 16px;

    & > p {
      order: 1;
    }
  }
`;

export const Location = styled(Text)`
  background-color: ${theme.colors.white};
  color: ${theme.colors.wine};
  padding: 8px;
  width: fit-content;

  strong {
    font-weight: 900;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-bottom: 8px;
  }
`;

export const BoxHighlight = styled.div`
  display: flex;

  & > img {
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    justify-content: center;

    & > img {
      max-height: 186px;
      max-width: calc(100% + 40px);
    }
  }

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const BoxData = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  & > p {
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      margin: 0 auto;
    }
  }
`;

export const BoxBorder = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 40px;
  border: 3px solid ${theme.colors.gray.light[2]};
  display: flex;
  justify-content: center;
  padding: 28px 16px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-inline: auto;
    max-width: fit-content;
  }
`;

export const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 40px;
  border: 2px solid ${theme.colors.gray.light[2]};
  box-shadow: 0px 4px 6px rgba(77, 84, 87, 0.1);
  text-align: center;
  padding-bottom: 36px;
  padding-inline: 16px;
  padding-top: 22px;

  & > img {
    height: 84px;
  }

  & > h4 {
    color: ${theme.colors.wine};
    height: 58px;
    margin: 16px auto 4px;
    max-width: 174px;
  }

  & > p {
    color: ${theme.colors.gray.medium};
    max-width: 216px;
    min-height: 75px;
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

export const Box360 = styled.div`
  margin-top: 75px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-top: 0;
    margin: 0 auto;
  }

  & > h3 {
    margin-top: 48px;
    max-width: 250px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      margin-top: 24px;
    }
  }
`;
