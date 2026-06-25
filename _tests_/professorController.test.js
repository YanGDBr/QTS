const professorService = require('../professorService');
const { obterDadosProfessor, obterStatusProfessorPorCurso } = require('../professorController');

jest.spyOn(professorService, 'buscarProfessorNoBanco');
jest.spyOn(professorService, 'buscarStatusProfessorPorCurso');

test('deve retornar nome, email e cpf do professor', () => {
  professorService.buscarProfessorNoBanco.mockReturnValue({
    id: 1,
    nome: 'Maria Silva',
    email: 'maria@example.com',
    cpf: '123.456.789-00',
    status: 'determinado'
  });

  const dados = obterDadosProfessor(1);
  expect(dados.nome).toBe('Maria Silva');
  expect(dados.email).toBe('maria@example.com');
  expect(dados.cpf).toBe('123.456.789-00');
});

test('deve retornar status do professor por curso', () => {
  professorService.buscarStatusProfessorPorCurso.mockReturnValue('determinado');

  const status = obterStatusProfessorPorCurso(1);
  expect(status).toBe('determinado');
});

test('deve retornar null se professor não existir', () => {
  professorService.buscarProfessorNoBanco.mockReturnValue(null);

  expect(obterDadosProfessor(999)).toBeNull();
});
