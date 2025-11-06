import express from 'express'
import cors from 'cors';
//importando cors para permitir varias origens acessarem a API
import retornaMedicos from './services/retornaMedicos_servico.js';

const app = express();
app.use(cors());
//usando o cors apos a criação do app

app.get('/medicos', async (req, res) =>{
    const medicos = await retornaMedicos();
    //chamando a função que retorna os médicos do banco de dados

    res.json(medicos);
    //retornando os médicos em formato JSON
})

app.listen(8080, () => {
    const data = new Date();
    console.log(`O servidor foi iniciado, na data de: ${data.toLocaleDateString()} no horário ${data.toLocaleTimeString()}`);
})