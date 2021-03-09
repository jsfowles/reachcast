import React from 'react';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
