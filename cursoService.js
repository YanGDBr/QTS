function buscarCursoNoBanco(id) {
  const cursos = {
    1: { id: 1, nome: 'Engenharia de Software', periodo: 'noturno' },
    2: { id: 2, nome: 'Ciência da Computação', periodo: 'matutino' },
    3: { id: 3, nome: 'Análise e Desenvolvimento de Sistemas', periodo: 'vesperino' }
  };
  return cursos[id] || null;
}

module.exports = { buscarCursoNoBanco };
