import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import { ProductProvider } from '../components/contexts/ProductContext';
import { ProviderProps, VisitProps } from './@types';
import {
  getUser,
  getVisit,
  setHubId,
  setVisit,
} from './cookies';
import sendEvents from './mutate/sendEvent';
import { getCampaign } from './queries';

const ProviderHubId: React.FC<ProviderProps> = ({
  googleAnalytics,
  googleTagManager,
  hubid,
  children,
  loading,
}) => {
  const [loadingIP, setLoadingIP] = useState(true);
  // const [loadingUser, setLoadingUser] = useState(true);
  const [visitData, setVisitData] = useState<VisitProps | any>(
    {},
  );

  useEffect(() => {
    

    // Inicializando o GTAG
    //ReactGA.initialize(googleAnalytics);
    //ReactGA.pageview(googleAnalytics);

    // Inicializando o GTM
    TagManager.initialize({ gtmId: googleTagManager });

    // Capurando Client ID do Google Analytics
    ReactGA.ga((tracker: any) =>
      setVisitData((data: VisitProps) => ({
        ...data,
        ga_clientid: tracker?.get('clientId'),
      })),
    );
    
  }, []);



  return <ProductProvider>{children}</ProductProvider>;
};

export default ProviderHubId;
