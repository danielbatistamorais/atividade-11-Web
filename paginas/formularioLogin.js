const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Login',
    `
      <form action="/login " method="post">
        <div>
          <label for="email" class="text-white">Email:    </label>
          <input type="email" name="email" id="email">
        </div>
        <div>
          <label for="senha" class="text-white mt-3">Senha: </label>
          <input type="password" name="senha" id="senha">
        </div>
        <div>
          <button type="submit" class="mt-3 btn btn-success btn-lg">Login</button>
        </div>
      </form>
    `
  );
  res.status(200).send(html);
};
