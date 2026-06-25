const componenteService = require('../componenteService');
const { obterNomeComponente, obterHorarioComponente, obterDadosCompletosComponente } = require('../componenteController');

jest.spyOn(componenteService, 'buscarComponenteNoBanco');

test('deve retornar o nome do componente', () => {
  componenteService.buscarComponenteNoBanco.mockReturnValue({
    id: 1,
    nome: 'Algoritmos',
    horarioInicio: '08:00',
    horarioFim: '10:00',
    diaSemana: 'Segunda-feira',
    statusProfessor: 'professor determinado'
  });

  const nome = obterNomeComponente(1);
  expect(nome).toBe('Algoritmos');
});

test('deve retornar o horário do componente', () => {
  componenteService.buscarComponenteNoBanco.mockReturnValue({
    id: 2,
    nome: 'Estruturas de Dados',
    horarioInicio: '14:00',
    horarioFim: '16:00',
    diaSemana: 'Quarta-feira',
    statusProfessor: 'professor temporário'
  });

  const horario = obterHorarioComponente(2);
  expect(horario.horarioInicio).toBe('14:00');
  expect(horario.horarioFim).toBe('16:00');
  expect(horario.diaSemana).toBe('Quarta-feira');
});

test('deve retornar os dados completos do componente', () => {
  componenteService.buscarComponenteNoBanco.mockReturnValue({
    id: 3,
    nome: 'Bancos de Dados',
    horarioInicio: '19:00',
    horarioFim: '21:00',
    diaSemana: 'Sexta-feira',
    statusProfessor: 'professor afastado'
  });

  const dados = obterDadosCompletosComponente(3);
  expect(dados.statusProfessor).toBe('professor afastado');
  expect(dados.nome).toBe('Bancos de Dados');
  expect(dados.horarioInicio).toBe('19:00');
  expect(dados.horarioFim).toBe('21:00');
  expect(dados.diaSemana).toBe('Sexta-feira');
});

test('deve retornar null se componente não existir', () => {
  componenteService.buscarComponenteNoBanco.mockReturnValue(null);

  expect(obterNomeComponente(999)).toBeNull();
  expect(obterHorarioComponente(999)).toBeNull();
  expect(obterDadosCompletosComponente(999)).toBeNull();
});
