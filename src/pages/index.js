import React from 'react';

import Button from '../components/Button';
import OutlinedButton from '../components/OutlinedButton';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
// import StatsBox from '../components/StatsBox';
import ContactForm from '../components/ContactForm';
import customerData from '../data/customer-data';
import Services from '../components/Services';

const Index = () => (
  <Layout>
    <Seo title="Início" />
    <section id="start" className="section-container landing-section">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-white landing-title">
            Ideias sustentáveis integrando o mundo
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light text-white">
            A Seiva Jr. acredita que, juntos, podemos tornar o mundo mais sustentável, criando uma
            relação de respeito com o meio ambiente. É possível fazer as coisas de um jeito
            diferente!
          </p>
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-start">
            <Button className="mr-0 md:mr-8 mb-8 md:mb-0" size="lg" to="/#contact">
              Entre em contato
            </Button>
            <OutlinedButton size="lg" to="/#features">
              Saiba mais
            </OutlinedButton>
          </div>
        </div>
      </div>
    </section>

    <section id="features" className="py-20 lg:pb-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Nosso Propósito</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full">
              <p className="font-semibold text-xl">Missão</p>
              <p className="mt-12">
                Promover soluções sustentáveis e inovadoras através de equipes interdisciplinares
                comprometidas em integrar os espaços acadêmico, empresarial e ambiental.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full">
              <p className="font-semibold text-xl">Visão</p>
              <p className="mt-12">
                Ser uma empresa júnior reconhecida em âmbito nacional por sua excelência em serviços
                de sustentabilidade.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 h-full">
              <p className="font-semibold text-xl">Valores</p>
              <p className="mt-4">Sustentabilidade</p>
              <p>Transparência</p>
              <p>Diversidade</p>
              <p>Interdisciplinaridade</p>
              <p>Integridade</p>
              <p>Comprometimento</p>
              <p>Respeito</p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <div className="py-10 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Nossos Serviços</h2>
        </div>
      </div>
      <Services />
    </section>

    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Nossas parcerias</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Biotera</p>
              <p className="mt-4">
                Estudo e comparação entre três ferramentas para análise de ciclo vida,
                relacionando-os com informações disponíveis na literatura referente ao produto no
                cenário nacional.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">EURECICLO</p>
              <p className="mt-4">
                Montagem de um guia educativo para as marcas clientes da eureciclo, sobre as
                embalagens que eles utilizam em seus produtos, com detalhes sobre 17 materiais.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Solaris</p>
              <p className="mt-4">
                Pensando no enfoque em PGRS, o trabalho consistiu no recolhimento de informações,
                diagnóstico e caracterização dos resíduos sólidos de empresas.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">
          O que nossos clientes e parceiros estão dizendo
        </LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section
      id="contact"
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h2 className="text-3xl lg:text-5xl font-semibold text-primary-default mb-8">
        Procurando soluções práticas em projetos ambientais?
      </h2>
      <ContactForm />
    </section>
  </Layout>
);

export default Index;
