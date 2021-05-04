module.exports = (titulo, conteudo) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>${titulo}</title>
    <style>
      body{
        background-color: #000000;
        display: flex;
        width: 100vw;
        height: 100vh;
        /* justify-content: center; */
        /* align-items: center; */
        color: #33313b;
        /* text-shadow: 2px 2px 8px #f6f5f5; */
      }
    </style>

  </head>

  <body>
    <div class="d-flex justify-content-between"> 
    
      <div class="d-flex flex-column" style="padding-right: 80px; background-color: #631e60">
      
        <a href="/"><button type="button" class="btn btn-outline-secondary mt-3 ms-3 btn-lg">Home</button> </a>
        
        <a href="/login"><button type="button" class="btn btn-outline-secondary ms-3 mt-3 btn-lg">Login</button> </a>
       
        <a href="/cadastrar"><button type="button" class="btn btn-outline-secondary ms-3 mt-3 btn-lg">Cadastro</button></a>

      </div>

      <div class="d-flex flex-column ps-5"
        style="border-left: 2px solid"> 

        <h1 class="text-white text-center mt-3">${titulo}</h1>
        <h1 style="color: #948f8f">${conteudo}</h1>
      </div>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>

  </body>
</html>
`;
