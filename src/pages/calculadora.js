import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Perguntas from '../components/calculadora/Perguntas';
import {
  calcularEnergia,
  comoMoeda,
  dados,
  paraKgCarbono,
} from '../data/calculadora';
import Resultado from '../components/calculadora/Resultado';

const Calculadora = () => {
  const [eletricidadeHomeOffice, setEletricidadeHomeOffice] = useState(0);
  const [computadorHomeOffice, setComputadorHomeOffice] = useState('selecione');
  const [computadorHomeOfficeUso1, setComputadorHomeOfficeUso1] = useState(0);
  const [computadorHomeOfficeUso2, setComputadorHomeOfficeUso2] = useState(0);
  const [tabletHomeOffice, setTabletHomeOffice] = useState(0);
  const [ventiladorHomeOffice, setVentiladorHomeOffice] = useState(0);
  const [pessoasVentiladorHomeOffice, setPessoasVentiladorHomeOffice] =
    useState(1);
  const [arCondicionadoHomeOffice, setArCondicionadoHomeOffice] = useState(0);
  const [pessoasArCondicionadoHomeOffice, setPessoasArCondicionadoHomeOffice] =
    useState(1);
  const [impressoraHomeOffice, setImpressoraHomeOffice] = useState(0);
  const [pessoasImpressoraHomeOffice, setPessoasImpressoraHomeOffice] =
    useState(1);
  const [celularHomeOffice, setCelularHomeOffice] = useState(0);
  const [roteadorHomeOffice, setRoteadorHomeOffice] = useState(0);
  const [pessoasRoteadorHomeOffice, setPessoasRoteadorHomeOffice] = useState(1);
  const [lampadaHomeOffice, setLampadaHomeOffice] = useState('selecione');
  const [quantidadeLampadaHomeOffice, setQuantidadeLampadaHomeOffice] =
    useState(0);
  const [lampadaHomeOfficeUso, setLampadaHomeOfficeUso] = useState(0);
  const [pessoasLampadaHomeOffice, setPessoasLampadaHomeOffice] = useState(1);
  const [transporteHomeOffice, setTransporteHomeOffice] = useState('selecione');
  const [distanciaHomeOffice, setDistanciaHomeOffice] = useState(0);
  const [distanciaMetroHomeOffice, setDistanciaMetroHomeOffice] = useState(0);
  const [distanciaTremHomeOffice, setDistanciaTremHomeOffice] = useState(0);

  const [eletricidadePresencial, setEletricidadePresencial] = useState(0);
  const [computadorPresencial, setComputadorPresencial] = useState('selecione');
  const [computadorPresencialUso1, setComputadorPresencialUso1] = useState(0);
  const [computadorPresencialUso2, setComputadorPresencialUso2] = useState(0);
  const [tabletPresencial, setTabletPresencial] = useState(0);
  const [ventiladorPresencial, setVentiladorPresencial] = useState(0);
  const [pessoasVentiladorPresencial, setPessoasVentiladorPresencial] =
    useState(1);
  const [arCondicionadoPresencial, setArCondicionadoPresencial] = useState(0);
  const [pessoasArCondicionadoPresencial, setPessoasArCondicionadoPresencial] =
    useState(1);
  const [impressoraPresencial, setImpressoraPresencial] = useState(0);
  const [pessoasImpressoraPresencial, setPessoasImpressoraPresencial] =
    useState(1);
  const [celularPresencial, setCelularPresencial] = useState(0);
  const [roteadorPresencial, setRoteadorPresencial] = useState(0);
  const [pessoasRoteadorPresencial, setPessoasRoteadorPresencial] = useState(1);
  const [lampadaPresencial, setLampadaPresencial] = useState('selecione');
  const [quantidadeLampadaPresencial, setQuantidadeLampadaPresencial] =
    useState(0);
  const [lampadaPresencialUso, setLampadaPresencialUso] = useState(0);
  const [pessoasLampadaPresencial, setPessoasLampadaPresencial] = useState(1);
  const [transportePresencial, setTransportePresencial] = useState('selecione');
  const [distanciaPresencial, setDistanciaPresencial] = useState(0);
  const [distanciaMetroPresencial, setDistanciaMetroPresencial] = useState(0);
  const [distanciaTremPresencial, setDistanciaTremPresencial] = useState(0);

  const [mostrarResultados, setMostrarResultados] = useState(false);

  const calcularGastoEnergiaHomeOfficePorDia = () => {
    const energiaComputador = calcularEnergiaComputadorHomeOffice();
    const energiaLampada = calcularEnergiaLuzHomeOffice();
    const energiaTablet = calcularEnergia(
      dados.potencias.tablet,
      tabletHomeOffice
    );
    const energiaVentilador = calcularEnergia(
      dados.potencias.ventilador,
      ventiladorHomeOffice
    );
    const energiaArCondicionado = calcularEnergia(
      dados.potencias.arCondicionado,
      arCondicionadoHomeOffice
    );
    const energiaImpressora = calcularEnergia(
      dados.potencias.impressora,
      impressoraHomeOffice
    );
    const energiaCelular = calcularEnergia(
      dados.potencias.celular,
      celularHomeOffice
    );
    const energiaRoteador = calcularEnergia(
      dados.potencias.roteador,
      roteadorHomeOffice
    );

    const energiaTotal =
      energiaComputador +
      energiaTablet +
      energiaVentilador +
      energiaArCondicionado +
      energiaImpressora +
      energiaCelular +
      energiaRoteador +
      energiaLampada;

    const gastoEnergiaHomeOfficeDia = energiaTotal * eletricidadeHomeOffice;
    return gastoEnergiaHomeOfficeDia;
  };

  const calcularGastoEnergiaHomeOfficePorAno = () =>
    dados.diasNoAno * calcularGastoEnergiaHomeOfficePorDia();

  const calcularGastoEnergiaPresencialPorDia = () => {
    const energiaComputador = calcularEnergiaComputadorPresencial();
    const energiaLampada = calcularEnergiaLuzPresencial();
    const energiaTablet = calcularEnergia(
      dados.potencias.tablet,
      tabletPresencial
    );
    const energiaVentilador = calcularEnergia(
      dados.potencias.ventilador,
      ventiladorPresencial
    );
    const energiaArCondicionado = calcularEnergia(
      dados.potencias.arCondicionado,
      arCondicionadoPresencial
    );
    const energiaImpressora = calcularEnergia(
      dados.potencias.impressora,
      impressoraPresencial
    );
    const energiaCelular = calcularEnergia(
      dados.potencias.celular,
      celularPresencial
    );
    const energiaRoteador = calcularEnergia(
      dados.potencias.roteador,
      roteadorPresencial
    );

    const energiaTotal =
      energiaComputador +
      energiaTablet +
      energiaVentilador +
      energiaArCondicionado +
      energiaImpressora +
      energiaCelular +
      energiaRoteador +
      energiaLampada;

    const gastoEnergiaPresencialDia = energiaTotal * eletricidadePresencial;
    return gastoEnergiaPresencialDia;
  };

  const calcularGastoEnergiaPresencialPorAno = () =>
    dados.diasNoAno * calcularGastoEnergiaPresencialPorDia();

  const calcularCarbonoEmitidoHomeOfficePorDia = () => {
    const gastoEnergiaHomeOfficeDia = calcularGastoEnergiaHomeOfficePorDia();

    const carbonoEmitidoHomeOfficeDia =
      gastoEnergiaHomeOfficeDia * dados.kgCarbono.porEnergia;
    return carbonoEmitidoHomeOfficeDia;
  };

  const calcularCarbonoEmitidoHomeOfficePorAno = () => {
    const carbonoEmitidoHomeOfficeDia =
      calcularCarbonoEmitidoHomeOfficePorDia();
    const carbonoEmitidoHomeOfficeAno =
      carbonoEmitidoHomeOfficeDia * dados.diasNoAno;

    return carbonoEmitidoHomeOfficeAno;
  };

  const calcularCarbonoEmitidoPresencialPorDia = () => {
    const gastoEnergiaPresencialDia = calcularGastoEnergiaPresencialPorDia();

    const carbonoEmitidoPresencialDia =
      gastoEnergiaPresencialDia * dados.kgCarbono.porEnergia;
    return carbonoEmitidoPresencialDia;
  };

  const calcularCarbonoEmitidoPresencialPorAno = () => {
    const carbonoEmitidoPresencialDia =
      calcularCarbonoEmitidoPresencialPorDia();
    const carbonoEmitidoPresencialAno =
      carbonoEmitidoPresencialDia * dados.diasNoAno;

    return carbonoEmitidoPresencialAno;
  };

  const calcularEnergiaComputadorHomeOffice = () => {
    let energiaComputador = 0;

    if (computadorHomeOffice === 'desktop') {
      energiaComputador = calcularEnergia(
        dados.potencias.desktop,
        computadorHomeOfficeUso1
      );
    } else if (computadorHomeOffice === 'notebook') {
      energiaComputador = calcularEnergia(
        dados.potencias.notebook,
        computadorHomeOfficeUso1
      );
    } else if (computadorHomeOffice === 'ambos') {
      energiaComputador =
        calcularEnergia(dados.potencias.desktop, computadorHomeOfficeUso1) +
        calcularEnergia(dados.potencias.notebook, computadorHomeOfficeUso2);
    }

    return energiaComputador;
  };

  const calcularEnergiaLuzHomeOffice = () => {
    let energiaLampada = 0;

    if (lampadaHomeOffice === 'led') {
      energiaLampada = calcularEnergia(
        dados.potencias.lampada.led,
        lampadaHomeOfficeUso
      );
    } else if (lampadaHomeOffice === 'fluorescente') {
      energiaLampada = calcularEnergia(
        dados.potencias.lampada.fluorescente,
        lampadaHomeOfficeUso
      );
    } else {
      energiaLampada = calcularEnergia(
        dados.potencias.lampada.incandescente,
        lampadaHomeOfficeUso
      );
    }

    return energiaLampada;
  };

  const calcularEnergiaComputadorPresencial = () => {
    let energiaComputador = 0;

    if (computadorPresencial === 'desktop') {
      energiaComputador = calcularEnergia(
        dados.potencias.desktop,
        computadorPresencialUso1
      );
    } else if (computadorPresencial === 'notebook') {
      energiaComputador = calcularEnergia(
        dados.potencias.notebook,
        computadorPresencialUso1
      );
    } else if (computadorPresencial === 'ambos') {
      energiaComputador =
        calcularEnergia(dados.potencias.desktop, computadorPresencialUso1) +
        calcularEnergia(dados.potencias.notebook, computadorPresencialUso2);
    }

    return energiaComputador;
  };

  const calcularEnergiaLuzPresencial = () => {
    let energiaLampada = 0;

    if (lampadaPresencial === 'led') {
      energiaLampada = calcularEnergia(
        dados.potencias.lampada.led,
        lampadaPresencialUso
      );
    } else if (lampadaPresencial === 'fluorescente') {
      energiaLampada = calcularEnergia(
        dados.potencias.lampada.fluorescente,
        lampadaPresencialUso
      );
    } else {
      energiaLampada = calcularEnergia(
        dados.potencias.lampada.incandescente,
        lampadaPresencialUso
      );
    }

    return energiaLampada;
  };

  const calcularCarbonoEmitidoTransporteHomeOffice = () => {
    if (transporteHomeOffice === 'pe-bicicleta') {
      return 0;
    }

    if (transporteHomeOffice === 'carro' || transporteHomeOffice === 'moto') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.carro) * distanciaHomeOffice
      );
    }

    if (transporteHomeOffice === 'onibus') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.onibus) * distanciaHomeOffice
      );
    }

    if (transporteHomeOffice === 'trem') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.trem) * distanciaHomeOffice
      );
    }

    if (transporteHomeOffice === 'metro') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.metro) * distanciaHomeOffice
      );
    }

    if (transporteHomeOffice === 'onibus-metro') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.onibus) *
        distanciaHomeOffice +
        paraKgCarbono(dados.toneladasCarbono.porKm.metro) *
        distanciaMetroHomeOffice
      );
    }

    if (transporteHomeOffice === 'onibus-trem') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.onibus) *
        distanciaHomeOffice +
        paraKgCarbono(dados.toneladasCarbono.porKm.metro) *
        distanciaTremHomeOffice
      );
    }

    if (transporteHomeOffice === 'onibus-metro-trem') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.onibus) *
        distanciaHomeOffice +
        paraKgCarbono(dados.toneladasCarbono.porKm.metro) *
        distanciaMetroHomeOffice +
        paraKgCarbono(dados.toneladasCarbono.porKm.trem) *
        distanciaTremHomeOffice
      );
    }

    return 0;
  };

  const calcularCarbonoEmitidoTransportePresencial = () => {
    if (transportePresencial === 'pe-bicicleta') {
      return 0;
    }

    if (transportePresencial === 'carro' || transportePresencial === 'moto') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.carro) * distanciaPresencial
      );
    }

    if (transportePresencial === 'onibus') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.onibus) * distanciaPresencial
      );
    }

    if (transportePresencial === 'trem') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.trem) * distanciaPresencial
      );
    }

    if (transportePresencial === 'metro') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.metro) * distanciaPresencial
      );
    }

    if (transportePresencial === 'onibus-metro') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.onibus) *
        distanciaPresencial +
        paraKgCarbono(dados.toneladasCarbono.porKm.metro) *
        distanciaMetroPresencial
      );
    }

    if (transportePresencial === 'onibus-trem') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.onibus) *
        distanciaPresencial +
        paraKgCarbono(dados.toneladasCarbono.porKm.metro) *
        distanciaTremPresencial
      );
    }

    if (transportePresencial === 'onibus-metro-trem') {
      return (
        paraKgCarbono(dados.toneladasCarbono.porKm.onibus) *
        distanciaPresencial +
        paraKgCarbono(dados.toneladasCarbono.porKm.metro) *
        distanciaMetroPresencial +
        paraKgCarbono(dados.toneladasCarbono.porKm.trem) *
        distanciaTremPresencial
      );
    }

    return 0;
  };

  useEffect(() => {
    if (mostrarResultados) {
      window.scrollTo(0, 900);
    }
  }, [mostrarResultados]);

  return (
    <Layout>
      <section className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Calculadora Carbônica" />

        <div className="container mx-auto flex flex-col items-center md:items-start px-12">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            O que é Pegada Carbônica
          </h2>
          <div className="w-full text-xl">
            <p>
              Pegada Carbônica é uma medida que calcula a emissão de gases do
              efeito estufa, convertidos em Carbono equivalente, para um
              produto, processo ou ação de uma pessoa em seu dia-a-dia. Tal
              cálculo pode valer de medição do impacto ambiental do seu
              dia-a-dia como aluno ou trabalhador.
            </p>

            <h2 className="mt-12 text-2xl lg:text-3xl font-semibold">
              Como usar a calculadora
            </h2>
            <ul className="list-inside list-disc">
              <li>
                Pense: “O que e por quanto tempo eu uso em meu espaço pessoal
                durante meus horários de Home Office e de Trabalho Presencial,
                ou de EAD e de Aula Presencial?”.
              </li>
              <li>Responda as perguntas da calculadora.</li>
              <li>
                Uso diário: Tempo, em horas, em que tal equipamento está ligado
                na tomada, ao longo do dia.
              </li>
              <li>
                Caso precise, acesse o{' '}
                <a
                  href="https://www.google.com.br/maps"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Google Maps
                </a>{' '}
                para calcular a distância percorrida por sua rota de Ônibus ou
                Metrô, seguindo os passos:
                <ol className="ml-[15px] list-inside list-decimal">
                  <li>Abra o Google Maps e coloque seu trajeto rotineiro;</li>
                  <li>
                    A partir de seu ponto de partida, clique com o botão direito
                    do mouse e selecione “Medir distância”;
                  </li>
                  <li>
                    Com o botão esquerdo, selecione o ponto de início e vá
                    selecionando os pontos de rota, mantendo-se dentro da rota
                    destacada;
                  </li>
                  <li>
                    Ao terminar, tal distância estará a mostra num pop-up na
                    parte inferior da tela.
                  </li>
                </ol>
              </li>
            </ul>

            <div className="mt-12 flex flex-row w-full justify-between px-8">
              <StaticImage
                src="../../static/images/distancia.png"
                alt="Como medir distância?"
                width="100%"
                height="100%"
              />
              <StaticImage
                src="../../static/images/medida.png"
                alt="Medida"
                width="178"
                height="265"
              />
              <StaticImage
                src="../../static/images/medir-distancia.png"
                alt="Distância"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="mt-12 text-center self-center">
            <p>O uso diário é feito em horas e a distância em km.</p>
            <p>
              Use apenas números nas caixas de respostas, usando o (.) e não a
              vírgula (,) para decimais.
            </p>
            <p>
              A calculadora pode ser respondida parcialmente, com a resposta
              final considerando apenas o que foi respondido
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center w-full">
            {mostrarResultados ? (
              <div className="flex flex-col items-start justify-center w-full text-lg">
                <h4 className="text-2xl lg:text-3xl text-black">Resultado</h4>

                <div className="flex flex-col justify-between items-start">
                  <div id="resultados-home-office">
                    <div
                      id="resultado-co2-home-office"
                      className="flex flex-row"
                    >
                      <p className="text-primary-darker font-bold mr-4">
                        Quantidade de CO<sub>2</sub> produzido em office:
                      </p>

                      <p>
                        {calcularCarbonoEmitidoHomeOfficePorDia().toFixed(2)} kg
                        de CO<sub>2</sub> por dia e{' '}
                        {calcularCarbonoEmitidoHomeOfficePorAno().toFixed(2)} kg
                        de CO
                        <sub>2</sub> por ano.
                      </p>
                    </div>

                    <div
                      id="resultado-gasto-home-office"
                      className="flex flex-row"
                    >
                      <p className="text-primary-darker font-bold mr-4">
                        Gasto com Eletricidade em home office:
                      </p>

                      <p>
                        {comoMoeda(calcularGastoEnergiaHomeOfficePorDia())} por
                        dia e{' '}
                        {comoMoeda(calcularGastoEnergiaHomeOfficePorAno())} por
                        ano.
                      </p>
                    </div>
                  </div>

                  <div id="resultados-presencial" className="mt-8">
                    <div
                      id="resultado-co2-presencial"
                      className="flex flex-row"
                    >
                      <p className="text-primary-darker font-bold mr-4">
                        Quantidade de CO<sub>2</sub> produzido presencialmente:
                      </p>

                      <p>
                        {calcularCarbonoEmitidoPresencialPorDia().toFixed(2)} kg
                        de CO<sub>2</sub> por dia e{' '}
                        {calcularCarbonoEmitidoPresencialPorAno().toFixed(2)} kg
                        de CO
                        <sub>2</sub> por ano.
                      </p>
                    </div>

                    <div
                      id="resultado-gasto-presencial"
                      className="flex flex-row"
                    >
                      <p className="text-primary-darker font-bold mr-4">
                        Gasto com Eletricidade presencialmente:
                      </p>

                      <p>
                        {comoMoeda(calcularGastoEnergiaPresencialPorDia())} por
                        dia e{' '}
                        {comoMoeda(calcularGastoEnergiaPresencialPorAno())} por
                        ano.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-xl">
                  <p className="mb-4">
                    Percebe como uma mudança de rotina como trabalhar em casa
                    pode afetar não só sua vida mas a vida do planeta?
                  </p>

                  <p>
                    Para comparar, uma árvore, na América do Sul, pode capturar{' '}
                    <span className="bg-primary-darker p-1 text-white">
                      15,6 kg de CO<sub>2</sub>
                    </span>{' '}
                    por ano em seus primeiros 20 anos e{' '}
                    <span className="bg-primary-darker p-1 text-white">
                      4,4 kg de CO<sub>2</sub>
                    </span>
                    , nos anos subsequentes.
                  </p>
                </div>

                <p className="mt-12 text-xl">
                  Nossa calculadora, apesar de detalhada e de fontes confiáveis,
                  usa diversas aproximações para simplificar o processo,
                  portanto não deve ser usada como uma análise completa.
                </p>
                <p className="text-xl">
                  Caso tenha interesse em uma consultoria de análise completa,
                  para redução de pegada carbônica, de gastos com transporte e
                  energia, contate a Seiva Jr através desse e-mail.
                </p>

                <a
                  className="mt-4 text-xl"
                  href="mailto:seiva.comercialeprojetos@gmail.com"
                >
                  seiva.comercialeprojetos@gmail.com
                </a>

                <div className="text-xl mt-12">
                  <p>
                    Caso queira conhecer mais da Seiva,{' '}
                    <Link to="/">explore nosso site</Link> e conheça nossos{' '}
                    <Link to="/portfolio">outros projetos</Link>!
                  </p>

                  <p>Algumas dicas para diminuir sua pegada carbônica:</p>
                  <ol className="list-decimal list-inside ml-[15px]">
                    <li>
                      Não está usando? Desligue! Muitos aparelhos eletrônicos
                      ficam ligados na tomada o dia todo, sem nem percebermos ou
                      sequer usarmos a energia que os mesmos gastam;
                    </li>
                    <li>
                      Um ventinho de janela pode ser muito mais que o suficiente
                      para se refrescar;
                    </li>
                    <li>
                      Deixe o carro na garagem! Andar de transporte público, a
                      pé ou de bicicleta libera de 87 a 100% menos CO₂ por km
                      rodado!
                    </li>
                  </ol>
                </div>

                <StaticImage
                  className="mt-4 self-center"
                  src="../../static/images/pegada.png"
                  alt="Pegada Carbônica"
                  width="25%"
                  height="auto"
                  objectFit="contain"
                />

                <div className="mt-12">
                  <h4 className="text-2xl lg:text-3xl text-black">Avançado</h4>

                  <Resultado
                    title="Home Office"
                    className="mt-4"
                    calcularEnergiaComputador={
                      calcularEnergiaComputadorHomeOffice
                    }
                    tablet={tabletHomeOffice}
                    ventilador={ventiladorHomeOffice}
                    pessoasVentilador={pessoasVentiladorHomeOffice}
                    arCondicionado={arCondicionadoHomeOffice}
                    pessoasArCondicionado={pessoasArCondicionadoHomeOffice}
                    impressora={impressoraHomeOffice}
                    pessoasImpressora={pessoasImpressoraHomeOffice}
                    roteador={roteadorHomeOffice}
                    pessoasRoteador={pessoasRoteadorHomeOffice}
                    celular={celularHomeOffice}
                    calcularEnergiaLuz={calcularEnergiaLuzHomeOffice}
                    pessoasLampada={pessoasLampadaHomeOffice}
                    calcularKgCarbonoEmitidoTransporte={
                      calcularCarbonoEmitidoTransporteHomeOffice
                    }
                  />

                  <Resultado
                    title="Presencial"
                    className="mt-8"
                    calcularEnergiaComputador={
                      calcularEnergiaComputadorPresencial
                    }
                    tablet={tabletPresencial}
                    ventilador={ventiladorPresencial}
                    pessoasVentilador={pessoasVentiladorPresencial}
                    arCondicionado={arCondicionadoPresencial}
                    pessoasArCondicionado={pessoasArCondicionadoPresencial}
                    impressora={impressoraPresencial}
                    pessoasImpressora={pessoasImpressoraPresencial}
                    roteador={roteadorPresencial}
                    pessoasRoteador={pessoasRoteadorPresencial}
                    celular={celularPresencial}
                    calcularEnergiaLuz={calcularEnergiaLuzPresencial}
                    pessoasLampada={pessoasLampadaPresencial}
                    calcularKgCarbonoEmitidoTransporte={
                      calcularCarbonoEmitidoTransportePresencial
                    }
                  />
                </div>

                <div className="mt-12 text-xl">
                  <h5 className="text-xl lg:text-2xl text-gray-600">Fontes</h5>

                  <p>
                    Toda a calculadora foi baseada na Planilha da{' '}
                    <a
                      href="http://ghgprotocolbrasil.com.br/ferramenta-de-calculo/?locale=pt-br"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GHG Protocol
                    </a>
                    , de onde foi principalmente retirada a relação kWh/kg de
                    Carbono equivalente, usando como referência uma média da
                    relação mensal do ano de 2020.
                  </p>

                  <p className="mt-4">
                    Fonte para o sequestro de CO₂ de árvores:
                    <br />
                    <a
                      href="https://www.ecycle.com.br/4844-arvores.html#:~:text=Portanto%2C%20uma%20árvore%20pode%20capturar,4%20quilos%20após%20esse%20período."
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Benefícios das Árvores e seu valor
                    </a>
                  </p>

                  <p className="mt-4">
                    Fontes para Potências Elétricas:
                    <br />
                    <a
                      href="https://www.techtudo.com.br/noticias/noticia/2015/02/descubra-quais-aparelhos-gastam-mais-energia-e-invista-no-eletronico-certo.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Descubra quais aparelhos gastam mais energia e invista no
                      eletrônico certo
                    </a>
                    <br />
                    <a
                      href="http://www.procelinfo.com.br/main.asp?View=%7BE6BC2A5F-E787-48AF-B485-439862B17000%7D"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Gastos de energia ProcelInfo
                    </a>
                  </p>

                  <p className="mt-4">
                    Para o Ar-Condicionado, foi feita uma média a partir dos
                    modelos encontrados e gerado um resultado de potência.
                  </p>

                  <p className="mt-4">
                    Para os tipos de lâmpada, foi feita uma média das 3
                    potências mais usadas, de cada tipo, e gerada a potência
                    resultado de cada lâmpada, usada no cálculo.
                  </p>

                  <p className="mt-4">
                    Fontes para dados de transporte:
                    <br />
                    As fontes de transporte foram obtidas em conjunto com o
                    Professor Humberto Paiva, usando as informações da Faculdade
                    GV disponibilizadas na Planilha GHG Protocol como guia.
                    <div className="mt-4 flex items-center justify-center">
                      <StaticImage
                        src="../../static/images/PE-veicular.jpeg"
                        height="40%"
                      />
                    </div>
                  </p>

                  <p className="mt-4">
                    Os valores anuais consideram apenas os dias úteis do ano,
                    retirando férias, feriados e fins de semana. Na calculadora
                    foi usado o número 233 (dias úteis do ano de 2020).
                  </p>
                </div>

                <div className="mt-12 text-xl">
                  <h5 className="text-xl lg:text-2xl text-gray-600">
                    Créditos
                  </h5>

                  <p>
                    Esta calculadora foi feita durante Outubro e Novembro de
                    2020, pelo esforço do Grupo de Trabalho Inovação, da Seiva
                    Jr e seus associados.
                  </p>

                  <p className="mt-4 font-bold">Membros do GT</p>
                  <ul className="list-disc list-inside ml-[15px]">
                    <li>Ana Carolina Zacarias</li>
                    <li>Diana Santiago Oliveira dos Santos</li>
                    <li>Gabriela Gusmão Fontes Fioriti</li>
                    <li>Heloise Cale da Rocha</li>
                    <li>Júlio César Shinji Akamine Milanesio</li>
                    <li>Olivia de Macedo Gasparini</li>
                    <li>Tamires da Silva Teixeira</li>
                  </ul>

                  <p className="mt-4 font-bold">Consultores</p>
                  <ul className="list-disc list-inside ml-[15px]">
                    <li>Camila Rodrigues Bresio</li>
                    <li>Humberto Yago da Silva Pinto</li>
                  </ul>

                  <p className="mt-4 font-bold">Coordenador</p>
                  <ul className="list-disc list-inside ml-[15px]">
                    <li>João Victor Nascimento Mota</li>
                  </ul>

                  <p className="mt-4 font-bold">Professor Orientador</p>
                  <ul className="list-disc list-inside ml-[15px]">
                    <li>Humberto de Paiva Junior</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div id="calculadora" className="w-full">
                <div id="perguntas" className="w-full">
                  <Perguntas
                    title="Home Office"
                    eletricidade={eletricidadeHomeOffice}
                    setEletricidade={setEletricidadeHomeOffice}
                    computador={computadorHomeOffice}
                    setComputador={setComputadorHomeOffice}
                    computadorUso1={computadorHomeOfficeUso1}
                    setComputadorUso1={setComputadorHomeOfficeUso1}
                    computadorUso2={computadorHomeOfficeUso2}
                    setComputadorUso2={setComputadorHomeOfficeUso2}
                    tablet={tabletHomeOffice}
                    setTablet={setTabletHomeOffice}
                    celular={celularHomeOffice}
                    setCelular={setCelularHomeOffice}
                    ventilador={ventiladorHomeOffice}
                    setVentilador={setVentiladorHomeOffice}
                    pessoasVentilador={pessoasVentiladorHomeOffice}
                    setPessoasVentilador={setPessoasVentiladorHomeOffice}
                    arCondicionado={arCondicionadoHomeOffice}
                    setArCondicionado={setArCondicionadoHomeOffice}
                    pessoasArCondicionado={pessoasArCondicionadoHomeOffice}
                    setPessoasArCondicionado={
                      setPessoasArCondicionadoHomeOffice
                    }
                    impressora={impressoraHomeOffice}
                    setImpressora={setImpressoraHomeOffice}
                    pessoasImpressora={pessoasImpressoraHomeOffice}
                    setPessoasImpressora={setPessoasImpressoraHomeOffice}
                    roteador={roteadorHomeOffice}
                    setRoteador={setRoteadorHomeOffice}
                    pessoasRoteador={pessoasRoteadorHomeOffice}
                    setPessoasRoteador={setPessoasRoteadorHomeOffice}
                    lampada={lampadaHomeOffice}
                    setLampada={setLampadaHomeOffice}
                    quantidadeLampada={quantidadeLampadaHomeOffice}
                    setQuantidadeLampada={setQuantidadeLampadaHomeOffice}
                    lampadaUso={lampadaHomeOfficeUso}
                    setLampadaUso={setLampadaHomeOfficeUso}
                    pessoasLampada={pessoasLampadaHomeOffice}
                    setPessoasLampada={setPessoasLampadaHomeOffice}
                    transporte={transporteHomeOffice}
                    setTransporte={setTransporteHomeOffice}
                    distancia={distanciaHomeOffice}
                    setDistancia={setDistanciaHomeOffice}
                    distanciaTrem={distanciaTremHomeOffice}
                    setDistanciaTrem={setDistanciaTremHomeOffice}
                    distanciaMetro={distanciaMetroHomeOffice}
                    setDistanciaMetro={setDistanciaMetroHomeOffice}
                  />

                  <Perguntas
                    title="Presencial"
                    className="mt-12"
                    eletricidade={eletricidadePresencial}
                    setEletricidade={setEletricidadePresencial}
                    computador={computadorPresencial}
                    setComputador={setComputadorPresencial}
                    computadorUso1={computadorPresencialUso1}
                    setComputadorUso1={setComputadorPresencialUso1}
                    computadorUso2={computadorPresencialUso2}
                    setComputadorUso2={setComputadorPresencialUso2}
                    tablet={tabletPresencial}
                    setTablet={setTabletPresencial}
                    celular={celularPresencial}
                    setCelular={setCelularPresencial}
                    ventilador={ventiladorPresencial}
                    setVentilador={setVentiladorPresencial}
                    pessoasVentilador={pessoasVentiladorPresencial}
                    setPessoasVentilador={setPessoasVentiladorPresencial}
                    arCondicionado={arCondicionadoPresencial}
                    setArCondicionado={setArCondicionadoPresencial}
                    pessoasArCondicionado={pessoasArCondicionadoPresencial}
                    setPessoasArCondicionado={
                      setPessoasArCondicionadoPresencial
                    }
                    impressora={impressoraPresencial}
                    setImpressora={setImpressoraPresencial}
                    pessoasImpressora={pessoasImpressoraPresencial}
                    setPessoasImpressora={setPessoasImpressoraPresencial}
                    roteador={roteadorPresencial}
                    setRoteador={setRoteadorPresencial}
                    pessoasRoteador={pessoasRoteadorPresencial}
                    setPessoasRoteador={setPessoasRoteadorPresencial}
                    lampada={lampadaPresencial}
                    setLampada={setLampadaPresencial}
                    quantidadeLampada={quantidadeLampadaPresencial}
                    setQuantidadeLampada={setQuantidadeLampadaPresencial}
                    lampadaUso={lampadaPresencialUso}
                    setLampadaUso={setLampadaPresencialUso}
                    pessoasLampada={pessoasLampadaPresencial}
                    setPessoasLampada={setPessoasLampadaPresencial}
                    transporte={transportePresencial}
                    setTransporte={setTransportePresencial}
                    distancia={distanciaPresencial}
                    setDistancia={setDistanciaPresencial}
                    distanciaTrem={distanciaTremPresencial}
                    setDistanciaTrem={setDistanciaTremPresencial}
                    distanciaMetro={distanciaMetroPresencial}
                    setDistanciaMetro={setDistanciaMetroPresencial}
                  />
                </div>

                <button
                  type="button"
                  className="mt-10 py-3 px-8 bg-primary-default hover:bg-primary-darker border-solid border-4 border-primary-default hover:border-primary-darker rounded text-white hover:text-white font-bold"
                  onClick={() => setMostrarResultados(true)}
                >
                  Calcular
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculadora;
