
const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Requisição recebida:", req.method, req.url);

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    if (req.url === '/') {
        res.end("Você está na página inicial.");
    } 
    else if (req.url === '/sobre') {
        res.end("Você está na página sobre.");
    } 
    else if (req.url === '/alunos') {
        res.end("Você está na página Alunos.");
    } 
    else if (req.url === '/contato') {
        res.end("Você está na página Contatos.");
    } 
    else {
        res.end("Página não encontrada.");
    }

});

server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});