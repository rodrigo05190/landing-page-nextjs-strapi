import { useRouter } from 'next/router';
import React from 'react';
import { ContactProps } from '../../@types';
import { manContact, womanContact } from '../../assets/contact';
import { bgModal } from '../../assets/modal';
import { Text } from '../../components';
import { ContactForm } from '../../forms';
import { useWindowSize } from '../../providers';
import { BoxForm, Container, Section } from './styles';

const Contact: React.FC<ContactProps> = ({ name, gtag }) => {
  const { isDesktop } = useWindowSize();
  const { pathname } = useRouter();

  const isHome = pathname === '/';

  return (
    <>
      <Section>
        <Container as="section" data-header="contact">
          <header>
            <Text as="h2" variant="h2Desktop">
              Contato
            </Text>

            <Text variant="body">
              Fale com um corretor Trisul.
            </Text>
          </header>

          <BoxForm>
            <ContactForm name={name} gtag={gtag} />
          </BoxForm>

          {isDesktop && (
            <img
              loading="lazy"
              src={bgModal}
              alt="Background trama"
            />
          )}
          {isDesktop && (
            <img
              loading="lazy"
              src={isHome ? womanContact : manContact}
              alt="Imagem contato"
            />
          )}
        </Container>
        <span />
      </Section>
    </>
  );
};

export default Contact;
