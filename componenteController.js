const { buscarComponenteNoBanco } = require('./componenteService');

function obterNomeComponente(id) {
  const componente = buscarComponenteNoBanco(id);
  return componente ? componente.nome : null;
}

function obterHorarioComponente(id) {
  const componente = buscarComponenteNoBanco(id);
  return componente ? { horarioInicio: componente.horarioInicio, horarioFim: componente.horarioFim, diaSemana: componente.diaSemana } : null;
}

function obterDadosCompletosComponente(id) {
  const componente = buscarComponenteNoBanco(id);
  return componente ? { statusProfessor: componente.statusProfessor, nome: componente.nome, horarioInicio: componente.horarioInicio, horarioFim: componente.horarioFim, diaSemana: componente.diaSemana } : null;
}

module.exports = { obterNomeComponente, obterHorarioComponente, obterDadosCompletosComponente };
