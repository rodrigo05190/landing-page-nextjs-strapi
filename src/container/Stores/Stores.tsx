import { ReactNode } from 'react';
import { Opportunities } from '..';
import { Container } from '../../components';
import { Section } from './styles';

interface StoresProps {
  children: ReactNode;
}

const Stores: React.FC<StoresProps> = ({ children }) => {
  return (
    <>
      <Container>
        <Opportunities />
      </Container>

      <Section>{children}</Section>
    </>
  );
};

export default Stores;
