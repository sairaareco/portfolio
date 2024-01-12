import styles from "../styles/About.module.css";

const About = () => {

    return(
        <main className={styles.containerAbout} id="about">
            <section className={styles.containerGrid}>
                <div className={styles.columnOne}>
                    <p> ¡Hola! Mi nombre es Saira, soy desarrolladora Full Stack y estudiante de Análisis Universitario en Sistemas.</p>
                    <p>Antes de sumergirme en el mundo de la programación, me desempeñaba en el ámbito de atención al público. Sin embargo, mi inquietud por aprender y mi deseo de desafiar mis límites me llevaron a explorar el fascinante universo del desarrollo web.</p>
                    <p>Mi viaje comenzó con los fundamentos: HTML, CSS y JavaScript. A medida que adquiría experiencia, la curiosidad me impulsó a explorar tecnologías más avanzadas. Hoy en día, me siento cómoda trabajando con Node.js, React, Express y Redux, construyendo aplicaciones web robustas y eficientes.</p>
                    <p>Pero mi enfoque no se limita únicamente al frontend. Actualmente me encuentro ampliando mis habilidades hacia el desarrollo del backend, aprovechando la versatilidad de Java. </p>
                    <p> Mis habilidades actuales se centran en: </p>
                </div>
                <div className={styles.columnTwo}>
                    <div className={styles.skills}>
                        <span> 
                            <p> HTML </p>
                            <p> CSS </p>
                            <p> React </p>
                            <p> Next Js </p>
                            <p> Redux </p>
                            <p> Java </p>
                        </span>
                        <span> 
                            <p> JavaScript </p>
                            <p> TypeScript </p>
                            <p> Node Js </p>
                            <p> Express </p>
                            <p> PostgreSQL </p>
                            <p> MySQL </p>
                        </span>    
                    </div>  
                </div>
            </section>
        </main>
    )
};

export default About;


// TAREAS PARA 12/01
// Componente about resuelto - si
// Poner los links en el nav para q funcionen - si 
// configurar como seran componentes proyects y skills
// crear icono para el encabezado de la pagina

// EXTRAS:
// crear pagina de error 404
// Crear carrousel para las boxes en init
// creacion del cv para descargar
// componente contacto (averiguar como enviar un mje q llegue a mi casilla d mail)
