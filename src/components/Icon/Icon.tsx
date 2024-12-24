import React from 'react';
import { Icons } from '../../@types';

interface IconProps {
  name: Icons;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <i className={`icon-${name}`} />;
};

export default Icon;
