'use client';
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";


const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 50 && !scrolled) {
                setScrolled(true);
            } else if (window.scrollY <= 50 && scrolled) {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return(
        <main className={styles.main}>
            <section className={scrolled ? styles.containerNavTrue : styles.containerNavFalse}>
            <ul className={styles.nav}>
                <Link href="#about" className={styles.itemNav}>
                    <li> Sobre Mi </li>
                </Link>
                <Link href="#proyects" className={styles.itemNav}>
                    <li> Proyectos </li>
                </Link>
                <Link href="#tools" className={styles.itemNav}>
                    <li> Herramientas </li>
                </Link>
                <Link href="#contact" className={styles.itemNav}>
                    <li> Contacto </li>
                </Link>     
                <Link href="/" className={styles.logotype}> Saira Areco </Link>      
            </ul>
            </section>
        </main>
    )
};

export default Navbar;

