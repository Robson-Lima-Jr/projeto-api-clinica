import express from 'express'
import cors from 'cors';
import pool from './services/conexao.js';

const app = express();
app.use(cors());

app.listen(8080, async() => {
    const data = new Date();
    console.log(`O servidor foi iniciado, na data de: ${data.toLocaleDateString()} no horário ${data.toLocaleTimeString()}`);

    const conexao = await pool.getConnection();
    console.log(conexao.threadId);

    conexao.release();
    
})