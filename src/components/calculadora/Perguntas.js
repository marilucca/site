import React from 'react';

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
      <h4 className="text-2xl lg:text-3xl text-primary-darker">{title}</h4>

      <label className="flex flex-col w-full" htmlFor={`eletricidade${titleSlug}`}>
        <p className="font-bold">Eletricidade ⚡</p>
        <p>Valor do kWh, em R$:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`eletricidade${titleSlug}`}
          name={`eletricidade${titleSlug}`}
          value={eletricidade}
          onChange={(e) => setEletricidade(e.target.value)}
        />
      </label>

      <label className="mt-8 flex flex-col w-full" htmlFor={`computador${titleSlug}`}>
        <p className="font-bold">Eletroeletrônicos 📱</p>
        <p>Tipo de computador:</p>
        <select
          className="bg-gray-100 p-2 w-full"
          id={`computador${titleSlug}`}
          name={`computador${titleSlug}`}
          value={computador}
          onChange={(e) => setComputador(e.target.value)}
        >
          <option value="selecione">Selecione</option>
          <option value="desktop">Desktop</option>
          <option value="notebook">Notebook</option>
          <option value="ambos">Ambos</option>
          <option value="nenhum">Nenhum</option>
        </select>
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`computadorUso1${titleSlug}`}>
        <p>Tempo de uso diário, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`computadorUso1${titleSlug}`}
          name={`computadorUso1${titleSlug}`}
          value={computadorUso1}
          onChange={(e) => setComputadorUso1(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`computadorUso2${titleSlug}`}>
        <p>Em caso de usar ambos, coloque aqui seu tempo de uso diário do Notebook, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`computadorUso2${titleSlug}`}
          name={`computadorUso2${titleSlug}`}
          value={computadorUso2}
          onChange={(e) => setComputadorUso2(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`tablet${titleSlug}`}>
        <p>Tempo diário carregando o Tablet, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`tablet${titleSlug}`}
          name={`tablet${titleSlug}`}
          value={tablet}
          onChange={(e) => setTablet(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`ventilador${titleSlug}`}>
        <p>Tempo de uso diário do Ventilador, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`ventilador${titleSlug}`}
          name={`ventilador${titleSlug}`}
          value={ventilador}
          onChange={(e) => setVentilador(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`pessoasVentilador${titleSlug}`}>
        <p>Número de pessoas usando o Ventilador ao mesmo tempo:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`pessoasVentilador${titleSlug}`}
          name={`pessoasVentilador${titleSlug}`}
          value={pessoasVentilador}
          onChange={(e) => setPessoasVentilador(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`arCondicionado${titleSlug}`}>
        <p>Tempo de uso diário do Ar Condicionado, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`arCondicionado${titleSlug}`}
          name={`arCondicionado${titleSlug}`}
          value={arCondicionado}
          onChange={(e) => setArCondicionado(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`pessoasArCondicionado${titleSlug}`}>
        <p>Número de pessoas usando o Ar Condicionado ao mesmo tempo:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`pessoasArCondicionado${titleSlug}`}
          name={`pessoasArCondicionado${titleSlug}`}
          value={pessoasArCondicionado}
          onChange={(e) => setPessoasArCondicionado(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`impressora${titleSlug}`}>
        <p>Tempo de uso diário da Impressora, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`impressora${titleSlug}`}
          name={`impressora${titleSlug}`}
          value={impressora}
          onChange={(e) => setImpressora(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`pessoasImpressora${titleSlug}`}>
        <p>Número de pessoas usando a Impressora ao mesmo tempo:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`pessoasImpressora${titleSlug}`}
          name={`pessoasImpressora${titleSlug}`}
          value={pessoasImpressora}
          onChange={(e) => setPessoasImpressora(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`celular${titleSlug}`}>
        <p>Tempo diário carregando o Celular, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`celular${titleSlug}`}
          name={`celular${titleSlug}`}
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
      </label>

      <label className="mt-8 flex flex-col w-full" htmlFor={`roteador${titleSlug}`}>
        <p className="font-bold">Internet 📡</p>
        <p>Tempo de uso diário do Roteador, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`roteador${titleSlug}`}
          name={`roteador${titleSlug}`}
          value={roteador}
          onChange={(e) => setRoteador(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`pessoasRoteador${titleSlug}`}>
        <p>Número de pessoas usando o Roteador ao mesmo tempo:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`pessoasRoteador${titleSlug}`}
          name={`pessoasRoteador${titleSlug}`}
          value={pessoasRoteador}
          onChange={(e) => setPessoasRoteador(e.target.value)}
        />
      </label>

      <label className="mt-8 flex flex-col w-full" htmlFor={`lampada${titleSlug}`}>
        <p className="font-bold">Luz 💡</p>
        <p>Tipo da lâmpada:</p>
        <select
          className="bg-gray-100 p-2 w-full"
          id={`lampada${titleSlug}`}
          name={`lampada${titleSlug}`}
          value={lampada}
          onChange={(e) => setLampada(e.target.value)}
        >
          <option value="selecione">Selecione</option>
          <option value="incandescente">Incandescente</option>
          <option value="fluorescente">Fluorescente</option>
          <option value="led">LED</option>
        </select>
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`quantidadeLampada${titleSlug}`}>
        <p>Número de lâmpadas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`quantidadeLampada${titleSlug}`}
          name={`quantidadeLampada${titleSlug}`}
          value={quantidadeLampada}
          onChange={(e) => setQuantidadeLampada(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`lampadaUso${titleSlug}`}>
        <p>Tempo de uso diário das lâmpadas, em horas:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`lampadaUso${titleSlug}`}
          name={`lampadaUso${titleSlug}`}
          value={lampadaUso}
          onChange={(e) => setLampadaUso(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`pessoasLampada${titleSlug}`}>
        <p>Número de pessoas usando ao mesmo tempo:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`pessoasLampada${titleSlug}`}
          name={`pessoasLampada${titleSlug}`}
          value={pessoasLampada}
          onChange={(e) => setPessoasLampada(e.target.value)}
        />
      </label>

      <label className="mt-8 flex flex-col w-full" htmlFor={`transporte${titleSlug}`}>
        <p className="font-bold">Transporte 🚍</p>
        <p>Tipo de transporte:</p>
        <select
          className="bg-gray-100 p-2 w-full"
          id={`transporte${titleSlug}`}
          name={`transporte${titleSlug}`}
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
        </select>
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`distancia${titleSlug}`}>
        <p>Distância percorrida diária, em apenas um tipo de transporte, em km:</p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`distancia${titleSlug}`}
          name={`distancia${titleSlug}`}
          value={distancia}
          onChange={(e) => setDistancia(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`distanciaMetro${titleSlug}`}>
        <p>
          Em caso de usar mais de um tipo de transporte, coloque aqui a distância percorrida por
          Metrô, em km:
        </p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`distanciaMetro${titleSlug}`}
          name={`distanciaMetro${titleSlug}`}
          value={distanciaMetro}
          onChange={(e) => setDistanciaMetro(e.target.value)}
        />
      </label>

      <label className="mt-4 flex flex-col w-full" htmlFor={`distanciaTrem${titleSlug}`}>
        <p>
          Em caso de usar mais de um tipo de transporte, coloque aqui a distância percorrida por
          Trem, em km:
        </p>
        <input
          className="bg-gray-100 p-2 w-full"
          type="number"
          id={`distanciaTrem${titleSlug}`}
          name={`distanciaTrem${titleSlug}`}
          value={distanciaTrem}
          onChange={(e) => setDistanciaTrem(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Perguntas;
