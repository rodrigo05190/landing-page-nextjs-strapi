import parser from 'html-react-parser';
import React from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import {
  building,
  construction,
  graphic,
  like,
  seta,
} from '../../assets/numbers';
import { Box } from '../../components';
import { useWindowSize } from '../../providers';
import {
  Container,
  Content,
  SwiperReact,
  TextIcon,
  Title,
} from './styles';

const data = [
  {
    key: 1,
    image: like,
    text: '+ de <strong>40</strong><br /> anos de<br /> experiência',
  },
  {
    key: 2,
    image: building,
    text: '+ de <strong>350</strong><br /> empreendimentos<br /> entregues',
  },
  {
    key: 3,
    image: graphic,
    text: 'Empresa de<br /> <strong>CAPITAL ABERTO</strong><br /> listada na B3 desde 2007',
  },
  {
    key: 4,
    image: construction,
    text: '+ de <strong>60 mil</strong><br /> unidades entregues',
  },
];

const Numbers: React.FC = () => {
  const { isDesktop } = useWindowSize();

  const ContentDesktop = (
    <Content>
      {data.map(item => (
        <Box display="grid" gridGap="24px" key={item.key}>
          <img loading="lazy" src={item.image} alt="" />

          <TextIcon>{parser(item.text)}</TextIcon>
        </Box>
      ))}

      <div>
        <img loading="lazy" src={seta} alt="" />
      </div>
    </Content>
  );

  const ContentMobile = (
    <SwiperReact
      slidesPerView={2}
      pagination
      modules={[Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {data.map(item => (
        <SwiperSlide key={item.key}>
          <div>
            <img loading="lazy" src={item.image} alt="" />

            <TextIcon>{parser(item.text)}</TextIcon>
          </div>
        </SwiperSlide>
      ))}
    </SwiperReact>
  );

  return (
    <Container data-header="numbers">
      <Title>TRISUL EM NÚMEROS</Title>

      {isDesktop ? ContentDesktop : ContentMobile}
    </Container>
  );
};

export default Numbers;
