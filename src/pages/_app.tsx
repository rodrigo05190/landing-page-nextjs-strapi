import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { Box } from '../components';
import Gtag from '../components/Gtag/Gtag';
import { ProviderHubId } from '../providers';
import theme from '../theme';
import GlobalStyle from '../theme/global';
import { HubidProvider } from '../components/contexts/HubidContext';
import Scripts from '../components/Scripts/Scripts';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init('1452893545579968'); // facebookPixelId
        ReactPixel.pageView();
        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  const Loader = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
    >
      <PulseLoader color={theme.colors.green.dark} />
    </Box>
  );

  return (
    <ProviderHubId
      hubid="f2d1e9c7b6a3224"
      googleAnalytics="DC-14614934"
      googleTagManager="GTM-KQH64CRB"
      loading={Loader}
    >
      
      <HubidProvider>
        <Scripts/>
        <Gtag />
        <GlobalStyle />
        <Component {...pageProps} />
        </HubidProvider>
      
    </ProviderHubId>
  );
};

export default App;
