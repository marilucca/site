import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ color: 'rgb(17 24 39)' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
