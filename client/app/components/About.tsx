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
            <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex debitis praesentium eos repellat aspernatur quibusdam ut vero adipisci harum labore amet quis, ullam eligendi excepturi dolorum aliquam odit? Iure, perferendis.</p>
            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis sapiente harum cum animi distinctio delectus, fugit earum! Odio, possimus magni adipisci magnam ad fugiat eum quis dolores repudiandae ut.</p>
          </div>
        </main>
    )
};

export default About;


// Para lograr el efecto deseado en el recuadro de "aboutP" debe hacerse un
// useEffect y aplicar un setTimeout. primero haciendo useState.. 
// Luego aplicar el recuadro que se desee. 
