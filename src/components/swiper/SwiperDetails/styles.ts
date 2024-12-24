import styled from 'styled-components';
import { SwiperSlide as SwiperSlideReact } from 'swiper/react';
import theme from '../../../theme';
import { Container } from '../../Grid';

export const SwiperContainer = styled(Container)`
  max-width: 1224px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 0;
  }
`;

export const SwiperSlide = styled(SwiperSlideReact)`
  display: grid;
  max-width: 100%;
  position: relative;

  & > img {
    border-radius: 30px;
    object-fit: cover;
    width: 100%;
    border-radius: 30px;
  }
`;

export const Label = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 15px;
  color: ${theme.colors.gray.medium};
  padding: 6px 10px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const Expand = styled.button`
  align-items: center;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray.light[2]};
  border-radius: 15px;
  color: ${theme.colors.gray.medium};
  display: flex;
  gap: 6px;
  padding: 6px 10px;
  position: absolute;
  right: 16px;
  top: 16px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.gray.light[2]};
  }
`;
