const { buscarProfessorNoBanco, buscarStatusProfessorPorCurso } = require('./professorService');

function obterDadosProfessor(id) {
  const professor = buscarProfessorNoBanco(id);
  return professor ? { nome: professor.nome, email: professor.email, cpf: professor.cpf } : null;
}

function obterStatusProfessorPorCurso(idCurso) {
  return buscarStatusProfessorPorCurso(idCurso);
}

module.exports = { obterDadosProfessor, obterStatusProfessorPorCurso };
