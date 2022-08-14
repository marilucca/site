export const dados = {
  // Todas as potências estão em Watts
  potencias: {
    desktop: 250,
    notebook: 65,
    tablet: 10,
    celular: 7,
    impressora: 14,
    roteador: 6,
    ventilador: 72.5,
    arCondicionado: 1266.9375,
    lampada: {
      fluorescente: 16.3,
      incandescente: 66.7,
      led: 9.3,
    },
  },
  diasNoAno: 233,
  kgCarbono: {
    porEnergia: 0.295,
  },
  toneladasCarbono: {
    porKm: {
      metro: 0.001643,
      trem: 0.003759,
      onibus: 0.031302,
      carro: 0.013954,
    },
  },
};

export const paraKgCarbono = (toneladas) => {
  return (toneladas * 1000) / dados.diasNoAno;
};

export const comoMoeda = (valor) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(valor);
};

export const calcularEnergia = (potencia, tempo) => {
  return (potencia * tempo) / 1000;
};
