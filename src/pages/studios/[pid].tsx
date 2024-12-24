import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Studios } from '../../@types';
import Layout from '../../Layout';
import {
  chat,
  email,
  telefone,
  whatsapp,
} from '../../assets/actionsFloating';
import {
  ActionsFloating,
  ExpoModal,
  Loading,
  Modal,
} from '../../components';
import { ProductContext } from '../../components/contexts/ProductContext';
import {
  About,
  Benefits,
  Contact,
  InternalHero,
  InternalLocalization,
  Suites360Complete,
  Suites360Small,
} from '../../container';
import {
  ChatForm,
  ContactForm,
  EmailForm,
  PhoneForm,
  WhatsAppForm,
} from '../../forms';

interface StudiosProps {
  data?: any;
}


const StudiosPage: NextPage = ({data}:StudiosProps) => {
  
  const [openModal, setOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState('');
  const [loading, setLoading] = useState(false);
  const product = useContext(ProductContext);

  useEffect(() => {
    product.setProduct(data);
  }, []);

  const modals: any = {
    contact: <ContactForm id_produto={data?.hubid} />,
    email: <EmailForm id_produto={data?.hubid} />,
    chat: <ChatForm id_produto={data?.hubid} />,
    whatsapp: <WhatsAppForm id_produto={data?.hubid} />,
    phone: <PhoneForm id_produto={data?.hubid} />,
  };

  const handleOpenModal = (value: string) => {
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
      icon: chat,
      label: 'Fale com um corretor',
      action: () => handleOpenModal('chat'),
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

  return (
    <Layout {...data?.seo}>
      <InternalHero {...data?.hero!} />

      {data?.is360 && (
        <LazyLoad offset={100}>
          <Suites360Small />
        </LazyLoad>
      )}

      <LazyLoad offset={100}>
        <Benefits
          {...data?.benefits!}
          type="studios"
          characteristics={data?.characteristics!}
        />
      </LazyLoad>

      <LazyLoad offset={100}>
        <InternalLocalization {...data?.localization!} />
      </LazyLoad>

      <LazyLoad offset={100}>
        <About
          about={data?.about!}
          commonAreas={data?.commonAreas!}
          plans={data?.plans!}
        />
      </LazyLoad>

      {data?.is360 && (
        <LazyLoad offset={100}>
          <Suites360Complete />
        </LazyLoad>
      )}

      <LazyLoad offset={100}>
        <Contact name={data?.name} gtag={data?.gtag} />
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

export default StudiosPage;



export async function getServerSideProps( context:any ) {
  const { query } = context;
  const slug = query.pid || '';
  const api = `https://api-trisul-studios.dev.id360.net/api/products/${slug}`
  
  const response = await fetch(api);
  const data:Studios = await response.json();
  
  return {
    props: {
      data
    },
  };
}