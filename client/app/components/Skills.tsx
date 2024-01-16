import styles from "../styles/Skills.module.css";

const Skills = () => {

    return(
        <main className={styles.containerSkills}>
            <h2 className={styles.titleSkills}> HABILIDADES </h2>
            <p className={styles.sectionSubtitle}> Lenguajes </p>
            <div>
                <img src="/images/javascript.svg" alt="logo de javascript" width={50}/>
                <img src="/images/typescript.svg" alt="logo de typescript" width={50}/>
                <img src="/images/java.svg" alt="logo de java" width={50}/>
            </div>

            <p className={styles.sectionSubtitle}> Frameworks y Bibliotecas Frontend </p>
            <div>
                <img src="/images/react.svg" alt="logo de react" width={55}/>
                <img src="/images/nextjs.svg" alt="logo de nexts js" width={50}/>
                <img src="/images/redux.svg" alt="logo de redux" width={50}/>
            </div>

            <p className={styles.sectionSubtitle}> Backend y Servidores </p>
            <div>
                <img src="/images/nodejs.svg" alt="logo de node js" width={50}/>
                <img src="/images/express.svg" alt="logo de express js" width={60}/>
            </div>

            <p className={styles.sectionSubtitle}> Bases de Datos </p>
            <div>
                <img src="/images/postgresql.svg" alt="logo de postgreSQL" width={50}/>
                <img src="/images/mysql.svg" alt="logo de mysql" width={50}/>
            </div>

            <p className={styles.sectionSubtitle}> Tecnologias Web </p>
            <div>
                <img src="/images/html.svg" alt="logo de html" width={50}/>
                <img src="/images/css.svg" alt="logo de css" width={40}/>
                <img src="/images/sass.svg" alt="logo de sass" width={50}/>
                <img src="/images/less.svg" alt="logo de less" width={70}/>
            </div>
        </main>
    )
};

export default Skills;