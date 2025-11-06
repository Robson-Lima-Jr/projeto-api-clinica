import express from 'express'
import cors from 'cors';
import retornaMedicos from './services/retornaMedicos_servico.js';

const app = express();
app.use(cors());

app.get('/medicos', async (req, res) =>{
    const medicos = await retornaMedicos();

    res.json(medicos)
})

app.listen(8080, () => {
    const data = new Date();
    console.log(`O servidor foi iniciado, na data de: ${data.toLocaleDateString()} no horário ${data.toLocaleTimeString()}`);
})