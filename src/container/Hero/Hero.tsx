import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { Hero as HeroProps } from '../../@types';
import { iconHero } from '../../assets/hero';
import { Button, Text } from '../../components';
import { markdownToHtml } from '../../helpers';
import { goNextSection, useWindowSize } from '../../providers';
import {
  BoxHero,
  ContainerHero,
  Section,
  TitleHero,
} from './styles';

const Hero: React.FC<HeroProps> = ({
  button,
  label,
  title,
  image,
  imageMobile,
}) => {
  const { isDesktop } = useWindowSize();

  return (
    <Section
      image={isDesktop ? image.original : imageMobile.original}
    >
      <ContainerHero>
        <TitleHero
          as="h1"
          variant={isDesktop ? 'h1Desktop' : 'h2Mobile'}
        >
          {markdownToHtml(title)}
        </TitleHero>

        <BoxHero>
          <img
            loading="lazy"
            src={iconHero}
            alt="Icone Trisul"
          />

          <Text as="span" variant="spanBold">
            {label}
          </Text>
        </BoxHero>

        <Button
          mt={24}
          size="small"
          onClick={() => goNextSection('studios')}
        >
          <>
            {button}

            <FiArrowDown size={25} />
          </>
        </Button>
      </ContainerHero>
    </Section>
  );
};

export default Hero;
