import React from 'react';
import { useWindowSize } from '../../providers';
import { BoxIcon, BoxText, Btn, Floating } from './styles';

interface ItemProps {
  icon: string;
  label: string;
  action: () => void;
}

interface ActionsFloatingProps {
  data: ItemProps[];
}

const ActionsFloating: React.FC<ActionsFloatingProps> = ({
  data,
}) => {
  const { isDesktop } = useWindowSize();

  return (
    <Floating>
      {data.map((item: ItemProps) => (
        <Btn key={item.label} onClick={item.action}>
          {isDesktop && (
            <BoxText variant="button">{item.label}</BoxText>
          )}

          <BoxIcon>
            {<img loading="lazy" src={item.icon} />}
          </BoxIcon>
        </Btn>
      ))}
    </Floating>
  );
};

export default ActionsFloating;
