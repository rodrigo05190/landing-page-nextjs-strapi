import styled from 'styled-components';
import { SwiperSlide as SwiperSlideReact } from 'swiper/react';
import { Swiper as SwiperDefault } from '../stylesDefault';

export const Swiper = styled(SwiperDefault)`
  .swiper-button-next,
  .swiper-button-prev {
    top: 102px;
  }
`;

export const SwiperSlide = styled(SwiperSlideReact)`
  max-width: 100%;
  width: auto;
`;
