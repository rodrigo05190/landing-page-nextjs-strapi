import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { logoTrisul } from '../../assets/navigation';
import { EmailForm } from '../../forms';
import { goNextSection, useWindowSize } from '../../providers';
import ReactGA from 'react-ga';
import ExpoModal from '../ExpoModal/ExpoModal';
import Modal from '../Modal/Modal';
import Text from '../Text';
import {
  Aside,
  BoxBrand,
  BoxContainer,
  ButtonMobile,
  ButtonNav,
  Container,
  Nav,
} from './styles';

const Navigation: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isDesktop } = useWindowSize();
  const { pathname, push } = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    document.body.style.overflow = openMenu
      ? 'hidden'
      : 'visible';
  }, [openMenu]);

  useEffect(() => {
    const section = window.localStorage.getItem('goSection');

    setTimeout(() => {
      if (section) {
        goNextSection(section);
      }
    }, 100);

    setTimeout(() => {
      window.localStorage.removeItem('goSection');
    }, 4000);
  }, []);

  const Brand = (
    <BoxBrand href="/">
      <a>
        <img
          loading="lazy"
          src={logoTrisul}
          alt="Trisul investimentos"
        />
      </a>
    </BoxBrand>
  );

  const dataMenu = [
    {
      key: 'studios',
      label: 'Studios',
    },
    {
      key: 'stores',
      label: 'Lojas',
    },
    {
      key: 'whyInvest',
      label: 'Porque Investir',
    },
    {
      key: '360Suites',
      label: '360 Suítes',
    },
    {
      key: 'numbers',
      label: 'Quem Somos',
    },
    {
      key: 'contact',
      label: 'Contato',
    },
  ];

  const handleClick = (key: string) => {
    setOpenMenu(false);

    !isHome && window.localStorage.setItem('goSection', key);

    isHome ? goNextSection(key) : push('/');
  };

  const handleOpenModal = () => {
    (window as any).gtag('event', 'conversion', {
      'allow_custom_scripts': true,
      'send_to': 'DC-14614934/invmedia/start0+standard'
    });
    
    setOpenMenu(false);
    setOpenModal(true);
  };

  const Navigation = (
    <Nav>
      {dataMenu.map(menu => {
        if (menu.key === 'contact') {
          return (
            <ButtonNav
              key={menu.key}
              isContact
              onClick={() => handleOpenModal()}
            >
              {menu.label}
            </ButtonNav>
          );
        }

        return (
          <ButtonNav
            key={menu.key}
            onClick={() => handleClick(menu.key)}
          >
            {menu.label}
          </ButtonNav>
        );
      })}
    </Nav>
  );

  const ToggleMenu = (
    <ButtonMobile
      isOpen={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <Text variant="bodyNav">menu</Text>

      {openMenu ? <FiX size={18} /> : <FiMenu size={18} />}
    </ButtonMobile>
  );

  const Mobile = (
    <BoxContainer>
      <Container>
        {Brand}

        {ToggleMenu}

        <Aside isOpen={openMenu}>
          <header>
            <img
              loading="lazy"
              src={logoTrisul}
              alt="Trisul Investimentos"
            />

            {ToggleMenu}
          </header>

          {Navigation}
        </Aside>
      </Container>
    </BoxContainer>
  );

  const Desktop = (
    <BoxContainer>
      <Container>
        {Brand}

        {Navigation}
      </Container>
    </BoxContainer>
  );

  return (
    <>
      {isDesktop ? Desktop : Mobile}

      <Modal
        open={openModal}
        expo={<ExpoModal />}
        onClose={() => setOpenModal(false)}
      >
        <EmailForm />
      </Modal>
    </>
  );
};

export default Navigation;
