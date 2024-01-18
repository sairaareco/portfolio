import styles from "../styles/Proyects.module.css";

const Proyects = () => {

    return (
        <main className={styles.containerProyect} id="proyects">
            <h2 className={styles.titleProyect}> PROYECTOS </h2>
            <section className={styles.descriptionEducApp}>
            <p> EducApp es una plataforma diseñada como una solución integral para mejorar la interacción entre alumnos y profesores. Ofrece un conjunto de funciones que facilita tanto la gestión académica como la comunicación efectiva dentro de la comunidad. </p>
            <p> Entre sus caracteristicas principales, se destacan: </p>
            <p> Los estudiantes pueden elegir su carrera y materias, adaptando su experiencia académica a sus necesidades. </p>
            <p> Los estudiantes pueden acceder fácilmente a su perfil, visualizar su calendario académico, calificaciones y futuras fechas de entregas, manteniéndose siempre informados. </p>
            <p> Los estudiantes pueden enviar archivos en formato PDF a sus profesores, agilizando el proceso de entrega de trabajos y proyectos.</p>
            <p> Los profesores tienen acceso a los archivos enviados por los alumnos y pueden proporcionar apuntes y materiales adicionales de manera eficiente. </p>
            <p> Estudiantes y profesores pueden utilizar un sistema de mensajería en tiempo real para una comunicación rápida y una retroalimentación inmediata durante los procesos de entrega.</p> 
            </section>
            
        </main>
    )
};

export default Proyects;


