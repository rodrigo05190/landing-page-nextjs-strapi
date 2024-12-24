import React from 'react';
import {
  bgLinhas,
  iconTrisul,
  image,
  man,
} from '../../assets/opportunities';
import { Text } from '../../components';
import { useWindowSize } from '../../providers';
import {
  Before,
  Container,
  Content,
  Grid,
  Highlight,
  Section,
} from './styles';

const Benefits: React.FC = () => {
  const { isDesktop } = useWindowSize();

  return (
    <Section>
      <Before />

      <Container>
        {isDesktop && (
          <Grid>
            <img loading="lazy" src={bgLinhas} alt="" />
          </Grid>
        )}

        <Content>
          <Text
            as={isDesktop ? 'h1' : 'h2'}
            variant={isDesktop ? 'h1Desktop' : 'h2Mobile'}
          >
            Oportunidades em{' '}
            <strong>estabelecimentos comerciais.</strong>
          </Text>

          <img loading="lazy" src={image} alt="Imagem loja" />
        </Content>

        <Highlight>
          <img
            loading="lazy"
            src={iconTrisul}
            alt="Icone Trisul"
          />

          <img loading="lazy" src={man} alt="" />
        </Highlight>
      </Container>
    </Section>
  );
};

export default Benefits;
