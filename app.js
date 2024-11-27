import carros2024 from './tabelascarros.js';
import express from 'express';


const app = express();

app.use(express.json());

app.get('/', (requisiçao,resposta) => {
    resposta.status(200).send(carros2024);
});

// inicia o servidor na porta 3000:
app.listen(3000,() => console.log("servidor rodando com sucesso"));

// node app.js
// localhost:3000/