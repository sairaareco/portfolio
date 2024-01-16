"use client";
import styles from "../styles/Skills.module.css";

const Skills = () => {

    return(
        <main id="tools" className={styles.containerSkills}>
            <h2 className={styles.titleSkills}> HERRAMIENTAS </h2>
            
            <section className={styles.sectionOne}>
                <div className={styles.boxTool}>
                    <img src="/images/javascript.svg" alt="logo de javascript" width={40}/>
                    <p className={styles.nameTool}> JavaScript </p>
                </div>

                <div className={styles.boxTool}>
                    <img src="/images/typescript.svg" alt="logo de typescript" width={40}/>
                    <p className={styles.nameTool}> TypeScript </p>
                </div>

                <div className={styles.boxTool}>
                    <img src="/images/java.svg" alt="logo de java" width={40}/>
                    <p className={styles.nameTool}> Java </p>
                </div>

                <div className={styles.boxTool}>
                    <img src="/images/react.svg" alt="logo de react" width={45}/>
                    <p className={styles.nameTool}> React </p>
                </div>

                <div className={styles.boxTool}>
                    <img src="/images/nextjs.svg" alt="logo de nexts js" width={40}/>
                    <p className={styles.nameTool}> Next Js </p>
                </div>
            </section>
            
            <section className={styles.sectionTwo}>
                <div className={styles.boxTool}>
                    <img src="/images/redux.svg" alt="logo de redux" width={40}/>
                    <p className={styles.nameTool}> Redux </p>
                </div>
                
                <div className={styles.boxTool}>
                    <img src="/images/nodejs.svg" alt="logo de node js" width={45}/>
                </div>

                <div className={styles.boxTool}>
                    <img src="/images/express.svg" alt="logo de express js" width={60}/>
                </div>

                <div className={styles.boxTool}>
                    <img src="/images/postgresql.svg" alt="logo de postgreSQL" width={39}/>
                    <p className={styles.nameTool}> PostgreSQL </p>
                </div>

                <div className={styles.boxTool}>
                    <img src="/images/mysql.svg" alt="logo de mysql" width={40}/>
                    <p className={styles.nameTool}> MySql </p>
                </div>    
            </section>

            <section className={styles.sectionThree}>
                <div className={styles.boxTool}>
                    <img src="/images/sequelize.svg" alt="logo de sequelize" width={40}/>
                    <p className={styles.nameTool}> Sequelize </p>
                </div>
                <div className={styles.boxTool}> 
                    <img src="/images/html.svg" alt="logo de html" width={42}/>
                    <p className={styles.nameTool}> HTML </p>
                </div>

                <div className={styles.boxTool}>
                    <img src="/images/css.svg" alt="logo de css" width={34}/>
                    <p className={styles.nameTool}> CSS </p>
                </div>
            
                <div className={styles.boxTool}>
                    <img src="/images/sass.svg" alt="logo de sass" width={50}/>
                </div>
        
                <div className={styles.boxTool}>
                    <img src="/images/less.svg" alt="logo de less" width={60}/>
                </div>  
            </section>
        </main>
    )
};

export default Skills;
