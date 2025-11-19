import express from 'express'
import cors from 'cors';
//importando cors para permitir varias origens acessarem a API
import retornaMedicos from './services/retornaMedicos_servico.js';

const app = express();
app.use(cors());

const port = 8080;
//usando o cors apos a criação do app

app.get('/medicos', async (req, res) =>{
    const medicos = await retornaMedicos();
    //chamando a função que retorna os médicos do banco de dados

    res.json(medicos);
    //retornando os médicos em formato JSON
})

app.listen(port, () => {
    const data = new Date();
    console.log(`O servidor foi iniciad na porta ${port}, na data de: ${data.toLocaleDateString()} no horário ${data.toLocaleTimeString()}`);
})