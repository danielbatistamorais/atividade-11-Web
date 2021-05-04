const template = require('./template');

const htmlCadastro = `<div class="container text-center pt-2 pb-5">
<form action="/cadastrar" method="POST">
    <div>
        <label for="nome" class="texto text-white">Nome</label>
        <input
            type="text"
            name="nome"
            id="nome"
            class="form-control"
        />
        <div class="form-text mb-4">
            <font size ="5">Este campo é obrigatório!</font>
        </div>

        <label for="email" class="texto text-white">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="example@example.com"
        />

        <div class="form-text mb-4">
            <font size ="5">Este campo é obrigatório!</font>
        </div>
        <label for="senha" class="texto mt-3 text-white">Senha</label>
        <input
            type="password"
            name="senha"
            id="senha"
            class="form-control"
        />

        <div class="form-text mb-4">
            <font size="5">Este campo é obrigatório!</font>
        </div>
        <button class="btn btn-success mt-3 btn-lg " type="submit">
            Confirmar
        </button>
    </div>
</form>`;

module.exports = (req, res) => {
  const html = template('Cadastro', htmlCadastro);
  res.status(200).send(html);
};
