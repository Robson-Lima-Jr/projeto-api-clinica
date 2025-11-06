import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'clinicausuario',
    password: 'clinicasenha',
    database: 'projetoclinicadb'
}); 

export default pool;