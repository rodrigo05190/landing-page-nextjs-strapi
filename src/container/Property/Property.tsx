import { useEffect } from 'react';
import { PropertiesEntity } from '../../@types';
import { Container, SwiperMain } from '../../components';
import { Section, SubTitle, Title } from './styles';
import { goNextSection } from '../../providers';

const Property: React.FC<
  PropertiesEntity & { type: 'studios' | 'lojas' }
> = ({ city, region, products, type }) => {
  const label = type === 'studios' ? 'IMÓVEIS' : 'LOJAS';
  let departamento = label + region
  departamento = departamento.toLowerCase().replace('ó', 'o').replace(' ', '')

  useEffect(() => {
    let anchor = document.location.hash.replace('#', '')
    if(anchor != '') {
      goNextSection(anchor);
    }
  })

  return (
    <Section data-header={departamento}>
      <Container>
        <Title variant="h2Desktop">
          {type === 'studios' && (
            <>
              Invista em <span>{label}</span> na {region}
            </>
          )}
          {type === 'lojas' && (
            <>
              Invista em <span>{label}</span> da TRISUL
            </>
          )}
        </Title>

        {city != '' && (
          <SubTitle variant="body"> de {city}</SubTitle>
        )}

      </Container>

      <SwiperMain
        data={products.map(item => ({
          ...item,
          button: {
            label: 'Garanta sua unidade',
            href: `/${
              type === 'studios' ? 'studios' : 'lojas'
            }/${item.url}`,
          },
        }))}
      />
    </Section>
  );
};

export default Property;
