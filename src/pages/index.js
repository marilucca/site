import React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import PageLayout from '../components/layout/Layout';
import Seo from '../components/Seo';
import PageSection from '../components/PageSection';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import Title from '../components/Title';
import { Grid, Card, CardTitle, CardContent } from '../components/Card';
import Services from '../components/Services';
import Socials from '../components/Socials';
import {
  imageContainer,
  contentContainer,
  backgroundLight,
  contactContainer,
} from '../css/pages/landing.module.css';
import {
  partnerTitle,
  partnerContent,
  partnerSectionTitle,
  reviewImageContainer,
  reviewCustomerInfo,
} from '../css/components/Partners.module.css';
import {
  contactFormContainer,
  formButton,
  formInfoContainer,
  inputContainer,
} from '../css/components/ContactForm.module.css';

export const pageData = graphql`
  query IndexPageServicesQuery {
    partners: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "partner" } } }
    ) {
      nodes {
        id
        html
        frontmatter {
          title
        }
      }
    }

    reviews: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "review" } } }
    ) {
      nodes {
        frontmatter {
          title
          customerImage
          customerName
          customerTitle
        }

        id
        html
      }
    }
  }
`;

export default function Index({ data }) {
  const reviews = data.reviews.nodes;
  const partners = data.partners.nodes;

  return (
    <PageLayout>
      <Seo />

      <PageSection id="start" className={imageContainer}>
        <div className={contentContainer}>
          <h1>Ideias Sustentáveis integrando o mundo</h1>

          <p>
            A Seiva Jr. acredita que, juntos, podemos tornar o mundo mais
            sustentável, criando uma relação de respeito com o meio ambiente. É
            possível fazer as coisas de um jeito diferente!
          </p>

          <ButtonGroup>
            <Button size="lg" to="/#contato">
              Entre em contato
            </Button>
            <Button type="outlined" size="lg" to="/#mvv">
              Saiba mais
            </Button>
          </ButtonGroup>
        </div>
      </PageSection>

      <PageSection id="mvv">
        <div className={`${contentContainer} ${backgroundLight}`}>
          <Title>Nosso Propósito</Title>

          <Grid>
            <Card>
              <CardTitle>Missão</CardTitle>
              <CardContent>
                Promover soluções sustentáveis e inovadoras através de equipes
                interdisciplinares comprometidas em integrar os espaços
                acadêmico, empresarial e ambiental.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Visão</CardTitle>
              <CardContent>
                Ser uma empresa júnior reconhecida em âmbito nacional por sua
                excelência em serviços de sustentabilidade.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Valores</CardTitle>
              <CardContent>
                <ul>
                  <li>Compromisso com o cliente</li>
                  <li>Transparência</li>
                  <li>Sinergia</li>
                  <li>Proatividade</li>
                  <li>Inconformismo</li>
                  <li>Desenvolvimento Contínuo</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </PageSection>

      <Services />

      <PageSection id="parceiros">
        <div className={`${contentContainer} ${backgroundLight}`}>
          <Title>Nossas Parcerias</Title>

          <Grid>
            {partners.map((partner) => (
              <Card key={partner.id}>
                <h3 className={partnerTitle}>{partner.frontmatter.title}</h3>
                <div
                  className={partnerContent}
                  dangerouslySetInnerHTML={{ __html: partner.html }}
                />
              </Card>
            ))}
          </Grid>

          <h4 className={partnerSectionTitle}>
            O que nossos clientes e parceiros estão dizendo
          </h4>

          <Grid>
            {reviews.map((review) => (
              <Card key={review.id}>
                <h3 className={partnerTitle}>{review.frontmatter.title}</h3>
                <div>
                  <div
                    className={partnerContent}
                    dangerouslySetInnerHTML={{ __html: review.html }}
                  />
                  <div className={reviewImageContainer}>
                    <img src={review.frontmatter.customerImage} alt="" />
                    <div className={reviewCustomerInfo}>
                      <p>{review.frontmatter.customerName}</p>
                      <p>{review.frontmatter.customerTitle}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </PageSection>

      <PageSection id="contato">
        <div className={`${contentContainer} ${contactContainer}`}>
          <Title>Procurando soluções práticas em projetos ambientais?</Title>

          <div className={contactFormContainer}>
            <form
              name="Formulário de Contato"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/sucesso"
            >
              <input
                type="hidden"
                name="form-name"
                value="Formulário de Contato"
              />

              <div className={inputContainer}>
                <label htmlFor="name">
                  Nome
                  <input id="name" name="name" type="text" />
                </label>
              </div>

              <div className={inputContainer}>
                <label htmlFor="email">
                  Email
                  <input id="email" name="email" type="email" />
                </label>
              </div>

              <div className={inputContainer}>
                <label htmlFor="assunto">
                  Assunto
                  <input id="assunto" name="assunto" type="text" />
                </label>
              </div>

              <div className={inputContainer}>
                <label htmlFor="message">
                  Mensagem
                  <textarea id="message" name="message" type="text" />
                </label>
              </div>

              <Button size="lg" className={formButton} asButton>
                Enviar
              </Button>
            </form>

            <div className={formInfoContainer}>
              <Socials />

              <p>Ou nos envie um email</p>
              <a href="mailto:contato@seivajr.com.br">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>seiva.ambientaljr@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
