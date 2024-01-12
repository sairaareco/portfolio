import styles from "../styles/Navbar.module.css";
import Link from "next/link";


const Navbar = () => {

    return(
        <main className={styles.containerNav}>
            <ul className={styles.nav}>
                <Link href="#init" className={styles.itemNav}>
                    <li> Inicio </li>
                </Link>
                <Link href="#about" className={styles.itemNav}>
                    <li> Sobre Mi </li>
                </Link>
                <Link href="#proyects" className={styles.itemNav}>
                    <li> Proyectos </li>
                </Link>
                <Link href="#contact" className={styles.itemNav}>
                    <li> Contacto </li>
                </Link>                
            </ul>
        </main>
    )
};

export default Navbar;
