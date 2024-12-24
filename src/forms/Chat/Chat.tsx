import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import ReactGA from 'react-ga';
import PulseLoader from 'react-spinners/PulseLoader';
import { IdProduct } from '../../@types';
import {
  Box,
  Button,
  Select,
  Text,
  TextField,
  ValidationProps,
} from '../../components';
import { Btn } from '../../components/Button/styles';
import { ProductContext } from '../../components/contexts/ProductContext';
import { config, getHubId, getUser, useWindowSize } from '../../providers';
import sendEvents from '../../providers/mutate/sendEvent';
import theme from '../../theme';
import initialValues, {
  TypesInitalProps,
} from './initialValues';
import useValidations from './validations';
import { HubidContext } from '../../components/contexts/HubidContext';
import sendOrigin from '../../providers/mutate/sendOrigin';

const Chat: React.FC<IdProduct> = ({ id_produto }, gtag) => {
  const session = useContext(HubidContext);
  const [loading, setLoading] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [onFailure, setOnFailure] = useState(false);
  const { isDesktop } = useWindowSize();
  const { product } = useContext(ProductContext);

  const onSubmit = async (values: any) => {
    setLoading(true);
    const origin = sendOrigin();
    if(!session.origem){
      session.origem = origin.origem;
      session.pagina = origin.pagina;
      session.referencia = origin.referencia;
      session.referencia_raw = origin.referencia_raw;
    }

    try {
      const response = await axios.post(
        `https://trisul.controleid360.com.br/api/lead/chat`,
        {
          ...values,
          ...config,
          ...session,
          id_produto: id_produto ?? session.id_produto,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNT0JJTEUifQ.lnMyKO6Mdt0WJnSNajTznnq2DrGyixH-VWEolJd7Qm7ezWFEdvuwjk22YuaKyFYKfyp3Y4V81rqwcwJGxXVHRQ',
          },
        },
      );

      window.open(response.data.url, '_blank');

      (window as any).gtag('event', 'conversion', {
        'allow_custom_scripts': true,
        'send_to': 'DC-14614934/invmedia/endfo0+standard'
      });

      (window as any).dataLayer.push({
        event: 'Sucesso Chat',
      });

      if (product?.gtag) {
        if(window.location.pathname == '/studios/isla-vila-madalena') {

          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-11093319275/lxz4CJDz2v4YEOu82qkp',
            send_id: 'AW-11093319275',
          });

        } else if(window.location.pathname == '/studios/horizon-studios') {

          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-11093319275/b5hyCLKpz_8YEOu82qkp',
            send_id: 'AW-11093319275',
          });

        } else {

          (window as any).gtag('event', 'conversion', {
            send_to: product.gtag,
            send_id: 'AW-11093319275',
          });

        }        
      }

      sendEvents({
        type: 'lead',
        user_id: session.historico_id,
        lead_id: response.data.lead_id,
      });

      setOnSuccess(true);
    } catch (error) {
      setOnFailure(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
      >
        <PulseLoader color={theme.colors.green.dark} />
      </Box>
    );
  }

  if (onSuccess) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
        color={theme.colors.green.dark[1]}
        gridGap={24}
      >
        <Text variant="h2Mobile">Conversa iniciada!</Text>
        <Text variant="h2Mobile" max-width={300}>
          Uma nova janela foi aberta. Caso não a visualize,
          desative o bloqueador de popup e tente novamente.
        </Text>

        <Button
          size="small"
          color="greenDarkForm"
          onClick={() => setOnSuccess(false)}
        >
          VOLTAR
        </Button>
      </Box>
    );
  }

  if (onFailure) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50vh"
        color={theme.colors.green.dark[1]}
        gridGap={24}
      >
        <Text variant="h2Mobile">
          Ops... não foi possível iniciar a conversa!
        </Text>
        <Text variant="h2Mobile">
          Por favor, tente novamente.
        </Text>

        <button onClick={() => setOnFailure(false)}>
          TENTAR NOVAMENTE
        </button>
      </Box>
    );
  }

  return (
    <>
      {!isDesktop && (
        <Text mb={24} color={theme.colors.green.dark}>
          Fale com um corretor Trisul.
        </Text>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={useValidations()}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched }) => {
          const getStatus = (name: TypesInitalProps) => {
            return {
              isValid: !errors[name] && touched[name],
              isError: errors[name] && touched[name],
            } as ValidationProps;
          };

          const contactTypes = [
            {
              value: 'Email',
              label: 'E-mail',
            },
            {
              value: 'Whatsapp',
              label: 'Whatsapp',
            },
            {
              value: 'Chat',
              label: 'Chat',
            },
            {
              value: 'Telefone',
              label: 'Telefone',
            },
          ];

          return (
            <Form name="chat" data-hubid-form="mensagem">
              <>
                <Select
                  name="tipo_contato"
                  label="Por qual canal podemos conversar?"
                  options={contactTypes}
                />

                <TextField
                  name="Nome"
                  label="Qual o seu nome?"
                  status={() => getStatus('Nome')}
                />

                <TextField
                  name="Email"
                  label="Poderia nos informar um e-mail?"
                  status={() => getStatus('Email')}
                />

                <TextField
                  name="Telefone"
                  label="E um telefone para contato?"
                  mask="(99) 99999-9999"
                  status={() => getStatus('Telefone')}
                />

                <Btn
                  mt={3}
                  size="full"
                  color="greenDarkForm"
                  type="submit"
                >
                  Iniciar chat
                </Btn>
              </>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Chat;
