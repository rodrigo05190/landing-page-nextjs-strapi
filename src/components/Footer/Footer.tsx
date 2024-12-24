import Link from 'next/link';
import React from 'react';
import { Id360, Trisul } from '../../assets/footer';
import { Container } from '../Grid';
import Text from '../Text';
import {
  BoxDescription,
  BoxTrisul,
  Content,
  Section,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Section>
      <Content>
        <Text variant="bodyLegends">
          Consulte nossa política de privacidade acessando este{' '}
          <Link
            href={'https://trisul-sa.com.br/protecao-de-dados'}
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </Link>
          . *Verifique condições e taxas junto a um corretor de
          imóveis ou em um dos nossos stands de vendas.
        </Text>
      </Content>

      <BoxDescription>
        <Container>
          <BoxTrisul>
            <div>
              <img
                loading="lazy"
                src={Trisul}
                alt="Logo Trisul"
              />
              <Text as="h6" variant="bodyLegends">
                © 2023. Todos os direitos reservados.
              </Text>
            </div>

            <Link href="https://id360.com.br/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  src={Id360}
                  alt="ID360 New Media"
                />
              </a>
            </Link>
          </BoxTrisul>
        </Container>
      </BoxDescription>
    </Section>
  );
};

export default Footer;
