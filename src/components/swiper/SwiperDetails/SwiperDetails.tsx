import { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Image } from '../../../@types';
import { expand } from '../../../assets/icons';
import { useWindowSize } from '../../../providers';
import Lightbox from '../../Lightbox';
import Text from '../../Text';
import { Swiper } from '../stylesDefault';
import {
  Expand,
  Label,
  SwiperContainer,
  SwiperSlide,
} from './styles';

interface SwiperDetailsProps {
  data: Image[];
}

const SwiperDetails: React.FC<SwiperDetailsProps> = ({
  data,
}) => {
  const [openGallery, setOpenGallery] = useState(false);
  const { isDesktop } = useWindowSize();

  return (
    <>
      <SwiperContainer>
        <Swiper
          autoHeight
          navigation={isDesktop}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
        >
          {data.map(item => (
            <SwiperSlide key={item.title}>
              <Expand onClick={() => setOpenGallery(true)}>
                <Text variant="bodyLegends">Expandir</Text>

                <img
                  loading="lazy"
                  src={expand}
                  alt="Botão expandir"
                />
              </Expand>

              <img
                loading="lazy"
                src={item.original}
                alt={item.title}
              />

              {item.title && (
                <Label>
                  <Text variant="bodyLegends">{item.title}</Text>
                </Label>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>

      <Lightbox
        open={openGallery}
        images={data.map(item => ({ img: item.original }))}
        onClose={() => setOpenGallery(false)}
      />
    </>
  );
};

export default SwiperDetails;
