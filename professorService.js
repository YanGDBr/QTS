function buscarProfessorNoBanco(id) {
  const professores = {
    1: { id: 1, nome: 'Maria Silva', email: 'maria@example.com', cpf: '123.456.789-00', status: 'determinado' },
    2: { id: 2, nome: 'José Souza', email: 'jose@example.com', cpf: '987.654.321-00', status: 'indeterminado' }
  };
  return professores[id] || null;
}

function buscarStatusProfessorPorCurso(idCurso) {
  const statusPorCurso = {
    1: 'determinado',
    2: 'indeterminado'
  };
  return statusPorCurso[idCurso] || null;
}

module.exports = { buscarProfessorNoBanco, buscarStatusProfessorPorCurso };
