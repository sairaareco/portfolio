"use client";
import styles from "../styles/About.module.css";

const About = () => {

    return(
        <main className={styles.containerAbout} id="about">
          <section className={styles.grid}>
            <div>
              <div className={styles.gradientAbout}>
                <h2 className={styles.titleAbout}> SOBRE MÍ </h2>
              </div>
              <div className={styles.aboutText}>
                <p className={styles.p}> ¡Hola! Mi nombre es Saira. Soy una desarrolladora Full Stack nacida en Argentina. </p>
                <p className={styles.p}> Actualmente, me encuentro inmersa en la Tecnicatura en Análisis de Sistemas, donde estoy consolidando las bases de mis conocimientos teóricos y prácticos. </p>
                <p className={styles.p}> Además, mi enfoque actual es fortalecer mis habilidades en el backend, centrándome en el lenguaje Java. </p>
                <p className={styles.p}>Mi compromiso es continuar perfeccionando mi perfil tecnológico, explorando nuevas tecnologías y contribuyendo al desarrollo de soluciones eficientes e innovadoras. </p>
              </div>
            </div>

            <div className={styles.socialButtons}>
              <button className={styles.buttonDownload}> Descarga mi CV </button>
              <div className={styles.socialMedia}>
                <a href="https://github.com/sairaareco" target="_blank" rel="noopener noreferrer">
                  <img src="/images/github.svg" alt="logo de github" width={23} className={styles.imageGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/saira-areco/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin.svg" alt="logo de linkedin" width={23} className={styles.imageLinkedin}/>
                </a>       
              </div>
            </div>
          </section>
        </main>       
    )
};

export default About;



