import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { HomeProps } from '../@types';
import ReactGA from 'react-ga';
import Layout from '../Layout';
import {
  email,
  telefone,
  whatsapp,
} from '../assets/actionsFloating';
import {
  ActionsFloating,
  ExpoModal,
  Loading,
  Modal,
} from '../components';
import {
  Contact,
  Download,
  Hero,
  Localization,
  Numbers,
  Property,
  Stores,
  Suites360,
  Why,
} from '../container';
import {
  ChatForm,
  ContactForm,
  EmailForm,
  PhoneForm,
  WhatsAppForm,
} from '../forms';

const HomePage: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState('');
  const [data, setData] = useState<HomeProps>();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);

      const { data: dataApi } = await axios.get(
        'https://api-trisul-studios.dev.id360.net/api/home',
      );

      setData(dataApi);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init();

    getData();
  }, []);

  const modals: any = {
    contact: <ContactForm />,
    email: <EmailForm />,
    chat: <ChatForm />,
    whatsapp: <WhatsAppForm />,
    phone: <PhoneForm />,
  };

  const handleOpenModal = (value: string) => {
    (window as any).gtag('event', 'conversion', {
      'allow_custom_scripts': true,
      'send_to': 'DC-14614934/invmedia/start0+standard'
    });
    setOpenModal(true);
    setCurrentModal(value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentModal('');
  };

  const floatings = [
    {
      icon: whatsapp,
      label: 'Fale pelo WhatsApp',
      action: () => handleOpenModal('whatsapp'),
    },
    {
      icon: email,
      label: 'Envie um e-mail',
      action: () => handleOpenModal('email'),
    },
    {
      icon: telefone,
      label: 'Ligamos para você',
      action: () => handleOpenModal('phone'),
    },
  ];

  if (loading) {
    return <Loading />;
  }

  let storeArray: Array<any> = [];

  {{data?.stores.map(store => (
    store.products.map((item: any) => (
      storeArray.push(item)
    ))
  ))}}

  return (
    <Layout {...data?.seo!}>
      <Hero {...data?.hero!} />

      <section data-header="studios">
        {data?.properties.map(property => (
          <Property
            key={property.region}
            type="studios"
            {...property}
          />
        ))}
      </section>

      <div data-header="stores">
          <Stores>
            <Property region={''} city={''} type="lojas" products={storeArray} />
            {/* {data?.stores.map(store => (
            ))} */}
          </Stores>
      </div>

      <div data-header="whyInvest">
        <LazyLoad offset={100}>
          <Why />
        </LazyLoad>
      </div>

      <LazyLoad offset={100}>
        <Localization data={data?.maps!} />
      </LazyLoad>

      <div data-header="360Suites">
        <LazyLoad offset={100}>
          <Suites360 />
        </LazyLoad>
      </div>

      <div data-header="numbers">
        <LazyLoad offset={100}>
          <Numbers />
        </LazyLoad>
      </div>

      <LazyLoad offset={100}>
        <Download />
      </LazyLoad>

      <LazyLoad offset={100}>
        <Contact />
      </LazyLoad>

      <ActionsFloating data={floatings} />

      <Modal
        open={openModal}
        expo={<ExpoModal />}
        onClose={handleCloseModal}
      >
        {modals[currentModal]}
      </Modal>
    </Layout>
  );
};

export default HomePage;
