import styles from './Topo.module.css';

export default function Topo() {
    return (
        <header className={styles.fundo_topo}>
            <div className={styles.topo_titulo}>
                <h1>Clinica de Pediatria</h1>
                <p>Cuidando de sua saúde com excelência e dedicação.</p>
            </div>

            <div className={styles.topo_info}>
                <div className={styles.info_card}>
                    <span className="material-symbols-outlined">place</span>
                    <span>Av. Paulista, 1000 - São Paulo.</span>
                </div>

                <div className={styles.info_card}>
                    <span className="material-symbols-outlined">schedule</span>
                    <span>Seg-Sex: 8h às 20h.</span>
                </div>

                <div className={styles.info_card}>
                    <span className="material-symbols-outlined">call</span>
                    <span>(11) 3000-0000</span>
                </div>
            </div>
        </header>
    )
}