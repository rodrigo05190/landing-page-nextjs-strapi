import React, { useState } from 'react';
import { Image } from '../../@types';
import {
  bgLinhasPlans,
  iconTrisulPlans,
} from '../../assets/plans';
import {
  Button,
  ExpoModal,
  Modal,
  SwiperDetails,
  Text,
} from '../../components';
import { ContactForm } from '../../forms';
import { useWindowSize } from '../../providers';
import { BoxPlan, Container, Content, Section } from './styles';

interface PlansProps {
  data: Image[];
}

const Plans: React.FC<PlansProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const { isDesktop } = useWindowSize();

  return (
    <>
      <Section>
        <img
          loading="lazy"
          src={bgLinhasPlans}
          alt="Background quadriculado"
        />
        <Container>
          {isDesktop && (
            <Text as="h2" variant="h2Desktop">
              Confira as plantas do empreendimento.
            </Text>
          )}
          <Content>
            {!isDesktop && (
              <Text as="h2" variant="h2Desktop">
                Confira as plantas do empreendimento.
              </Text>
            )}
            <BoxPlan>
              <SwiperDetails data={data} />
            </BoxPlan>

            <Button
              color="greenDark"
              size="big"
              onClick={() => setOpenModal(true)}
            >
              Quero saber mais
            </Button>
          </Content>
          <img
            loading="lazy"
            src={iconTrisulPlans}
            alt="Icone Trisul"
          />
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

export default Plans;
