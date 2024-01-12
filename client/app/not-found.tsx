import Link from "next/link";
import styles from "./styles/NotFound.module.css";

const NotFound = () => {


    return(
        <main className={styles.containerNotFound}>
            <h1 className={styles.title}> ERROR 404! Página no encontrada </h1>
            <Link href="/" className={styles.linkBackHome}> Volver a la página de inicio </Link>
        </main>
    )
};

export default NotFound;