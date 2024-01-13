import styles from "../styles/Init.module.css";


const Init = () => {

    return(
        <main className={styles.containerInit} id="init">
            <h2 className={styles.fullStack}> full stack </h2>
            <div className={styles.containerDev}>
            <h1 className={styles.developer}>  developer  </h1>
            </div>
        </main>
    )
};

export default Init;
