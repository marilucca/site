import React from 'react';
import Button from '../components/Button';
import OutlinedButton from '../components/OutlinedButton';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import Seo from '../components/Seo';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Sobre = () => {
    return (
    <Layout>
      <section className="pt-20 md:pt-40 container mx-auto px-8 lg:px-32 lg:flex">
        <Seo title="Sobre" />
        
        <h1>Sobre</h1>
      </section>
    </Layout>
    );
};

export default Sobre;
