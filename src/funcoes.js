// Funções que calculam as informações de irrigação a partir das zonas.
// São usadas no Dashboard e no Sistemas, assim as duas telas mostram os mesmos dados.

// quantos litros de água uma zona gasta a cada minuto de irrigação
export const LITROS_POR_MINUTO = 2;

const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// transforma "06:00" em minutos do dia (360)
function paraMinutos(horario) {
  const partes = horario.split(':');
  return Number(partes[0]) * 60 + Number(partes[1]);
}

function agoraEmMinutos() {
  const agora = new Date();
  return agora.getHours() * 60 + agora.getMinutes();
}

// "30 min" vira 30
export function duracaoEmMinutos(zona) {
  return parseInt(zona.duration);
}

// "Área 1 - Horticultura" vira "Área 1"
export function nomeCurto(zona) {
  return zona.name.split(' - ')[0];
}

// diz se a zona irriga no dia da semana informado (0 = domingo ... 6 = sábado)
export function irrigaNoDia(zona, dia) {
  if (zona.days === 'Diário') {
    return true;
  }

  // exemplo: "Seg a Sex"
  if (zona.days.includes(' a ')) {
    const partes = zona.days.split(' a ');
    const inicio = diasSemana.indexOf(partes[0]);
    const fim = diasSemana.indexOf(partes[1]);
    return dia >= inicio && dia <= fim;
  }

  // exemplo: "Ter e Qui" ou "Seg, Qua e Sex"
  return zona.days.includes(diasSemana[dia]);
}

// zonas ativas que irrigam hoje, em ordem de horário
export function irrigacoesDeHoje(zonas) {
  const hoje = new Date().getDay();

  return zonas
    .filter(zona => zona.active && irrigaNoDia(zona, hoje))
    .sort((a, b) => paraMinutos(a.time) - paraMinutos(b.time));
}

// status de uma irrigação de hoje, comparando com o horário atual
export function statusDaIrrigacao(zona) {
  const inicio = paraMinutos(zona.time);
  const fim = inicio + duracaoEmMinutos(zona);
  const agora = agoraEmMinutos();

  if (agora < inicio) {
    return 'Agendado';
  }
  if (agora < fim) {
    return 'Em andamento';
  }
  return 'Concluído';
}

// horário da próxima irrigação das zonas ativas (procura nos próximos 7 dias)
export function proximaIrrigacao(zonas) {
  const hoje = new Date().getDay();
  const agora = agoraEmMinutos();

  for (let i = 0; i < 7; i++) {
    const dia = (hoje + i) % 7;

    const doDia = zonas
      .filter(zona => zona.active && irrigaNoDia(zona, dia))
      .filter(zona => i > 0 || paraMinutos(zona.time) > agora)
      .sort((a, b) => paraMinutos(a.time) - paraMinutos(b.time));

    if (doDia.length > 0) {
      if (i === 0) {
        return doDia[0].time;
      }
      if (i === 1) {
        return `Amanhã ${doDia[0].time}`;
      }
      return `${diasSemana[dia]} ${doDia[0].time}`;
    }
  }

  return '--:--';
}

// litros de água que as irrigações de hoje vão gastar
export function consumoHoje(zonas) {
  let total = 0;

  irrigacoesDeHoje(zonas).forEach(zona => {
    total += duracaoEmMinutos(zona) * LITROS_POR_MINUTO;
  });

  return total;
}
