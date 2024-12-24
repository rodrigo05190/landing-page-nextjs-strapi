import React from 'react';
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import {
  bgPoints,
  logoSuites360,
  logoSuites360Mobile,
} from '../../assets/suites360';
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  imageDesk,
  imageMob,
} from '../../assets/suites360Complete';
import { Text } from '../../components';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import {
  Box360,
  BoxBorder,
  BoxData,
  BoxHighlight,
  Card,
  Container,
  Content,
  Header,
  Location,
  Section,
  Swiper,
} from './styles';
export { bgPoints } from '../../assets/suites360';

const Suites360Complete: React.FC = () => {
  const { isDesktop } = useWindowSize();

  const data = [
    {
      image: icon1,
      title: '360 Decor',
      description:
        'Consultoria para projeto, design e padronização da unidade',
    },
    {
      image: icon2,
      title: 'Distribuição de Vendas',
      description:
        'Preciﬁcação inteligente e distribuição de vendas automatizada.',
    },
    {
      image: icon3,
      title: 'Estrutura de Atendimento',
      description:
        'Atendimento 24/7 para clientes ﬁnais (hóspedes).',
    },
    {
      image: icon4,
      title: 'Gerenciamento de Operações',
      description:
        'Gestão completa de limpeza, inspeção e manutenção do ativo.',
    },
    {
      image: icon5,
      title: 'Portal do Investidor',
      description:
        'Resultados em tempo real de forma segura e transparente.',
    },
  ];

  const Highlight = (
    <BoxHighlight>
      {isDesktop ? (
        <img
          loading="lazy"
          src={imageDesk}
          alt="Imagem Desktop"
        />
      ) : (
        <img loading="lazy" src={imageMob} alt="Imagem Mobile" />
      )}
    </BoxHighlight>
  );

  return (
    <Section data-header="360Suites">
      {isDesktop && Highlight}

      <Container>
        {isDesktop && (
          <img
            loading="lazy"
            src={bgPoints}
            alt="Background pontilhado"
          />
        )}

        <Content>
          <Header>
            <Text
              as="h2"
              variant={isDesktop ? 'h2Desktop' : 'h2Mobile'}
            >
              360 Suítes
            </Text>

            {!isDesktop && Highlight}

            <Text>
              <strong>Solução completa</strong> de administração
              do seu imóvel. Custo-benefício aos clientes finais
              e rentabilidade sem dor de cabeça aos proprietários
              investidores. Tudo isso através de uma operação
              orientada por tecnologia.
            </Text>

            <Location as="h3" variant="h3Desktop">
              Rentabilize o seu ativo <strong>35%</strong> a mais
              em comparação às locações tradicionais.*
            </Location>
          </Header>

          <BoxData>
            {isDesktop ? (
              data.map(item => (
                <BoxBorder key={item.title}>
                  <Card>
                    <img
                      loading="lazy"
                      src={item.image}
                      alt=""
                    />

                    <Text as="h4" variant="spanBold">
                      {item.title}
                    </Text>

                    <Text as="p" variant="body">
                      {item.description}
                    </Text>
                  </Card>
                </BoxBorder>
              ))
            ) : (
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                slidesPerView={1}
                autoHeight
              >
                {data.map(item => (
                  <SwiperSlide key={item.title}>
                    <BoxBorder>
                      <Card>
                        <img src={item.image} alt="" />

                        <Text as="h4" variant="spanBold">
                          {item.title}
                        </Text>

                        <Text as="p" variant="bodyNav">
                          {item.description}
                        </Text>
                      </Card>
                    </BoxBorder>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <Box360>
              <img
                loading="lazy"
                src={
                  isDesktop ? logoSuites360 : logoSuites360Mobile
                }
                alt="Logo 360 suites"
              />

              <Text
                as="h3"
                variant="titleCards"
                color={theme.colors.white}
              >
                Rentabilidade otimizada sem dor de cabeça.
              </Text>
            </Box360>
            <Text variant="bodyLegends">
              *Dados fornecidos pela 360 suites
            </Text>
          </BoxData>
        </Content>
      </Container>
    </Section>
  );
};

export default Suites360Complete;
