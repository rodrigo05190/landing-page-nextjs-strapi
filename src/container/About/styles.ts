import styled, { css } from 'styled-components';
import {
  Swiper as SwiperReact,
  SwiperSlide as SwiperSlideReact,
} from 'swiper/react';
import { bgLinesPlans } from '../../assets/about';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme';

interface ButtonProps {
  isActive: boolean;
}

export const Section = styled.section`
  background-color: ${theme.colors.gray.light[1]};
  border-radius: 50px;
  margin-bottom: 56px;
  margin-top: 48px;
  padding-block: 56px;
  position: relative;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    &::after {
      background-image: url(${bgLinesPlans});
      background-position-x: right;
      background-position-y: calc(100% - 53px);
      background-repeat: no-repeat;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`;

export const Container = styled(ContainerGrid)`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-wrap: wrap-reverse;
    gap: 0;
    padding-inline: 0;
  }
`;

export const ContainerAbout = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 40px;
  flex: 1;
  max-width: 100%;
  padding-block: 40px;
  padding-inline: 20px;
  z-index: 1;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    max-width: 765px;
    padding-inline: 40px;
  }
`;

export const BoxProfessionals = styled.div`
  background-color: ${theme.colors.gray.light[1]};
  border-radius: 20px;
  display: flex;
  gap: 32px;
  padding: 14px 32px;
`;

export const Swiper = styled(SwiperReact)`
  .swiper-pagination {
    bottom: -14px;
    position: relative;

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
`;

export const SwiperSlide = styled(SwiperSlideReact)`
  max-width: 100%;
  padding-top: 10px;
  width: 335px;
`;

export const BoxText = styled.div`
  max-width: 200px;
`;

export const Card = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;

  & > img {
    max-width: 28px;
    min-width: 28px;
  }
`;

export const BoxGallery = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  & > div {
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;

    & > div {
      gap: 8px;
    }
  }
`;

export const BoxSwiper = styled.div`
  left: -28px;
  max-width: 739px;
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;

    & > div {
      gap: 8px;
    }
  }
`;

export const Btn = styled.button<ButtonProps>`
  ${theme.typography.button}
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 30px;
  border: 1px solid ${theme.colors.gray.medium};
  color: ${theme.colors.gray.medium};
  display: flex;
  height: 54px;
  justify-content: center;
  padding: 14px 20px;
  width: 162px;

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${theme.colors.gray.medium};
      color: ${theme.colors.white};
    `}

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    width: 160px;
  }
`;

export const BoxRight = styled.div`
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 20px;
  }

  & > img {
    bottom: 0;
    position: absolute;
    right: 0;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      bottom: 29px;
      margin-top: 24px;
      right: 21px;
    }
  }
`;

export const BoxFacade = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 40px;
  display: grid;
  max-width: 377px;
  padding: 7px;
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-bottom: 110px;
  }
  & > img {
    border-radius: 40px;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const Label = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 15px;
  bottom: 26px;
  color: ${theme.colors.gray.medium};
  padding: 6px 10px;
  position: absolute;
  right: 16px;
`;
