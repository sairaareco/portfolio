import styles from "../styles/About.module.css";

const About = () => {

    return(
        <main className={styles.containerAbout}>
            <h2> Sobre mi </h2>
            <div className={styles.boxAbout}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam doloremque sapiente mollitia dolor doloribus officiis rerum sequi laboriosam repellendus ipsam optio minima accusamus labore, totam unde nam soluta nisi.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla quia incidunt officiis? Magni voluptatem reprehenderit facilis dicta nam ipsa dolorem hic, unde beatae perferendis cupiditate assumenda, laborum, nostrum aliquid.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis nulla, ab, nemo blanditiis itaque repudiandae incidunt et recusandae aut ipsum deserunt aliquam repellat enim nam consequatur ipsa non ipsam!</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste laborum ducimus distinctio quam consectetur dolorum a, ut, officia nulla expedita, repellat amet illum suscipit optio cumque sit quo nobis.</p>
            </div>
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
