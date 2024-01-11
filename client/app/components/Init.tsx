import styles from "../styles/Init.module.css";

const Init = () => {

    return(
        <main className={styles.containerInit}>
            <div className={styles.containerGrid}>
                <div className={styles.containerBubbleName}>
                <div className={styles.bubble}>
                    <h1 className={styles.name}> Saira </h1>
                    <h1 className={styles.lastname}> Areco </h1>
                </div>
                </div>
                <div>
                    <h3 className={styles.fullStack}> Full Stack </h3>
                    <h1 className={styles.developer}> Developer </h1>
                    <button className={styles.buttonDownloadCv}> Descarga mi CV </button>
                    <p className={styles.description}> Desarrolladora Full Stack altamente motivada y dedicada a construir experiencias digitales notables. Lista para enfrentar nuevos desafíos y contribuir al mundo del desarrollo. </p>
                </div>
            </div>
            <div className={styles.boxes}>
                    <div className={styles.boxUno}> Aprendizaje continuo </div>
                    <div className={styles.boxDos}> Trabajo en equipo </div>
                    <div className={styles.boxTres}> Resolución de problemas </div>
                    <div className={styles.boxCuatro}> Adaptabilidad </div>
                    <div className={styles.boxCinco}> Resiliencia </div>
                </div>
        </main>
    )
};

export default Init;
