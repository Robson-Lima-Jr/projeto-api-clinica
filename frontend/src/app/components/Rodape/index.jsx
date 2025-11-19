import styles from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.rodape_fundo}>
            <div className={styles.rodape_descricao}>
                <h3>Clínica de Pediatria</h3>
                <p>Cuidando da sua saúde desde 1995</p>
            </div>

            <div className={styles.rodape_contatos}>
                <a href="tel:1130000000" className="link-social">
                    <span className="material-symbols-outlined">call</span>
                </a>
                <a href="mailto:contato@clinica.com" className="link-social">
                    <span className="material-symbols-outlined">email</span>
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="link-social">
                    <span className="material-symbols-outlined">place </span>
                </a>
            </div>
        </footer>
    )
}