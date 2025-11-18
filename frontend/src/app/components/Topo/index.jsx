import styles from './Topo.module.css';

export default function Topo() {
    return (
        <header className={styles.fundo_topo}>
            <div className={styles.topo_titulo}>
                <h1>Clinica de Pediatria</h1>

                <p>Cuidando de sua saúde com excelência e dedicação.</p>
                
            </div>
        </header>
    )
}