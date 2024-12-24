import React, { ReactElement, useState } from 'react';
import Brand from '../Brand';
import { Btn, BtnProps } from './styles';

interface ButtonProps extends BtnProps {
  children: string | ReactElement;
  disabled?: boolean;
  icon?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  icon,
  size,
  onClick,
  mt,
  mb,
  color,
}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Btn
      disabled={disabled}
      size={size}
      type="submit"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={onClick}
      mt={mt}
      mb={mb}
      color={color}
    >
      {children} {icon && <Brand />}
    </Btn>
  );
};

export default Button;
