import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

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

// Calcula a energia consumida por um aparelho em kWh
const calcularEnergia = (potencia, tempo) => {
  return (potencia * tempo) / 1000;
};

const Calculadora = () => {
  const [eletricidadeHomeOffice, setEletricidadeHomeOffice] = useState();
  const [computadorHomeOffice, setComputadorHomeOffice] = useState('selecione');
  const [computadorHomeOfficeUso1, setComputadorHomeOfficeUso1] = useState();
  const [computadorHomeOfficeUso2, setComputadorHomeOfficeUso2] = useState();
  const [tabletHomeOffice, setTabletHomeOffice] = useState();
  const [ventiladorHomeOffice, setVentiladorHomeOffice] = useState();
  const [pessoasVentiladorHomeOffice, setPessoasVentiladorHomeOffice] = useState();
  const [arCondicionadoHomeOffice, setArCondicionadoHomeOffice] = useState();
  const [pessoasArCondicionadoHomeOffice, setPessoasArCondicionadoHomeOffice] = useState();
  const [impressoraHomeOffice, setImpressoraHomeOffice] = useState();
  const [pessoasImpressoraHomeOffice, setPessoasImpressoraHomeOffice] = useState();
  const [celularHomeOffice, setCelularHomeOffice] = useState();
  const [roteadorHomeOffice, setRoteadorHomeOffice] = useState();
  const [pessoasRoteadorHomeOffice, setPessoasRoteadorHomeOffice] = useState();
  const [lampadaHomeOffice, setLampadaHomeOffice] = useState('selecione');
  const [quantidadeLampadaHomeOffice, setQuantidadeLampadaHomeOffice] = useState();
  const [lampadaHomeOfficeUso, setLampadaHomeOfficeUso] = useState();
  const [pessoasLampadaHomeOffice, setPessoasLampadaHomeOffice] = useState();
  const [transporteHomeOffice, setTransporteHomeOffice] = useState('selecione');
  const [distanciaHomeOffice, setDistanciaHomeOffice] = useState();
  const [distanciaMetroHomeOffice, setDistanciaMetroHomeOffice] = useState();
  const [distanciaTremHomeOffice, setDistanciaTremHomeOffice] = useState();

  const [eletricidadePresencial, setEletricidadePresencial] = useState();
  const [computadorPresencial, setComputadorPresencial] = useState('selecione');
  const [computadorPresencialUso1, setComputadorPresencialUso1] = useState();
  const [computadorPresencialUso2, setComputadorPresencialUso2] = useState();
  const [tabletPresencial, setTabletPresencial] = useState();
  const [ventiladorPresencial, setVentiladorPresencial] = useState();
  const [pessoasVentiladorPresencial, setPessoasVentiladorPresencial] = useState();
  const [arCondicionadoPresencial, setArCondicionadoPresencial] = useState();
  const [pessoasArCondicionadoPresencial, setPessoasArCondicionadoPresencial] = useState();
  const [impressoraPresencial, setImpressoraPresencial] = useState();
  const [pessoasImpressoraPresencial, setPessoasImpressoraPresencial] = useState();
  const [celularPresencial, setCelularPresencial] = useState();
  const [roteadorPresencial, setRoteadorPresencial] = useState();
  const [pessoasRoteadorPresencial, setPessoasRoteadorPresencial] = useState();
  const [lampadaPresencial, setLampadaPresencial] = useState('selecione');
  const [quantidadeLampadaPresencial, setQuantidadeLampadaPresencial] = useState();
  const [lampadaPresencialUso, setLampadaPresencialUso] = useState();
  const [pessoasLampadaPresencial, setPessoasLampadaPresencial] = useState();
  const [transportePresencial, setTransportePresencial] = useState('selecione');
  const [distanciaPresencial, setDistanciaPresencial] = useState();
  const [distanciaMetroPresencial, setDistanciaMetroPresencial] = useState();
  const [distanciaTremPresencial, setDistanciaTremPresencial] = useState();

  return (
    <Layout>
      <section className="mt-8 pt-20 lg:pb-20 lg:pt-48">
        <Seo title="Calculadora Carbônica" />

        <div className="container mx-auto flex flex-col items-center md:items-start px-12">
          <h2 className="text-xl lg:text-2xl font-semibold">O que é Pegada Carbônica</h2>
          <p>
            Pegada Carbônica é uma medida que calcula a emissão de gases do efeito estufa,
            convertidos em Carbono equivalente, para um produto, processo ou ação de uma pessoa em
            seu dia-a-dia. Tal cálculo pode valer de medição do impacto ambiental do seu dia-a-dia
            como aluno ou trabalhador.
          </p>

          <h2 className="mt-12 text-xl lg:text-2xl font-semibold">Como usar a calculadora</h2>
          <ul className="list-inside list-disc">
            <li>
              Pense: “O que e por quanto tempo eu uso em meu espaço pessoal durante meus horários de
              Home Office e de Trabalho Presencial, ou de EAD e de Aula Presencial?”.
            </li>
            <li>Responda as perguntas da calculadora.</li>
            <li>
              Uso diário: Tempo, em horas, em que tal equipamento está ligado na tomada, ao longo do
              dia.
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
                  A partir de seu ponto de partida, clique com o botão direito do mouse e selecione
                  “Medir distância”;
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
            <div id="perguntas" className="w-full">
              <h4 className="text-xl lg:text-2xl text-primary-darker">Home Office</h4>

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
                  Em caso de usar ambos, coloque aqui seu tempo de uso diário do Notebook, em horas:
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

              <label className="mt-4 flex flex-col w-full" htmlFor="pessoasVentiladorHomeOffice">
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

              <label className="mt-4 flex flex-col w-full" htmlFor="pessoasImpressoraHomeOffice">
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

              <label className="mt-4 flex flex-col w-full" htmlFor="quantidadeLampadaHomeOffice">
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
                  Em caso de usar mais de um tipo de transporte, coloque aqui a distância percorrida
                  por Metrô, em km:
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
                  Em caso de usar mais de um tipo de transporte, coloque aqui a distância percorrida
                  por Trem, em km:
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

              <h4 className="mt-20 text-xl lg:text-2xl text-primary-darker">Presencial 🏢</h4>

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
                  Em caso de usar ambos, coloque aqui seu tempo de uso diário do Notebook, em horas:
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

              <label className="mt-4 flex flex-col w-full" htmlFor="pessoasVentiladorPresencial">
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

              <label className="mt-4 flex flex-col w-full" htmlFor="pessoasImpressoraPresencial">
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

              <label className="mt-4 flex flex-col w-full" htmlFor="quantidadeLampadaPresencial">
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
                  Em caso de usar mais de um tipo de transporte, coloque aqui a distância percorrida
                  por Metrô, em km:
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
                  Em caso de usar mais de um tipo de transporte, coloque aqui a distância percorrida
                  por Trem, em km:
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
            >
              Calcular
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculadora;
