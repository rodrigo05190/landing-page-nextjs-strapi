import React, { useState } from 'react';
import {
  bgPoints,
  logoSuites360,
  logoSuites360Mobile,
  trisulIcon,
  trisulIconMobile,
} from '../../assets/suites360';
import { Button, Text } from '../../components';
import { goNextSection, useWindowSize } from '../../providers';
import { BoxTitle, Container, Section } from './styles';

const Suites360Small: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isDesktop } = useWindowSize();

  return (
    <Section>
      <Container>
        {isDesktop && (
          <img
            loading="lazy"
            src={bgPoints}
            alt="Background pontilhado"
          />
        )}

        <BoxTitle>
          <img
            loading="lazy"
            src={isDesktop ? logoSuites360 : logoSuites360Mobile}
            alt="Logo 360 suites"
          />

          <div>
            <Text variant="h3Desktop" mb={16}>
              A 360 Suítes cuida da administração do seu imóvel
            </Text>

            {isDesktop && (
              <Button
                size="large"
                color="orange"
                onClick={() => goNextSection('360Suites')}
              >
                Conheça
              </Button>
            )}
          </div>
        </BoxTitle>

        {!isDesktop && (
          <Button
            size="large"
            color="orange"
            onClick={() => goNextSection('360Suites')}
          >
            Conheça
          </Button>
        )}
      </Container>

      <img
        loading="lazy"
        src={isDesktop ? trisulIcon : trisulIconMobile}
        alt="Ícone Trisul"
      />
    </Section>
  );
};

export default Suites360Small;
