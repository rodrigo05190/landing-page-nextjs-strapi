import Link from 'next/link';
import React from 'react';
import {
  FolhaDesk,
  FolhaMobi,
  seloEsgNegativo,
} from '../../assets/download';
import { Container } from '../../components';
import { useWindowSize } from '../../providers';
import { Section, Sobre } from './styles';

const Download: React.FC = () => {
  const { isDesktop } = useWindowSize();

  return (
    <Section>
      <Container>
        <img loading="lazy" src={seloEsgNegativo} alt="" />

        <Sobre>
          <p>
            Saiba mais sobre os nossos programas e ações que
            estabelecem um padrão de sustentabilidade nos
            canteiros de obras e na comunidade do entorno dos
            empreendimentos.
          </p>

          <Link href="/files/RelatorioESG.pdf" passHref>
            <a target="_blank" rel="noopener noreferrer">
              BAIXAR PDF
            </a>
          </Link>
        </Sobre>
      </Container>

      <img
        loading="lazy"
        src={isDesktop ? FolhaDesk : FolhaMobi}
        alt="folha"
      />
    </Section>
  );
};

export default Download;
