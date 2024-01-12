import styles from "../styles/Navbar.module.css";


const Navbar = () => {

    return(
        <main className={styles.containerNav}>
            <ul className={styles.nav}>
                <li className={styles.itemNav}> Inicio </li>
                <li className={styles.itemNav}> Sobre Mi </li>
                <li className={styles.itemNav}> Proyectos </li>
                <li className={styles.itemNav}> Contacto </li>
            </ul>
        </main>
    )
};

export default Navbar;
