const template = require('./template');

const htmlCadastro = `<div class="container text-center pt-5 pb-5">
<form action="/cadastrar" method="POST">
    <div>
        <label for="nome" class="form-label">Nome</label>
        <input
            type="text"
            name="nome"
            id="nome"
            class="form-control"
        />
        <div class="form-text mb-3">
            Este campo é obrigatório!
        </div>
        <label for="email" class="form-label">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="example@example.com"
        />
        <div class="form-text mb-3">
            Este campo é obrigatório!
        </div>
        <label for="senha" class="form-label">Password</label>
        <input
            type="password"
            name="senha"
            id="senha"
            class="form-control"
        />
        <div class="form-text mb-3">
            Este campo é obrigatório!
        </div>
        <button class="btn btn-outline-dark mt-3" type="submit">
            Confirmar
        </button>
    </div>
</form>`;

module.exports = (req, res) => {
  const html = template('Cadastro', htmlCadastro);
  res.status(200).send(html);
};