import axios from "axios";

export async function retornaMedicos() {
    let medicos = [];

    try {
        const resposta = await axios.get("http://localhost:8080/medicos");
        medicos = resposta.data;
    } catch(erro) {
        console.error("Erro ao buscar os médicos:", erro);
    }

    return medicos;
}