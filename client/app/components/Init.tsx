import styles from "../styles/Init.module.css";

const Init = () => {

    return(
        <main className={styles.containerInit}>
            <div className={styles.containerGrid}>
                <div className={styles.containerBubble}>
                    <h1 className={styles.name}> Saira </h1>
                    <h1 className={styles.lastname}> Areco </h1>
                </div>

                <div>
                    <h3 className={styles.fullStack}> Full Stack </h3>
                    <h1 className={styles.developer}> Developer </h1>
                    <button className={styles.buttonDownloadCv}> Descarga mi CV </button>
                    <p className={styles.description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste officiis expedita nam id accusamus molestias eos ut iure rem corporis nulla, quasi, repudiandae error at consectetur eligendi! Eveniet, nesciunt.</p>
                </div>
            </div>


            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
        </main>
    )
};

export default Init;
