import React from 'react'
import Button from '../components/Button'
import OutlinedButton from '../components/OutlinedButton'
import Card from '../components/Card'
import CustomerCard from '../components/CustomerCard'
import LabelText from '../components/LabelText'
import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import SplitSection from '../components/SplitSection'
import StatsBox from '../components/StatsBox'
import customerData from '../data/customer-data'
import HeroImage from '../svg/HeroImage'
import SvgCharts from '../svg/SvgCharts'

import ConsultoriaPersonalizada from '../svg/portfolio/ConsultoriaPersonalizada'
import PlanoDeGerenciamento from '../svg/portfolio/PlanoDeGerenciamento'
import SustentabilidadeNasEscolas from '../svg/portfolio/SustentabilidadeNasEscolas'
import ConsultoriaResidencial from '../svg/portfolio/ConsultoriaResidencial'
import EducacaoAmbiental from '../svg/portfolio/EducacaoAmbiental'
import EventosOnline from '../svg/portfolio/EventosOnline'

const Portfolio = () => {
    return (
    <Layout>
      <section className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Portfólio" />
        
        <div className="container mx-auto flex flex-col items-center md:items-start">
          <h2 className="title lg:text-5xl">O que podemos fazer por você?</h2>
          <p className="text-xl lg:text-2xl mt-6 font-light px-8">
            Você entra com a sua necessidade, tanto pessoal quanto empresarial e nós entramos com a atitude, visão e conhecimento universitário sobre Sustentabilidade integrada em todas as áreas. A Seiva Jr. pode tornar seus projetos eco-friendly ou então ajudar a desenvolver uma nova ideia.
          </p>
        </div>
      </section>
      <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Consultoria Personalizada
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Oferecemos o aprimoramento de projetos já existentes, assim como o desenvolvimento de novas ideias. A vantagem desta proposta é que auxiliamos na tomada de decisões de acordo com as tendências do mercado, de modo a proporcionar uma consultoria de qualidade, focada nas necessidades do cliente.
              </p>
            </div>
          }
          secondarySlot={<ConsultoriaPersonalizada />}
        />

        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Consultoria Residencial
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Oferecemos um projeto personalizado, customizando a partir do seu espaço físico e necessidades para sua residência, visando torna-la mais sustentável e econômica, aproveitando os espaços não produtivos para aumentar a qualidade de vida dos moradores. Além de promover a educação ambiental aos moradores e diminuir o impacto no meio ambiente.
              </p>
            </div>
          }
          secondarySlot={<ConsultoriaResidencial />}
        />


        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Educação Ambiental
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Visando a importância da educação ambiental na formação de indivíduos mais conscientes de sua responsabilidade com o planeta, fornecemos treinamento/capacitação na área, além de produzir materiais informativos.
              </p>
            </div>
          }
          secondarySlot={<EducacaoAmbiental />}
        />

        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Plano de Gerenciamento de Resíduos Sólidos
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                O Plano de Gerenciamento de Resíduos Sólidos (PGRS) é um instrumento da Política Nacional de Resíduos Sólidos (12.305/2010), parte integrante do processo de Licenciamento ambiental, que apresenta e especifica os procedimentos operacionais relativos às etapas de gerenciamento de resíduos sólidos, sob responsabilidade do gerador. 
              </p>
            </div>
          }
          secondarySlot={<PlanoDeGerenciamento />}
        />

        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Sustentabilidade nas Escolas
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Com o propósito de incorporar o valor da Sustentabilidade na formação e crescimento de jovens, dando ferramentas para a construção de uma visão crítica sobre a relação entre a sustentabilidade e o mundo moderno. 
                <br/>
                <br/>
                Composto por quatro módulos, cada qual, constituído de conteúdo audiovisual, dinâmicas e material para consulta, que visa conscientizar alunos do Ensino Fundamental II e Médio sobre a destinação dos resíduos sólidos.
              </p>
            </div>
          }
          secondarySlot={<SustentabilidadeNasEscolas />}
        />

        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Eventos Online
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                A realização de diversos eventos online é recorrente na Seiva, sendo estes de caráter informativo ou capacitivo. Os eventos informativos são voltados para aulas teóricas para que nossos participantes possam escutar e entender sobre o tema apresentado, havendo palestras e conversas com profissionais do assunto tratado. 
                <br/>
                <br/>
                Os eventos capacitivos são voltados para a aprendizagem de nossos participantes em conseguir de maneira prática executar a atividade ensinada ao longo da aula, a qual é também ministrada por profissionais capacitados na área. 
              </p>
            </div>
          }
          secondarySlot={<EventosOnline />}
        />
    </Layout>
    );
};

export default Portfolio;
