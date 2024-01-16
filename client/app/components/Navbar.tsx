'use client';
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
// import {  } from "react";



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
                <Link href="/" className={styles.itemNav}>
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
                <Link href="/" className={styles.logotype}> Saira Areco </Link>        
            </ul>
            </section>
        </main>
    )
};

export default Navbar;

