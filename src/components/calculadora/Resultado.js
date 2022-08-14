import { dados, calcularEnergia } from '../../data/calculadora';

const Resultado = ({
  title,
  calcularEnergiaComputador,
  tablet,
  ventilador,
  pessoasVentilador,
  arCondicionado,
  pessoasArCondicionado,
  impressora,
  pessoasImpressora,
  roteador,
  pessoasRoteador,
  celular,
  calcularEnergiaLuz,
  pessoasLampada,
  calcularKgCarbonoEmitidoTransporte,
  className,
}) => {
  const slug = title.toLowerCase().replaceAll(' ', '-');

  return (
    <div id={`resultados-detalhados-${slug}`} className={className}>
      <h4 className="text-2xl lg:text-3xl text-primary-darker">{title}</h4>

      <div id={`${slug}-eletroeletronicos`} className="mt-4">
        <h5 className="text-xl lg:text-2xl text-gray-600">Eletroeletrônicos 📱</h5>

        <p>
          <span className="text-primary-darker font-bold">Computador:</span>{' '}
          {(dados.kgCarbono.porEnergia * calcularEnergiaComputador()).toFixed(4)} kg de CO
          <sub>2</sub> por dia.
        </p>

        <p>
          <span className="text-primary-darker font-bold">Tablet:</span>{' '}
          {(dados.kgCarbono.porEnergia * calcularEnergia(dados.potencias.tablet, tablet)).toFixed(
            4
          )}{' '}
          kg de CO
          <sub>2</sub> por dia.
        </p>

        <p>
          <span className="text-primary-darker font-bold">Ventilador:</span>{' '}
          {(
            (dados.kgCarbono.porEnergia * calcularEnergia(dados.potencias.ventilador, ventilador)) /
            pessoasVentilador
          ).toFixed(4)}{' '}
          kg de CO
          <sub>2</sub> por dia.
        </p>

        <p>
          <span className="text-primary-darker font-bold">Ar Condicionado:</span>{' '}
          {(
            (dados.kgCarbono.porEnergia *
              calcularEnergia(dados.potencias.arCondicionado, arCondicionado)) /
            pessoasArCondicionado
          ).toFixed(4)}{' '}
          kg de CO
          <sub>2</sub> por dia.
        </p>

        <p>
          <span className="text-primary-darker font-bold">Impressora:</span>{' '}
          {(
            (dados.kgCarbono.porEnergia * calcularEnergia(dados.potencias.impressora, impressora)) /
            pessoasImpressora
          ).toFixed(4)}{' '}
          kg de CO
          <sub>2</sub> por dia.
        </p>

        <p>
          <span className="text-primary-darker font-bold">Celular:</span>{' '}
          {(dados.kgCarbono.porEnergia * calcularEnergia(dados.potencias.celular, celular)).toFixed(
            4
          )}{' '}
          kg de CO
          <sub>2</sub> por dia.
        </p>
      </div>

      <div id={`${slug}-internet`} className="mt-4">
        <h5 className="text-xl lg:text-2xl text-gray-600">Internet 📡</h5>
        <p>
          {(
            (dados.kgCarbono.porEnergia * calcularEnergia(dados.potencias.roteador, roteador)) /
            pessoasRoteador
          ).toFixed(4)}{' '}
          kg de CO<sub>2</sub> por dia.
        </p>
      </div>

      <div id={`${slug}-luz`} className="mt-4">
        <h5 className="text-xl lg:text-2xl text-gray-600">Luz 💡</h5>
        <p>
          {((dados.kgCarbono.porEnergia * calcularEnergiaLuz()) / pessoasLampada).toFixed(4)} kg de
          CO
          <sub>2</sub> por dia.
        </p>
      </div>

      <div id={`${slug}-transporte`} className="mt-4">
        <h5 className="text-xl lg:text-2xl text-gray-600">Transporte 🚍</h5>
        <p>
          {calcularKgCarbonoEmitidoTransporte().toFixed(4)} kg de CO
          <sub>2</sub> por dia.
        </p>
      </div>
    </div>
  );
};

export default Resultado;
