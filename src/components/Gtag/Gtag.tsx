import { Helmet } from 'react-helmet';

const Gtag = () => {
  return (
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11093319275"
      ></script>
      <script>
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'AW-11093319275');
        `}
      </script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=DC-14614934"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'DC-14614934');
        `}
      </script>
      <script>{`
        gtag('event', 'conversion', {
          'allow_custom_scripts': true,
          'send_to': 'DC-14614934/invmedia/trisu0+standard'
        });      
      `}
      </script>
    </Helmet>
  );
};

export default Gtag;
