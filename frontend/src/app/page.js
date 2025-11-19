import styles from "./page.module.css";
import { retornaMedicos } from "./data/dados.js";

import Topo from "./components/Topo";
import Card from "./components/Card";

export default async function Home() {
  const medicos = await retornaMedicos();

  return (
    <div className={styles.page}>
      <Topo />

      <main className={styles.conteudo_principal}>
        <h2>Nossa Equipe Médica</h2>

        <div className={styles.card_principal}>
          {medicos.map((medico) => (
            <Card
              key={medico.id}
              nome={medico.nome}
              descricao={medico.descricao}
              email={medico.email}
              telefone={medico.telefone}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
