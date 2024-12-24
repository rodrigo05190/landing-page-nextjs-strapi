import React, { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { PulseLoader } from 'react-spinners';
import { Navigation, Pagination } from 'swiper';
import {
  Benefits as BenefitsProps,
  Characteristics,
  PropertyTypes,
} from '../../@types';
import {
  Box,
  Button,
  Container,
  ExpoModal,
  Icon,
  Modal,
  Text,
} from '../../components';
import { ContactForm } from '../../forms';
import { markdownToHtml } from '../../helpers';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import {
  Before,
  Block,
  CloseTo,
  Content,
  Pin,
  Section,
  Swiper,
  SwiperContainer,
  SwiperSlide,
} from './styles';

interface BenefitsContainerProps extends BenefitsProps {
  type: PropertyTypes;
  characteristics: Characteristics[];
}

const Benefits: React.FC<BenefitsContainerProps> = ({
  title,
  text,
  type,
  characteristics,
}) => {
  const { isDesktop } = useWindowSize();

  const textButton =
    type === 'studios'
      ? 'Garanta a sua unidade'
      : 'Garanta a sua loja';

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [isDesktop]);

  return (
    <>
      <Section>
        <Container>
          <Text
            as="h2"
            variant={isDesktop ? 'h2Desktop' : 'h2Mobile'}
            mb={24}
            color={theme.colors.green.dark}
          >
            {title}
          </Text>
        </Container>

        <Block>
          <Before />
          <Content>
            <div>
              <Text mb={32}>{text && markdownToHtml(text)}</Text>

              {characteristics.length > 0 && (
                <>
                  <Text variant="titleCards" mb={24}>
                    Você encontra próximo ao empreendimento
                  </Text>

                  {loading ? (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      height={156}
                    >
                      <PulseLoader color={theme.colors.white} />
                    </Box>
                  ) : (
                    <SwiperContainer>
                      <Swiper
                        autoHeight={!isDesktop}
                        pagination={{ dynamicBullets: true }}
                        slidesPerView={isDesktop ? 4 : 1}
                        modules={[Pagination, Navigation]}
                        navigation={isDesktop}
                        spaceBetween={32}
                      >
                        {characteristics?.map(item => (
                          <SwiperSlide key={item.type}>
                            <CloseTo>
                              <Icon name={item.type} />

                              <div>
                                {item.descriptions?.map(text => (
                                  <Text key={text.description}>
                                    {text.description}
                                  </Text>
                                ))}
                              </div>
                            </CloseTo>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </SwiperContainer>
                  )}
                </>
              )}

              <Button
                size="large"
                color="white"
                onClick={() => setOpenModal(true)}
                mt={22}
              >
                {textButton}
              </Button>
            </div>

            {isDesktop && (
              <Pin>
                <FiMapPin />
              </Pin>
            )}
          </Content>
        </Block>
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

export default Benefits;
