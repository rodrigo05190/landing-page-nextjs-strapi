import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { Maps, Product } from '../../@types';
import { iconClose, pinMap } from '../../assets/localization';
import { Box, Container, Map, Text } from '../../components';
import CardEnterprise from '../../components/CardEnterprise/CardEnterprise';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import {
  BoxMap,
  ButtonClose,
  CardInfo,
  Content,
  Placeholder,
  Section,
} from './style';

interface LocalizationProps {
  data: Maps | Maps[];
}

const Localization: React.FC<LocalizationProps> = ({ data }) => {
  const { isDesktop } = useWindowSize();
  const [showDetails, setShowDetails] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState<Product>();

  useEffect(() => {
    isDesktop ? setOpen(true) : setOpen(false);
  }, [isDesktop]);

  const handleMap = async (values: Maps) => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `https://api-trisul-studios.dev.id360.net/api/map/${values.slug}`,
      );

      setCard(data);
      setOpen(true);
      setShowDetails(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setShowDetails(false);
  };

  const Details = (
    <Box position="relative">
      <ButtonClose onClick={handleClose}>
        <img loading="lazy" src={iconClose} alt="" />
      </ButtonClose>

      <CardEnterprise
        {...card!}
        button={{
          href: `/${card?.type}/${card?.url}`,
          label: 'Garanta sua unidade',
        }}
      />
    </Box>
  );

  const Instructions = (
    <Placeholder>
      {loading ? (
        <PulseLoader color={theme.colors.green.dark} />
      ) : (
        <CardInfo>
          <Text as="h3" variant="titleCards">
            Clique nos ícones do mapa para exibir informações
          </Text>
          <img loading="lazy" src={pinMap} alt="Pin Mapa" />
        </CardInfo>
      )}
    </Placeholder>
  );

  const Loader = (
    <Placeholder>
      <PulseLoader color={theme.colors.green.dark} />
    </Placeholder>
  );

  return (
    <Section>
      <Container>
        <Text
          variant={isDesktop ? 'h2Desktop' : 'h2Mobile'}
          color={theme.colors.black}
          mb={2}
        >
          Localização privilegiada
        </Text>

        <Text
          variant="body"
          color={theme.colors.gray.medium}
          mb={16}
        >
          Veja onde encontrar seus studios e lojas da Trisul.
        </Text>
      </Container>

      <BoxMap>
        <Map data={data} onClick={handleMap} />

        <Content open={open}>
          {isDesktop ? (
            <>
              {loading
                ? Loader
                : showDetails
                ? Details
                : Instructions}
            </>
          ) : loading ? (
            Loader
          ) : (
            showDetails && Details
          )}
        </Content>
      </BoxMap>
    </Section>
  );
};

export default Localization;
