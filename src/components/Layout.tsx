import React from 'react';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  route: string;
}

const Layout = ({ children, route }: Props) => {
  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
