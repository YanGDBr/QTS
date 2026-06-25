function buscarComponenteNoBanco(id) {
  const componentes = {
    1: { id: 1, nome: 'Algoritmos', horarioInicio: '08:00', horarioFim: '10:00', diaSemana: 'Segunda-feira', statusProfessor: 'professor determinado' },
    2: { id: 2, nome: 'Estruturas de Dados', horarioInicio: '14:00', horarioFim: '16:00', diaSemana: 'Quarta-feira', statusProfessor: 'professor temporário' },
    3: { id: 3, nome: 'Bancos de Dados', horarioInicio: '19:00', horarioFim: '21:00', diaSemana: 'Sexta-feira', statusProfessor: 'professor afastado' }
  };
  return componentes[id] || null;
}

module.exports = { buscarComponenteNoBanco };
