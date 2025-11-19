import styles from './Card.module.css';

export default function Card({nome, telefone, email, descricao}) {
    return (
        <div className={styles.container_card}>
            <div className={styles.card_logo}>
                <span className="material-symbols-outlined">person</span>
            </div>

            <div className={styles.nome_desc}>
                <h3>{nome}</h3>
                <p className={styles.descricao}>{descricao}</p>
            </div>

            <div className={styles.contatos}>
                <div>
                    <span className="material-symbols-outlined">call </span>
                    <p className={styles.telefone}>{telefone}</p>
                </div>

                <div>
                    <span className="material-symbols-outlined">email </span>
                    <p className={styles.email}>{email}</p>
                </div>
            </div>
        </div>
    )
}