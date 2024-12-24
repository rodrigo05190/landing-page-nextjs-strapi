import React from 'react';
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import {
  bgWhy,
  bgWhyMob,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
} from '../../assets/why';
import { Text } from '../../components';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import {
  BoxContent,
  BoxData,
  Container,
  Content,
  Section,
  Swiper,
} from './styles';

const Why: React.FC = () => {
  const { isDesktop } = useWindowSize();

  const data = [
    // {
    //   image: icon1,
    //   description:
    //     'Financiamento com a construtora em até 180 meses',
    // },
    {
      image: icon2,
      description: 'Terrenos bem localizados e com alta demanda',
    },
    {
      image: icon3,
      description:
        'Retorno do investimento a médio e longo prazo',
    },
    {
      image: icon4,
      description:
        'Valorização dos imóveis com correção futura de preços e insumos',
    },
    {
      image: icon5,
      description:
        'Investimento em tijolo é resiliente à crises',
    },
  ];

  return (
    <Section data-header="whyInvest">
      <Container>
        <Content>
          <Text
            as="h2"
            variant={isDesktop ? 'h2Desktop' : 'h2Mobile'}
            color={theme.colors.white}
          >
            Porque escolher um Trisul
          </Text>

          <BoxContent>
            {isDesktop ? (
              data.map(item => (
                <BoxData key={item.description}>
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.description}
                  />

                  <Text variant="bodyWhy">
                    {item.description}
                  </Text>
                </BoxData>
              ))
            ) : (
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                autoHeight
              >
                <SwiperSlide>
                  {data.slice(0, 3).map(item => (
                    <BoxData key={item.description}>
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.description}
                      />

                      <Text
                        variant={
                          isDesktop ? 'bodyWhy' : 'titleCards'
                        }
                        fontWeight={300}
                      >
                        {item.description}
                      </Text>
                    </BoxData>
                  ))}
                </SwiperSlide>

                <SwiperSlide>
                  {data.slice(3, 5).map(item => (
                    <BoxData key={item.description}>
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.description}
                      />

                      <Text
                        variant={
                          isDesktop ? 'bodyWhy' : 'titleCards'
                        }
                        fontWeight={300}
                      >
                        {item.description}
                      </Text>
                    </BoxData>
                  ))}
                </SwiperSlide>
              </Swiper>
            )}
          </BoxContent>
        </Content>

        <img
          loading="lazy"
          src={isDesktop ? bgWhy : bgWhyMob}
          alt="Background prédios"
        />
      </Container>
    </Section>
  );
};

export default Why;
