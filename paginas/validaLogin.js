const template = require('./template');
const usuarios = require('../usuarios');

module.exports = (req, res) => {
  const params = req.body;
  const { email, senha } = params;

  let status;
  let html;

  const user = usuarios.login(email, senha);

  if (user !== false) {
    status = 200;
    html = template(
      'Logado com sucesso!!',
      `<p>Seja bem vindo ${user.nome}</p>`
    );
  } else {
    status = 401;
    html = template(
      'Falha no Login!!',
      `<p>E-mail ou senha incorretos! Por favor, tente novamente.</p>`
    );
  }
  res.status(status).send(html);
};
