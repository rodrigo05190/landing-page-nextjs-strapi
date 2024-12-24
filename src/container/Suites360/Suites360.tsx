import React, { useState } from 'react';
import { Pagination } from 'swiper';
import {
  bgPoints,
  icon1,
  icon2,
  icon3,
  logoSuites360,
  logoSuites360Mobile,
  trisulIcon,
  trisulIconMobile,
} from '../../assets/suites360';
import {
  Button,
  ExpoModal,
  Modal,
  Text,
} from '../../components';
import { ContactForm } from '../../forms';
import { useWindowSize } from '../../providers';
import {
  BoxContent,
  BoxData,
  BoxIcon,
  BoxTitle,
  Container,
  Section,
  Swiper,
  SwiperSlide,
} from './styles';

const Suites360: React.FC = () => {
  const { isDesktop } = useWindowSize();

  const data = [
    {
      image: icon1,
      title: 'Rentabilidade Otimizada',
      description:
        'Seu apartamento renderá, em média, 37% a mais com locações de curta temporada em comparação às locações tradicionais.',
    },
    {
      image: icon2,
      title: 'Estudo de Rentabilidade',
      description:
        'Pesquisa sobre a região, o mercado de locação e projeção de ganhos.',
    },
    {
      image: icon3,
      title: 'Precificação Inteligente',
      description:
        'Algoritmo desenvolvido internamente para preciﬁcação dos ativos visando ﬂutuações automatizadas de acordo com os picos de demanda.',
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Section data-header="360Suites">
        <Container>
          {isDesktop ? (
            <img
              loading="lazy"
              src={bgPoints}
              alt="Background pontilhado"
            />
          ) : (
            ''
          )}
          ,
          <BoxTitle>
            <img
              loading="lazy"
              src={
                isDesktop ? logoSuites360 : logoSuites360Mobile
              }
              alt="Logo 360 suites"
            />

            <Text>
              O parceiro da Trisul que ajuda a rentabilizar o seu
              ativo sem dor de cabeça.
            </Text>
          </BoxTitle>
          <BoxData>
            {isDesktop ? (
              data.map(item => (
                <BoxContent key={item.title}>
                  <BoxIcon>
                    <img
                      loading="lazy"
                      src={item.image}
                      alt=""
                    />

                    <Text as="span" variant="spanBold">
                      {item.title}
                    </Text>
                  </BoxIcon>

                  <Text variant="body">{item.description}</Text>
                </BoxContent>
              ))
            ) : (
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                slidesPerView="auto"
                autoHeight
              >
                {data.map(item => (
                  <SwiperSlide key={item.title}>
                    <BoxContent>
                      <BoxIcon>
                        <img
                          loading="lazy"
                          src={item.image}
                          alt="Icon"
                        />

                        <Text as="span" variant="spanBold">
                          {item.title}
                        </Text>
                      </BoxIcon>

                      <Text variant="body">
                        {item.description}
                      </Text>
                    </BoxContent>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </BoxData>
          <Button
            size="large"
            color="orange"
            onClick={() => setOpenModal(true)}
          >
            Entre em contato
          </Button>
        </Container>

        <img
          loading="lazy"
          src={isDesktop ? trisulIcon : trisulIconMobile}
          alt="Ícone Trisul"
        />
      </Section>

      <Modal
        open={openModal}
        expo={<ExpoModal />}
        onClose={() => setOpenModal(false)}
      >
        <ContactForm />
      </Modal>
    </>
  );
};

export default Suites360;
