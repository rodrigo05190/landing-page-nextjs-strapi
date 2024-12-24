import React, { useState } from 'react';
import { InternalHeroProps } from '../../@types';
import ReactGA from 'react-ga';
import { calendar, plan } from '../../assets/icons';
import {
  Box,
  Button,
  ExpoModal,
  Icon,
  Modal,
  Text,
} from '../../components';
import { ContactForm } from '../../forms';
import {
  Align,
  Bg,
  BoxBlur,
  BoxIcon,
  BoxLabel,
  Container,
  Content,
  Infos,
  Occupation,
  Section,
  Title,
} from './styles';

const InternalHero: React.FC<InternalHeroProps> = ({
  image,
  enterprise,
  label,
  information,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const GAeventButton = () => {
    
    (window as any).gtag('event', 'conversion', {
      'allow_custom_scripts': true,
      'send_to': 'DC-14614934/invmedia/start0+standard'
    });

    setOpenModal(true)
  }

  return (
    <>
      <Section>
        <Bg src={image.original} />

        <Container occupation={!!information.occupation}>
          <Infos>
            {information.occupation && (
              <Occupation>
                <Text>
                  Ocupação média de {information.occupation}%
                </Text>
              </Occupation>
            )}

            <BoxBlur>
              <Content>
                <Box display="flex" gridGap={16} flexWrap="wrap">
                  <Align>
                    <img loading="lazy" src={calendar} />

                    <Text>{information.deliveryDate}</Text>
                  </Align>

                  {information.meters && (
                    <Align>
                      <img loading="lazy" src={plan} />

                      <Text>{information.meters}</Text>
                    </Align>
                  )}
                </Box>

                <Title>{information.title}</Title>

                <Align>
                  <BoxIcon>
                    <Icon
                      name={
                        information.localization.icon ?? 'metro'
                      }
                    />
                  </BoxIcon>

                  <div>
                    <Text fontWeight={900}>
                      {information.localization.title}
                    </Text>
                    <Text>
                      {information.localization.description}
                    </Text>
                  </div>
                </Align>
              </Content>

              <Button
                size="full"
                color="greenDark"
                onClick={() => GAeventButton()}
              >
                Quero uma proposta
              </Button>
            </BoxBlur>
          </Infos>

          {enterprise && (
            <img
              loading="lazy"
              src={enterprise.original}
              alt={enterprise.title}
            />
          )}

          {label && (
            <BoxLabel occupation={!!information.occupation}>
              <Text variant="bodyNav">{label}</Text>
            </BoxLabel>
          )}
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

export default InternalHero;
