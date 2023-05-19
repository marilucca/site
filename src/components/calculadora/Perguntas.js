import React from 'react';

import Input from './Input';
import Select from './Select';

const Perguntas = ({
  title,
  eletricidade,
  setEletricidade,
  computador,
  setComputador,
  computadorUso1,
  setComputadorUso1,
  computadorUso2,
  setComputadorUso2,
  tablet,
  setTablet,
  celular,
  setCelular,
  ventilador,
  setVentilador,
  pessoasVentilador,
  setPessoasVentilador,
  arCondicionado,
  setArCondicionado,
  pessoasArCondicionado,
  setPessoasArCondicionado,
  impressora,
  setImpressora,
  pessoasImpressora,
  setPessoasImpressora,
  roteador,
  setRoteador,
  pessoasRoteador,
  setPessoasRoteador,
  lampada,
  setLampada,
  quantidadeLampada,
  setQuantidadeLampada,
  lampadaUso,
  setLampadaUso,
  pessoasLampada,
  setPessoasLampada,
  transporte,
  setTransporte,
  distancia,
  setDistancia,
  distanciaTrem,
  setDistanciaTrem,
  distanciaMetro,
  setDistanciaMetro,
  className,
}) => {
  const titleSlug = title.replace(' ', '');

  return (
    <div className={className}>
      <h4 className="questions-title">{title}</h4>

      <Input
        htmlFor={`eletricidade${titleSlug}`}
        sectionText="Eletricidade"
        text="Valor do kWh, em R$:"
        value={eletricidade}
        onChange={(e) => setEletricidade(e.target.value)}
      />

      <Select
        sectionText="Eletroeletrônicos 📱"
        text="Tipo de computador:"
        htmlFor={`computador${titleSlug}`}
        value={computador}
        onChange={(e) => setComputador(e.target.value)}
      >
        <option value="selecione">Selecione</option>
        <option value="desktop">Desktop</option>
        <option value="notebook">Notebook</option>
        <option value="ambos">Ambos</option>
        <option value="nenhum">Nenhum</option>
      </Select>

      <Input
        htmlFor={`computadorUso1${titleSlug}`}
        text="Tempo de uso diário, em horas:"
        value={computadorUso1}
        onChange={(e) => setComputadorUso1(e.target.value)}
      />

      <Input
        htmlFor={`computadorUso2${titleSlug}`}
        text="Em caso de usar ambos, coloque aqui seu tempo de uso diário do Notebook, em horas:"
        value={computadorUso2}
        onChange={(e) => setComputadorUso2(e.target.value)}
      />

      <Input
        htmlFor={`tablet${titleSlug}`}
        text="Tempo diário carregando o Tablet, em horas:"
        value={tablet}
        onChange={(e) => setTablet(e.target.value)}
      />

      <Input
        htmlFor={`ventilador${titleSlug}`}
        text="Tempo de uso diário do Ventilador, em horas:"
        value={ventilador}
        onChange={(e) => setVentilador(e.target.value)}
      />

      <Input
        htmlFor={`pessoasVentilador${titleSlug}`}
        text="Número de pessoas usando o Ventilador ao mesmo tempo:"
        value={pessoasVentilador}
        onChange={(e) => setPessoasVentilador(e.target.value)}
      />

      <Input
        htmlFor={`arCondicionado${titleSlug}`}
        text="Tempo de uso diário do Ar Condicionado, em horas:"
        value={arCondicionado}
        onChange={(e) => setArCondicionado(e.target.value)}
      />

      <Input
        htmlFor={`pessoasArCondicionado${titleSlug}`}
        text="Número de pessoas usando o Ar Condicionado ao mesmo tempo:"
        value={pessoasArCondicionado}
        onChange={(e) => setPessoasArCondicionado(e.target.value)}
      />

      <Input
        htmlFor={`impressora${titleSlug}`}
        text="Tempo de uso diário da Impressora, em horas:"
        value={impressora}
        onChange={(e) => setImpressora(e.target.value)}
      />

      <Input
        htmlFor={`pessoasImpressora${titleSlug}`}
        text="Número de pessoas usando a Impressora ao mesmo tempo:"
        value={pessoasImpressora}
        onChange={(e) => setPessoasImpressora(e.target.value)}
      />

      <Input
        htmlFor={`celular${titleSlug}`}
        text="Tempo diário carregando o Celular, em horas:"
        value={celular}
        onChange={(e) => setCelular(e.target.value)}
      />

      <Input
        htmlFor={`roteador${titleSlug}`}
        sectionText="Internet 📡"
        text="Tempo de uso diário do Roteador, em horas:"
        value={roteador}
        onChange={(e) => setRoteador(e.target.value)}
      />

      <Input
        htmlFor={`pessoasRoteador${titleSlug}`}
        text="Número de pessoas usando o Roteador ao mesmo tempo:"
        value={pessoasRoteador}
        onChange={(e) => setPessoasRoteador(e.target.value)}
      />

      <Select
        htmlFor={`lampada${titleSlug}`}
        sectionText="Luz 💡"
        text="Tipo de lâmpada:"
        value={lampada}
        onChange={(e) => setLampada(e.target.value)}
      >
        <option value="selecione">Selecione</option>
        <option value="incandescente">Incandescente</option>
        <option value="fluorescente">Fluorescente</option>
        <option value="led">LED</option>
      </Select>

      <Input
        htmlFor={`quantidadeLampada${titleSlug}`}
        text="Número de lâmpadas:"
        value={quantidadeLampada}
        onChange={(e) => setQuantidadeLampada(e.target.value)}
      />

      <Input
        htmlFor={`lampadaUso${titleSlug}`}
        text="Tempo de uso diário das lâmpadas, em horas:"
        value={lampadaUso}
        onChange={(e) => setLampadaUso(e.target.value)}
      />

      <Input
        htmlFor={`pessoasLampada${titleSlug}`}
        text="Número de pessoas usando ao mesmo tempo:"
        value={pessoasLampada}
        onChange={(e) => setPessoasLampada(e.target.value)}
      />

      <Select
        htmlFor={`transporte${titleSlug}`}
        sectionText="Transporte 🚍"
        text="Tipo de transporte:"
        value={transporte}
        onChange={(e) => setTransporte(e.target.value)}
      >
        <option value="selecione">Selecione</option>
        <option value="pe-bicicleta">A pé/Bicicleta</option>
        <option value="carro">Carro</option>
        <option value="moto">Moto</option>
        <option value="onibus">Ônibus</option>
        <option value="metro">Metrô</option>
        <option value="trem">Trem</option>
        <option value="onibus-metro">Ônibus e Metrô</option>
        <option value="onibus-trem">Ônibus e Trem</option>
        <option value="onibus-metro-trem">Ônibus, Metrô e Trem</option>
      </Select>

      <Input
        htmlFor={`distancia${titleSlug}`}
        text="Distância percorrida diária, em apenas um tipo de transporte, em km:"
        value={distancia}
        onChange={(e) => setDistancia(e.target.value)}
      />

      <Input
        htmlFor={`distanciaMetro${titleSlug}`}
        text="Em caso de usar mais de um tipo de transporte, coloque aqui a distância percorrida por Metrô, em km:"
        value={distanciaMetro}
        onChange={(e) => setDistanciaMetro(e.target.value)}
      />

      <Input
        htmlFor={`distanciaTrem${titleSlug}`}
        text="Em caso de usar mais de um tipo de transporte, coloque aqui a distância percorrida por Trem, em km:"
        value={distanciaTrem}
        onChange={(e) => setDistanciaTrem(e.target.value)}
      />
    </div>
  );
};

export default Perguntas;
