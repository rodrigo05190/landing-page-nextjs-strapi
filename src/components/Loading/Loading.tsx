import React from 'react';
import { PulseLoader } from 'react-spinners';
import theme from '../../theme';
import Box from '../Box';

const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
    >
      <PulseLoader color={theme.colors.green.dark} />
    </Box>
  );
};

export default Loading;
