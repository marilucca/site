import React from 'react';

import PageLayout from '../components/layout/Layout';
import PageSection from '../components/PageSection';
import { container } from '../css/pages/sucesso.module.css';
import Title from '../components/Title';

export default function Sucesso() {
  return (
    <PageLayout>
      <PageSection className={container}>
        <Title>Obrigado por entrar em contato conosco!</Title>

        <p>Em breve entraremos em contato com você.</p>
      </PageSection>
    </PageLayout>
  );
}
