const express = require('express');
const index = require('./paginas/index');
const formularioCadastro = require('./paginas/formularioCadastro');
const validaCadastro = require('./paginas/validaCadastro');
const formularioLogin = require('./paginas/formularioLogin');
const validaLogin = require('./paginas/validaLogin');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', index);
app.get('/cadastrar', formularioCadastro);
app.get('/login', formularioLogin);
app.post('/login', validaLogin);
app.post('/cadastrar', validaCadastro);

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
  console.log(`Acesse http://localhost:${port} para testar.`);
});
