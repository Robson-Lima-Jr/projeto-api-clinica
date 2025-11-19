import mysql from 'mysql2/promise';
// criando a conexão com o banco de dados MySQL

const pool = mysql.createPool({
    host: 'localhost',
    user: 'clinicausuario',
    password: 'clinicasenha',
    database: 'projetoclinicadb'
}); 
// definindo as configurações da conexão

export default pool;