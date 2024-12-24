import React from 'react';
import { Localization } from '../../@types';
import { Button, Map, Text } from '../../components';
import { Details, Section } from './styles';

const InternalLocalization: React.FC<Localization> = ({
  id,
  latitude,
  longitude,
  neighborhood,
  number,
  state,
  street,
}) => {
  const redirectToGoogleMaps = () =>
    window.open(
      `https://www.google.com/maps/dir/Current+Location/${latitude},${longitude}`,
      '_blank',
    );

  return (
    <Section>
      <Map
        zoom={16}
        data={{
          id,
          latitude,
          longitude,
        }}
      />

      <Details>
        <div>
          <Text>
            {street}, {number}
          </Text>

          <Text>
            {neighborhood} - {state}
          </Text>
        </div>

        <Button
          color="greenDark"
          size="full"
          onClick={redirectToGoogleMaps}
        >
          Como chegar
        </Button>
      </Details>
    </Section>
  );
};

export default InternalLocalization;
