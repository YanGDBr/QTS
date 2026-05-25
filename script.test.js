const f = require('./script');

test('Exercício 2', () => {
  expect(f.verificarParImpar(2, 3)).toBe("2 é par e 3 é ímpar.");
});

test('Exercício 3', () => {
  expect(f.verificarVoto(15)).toBe("Não pode votar");
  expect(f.verificarVoto(20)).toBe("Voto obrigatório");
  expect(f.verificarVoto(75)).toBe("Voto opcional");
});

test('Exercício 4', () => {
  expect(f.analisarValor(10)).toBe("Positivo");
  expect(f.analisarValor(-5)).toBe("Negativo");
  expect(f.analisarValor(0)).toBe("Igual a zero");
});

test('Exercício 5', () => {
  expect(f.calcularBonus(1000)).toBe(200);
});

test('Exercício 6', () => {
  expect(f.verificarHabilitacao(18)).toBe("pode dirigir");
  expect(f.verificarHabilitacao(17)).toBe("não pode dirigir");
});

test('Exercício 7', () => {
  expect(f.verificarSemestre("Janeiro")).toBe("Primeiro semestre");
  expect(f.verificarSemestre("Julho")).toBe("Segundo semestre");
});

test('Exercício 8', () => {
  expect(f.verificarLetra("a")).toBe("Vogal");
  expect(f.verificarLetra("B")).toBe("Consoante");
});

test('Exercício 9', () => {
  expect(f.calcularMedia([1, 2, 3, 4, 5])).toBe(3);
});

test('Exercício 10', () => {
  expect(f.realizarLogin('Admin', '123')).toBe("Conectado com sucesso!");
  expect(f.realizarLogin('User', '000')).toBe("Acesso negado! Usuário ou senha incorretos!");
});