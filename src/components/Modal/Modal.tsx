import React, { ReactNode, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { bgModal, logoModalDesk } from '../../assets/modal';
import { useWindowSize } from '../../providers';
import {
  ButtonClose,
  Container,
  Content,
  Section,
} from './styles';

interface ModalProps {
  open: boolean;
  children: ReactNode;
  expo: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  children,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.cssText = open
      ? 'overflow: hidden; position:fixed; width: 100%'
      : '';
  }, [open]);

  const { isDesktop } = useWindowSize();
  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!open) {
    return <></>;
  }

  return (
    <Section>
      <Container data-aos="zoom-out" data-aos-duration="500">
        <ButtonClose onClick={onClose}>
          <FiX />
        </ButtonClose>

        <Content>
          <img
            loading="lazy"
            src={logoModalDesk}
            alt="Logo Trisul"
          />

          {isDesktop && (
            <img
              loading="lazy"
              src={bgModal}
              alt="Background trama"
            />
          )}

          {children}
        </Content>
      </Container>
    </Section>
  );
};

export default Modal;
