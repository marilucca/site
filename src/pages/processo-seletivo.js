import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';

const ProcessoSeletivo = () => {
  return (
    <Layout>
      <section className="mt-8 py-20 lg:pb-40 lg:pt-48">
        <Seo title="Processo Seletivo 2022" />

        <div className="container mx-auto flex flex-col items-center md:items-start">
          <h2 className="text-3xl lg:text-5xl font-semibold">Processo Seletivo 2022</h2>
          <div
            style={{ width: 'min(400px, 80vw)', height: 'min(400px, 80vw)', alignSelf: 'center' }}
          >
            <StaticImage
              src="../../static/images/processo-seletivo-2022-abertura.png"
              alt="Processo Seletivo Seiva Jr. 2022"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <p className="mt-4 text-md md:text-lg px-8">
            O tão esperado Processo Seletivo da Seiva Jr. está no ar! Até 20/07/2022, as inscrições
            estarão abertas para estudantes de qualquer curso da Universidade Federal do ABC. Os
            novos membros poderão fazer parte dos seguintes Grupos Administrativos (GAs):
          </p>
          <ul className="list-disc list-inside ml-8">
            <li className="text-md md:text-lg px-8">Comercial &amp; Projetos</li>
            <li className="text-md md:text-lg px-8">Financeiro</li>
            <li className="text-md md:text-lg px-8">Gestão de Talentos</li>
            <li className="text-md md:text-lg px-8">Presidência</li>
            <li className="text-md md:text-lg px-8">Publicidade &amp; Propaganda e Marketing</li>
          </ul>
          <p className="mt-4 text-md md:text-lg px-8">
            Venha fazer parte da empresa júnior de sustentabilidade e construir conosco projetos de
            inovação, consultoria e difusão de conhecimento.
          </p>
          <p className="mt-4 text-md md:text-lg px-8">
            Para mais informações acesse{' '}
            <a
              href="https://drive.google.com/file/d/1tyA19Ji7ZOkH3Tu1veKmGGjqTV6GvFwz/view"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              o edital
            </a>{' '}
            e siga nossas redes sociais.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ProcessoSeletivo;
