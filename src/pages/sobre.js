import React from 'react'
import Button from '../components/Button'
import OutlinedButton from '../components/OutlinedButton'
import Card from '../components/Card'
import CustomerCard from '../components/CustomerCard'
import LabelText from '../components/LabelText'
import Layout from '../components/layout/Layout'
import SplitSection from '../components/SplitSection'
import StatsBox from '../components/StatsBox'
import Seo from '../components/Seo'
import customerData from '../data/customer-data'
import HeroImage from '../svg/HeroImage'
import SvgCharts from '../svg/SvgCharts'
import { GatsbyImage } from 'gatsby-plugin-image'

// import membros from '../data/membros-data.json'
import { graphql } from 'gatsby'

export const pageData = graphql`
query AboutQuery {
  allMembrosDataJson {
    edges {
      node {
        name
        image {
					childImageSharp {
          	gatsbyImageData(
							width: 120,
              height: 120
            )
          }
        }
      }
    }
  }
}

`

const Sobre = ({ data }) => {
  const membros = data.allMembrosDataJson.edges

  console.log(membros)

  return (
    <Layout>
      <section id="sobre" className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Sobre Nós" />
        
        <div className="container mx-auto flex flex-col items-center md:items-start">
          <h2 className="title lg:text-5xl">Sobre Nós</h2>


        </div>
      </section>
      <section id="equipe" className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Equipe" />
        
        <div className="container mx-auto flex flex-col items-center md:items-start">
          <h2 className="title lg:text-5xl">Equipe</h2>

          {membros.map(membro => (
            <GatsbyImage
              key={membro.node.name}
              image={membro.node.image.childImageSharp.gatsbyImageData}
              alt={membro.node.name}
              style={{ borderRadius: '100%' }}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
