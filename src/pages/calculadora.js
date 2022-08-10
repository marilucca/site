import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';

// Potência em Watts
const potenciaDesktop = 250;
const potenciaNotebook = 65;
const potenciaCarregadorCelular = 7;
const potenciaCarregadorTablet = 10;
const potenciaImpressora = 14;
const potenciaRoteador = 6;
const potenciaVentilador = 72.5;
const potenciaArCondicionado = 1266.9375;
const potenciaLampadaFluorescente = 16.3;
const potenciaLampadaIncandescente = 66.7;
const potenciaLampadaLED = 9.3;

// Calcula a energia consumida por um aparelho em kWh
const calcularEnergia = (potencia, tempo) => {
  return (potencia * tempo) / 1000;
};

const comoMoeda = (valor) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(valor);
};

const diasNoAno = 365;
const kgCarbonoPorEnergia = 0.295;

const Calculadora = () => {
  const [eletricidadeHomeOffice, setEletricidadeHomeOffice] = useState(0);
  const [computadorHomeOffice, setComputadorHomeOffice] = useState('selecione');
  const [computadorHomeOfficeUso1, setComputadorHomeOfficeUso1] = useState(0);
  const [computadorHomeOfficeUso2, setComputadorHomeOfficeUso2] = useState(0);
  const [tabletHomeOffice, setTabletHomeOffice] = useState(0);
  const [ventiladorHomeOffice, setVentiladorHomeOffice] = useState(0);
  const [pessoasVentiladorHomeOffice, setPessoasVentiladorHomeOffice] = useState(0);
  const [arCondicionadoHomeOffice, setArCondicionadoHomeOffice] = useState(0);
  const [pessoasArCondicionadoHomeOffice, setPessoasArCondicionadoHomeOffice] = useState(0);
  const [impressoraHomeOffice, setImpressoraHomeOffice] = useState(0);
  const [pessoasImpressoraHomeOffice, setPessoasImpressoraHomeOffice] = useState(0);
  const [celularHomeOffice, setCelularHomeOffice] = useState(0);
  const [roteadorHomeOffice, setRoteadorHomeOffice] = useState(0);
  const [pessoasRoteadorHomeOffice, setPessoasRoteadorHomeOffice] = useState(0);
  const [lampadaHomeOffice, setLampadaHomeOffice] = useState('selecione');
  const [quantidadeLampadaHomeOffice, setQuantidadeLampadaHomeOffice] = useState(0);
  const [lampadaHomeOfficeUso, setLampadaHomeOfficeUso] = useState(0);
  const [pessoasLampadaHomeOffice, setPessoasLampadaHomeOffice] = useState(0);
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
  const [pessoasVentiladorPresencial, setPessoasVentiladorPresencial] = useState(0);
  const [arCondicionadoPresencial, setArCondicionadoPresencial] = useState(0);
  const [pessoasArCondicionadoPresencial, setPessoasArCondicionadoPresencial] = useState(0);
  const [impressoraPresencial, setImpressoraPresencial] = useState(0);
  const [pessoasImpressoraPresencial, setPessoasImpressoraPresencial] = useState(0);
  const [celularPresencial, setCelularPresencial] = useState(0);
  const [roteadorPresencial, setRoteadorPresencial] = useState(0);
  const [pessoasRoteadorPresencial, setPessoasRoteadorPresencial] = useState(0);
  const [lampadaPresencial, setLampadaPresencial] = useState('selecione');
  const [quantidadeLampadaPresencial, setQuantidadeLampadaPresencial] = useState(0);
  const [lampadaPresencialUso, setLampadaPresencialUso] = useState(0);
  const [pessoasLampadaPresencial, setPessoasLampadaPresencial] = useState(0);
  const [transportePresencial, setTransportePresencial] = useState('selecione');
  const [distanciaPresencial, setDistanciaPresencial] = useState(0);
  const [distanciaMetroPresencial, setDistanciaMetroPresencial] = useState(0);
  const [distanciaTremPresencial, setDistanciaTremPresencial] = useState(0);

  const [mostrarResultados, setMostrarResultados] = useState(false);

  const calcularGastoEnergiaHomeOfficePorDia = () => {
    let energiaComputador = 0;
    let energiaLampada = 0;

    if (computadorHomeOffice === 'desktop') {
      energiaComputador = calcularEnergia(potenciaDesktop, computadorHomeOfficeUso1);
    } else if (computadorHomeOffice === 'notebook') {
      energiaComputador = calcularEnergia(potenciaNotebook, computadorHomeOfficeUso1);
    } else if (computadorHomeOffice === 'ambos') {
      energiaComputador =
        calcularEnergia(potenciaDesktop, computadorHomeOfficeUso1) +
        calcularEnergia(potenciaNotebook, computadorHomeOfficeUso2);
    }

    const energiaTablet = calcularEnergia(potenciaCarregadorTablet, tabletHomeOffice);
    const energiaVentilador = calcularEnergia(potenciaVentilador, ventiladorHomeOffice);
    const energiaArCondicionado = calcularEnergia(potenciaArCondicionado, arCondicionadoHomeOffice);
    const energiaImpressora = calcularEnergia(potenciaImpressora, impressoraHomeOffice);
    const energiaCelular = calcularEnergia(potenciaCarregadorCelular, celularHomeOffice);
    const energiaRoteador = calcularEnergia(potenciaRoteador, roteadorHomeOffice);

    if (lampadaHomeOffice === 'led') {
      energiaLampada = calcularEnergia(potenciaLampadaLED, lampadaHomeOfficeUso);
    } else if (lampadaHomeOffice === 'fluorescente') {
      energiaLampada = calcularEnergia(potenciaLampadaFluorescente, lampadaHomeOfficeUso);
    } else {
      energiaLampada = calcularEnergia(potenciaLampadaIncandescente, lampadaHomeOfficeUso);
    }

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
    diasNoAno * calcularGastoEnergiaHomeOfficePorDia();

  const calcularGastoEnergiaPresencialPorDia = () => {
    let energiaComputador = 0;
    let energiaLampada = 0;

    if (computadorPresencial === 'desktop') {
      energiaComputador = calcularEnergia(potenciaDesktop, computadorPresencialUso1);
    } else if (computadorPresencial === 'notebook') {
      energiaComputador = calcularEnergia(potenciaNotebook, computadorPresencialUso1);
    } else if (computadorPresencial === 'ambos') {
      energiaComputador =
        calcularEnergia(potenciaDesktop, computadorPresencialUso1) +
        calcularEnergia(potenciaNotebook, computadorPresencialUso2);
    }

    const energiaTablet = calcularEnergia(potenciaCarregadorTablet, tabletPresencial);
    const energiaVentilador = calcularEnergia(potenciaVentilador, ventiladorPresencial);
    const energiaArCondicionado = calcularEnergia(potenciaArCondicionado, arCondicionadoPresencial);
    const energiaImpressora = calcularEnergia(potenciaImpressora, impressoraPresencial);
    const energiaCelular = calcularEnergia(potenciaCarregadorCelular, celularPresencial);
    const energiaRoteador = calcularEnergia(potenciaRoteador, roteadorPresencial);

    if (lampadaPresencial === 'led') {
      energiaLampada = calcularEnergia(potenciaLampadaLED, lampadaPresencialUso);
    } else if (lampadaPresencial === 'fluorescente') {
      energiaLampada = calcularEnergia(potenciaLampadaFluorescente, lampadaPresencialUso);
    } else {
      energiaLampada = calcularEnergia(potenciaLampadaIncandescente, lampadaPresencialUso);
    }

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
    diasNoAno * calcularGastoEnergiaPresencialPorDia();

  const calcularCarbonoEmitidoHomeOfficePorDia = () => {
    const gastoEnergiaHomeOfficeDia = calcularGastoEnergiaHomeOfficePorDia();

    const carbonoEmitidoHomeOfficeDia = gastoEnergiaHomeOfficeDia * kgCarbonoPorEnergia;
    return carbonoEmitidoHomeOfficeDia;
  };

  const calcularCarbonoEmitidoHomeOfficePorAno = () => {
    const carbonoEmitidoHomeOfficeDia = calcularCarbonoEmitidoHomeOfficePorDia();
    const carbonoEmitidoHomeOfficeAno = carbonoEmitidoHomeOfficeDia * diasNoAno;

    return carbonoEmitidoHomeOfficeAno;
  };

  const calcularCarbonoEmitidoPresencialPorDia = () => {
    const gastoEnergiaPresencialDia = calcularGastoEnergiaPresencialPorDia();

    const carbonoEmitidoPresencialDia = gastoEnergiaPresencialDia * kgCarbonoPorEnergia;
    return carbonoEmitidoPresencialDia;
  };

  const calcularCarbonoEmitidoPresencialPorAno = () => {
    const carbonoEmitidoPresencialDia = calcularCarbonoEmitidoPresencialPorDia();
    const carbonoEmitidoPresencialAno = carbonoEmitidoPresencialDia * diasNoAno;

    return carbonoEmitidoPresencialAno;
  };

  return (
    <Layout>
      <section className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Calculadora Carbônica" />

        <div className="container mx-auto flex flex-col items-center md:items-start px-12">
          <h2 className="text-2xl lg:text-3xl font-semibold">O que é Pegada Carbônica</h2>
          <div className="w-full text-xl">
            <p>
              Pegada Carbônica é uma medida que calcula a emissão de gases do efeito estufa,
              convertidos em Carbono equivalente, para um produto, processo ou ação de uma pessoa em
              seu dia-a-dia. Tal cálculo pode valer de medição do impacto ambiental do seu dia-a-dia
              como aluno ou trabalhador.
            </p>

            <h2 className="mt-12 text-2xl lg:text-3xl font-semibold">Como usar a calculadora</h2>
            <ul className="list-inside list-disc">
              <li>
                Pense: “O que e por quanto tempo eu uso em meu espaço pessoal durante meus horários
                de Home Office e de Trabalho Presencial, ou de EAD e de Aula Presencial?”.
              </li>
              <li>Responda as perguntas da calculadora.</li>
              <li>
                Uso diário: Tempo, em horas, em que tal equipamento está ligado na tomada, ao longo
                do dia.
              </li>
              <li>
                Caso precise, acesse o{' '}
                <a href="https://www.google.com.br/maps" target="_blank" rel="noreferrer noopener">
                  Google Maps
                </a>{' '}
                para calcular a distância percorrida por sua rota de Ônibus ou Metrô, seguindo os
                passos:
                <ol className="ml-[15px] list-inside list-decimal">
                  <li>Abra o Google Maps e coloque seu trajeto rotineiro;</li>
                  <li>
                    A partir de seu ponto de partida, clique com o botão direito do mouse e
                    selecione “Medir distância”;
                  </li>
                  <li>
                    Com o botão esquerdo, selecione o ponto de início e vá selecionando os pontos de
                    rota, mantendo-se dentro da rota destacada;
                  </li>
                  <li>
                    Ao terminar, tal distância estará a mostra num pop-up na parte inferior da tela.
                  </li>
                </ol>
              </li>
            </ul>

            <div className="mt-12 flex flex-row w-full justify-between px-8">
              <StaticImage
                src="../images/calculadora/distancia.png"
                alt="Como medir distância?"
                width="100%"
                height="100%"
              />
              <StaticImage
                src="../images/calculadora/medida.png"
                alt="Medida"
                width="178"
                height="265"
              />
              <StaticImage
                src="../images/calculadora/medir-distancia.png"
                alt="Distância"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="mt-12 text-center self-center">
            <p>O uso diário é feito em horas e a distância em km.</p>
            <p>
              Use apenas números nas caixas de respostas, usando o (.) e não a vírgula (,) para
              decimais.
            </p>
            <p>
              A calculadora pode ser respondida parcialmente, com a resposta final considerando
              apenas o que foi respondido
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center w-full">
            {mostrarResultados ? (
              <div className="flex flex-col items-start justify-center w-full text-lg">
                <h4 className="text-2xl lg:text-3xl text-black">Resultado</h4>

                <div className="flex flex-col justify-between items-start">
                  <div id="resultados-home-office">
                    <div id="resultado-co2-home-office" className="flex flex-row">
                      <p className="text-primary-darker font-bold mr-4">
                        Quantidade de CO<sub>2</sub> produzido em office:
                      </p>

                      <p>
                        {calcularCarbonoEmitidoHomeOfficePorDia().toFixed(2)} kg de CO<sub>2</sub>{' '}
                        por dia e {calcularCarbonoEmitidoHomeOfficePorAno().toFixed(2)} kg de CO
                        <sub>2</sub> por ano.
                      </p>
                    </div>

                    <div id="resultado-gasto-home-office" className="flex flex-row">
                      <p className="text-primary-darker font-bold mr-4">
                        Gasto com Eletricidade em home office:
                      </p>

                      <p>
                        {comoMoeda(calcularGastoEnergiaHomeOfficePorDia())} por dia e{' '}
                        {comoMoeda(calcularGastoEnergiaHomeOfficePorAno())} por ano.
                      </p>
                    </div>
                  </div>

                  <div id="resultados-presencial" className="mt-8">
                    <div id="resultado-co2-presencial" className="flex flex-row">
                      <p className="text-primary-darker font-bold mr-4">
                        Quantidade de CO<sub>2</sub> produzido presencialmente:
                      </p>

                      <p>
                        {calcularCarbonoEmitidoPresencialPorDia().toFixed(2)} kg de CO<sub>2</sub>{' '}
                        por dia e {calcularCarbonoEmitidoPresencialPorAno().toFixed(2)} kg de CO
                        <sub>2</sub> por ano.
                      </p>
                    </div>

                    <div id="resultado-gasto-presencial" className="flex flex-row">
                      <p className="text-primary-darker font-bold mr-4">
                        Gasto com Eletricidade presencialmente:
                      </p>

                      <p>
                        {comoMoeda(calcularGastoEnergiaPresencialPorDia())} por dia e{' '}
                        {comoMoeda(calcularGastoEnergiaPresencialPorAno())} por ano.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-xl">
                  <p className="mb-4">
                    Percebe como uma mudança de rotina como trabalhar em casa pode afetar não só sua
                    vida mas a vida do planeta?
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
                  Nossa calculadora, apesar de detalhada e de fontes confiáveis, usa diversas
                  aproximações para simplificar o processo, portanto não deve ser usada como uma
                  análise completa.
                </p>
                <p className="text-xl">
                  Caso tenha interesse em uma consultoria de análise completa, para redução de
                  pegada carbônica, de gastos com transporte e energia, contate a Seiva Jr através
                  desse e-mail.
                </p>

                <a className="mt-4 text-xl" href="mailto:seiva.comercialeprojetos@gmail.com">
                  seiva.comercialeprojetos@gmail.com
                </a>

                <div className="text-xl mt-12">
                  <p>
                    Caso queira conhecer mais da Seiva, <Link to="/">explore nosso site</Link> e
                    conheça nossos <Link to="/portfolio">outros projetos</Link>!
                  </p>

                  <p>Algumas dicas para diminuir sua pegada carbônica:</p>
                  <ol className="list-decimal list-inside ml-[15px]">
                    <li>
                      Não está usando? Desligue! Muitos aparelhos eletrônicos ficam ligados na
                      tomada o dia todo, sem nem percebermos ou sequer usarmos a energia que os
                      mesmos gastam;
                    </li>
                    <li>
                      Um ventinho de janela pode ser muito mais que o suficiente para se refrescar;
                    </li>
                    <li>
                      Deixe o carro na garagem! Andar de transporte público, a pé ou de bicicleta
                      libera de 87 a 100% menos CO₂ por km rodado!
                    </li>
                  </ol>
                </div>

                <StaticImage
                  className="mt-4 self-center"
                  src="../images/calculadora/pegada.png"
                  alt="Pegada Carbônica"
                  width="25%"
                  height="auto"
                  objectFit="contain"
                />
              </div>
            ) : (
              <div id="calculadora" className="w-full">
                <div id="perguntas" className="w-full">
                  <h4 className="text-2xl lg:text-3xl text-primary-darker">Home Office</h4>

                  <label className="flex flex-col w-full" htmlFor="eletricidadeHomeOffice">
                    <p className="font-bold">Eletricidade ⚡</p>
                    <p>Valor do kWh, em R$:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="eletricidadeHomeOffice"
                      name="eletricidadeHomeOffice"
                      value={eletricidadeHomeOffice}
                      onChange={(e) => setEletricidadeHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-8 flex flex-col w-full" htmlFor="computadorHomeOffice">
                    <p className="font-bold">Eletroeletrônicos 📱</p>
                    <p>Tipo de computador:</p>
                    <select
                      className="bg-gray-100 p-2 w-full"
                      id="computadorHomeOffice"
                      name="computadorHomeOffice"
                      value={computadorHomeOffice}
                      onChange={(e) => setComputadorHomeOffice(e.target.value)}
                    >
                      <option value="selecione">Selecione</option>
                      <option value="desktop">Desktop</option>
                      <option value="notebook">Notebook</option>
                      <option value="ambos">Ambos</option>
                      <option value="nenhum">Nenhum</option>
                    </select>
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="computadorUso1HomeOffice">
                    <p>Tempo de uso diário, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="computadorUso1HomeOffice"
                      name="computadorUso1HomeOffice"
                      value={computadorHomeOfficeUso1}
                      onChange={(e) => setComputadorHomeOfficeUso1(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="computadorUso2HomeOffice">
                    <p>
                      Em caso de usar ambos, coloque aqui seu tempo de uso diário do Notebook, em
                      horas:
                    </p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="computadorUso2HomeOffice"
                      name="computadorUso2HomeOffice"
                      value={computadorHomeOfficeUso2}
                      onChange={(e) => setComputadorHomeOfficeUso2(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="tabletHomeOffice">
                    <p>Tempo diário carregando o Tablet, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="tabletHomeOffice"
                      name="tabletHomeOffice"
                      value={tabletHomeOffice}
                      onChange={(e) => setTabletHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="ventiladorHomeOffice">
                    <p>Tempo de uso diário do Ventilador, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="ventiladorHomeOffice"
                      name="ventiladorHomeOffice"
                      value={ventiladorHomeOffice}
                      onChange={(e) => setVentiladorHomeOffice(e.target.value)}
                    />
                  </label>

                  <label
                    className="mt-4 flex flex-col w-full"
                    htmlFor="pessoasVentiladorHomeOffice"
                  >
                    <p>Número de pessoas usando o Ventilador ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasVentiladorHomeOffice"
                      name="pessoasVentiladorHomeOffice"
                      value={pessoasVentiladorHomeOffice}
                      onChange={(e) => setPessoasVentiladorHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="arCondicionadoHomeOffice">
                    <p>Tempo de uso diário do Ar Condicionado, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="arCondicionadoHomeOffice"
                      name="arCondicionadoHomeOffice"
                      value={arCondicionadoHomeOffice}
                      onChange={(e) => setArCondicionadoHomeOffice(e.target.value)}
                    />
                  </label>

                  <label
                    className="mt-4 flex flex-col w-full"
                    htmlFor="pessoasArCondicionadoHomeOffice"
                  >
                    <p>Número de pessoas usando o Ar Condicionado ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasArCondicionadoHomeOffice"
                      name="pessoasArCondicionadoHomeOffice"
                      value={pessoasArCondicionadoHomeOffice}
                      onChange={(e) => setPessoasArCondicionadoHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="impressoraHomeOffice">
                    <p>Tempo de uso diário da Impressora, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="impressoraHomeOffice"
                      name="impressoraHomeOffice"
                      value={impressoraHomeOffice}
                      onChange={(e) => setImpressoraHomeOffice(e.target.value)}
                    />
                  </label>

                  <label
                    className="mt-4 flex flex-col w-full"
                    htmlFor="pessoasImpressoraHomeOffice"
                  >
                    <p>Número de pessoas usando a Impressora ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasImpressoraHomeOffice"
                      name="pessoasImpressoraHomeOffice"
                      value={pessoasImpressoraHomeOffice}
                      onChange={(e) => setPessoasImpressoraHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="celularHomeOffice">
                    <p>Tempo diário carregando o Celular, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="celularHomeOffice"
                      name="celularHomeOffice"
                      value={celularHomeOffice}
                      onChange={(e) => setCelularHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-8 flex flex-col w-full" htmlFor="roteadorHomeOffice">
                    <p className="font-bold">Internet 📡</p>
                    <p>Tempo de uso diário do Roteador, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="roteadorHomeOffice"
                      name="roteadorHomeOffice"
                      value={roteadorHomeOffice}
                      onChange={(e) => setRoteadorHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="pessoasRoteadorHomeOffice">
                    <p>Número de pessoas usando o Roteador ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasRoteadorHomeOffice"
                      name="pessoasRoteadorHomeOffice"
                      value={pessoasRoteadorHomeOffice}
                      onChange={(e) => setPessoasRoteadorHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-8 flex flex-col w-full" htmlFor="lampadaHomeOffice">
                    <p className="font-bold">Luz 💡</p>
                    <p>Tipo da lâmpada:</p>
                    <select
                      className="bg-gray-100 p-2 w-full"
                      id="lampadaHomeOffice"
                      name="lampadaHomeOffice"
                      value={lampadaHomeOffice}
                      onChange={(e) => setLampadaHomeOffice(e.target.value)}
                    >
                      <option value="selecione">Selecione</option>
                      <option value="incandescente">Incandescente</option>
                      <option value="fluorescente">Fluorescente</option>
                      <option value="led">LED</option>
                    </select>
                  </label>

                  <label
                    className="mt-4 flex flex-col w-full"
                    htmlFor="quantidadeLampadaHomeOffice"
                  >
                    <p>Número de lâmpadas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="quantidadeLampadaHomeOffice"
                      name="quantidadeLampadaHomeOffice"
                      value={quantidadeLampadaHomeOffice}
                      onChange={(e) => setQuantidadeLampadaHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="lampadaHomeOfficeUso">
                    <p>Tempo de uso diário das lâmpadas, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="lampadaHomeOfficeUso"
                      name="lampadaHomeOfficeUso"
                      value={lampadaHomeOfficeUso}
                      onChange={(e) => setLampadaHomeOfficeUso(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="pessoasLampadaHomeOffice">
                    <p>Número de pessoas usando ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasLampadaHomeOffice"
                      name="pessoasLampadaHomeOffice"
                      value={pessoasLampadaHomeOffice}
                      onChange={(e) => setPessoasLampadaHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-8 flex flex-col w-full" htmlFor="transporteHomeOffice">
                    <p className="font-bold">Transporte 🚍</p>
                    <p>Tipo de transporte:</p>
                    <select
                      className="bg-gray-100 p-2 w-full"
                      id="transporteHomeOffice"
                      name="transporteHomeOffice"
                      value={transporteHomeOffice}
                      onChange={(e) => setTransporteHomeOffice(e.target.value)}
                    >
                      <option value="selecione">Selecione</option>
                      <option>A pé/Bicicleta</option>
                      <option>Carro</option>
                      <option>Moto</option>
                      <option>Ônibus</option>
                      <option>Metrô</option>
                      <option>Trem</option>
                      <option>Ônibus e Metrô</option>
                      <option>Ônibus e Trem</option>
                      <option>Ônibus, Metrô e Trem</option>
                    </select>
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="distanciaHomeOffice">
                    <p>Distância percorrida diária, em apenas um tipo de transporte, em km:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="distanciaHomeOffice"
                      name="distanciaHomeOffice"
                      value={distanciaHomeOffice}
                      onChange={(e) => setDistanciaHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="distanciaMetroHomeOffice">
                    <p>
                      Em caso de usar mais de um tipo de transporte, coloque aqui a distância
                      percorrida por Metrô, em km:
                    </p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="distanciaMetroHomeOffice"
                      name="distanciaMetroHomeOffice"
                      value={distanciaMetroHomeOffice}
                      onChange={(e) => setDistanciaMetroHomeOffice(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="distanciaTremHomeOffice">
                    <p>
                      Em caso de usar mais de um tipo de transporte, coloque aqui a distância
                      percorrida por Trem, em km:
                    </p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="distanciaTremHomeOffice"
                      name="distanciaTremHomeOffice"
                      value={distanciaTremHomeOffice}
                      onChange={(e) => setDistanciaTremHomeOffice(e.target.value)}
                    />
                  </label>

                  <h4 className="mt-20 text-2xl lg:text-3xl text-primary-darker">Presencial 🏢</h4>

                  <label className="flex flex-col w-full" htmlFor="eletricidadePresencial">
                    <p className="font-bold">Eletricidade ⚡</p>
                    <p>Valor do kWh, em R$:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="eletricidadePresencial"
                      name="eletricidadePresencial"
                      value={eletricidadePresencial}
                      onChange={(e) => setEletricidadePresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-8 flex flex-col w-full" htmlFor="computadorPresencial">
                    <p className="font-bold">Eletroeletrônicos 📱</p>
                    <p>Tipo de computador:</p>
                    <select
                      className="bg-gray-100 p-2 w-full"
                      id="computadorPresencial"
                      name="computadorPresencial"
                      value={computadorPresencial}
                      onChange={(e) => setComputadorPresencial(e.target.value)}
                    >
                      <option value="selecione">Selecione</option>
                      <option value="desktop">Desktop</option>
                      <option value="notebook">Notebook</option>
                      <option value="ambos">Ambos</option>
                      <option value="nenhum">Nenhum</option>
                    </select>
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="computadorUso1Presencial">
                    <p>Tempo de uso diário, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="computadorUso1Presencial"
                      name="computadorUso1Presencial"
                      value={computadorPresencialUso1}
                      onChange={(e) => setComputadorPresencialUso1(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="computadorUso2Presencial">
                    <p>
                      Em caso de usar ambos, coloque aqui seu tempo de uso diário do Notebook, em
                      horas:
                    </p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="computadorUso2Presencial"
                      name="computadorUso2Presencial"
                      value={computadorPresencialUso2}
                      onChange={(e) => setComputadorPresencialUso2(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="tabletPresencial">
                    <p>Tempo diário carregando o Tablet, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="tabletPresencial"
                      name="tabletPresencial"
                      value={tabletPresencial}
                      onChange={(e) => setTabletPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="ventiladorPresencial">
                    <p>Tempo de uso diário do Ventilador, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="ventiladorPresencial"
                      name="ventiladorPresencial"
                      value={ventiladorPresencial}
                      onChange={(e) => setVentiladorPresencial(e.target.value)}
                    />
                  </label>

                  <label
                    className="mt-4 flex flex-col w-full"
                    htmlFor="pessoasVentiladorPresencial"
                  >
                    <p>Número de pessoas usando o Ventilador ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasVentiladorPresencial"
                      name="pessoasVentiladorPresencial"
                      value={pessoasVentiladorPresencial}
                      onChange={(e) => setPessoasVentiladorPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="arCondicionadoPresencial">
                    <p>Tempo de uso diário do Ar Condicionado, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="arCondicionadoPresencial"
                      name="arCondicionadoPresencial"
                      value={arCondicionadoPresencial}
                      onChange={(e) => setArCondicionadoPresencial(e.target.value)}
                    />
                  </label>

                  <label
                    className="mt-4 flex flex-col w-full"
                    htmlFor="pessoasArCondicionadoPresencial"
                  >
                    <p>Número de pessoas usando o Ar Condicionado ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasArCondicionadoPresencial"
                      name="pessoasArCondicionadoPresencial"
                      value={pessoasArCondicionadoPresencial}
                      onChange={(e) => setPessoasArCondicionadoPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="impressoraPresencial">
                    <p>Tempo de uso diário da Impressora, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="impressoraPresencial"
                      name="impressoraPresencial"
                      value={impressoraPresencial}
                      onChange={(e) => setImpressoraPresencial(e.target.value)}
                    />
                  </label>

                  <label
                    className="mt-4 flex flex-col w-full"
                    htmlFor="pessoasImpressoraPresencial"
                  >
                    <p>Número de pessoas usando a Impressora ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasImpressoraPresencial"
                      name="pessoasImpressoraPresencial"
                      value={pessoasImpressoraPresencial}
                      onChange={(e) => setPessoasImpressoraPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="celularPresencial">
                    <p>Tempo diário carregando o Celular, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="celularPresencial"
                      name="celularPresencial"
                      value={celularPresencial}
                      onChange={(e) => setCelularPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-8 flex flex-col w-full" htmlFor="roteadorPresencial">
                    <p className="font-bold">Internet 📡</p>
                    <p>Tempo de uso diário do Roteador, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="roteadorPresencial"
                      name="roteadorPresencial"
                      value={roteadorPresencial}
                      onChange={(e) => setRoteadorPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="pessoasRoteadorPresencial">
                    <p>Número de pessoas usando o Roteador ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasRoteadorPresencial"
                      name="pessoasRoteadorPresencial"
                      value={pessoasRoteadorPresencial}
                      onChange={(e) => setPessoasRoteadorPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-8 flex flex-col w-full" htmlFor="lampadaPresencial">
                    <p className="font-bold">Luz 💡</p>
                    <p>Tipo da lâmpada:</p>
                    <select
                      className="bg-gray-100 p-2 w-full"
                      id="lampadaPresencial"
                      name="lampadaPresencial"
                      value={lampadaPresencial}
                      onChange={(e) => setLampadaPresencial(e.target.value)}
                    >
                      <option value="selecione">Selecione</option>
                      <option value="incandescente">Incandescente</option>
                      <option value="fluorescente">Fluorescente</option>
                      <option value="led">LED</option>
                    </select>
                  </label>

                  <label
                    className="mt-4 flex flex-col w-full"
                    htmlFor="quantidadeLampadaPresencial"
                  >
                    <p>Número de lâmpadas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="quantidadeLampadaPresencial"
                      name="quantidadeLampadaPresencial"
                      value={quantidadeLampadaPresencial}
                      onChange={(e) => setQuantidadeLampadaPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="lampadaPresencialUso">
                    <p>Tempo de uso diário das lâmpadas, em horas:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="lampadaPresencialUso"
                      name="lampadaPresencialUso"
                      value={lampadaPresencialUso}
                      onChange={(e) => setLampadaPresencialUso(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="pessoasLampadaPresencial">
                    <p>Número de pessoas usando ao mesmo tempo:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="pessoasLampadaPresencial"
                      name="pessoasLampadaPresencial"
                      value={pessoasLampadaPresencial}
                      onChange={(e) => setPessoasLampadaPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-8 flex flex-col w-full" htmlFor="transportePresencial">
                    <p className="font-bold">Transporte 🚍</p>
                    <p>Tipo de transporte:</p>
                    <select
                      className="bg-gray-100 p-2 w-full"
                      id="transportePresencial"
                      name="transportePresencial"
                      value={transportePresencial}
                      onChange={(e) => setTransportePresencial(e.target.value)}
                    >
                      <option value="selecione">Selecione</option>
                      <option>A pé/Bicicleta</option>
                      <option>Carro</option>
                      <option>Moto</option>
                      <option>Ônibus</option>
                      <option>Metrô</option>
                      <option>Trem</option>
                      <option>Ônibus e Metrô</option>
                      <option>Ônibus e Trem</option>
                      <option>Ônibus, Metrô e Trem</option>
                    </select>
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="distanciaPresencial">
                    <p>Distância percorrida diária, em apenas um tipo de transporte, em km:</p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="distanciaPresencial"
                      name="distanciaPresencial"
                      value={distanciaPresencial}
                      onChange={(e) => setDistanciaPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="distanciaMetroPresencial">
                    <p>
                      Em caso de usar mais de um tipo de transporte, coloque aqui a distância
                      percorrida por Metrô, em km:
                    </p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="distanciaMetroPresencial"
                      name="distanciaMetroPresencial"
                      value={distanciaMetroPresencial}
                      onChange={(e) => setDistanciaMetroPresencial(e.target.value)}
                    />
                  </label>

                  <label className="mt-4 flex flex-col w-full" htmlFor="distanciaTremPresencial">
                    <p>
                      Em caso de usar mais de um tipo de transporte, coloque aqui a distância
                      percorrida por Trem, em km:
                    </p>
                    <input
                      className="bg-gray-100 p-2 w-full"
                      type="number"
                      id="distanciaTremPresencial"
                      name="distanciaTremPresencial"
                      value={distanciaTremPresencial}
                      onChange={(e) => setDistanciaTremPresencial(e.target.value)}
                    />
                  </label>
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
