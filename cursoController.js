const { buscarCursoNoBanco } = require('./cursoService');

function obterNomeCurso(id) {
  const curso = buscarCursoNoBanco(id);
  return curso ? curso.nome : null;
}

function obterPeriodoCurso(id) {
  const curso = buscarCursoNoBanco(id);
  return curso ? curso.periodo : null;
}

module.exports = { obterNomeCurso, obterPeriodoCurso };
