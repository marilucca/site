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
import { StaticImage } from 'gatsby-plugin-image'

const ProcessoSeletivo = () => {
    return (
    <Layout>
      <section className="py-20 lg:pb-40 lg:pt-48 container mx-auto">
        <Seo title="Processo Seletivo" />
        
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none mb-4">
            Processo Seletivo 2022
          </h1>

          <StaticImage
            src="../../static/images/processo-seletivo.png"
            alt="Processo Seletivo Seiva Jr. 2022"
            placeholder="blurred"
            layout="fixed"
            width={400}
            height={400}
            className="self-center"
          />

          <p className="mt-4 text-lg">
          O processo seletivo de 2022 abrirá em breve! Atente-se às nossas redes sociais para saber quando o processo abrirá 
            e como ele funcionará!
            <br/>
            <br/>
            A Seiva Jr. é uma Empresa Júnior da Universidade Federal do ABC (UFABC) que visa promover o conceito de{' '}
            <span className="text-primary font-bold">SUSTENTABILIDADE</span> a partir da{' '}
            <span className="text-primary font-bold">DIFUSÃO de CONHECIMENTO</span>, da{' '}
            <span className="text-primary font-bold">INOVAÇÃO</span> e de{' '}
            <span className="text-primary font-bold">CONSULTORIAS</span>.
            <br/>
            <br/>
            A empresa é organizada de maneira matricial, o que permite um crescimento profissional para todos os membros, 
            visto que todos são igualmente aptos a tomar decisões importantes e propor novas ideias.
            <br/>
            <br/>
            Coloque suas ideias em prática e faça parte da nossa história!
            <br/>
            <br/>
            Qualquer dúvida, contate a equipe Seiva através das redes sociais.
          </p>
        </div>
      </section>
    </Layout>
    );
};

export default ProcessoSeletivo;
