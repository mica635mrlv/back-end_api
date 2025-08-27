// Importar o módulo do Express (instalar e fazer require)
const express = require('express')

// Criar uma aplicação express
const app = express();

// Definir a porta em que o servidor ira escutar as requisições
const porta = 8000;

// Definir a rota de teste da API
app.get('/', (req, res) => {
    res.send("API de Usuários está funcionando")
})

// app = express (servidor web) dá uma serie de comando que permite criar uma rota
// get = requisição p/ consultar dados pelo http
// "/" rota padrão
// req/res = request e repost
// res.send = resposta que o back-end manda p/ o frond-end

// Inicia o servidor (método do express que coloca o servidor no ar, fazendo ele ouvir as requisições)
app.listen(porta, () => { // definir porta e rota test
    console.log(`Servidor rodando em http://localhost:${porta}`);
})