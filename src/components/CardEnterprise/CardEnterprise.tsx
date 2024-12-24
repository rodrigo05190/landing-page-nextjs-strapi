import Link from 'next/link';
import React from 'react';
import { Button as ButtonProps, Product } from '../../@types';
import {
  iconCalendar,
  iconPlan,
} from '../../assets/cardEnterprise';
import { markdownToHtml } from '../../helpers';
import Button from '../Button';
import Text from '../Text/Text';
import {
  BoxDescription,
  BoxEmpty,
  BoxImage,
  BoxInfoIcon,
  BoxLabel,
  BoxPartnership,
  ContainerCard,
  ImageEnterprise,
  Title,
} from './styles';

const CardEnterprise: React.FC<
  Product & { button: ButtonProps }
> = ({
  button,
  deliveryDate,
  enterprise,
  image,
  label,
  meters,
  partnership,
  title,
  url,
  occupation,
}) => {
  return (
    <Link href={button.href} passHref>
      <ContainerCard>
        <BoxImage>
          {occupation && (
            <span>Ocupação média de {occupation}%</span>
          )}

          <img
            loading="lazy"
            src={
              image?.original ??
              'https://placehold.co/350x238/E5E5E5/FFF'
            }
            alt={url}
          />

          {enterprise && (
            <ImageEnterprise
              src={enterprise.original}
              alt={url}
            />
          )}

          {label && (
            <BoxLabel>
              <Text variant="bodyNav">{label}</Text>
            </BoxLabel>
          )}
        </BoxImage>

        <BoxDescription>
          <Title variant="titleCards">
            {markdownToHtml(title)}
          </Title>

          <BoxInfoIcon>
            <img
              loading="lazy"
              src={iconCalendar}
              alt="Icone Calendário"
            />

            <Text as="span">{deliveryDate}</Text>
          </BoxInfoIcon>

          <BoxInfoIcon>
            <img
              loading="lazy"
              src={iconPlan}
              alt="Icone Planta"
            />

            <Text as="span">{meters}</Text>
          </BoxInfoIcon>
        </BoxDescription>

        {partnership?.image ? (
          <BoxPartnership>
            <Text variant="bodyNav">Parceria</Text>

            <img
              loading="lazy"
              src={partnership.image?.original}
              alt={partnership.title}
            />
          </BoxPartnership>
        ) : (
          <BoxEmpty></BoxEmpty>
        )}

        <Button mt={24} size="full">
          {button.label}
        </Button>
      </ContainerCard>
    </Link>
  );
};

export default CardEnterprise;
