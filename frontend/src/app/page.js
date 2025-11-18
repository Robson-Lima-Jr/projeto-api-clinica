import styles from "./page.module.css";
import { retornaMedicos } from "./data/dados.js";

import Topo from "./components/Topo";
import Card from "./components/Card";

const medicos = await retornaMedicos();

export default function Home() {
  return (
    <div className={styles.page}>
      <Topo />

      <main className={styles.conteudo_principal}>
        <h2>Nossa Equipe Médica</h2>

        {medicos.map((medico) => (
          <Card 
            key={medico.id}
            nome={medico.nome}
            descricao={medico.descricao}
            email={medico.email}
            telefone={medico.telefone}
          />
        ))}
      </main>
    </div>
  );
}
