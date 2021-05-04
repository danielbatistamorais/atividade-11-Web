const usuarios = [];

module.exports.cadastrar = (nome, email, senha) => {
  const user = {
    nome: undefined,
    email: undefined,
    senha: undefined,

    cadastrarUsuario(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    },

    validaLogin(email, senha) {
      if (this.email === email && this.senha === senha) {
        return true;
      } else {
        return false;
      }
    },
  };

  if (nome === '' || email === '' || senha === '') {
    return false;
  } else {
    user.cadastrarUsuario(nome, email, senha);
    usuarios.push(user);
    return true;
  }
};

module.exports.login = (email, senha) => {
  for (const user of usuarios) {
    if (user.validaLogin(email, senha)) {
      return user;
    }
  }
  return false;
};