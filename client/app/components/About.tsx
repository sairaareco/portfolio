import styles from "../styles/About.module.css";

const About = () => {

    return(
        <main className={styles.containerAbout}>
            <h2 className={styles.titleAbout}> Sobre Mi </h2>
            <section className={styles.containerGrid}>
                <div className={styles.columnOne}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam doloremque sapiente mollitia dolor doloribus officiis rerum sequi laboriosam repellendus ipsam optio minima accusamus labore, totam unde nam soluta nisi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla quia incidunt officiis? Magni voluptatem reprehenderit facilis dicta nam ipsa dolorem hic, unde beatae perferendis cupiditate assumenda, laborum, nostrum aliquid.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cumque officia nihil, placeat recusandae quos neque officiis temporibus quasi expedita voluptas, iste illum iure numquam? Obcaecati minima dolorem enim?</p>
                </div>
                <div className={styles.columnTwo}>
                    <div className={styles.skills}>
                        <span> 
                            <p> HTML </p>
                            <p> CSS </p>
                            <p> React </p>
                            <p> Next Js </p>
                            <p> Redux </p>
                        </span>
                        <span> 
                            <p> JavaScript </p>
                            <p> TypeScript </p>
                            <p> Node Js </p>
                            <p> Express </p>
                            <p> PostgreSQL </p>
                        </span>    
                    </div>  
                    <div className={styles.skillsOnprogress}>
                        <p> Java </p>
                        <p> MySQL </p>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default About;


// TAREAS PARA 12/01
// Componente about resuelto
// Poner los links en el nav para q funcionen
// configurar como seran componentes proyects y skills
// crear icono para el encabezado de la pagina

// EXTRAS:
// crear pagina de error 404
// Crear carrousel para las boxes en init
// creacion del cv para descargar
// componente contacto (averiguar como enviar un mje q llegue a mi casilla d mail)
