import React from 'react';

import PageLayout from '../components/layout/Layout';
import PageSection from '../components/PageSection';
import Title from '../components/Title';

const NotFound = () => (
  <PageLayout>
    <PageSection>
      <Title>Página não encontrada!</Title>
      <p>Você entrou em uma página que não existe :(</p>
    </PageSection>
  </PageLayout>
);

export default NotFound;
