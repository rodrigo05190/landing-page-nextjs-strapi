import React from 'react';
import {
  LogoTrisulMalls,
  bgTrisulMallsDesk,
  bgTrisulMallsMob,
} from '../../assets/trisul';
import { Text } from '../../components';
import { useWindowSize } from '../../providers';
import {
  BoxLogo,
  BoxText,
  Container,
  ContainerTrisul,
  Section,
} from './styles';

const Trisul: React.FC = () => {
  const { isDesktop } = useWindowSize();

  return (
    <Section>
      {isDesktop ? (
        <img
          loading="lazy"
          src={bgTrisulMallsDesk}
          alt="Background Desktop"
        />
      ) : (
        <img
          loading="lazy"
          src={bgTrisulMallsMob}
          alt="Background Mobile"
        />
      )}

      <Container>
        <ContainerTrisul>
          <BoxLogo>
            <img
              loading="lazy"
              src={LogoTrisulMalls}
              alt="Logo Trisul malls e properties"
            />
          </BoxLogo>

          <BoxText>
            <Text variant="body">
              Com a experiência da Trisul em residenciais e mais
              de 40 anos de história, agora a Trisul é também
              Trisul Malls & Properties. Uma marca que veio para
              oferecer espaços multifuncionais e localização
              privilegiada para quem deseja investir ou
              empreender!
            </Text>
          </BoxText>
        </ContainerTrisul>
      </Container>
    </Section>
  );
};

export default Trisul;
