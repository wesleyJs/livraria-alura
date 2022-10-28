const http = require("http");
const port = 3000;

const rotas = {
  '/':  'Cursos',
  '/node': 'Curso de Node',
  '/php': 'Curso de PHP',
  '/frances': 'Curso de Frances'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Context-Type': 'text/plain'});
  res.end(rotas[req.url]);
})

server.listen(port, () => {
  console.log(`Servidor escurando em http://localhost:${port}`);
})

