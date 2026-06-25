const { buscarUsuarioNoBanco } = require('./usuarioService');

function obterNomeUsuario(id) {
  const usuario = buscarUsuarioNoBanco(id);
  return usuario.nome;
}

module.exports = { obterNomeUsuario };