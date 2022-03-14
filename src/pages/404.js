import React from 'react';
import Layout from '../components/layout/Layout';

const NotFound = () => (
  <Layout>
    <div className="flex justify-center items-center">
      <h1 className="title lg:text-5xl">Página não encontrada!</h1>
      <p>Você entrou em uma página que apenas não existe :(</p>
    </div>
  </Layout>
);

export default NotFound;
