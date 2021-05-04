const template = require('./template');
const usuarios = require('../usuarios');

module.exports = (req, res) => {
  const params = req.body;
  const { nome, email, senha } = params;

  if (usuarios.cadastrar(nome, email, senha) === true) {
    const html = template('Cadastrado com sucesso', 'Sucesso no cadastro!!!');
    res.status(200).send(html);
  } else {
    const html = template('Falha no cadastro', 'Falha no cadastro!!!');
    res.status(401).send(html);
  }
};
