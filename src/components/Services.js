import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import SplitSection from './SplitSection';

const Services = () => (
  <>
    <SplitSection
      primarySlot={
        <div className="service-container-right">
          <h3 className="service-title">Consultoria Personalizada</h3>
          <p className="service-description">
            Oferecemos o aprimoramento de projetos já existentes, assim como o desenvolvimento de
            novas ideias. A vantagem desta proposta é que auxiliamos na tomada de decisões de acordo
            com as tendências do mercado, de modo a proporcionar uma consultoria de qualidade,
            focada nas necessidades do cliente.
          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/portfolio/consultoria-personalizada.svg" />}
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="service-container-left">
          <h3 className="service-title">Consultoria Residencial</h3>
          <p className="service-description">
            Oferecemos um projeto personalizado, customizando a partir do seu espaço físico e
            necessidades para sua residência, visando torna-la mais sustentável e econômica,
            aproveitando os espaços não produtivos para aumentar a qualidade de vida dos moradores.
            Além de promover a educação ambiental aos moradores e diminuir o impacto no meio
            ambiente.
          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/portfolio/consultoria-residencial.svg" />}
    />

    <SplitSection
      primarySlot={
        <div className="service-container-right">
          <h3 className="service-title">Educação Ambiental</h3>
          <p className="service-description">
            Visando a importância da educação ambiental na formação de indivíduos mais conscientes
            de sua responsabilidade com o planeta, fornecemos treinamento/capacitação na área, além
            de produzir materiais informativos.
          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/portfolio/educação-ambiental.svg" />}
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="service-container-left">
          <h3 className="service-title">Plano de Gerenciamento de Resíduos Sólidos</h3>
          <p className="service-description">
            O Plano de Gerenciamento de Resíduos Sólidos (PGRS) é um instrumento da Política
            Nacional de Resíduos Sólidos (12.305/2010), parte integrante do processo de
            Licenciamento ambiental, que apresenta e especifica os procedimentos operacionais
            relativos às etapas de gerenciamento de resíduos sólidos, sob responsabilidade do
            gerador.
          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/portfolio/pgrs.svg" />}
    />

    <SplitSection
      primarySlot={
        <div className="service-container-right">
          <h3 className="service-title">Sustentabilidade nas Escolas</h3>
          <p className="service-description">
            Com o propósito de incorporar o valor da Sustentabilidade na formação e crescimento de
            jovens, dando ferramentas para a construção de uma visão crítica sobre a relação entre a
            sustentabilidade e o mundo moderno.
            <br />
            <br />
            Composto por quatro módulos, cada qual, constituído de conteúdo audiovisual, dinâmicas e
            material para consulta, que visa conscientizar alunos do Ensino Fundamental II e Médio
            sobre a destinação dos resíduos sólidos.
          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/portfolio/sustentabilidade-nas-escolas.svg" />}
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="service-container-left">
          <h3 className="service-title">Eventos Online</h3>
          <p className="service-description">
            A realização de diversos eventos online é recorrente na Seiva, sendo estes de caráter
            informativo ou capacitivo. Os eventos informativos são voltados para aulas teóricas para
            que nossos participantes possam escutar e entender sobre o tema apresentado, havendo
            palestras e conversas com profissionais do assunto tratado.
            <br />
            <br />
            Os eventos capacitivos são voltados para a aprendizagem de nossos participantes em
            conseguir de maneira prática executar a atividade ensinada ao longo da aula, a qual é
            também ministrada por profissionais capacitados na área.
          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/portfolio/eventos-online.svg" />}
    />
  </>
);

export default Services;
