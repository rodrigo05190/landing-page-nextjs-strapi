import React from 'react';
import { logoModalDesk, logoModalMob } from '../../assets/modal';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import { Box } from './styles';

const ExpoModal: React.FC = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= theme.breakpoints.desktop.number;

  return (
    <Box>
      <img
        loading="lazy"
        src={isDesktop ? logoModalDesk : logoModalMob}
        alt="Trisul investimentos"
      />
    </Box>
  );
};

export default ExpoModal;
