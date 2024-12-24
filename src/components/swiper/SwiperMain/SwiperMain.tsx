import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Product } from '../../../@types';
import { useWindowSize } from '../../../providers';
import CardEnterprise from '../../CardEnterprise';
import { SwiperContainer } from '../stylesDefault';
import { Swiper, SwiperSlide } from './styles';

interface SwiperMainProps {
  data: Product[];
}

const SwiperMain: React.FC<SwiperMainProps> = ({ data }) => {
  const { isDesktop } = useWindowSize();

  return (
    <SwiperContainer>
      <Swiper
        navigation={isDesktop}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        spaceBetween={30}
      >
        {data.map(item => (
          <SwiperSlide key={item.url}>
            <CardEnterprise
              {...item}
              button={{
                href: `/${item.type}/${item.url}`,
                label: 'Garanta sua unidade',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperMain;
