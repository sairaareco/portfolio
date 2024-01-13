import { style } from "motion";
import styles from "../styles/About.module.css";

const About = () => {

    return(
        <main className={styles.containerAbout} id="about">
          <h2 className={styles.titleAbout}> about me </h2>
          <h1 className={styles.onMoveDescription}> developer ... </h1>
          <div className={styles.aboutP}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex debitis praesentium eos repellat aspernatur quibusdam ut vero adipisci harum labore amet quis, ullam eligendi excepturi dolorum aliquam odit? Iure, perferendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis sapiente harum cum animi distinctio delectus, fugit earum! Odio, possimus magni adipisci magnam ad fugiat eum quis dolores repudiandae ut.</p>
          </div>
        </main>
    )
};

export default About;


// TAREAS PARA 12/01
// Componente about resuelto - si
// Poner los links en el nav para q funcionen - si 
// crear icono para el encabezado de la pagina - si 
// crear pagina de error 404 - si
// configurar como seran componentes proyects y skills

// EXTRAS:
// Crear carrousel para las boxes en init
// creacion del cv para descargar
// componente contacto (averiguar como enviar un mje q llegue a mi casilla d mail)
