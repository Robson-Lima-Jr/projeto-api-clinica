import pool from './conexao.js';

async function retornaMedicos() {
    const conexao = await pool.getConnection();

    const medicosTB = await conexao.query('SELECT id, nome, telefone, email, descricao FROM medicos');

    const medicos = medicosTB[0];

    conexao.release();

    return medicos;
}
// função que retorna os médicos do banco de dados

export default retornaMedicos;