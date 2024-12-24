import React, { useCallback, useState } from 'react';
import { Pagination } from 'swiper';
import { About as AboutProps, Image } from '../../@types';
import {
  icon1About,
  icon2About,
  icon3About,
  trisulAbout,
} from '../../assets/about';
import {
  Button,
  ExpoModal,
  Modal,
  SwiperDetails,
  Text,
} from '../../components';
import { ContactForm } from '../../forms';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import {
  BoxFacade,
  BoxGallery,
  BoxProfessionals,
  BoxRight,
  BoxSwiper,
  BoxText,
  Btn,
  Card,
  Container,
  ContainerAbout,
  Label,
  Section,
  Swiper,
  SwiperSlide,
} from './styles';

interface AboutContentProps {
  about: AboutProps;
  commonAreas: Image[];
  plans: Image[];
}

const About: React.FC<AboutContentProps> = ({
  about,
  commonAreas,
  plans,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [visitBy, setVisitBy] = useState('commonAreas');
  const { isDesktop } = useWindowSize();

  const designers = [
    {
      image: icon1About,
      title: 'Arquitetônico:',
      description: about.architectural,
      visible: !!about.architectural,
    },
    {
      image: icon2About,
      title: 'Paisagístico:',
      description: about.landscaped,
      visible: !!about.landscaped,
    },
    {
      image: icon3About,
      title: 'Decoração:',
      description: about.decoration,
      visible: !!about.decoration,
    },
  ];

  const RenderSwiperDetails = useCallback(() => {
    if (visitBy === 'commonAreas') {
      return <SwiperDetails data={commonAreas} />;
    }

    return <SwiperDetails data={plans} />;
  }, [visitBy]);

  return (
    <>
      <Section>
        <Container>
          <ContainerAbout>
            <Text as="h2" variant="h2Desktop">
              Sobre o {about.title}
            </Text>

            <Text
              variant="body"
              color={theme.colors.gray.medium}
            >
              Uma nova forma de viver a cidade e fazer tudo a pé.
            </Text>

            <Text as="h3" variant="h3Desktop" mt={32}>
              Projetistas
            </Text>

            <BoxProfessionals>
              {isDesktop ? (
                designers.map(
                  item =>
                    item.visible && (
                      <Card key={item.title}>
                        <img
                          loading="lazy"
                          src={item.image}
                          alt=""
                        />

                        <BoxText>
                          <Text
                            variant="bodyNav"
                            color={theme.colors.gray.medium}
                          >
                            {item.title}
                          </Text>

                          <Text
                            variant="bodyNav"
                            color={theme.colors.gray.medium}
                            fontWeight={900}
                          >
                            {item.description}
                          </Text>
                        </BoxText>
                      </Card>
                    ),
                )
              ) : (
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  slidesPerView="auto"
                  autoHeight
                >
                  {designers.map(item => (
                    <SwiperSlide key={item.title}>
                      <Card key={item.title}>
                        <img
                          loading="lazy"
                          src={item.image}
                          alt=""
                        />

                        <BoxText>
                          <Text
                            variant="bodyNav"
                            color={theme.colors.gray.medium}
                          >
                            {item.title}
                          </Text>

                          <Text
                            variant="bodyNav"
                            color={theme.colors.gray.medium}
                            fontWeight={900}
                          >
                            {item.description}
                          </Text>
                        </BoxText>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </BoxProfessionals>

            <Text as="h3" variant="h3Desktop" mt={32} mb={9}>
              Galeria de imagens
            </Text>

            <BoxGallery>
              <div>
                <Btn
                  onClick={() => setVisitBy('commonAreas')}
                  isActive={visitBy === 'commonAreas'}
                >
                  Áreas Comuns
                </Btn>

                <Btn
                  onClick={() => setVisitBy('plans')}
                  isActive={visitBy === 'plans'}
                >
                  Plantas
                </Btn>
              </div>

              {isDesktop ? (
                <BoxSwiper>
                  <RenderSwiperDetails />
                </BoxSwiper>
              ) : (
                <RenderSwiperDetails />
              )}
            </BoxGallery>

            <Button
              size="full"
              color="greenDark"
              onClick={() => setOpenModal(true)}
            >
              Quero saber mais
            </Button>
          </ContainerAbout>

          <BoxRight>
            <BoxFacade>
              <img
                loading="lazy"
                src={about.facade?.original}
                alt={about.facade?.title}
              />

              <Label>
                <Text variant="bodyLegends">Fachada</Text>
              </Label>
            </BoxFacade>

            <img
              loading="lazy"
              src={trisulAbout}
              alt="Ícone Trisul"
            />
          </BoxRight>
        </Container>
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

export default About;
