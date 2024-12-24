import React, { ReactNode, useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Footer, Navigation } from '../components';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    // Desabilitando SSR
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return <></>;
  }

  return (
    <>
      <Navigation />

      {children}

      <LazyLoad offset={100}>
        <Footer />
      </LazyLoad>
    </>
  );
};

export default Layout;
