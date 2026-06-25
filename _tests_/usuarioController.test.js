const usuarioService = require('../usuarioService');
const { obterNomeUsuario } = require('../usuarioController');

// transforma a função real em mock
jest.spyOn(usuarioService, 'buscarUsuarioNoBanco');

test('deve retornar o nome do usuário simulado', () => {
  // definindo o que o mock vai retornar
  usuarioService.buscarUsuarioNoBanco.mockReturnValue({
    id: 1,
    nome: 'João Mockado'
  });

  const nome = obterNomeUsuario(1);

  expect(nome).toBe('João Mockado');
});

test('exemplo com jest.fn', () => {
  const funcaoFalsa = jest.fn();
  funcaoFalsa.mockReturnValue(10);

  expect(funcaoFalsa()).toBe(10);
  expect(funcaoFalsa).toHaveBeenCalled();
});