"use client";
import styles from "../styles/About.module.css";
import { useEffect, useState } from "react";

const About = () => {
// const [ showBorder, setShowBorder ] = useState(false);

// useEffect(()=> {
//   setTimeout(() => {
//     setShowBorder(true);
//   }, 2000);
// }, []);

    return(
        <main className={styles.containerAbout} id="about">
          <div className={styles.gradientAbout}>
            <h2 className={styles.titleAbout}> SOBRE MÍ </h2>
          </div>
          {/* <h1 className={styles.onMoveDescription}> developer ... </h1> */}
          <div className={styles.aboutP}>
            <p className={styles.p}> ¡Hola! Mi nombre es Saira. Soy una desarrolladora Full Stack nacida en Argentina. </p>
            <p className={styles.p}> Actualmente, me encuentro inmersa en la Tecnicatura en Análisis de Sistemas, donde estoy consolidando las bases de mis conocimientos teóricos y prácticos. </p>
            <p className={styles.p}> Además, mi enfoque actual es fortalecer mis habilidades en el backend, centrándome en el lenguaje Java. </p>
            <p className={styles.p}>Mi compromiso es continuar perfeccionando mi perfil tecnológico, explorando nuevas tecnologías y contribuyendo al desarrollo de soluciones eficientes e innovadoras. </p>
          </div>
        </main>
    )
};

export default About;



/*
  <p className={styles.p}> ¡Hola! Mi nombre es Saira. Soy una desarrolladora Full Stack nacida en Argentina. </p>
            <p className={styles.p}> Actualmente, me encuentro inmersa en la Tecnicatura en Análisis de Sistemas, donde estoy consolidando las bases de mis conocimientos teóricos y prácticos. </p>
            <p className={styles.p}> Mi motivación para embarcarme en esta carrera radica en mi compromiso con el establecimiento de sólidas bases algorítmicas y en comprender a fondo los principios de la ciencia de la computación. </p>
            <p className={styles.p}> Además, mi enfoque actual es fortalecer mis habilidades en el backend, centrándome en el lenguaje Java. Esta experiencia no solo está ampliando mi conocimiento, sino que también me permite enfrentar desafíos del mundo real. </p>
            <p className={styles.p}>Mi compromiso es continuar perfeccionando mi perfil tecnológico, explorando nuevas tecnologías y contribuyendo al desarrollo de soluciones. </p>
*/
