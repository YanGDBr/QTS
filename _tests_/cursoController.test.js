const cursoService = require('../cursoService');
const { obterNomeCurso, obterPeriodoCurso } = require('../cursoController');

jest.spyOn(cursoService, 'buscarCursoNoBanco');

test('deve retornar o nome do curso', () => {
  cursoService.buscarCursoNoBanco.mockReturnValue({
    id: 1,
    nome: 'Engenharia de Software',
    periodo: 'noturno'
  });

  const nome = obterNomeCurso(1);
  expect(nome).toBe('Engenharia de Software');
});

test('deve retornar o período do curso', () => {
  cursoService.buscarCursoNoBanco.mockReturnValue({
    id: 2,
    nome: 'Ciência da Computação',
    periodo: 'matutino'
  });

  const periodo = obterPeriodoCurso(2);
  expect(periodo).toBe('matutino');
});

test('deve retornar null se curso não existir', () => {
  cursoService.buscarCursoNoBanco.mockReturnValue(null);

  expect(obterNomeCurso(999)).toBeNull();
  expect(obterPeriodoCurso(999)).toBeNull();
});
