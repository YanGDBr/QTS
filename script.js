function maiorNumero(a, b) {
  return a < b ? b : a;
}

function verificarParImpar(v1, v2) {
  const check = (n) => n % 2 === 0 ? "par" : "ímpar";
  return `${v1} é ${check(v1)} e ${v2} é ${check(v2)}.`;
}

function verificarVoto(idade) {
  if (idade < 16) return "Não pode votar";
  if (idade >= 18 && idade <= 70) return "Voto obrigatório";
  return "Voto opcional";
}

function analisarValor(num) {
  if (num > 0) return "Positivo";
  if (num < 0) return "Negativo";
  return "Igual a zero";
}

function calcularBonus(salario) {
  if (salario < 2000) return salario * 0.20;
  if (salario >= 2000 && salario <= 5000) return salario * 0.10;
  return salario * 0.05;
}

function verificarHabilitacao(idade) {
  return idade >= 18 ? "pode dirigir" : "não pode dirigir";
}

function verificarSemestre(mes) {
  const m = mes.toLowerCase();
  const primeiroSemestre = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho'];
  return primeiroSemestre.includes(m) ? "Primeiro semestre" : "Segundo semestre";
}

function verificarLetra(letra) {
  const l = letra.toLowerCase();
  return "aeiou".includes(l) ? "Vogal" : "Consoante";
}

function calcularMedia(numeros) {
  let soma = 0;
  for (let n of numeros) {
    soma += n;
  }
  return soma / numeros.length;
}

function realizarLogin(usuario, senha) {
  if (usuario === 'Admin' && senha === '123') {
    return "Conectado com sucesso!";
  }
  return "Acesso negado! Usuário ou senha incorretos!";
}

module.exports = {
  maiorNumero, verificarParImpar, verificarVoto, analisarValor,
  calcularBonus, verificarHabilitacao, verificarSemestre,
  verificarLetra, calcularMedia, realizarLogin
};