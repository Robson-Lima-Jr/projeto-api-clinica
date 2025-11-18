import styles from './Card.module.css';

export default function Card({id, nome, telefone, email, descricao}) {
    return (
        <div className={styles.container_card}>
            <div className={styles.card_logo}>
                <span className="material-symbols-outlined">person</span>
            </div>

            <h3>{nome}</h3>

            <p className={styles.descricao}>{descricao}</p>

            <p className={styles.telefone}>{telefone}</p>

            <p className={styles.email}>{email}</p>
        </div>
    )
}