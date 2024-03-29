import styles from "../styles/Contact.module.css";

const Contact = () => {

    return(
        <main id="contact" className={styles.containerContact}>
            <h2 className={styles.titleContact}> CONTACTO </h2>
            <form action="" className={styles.form}>
                <section className={styles.formContent}>
                    <div className={styles.personalInfoContainer}>          
                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.labelName}> NOMBRE </label>
                            <input type="text" 
                            id="name" 
                            className={styles.inputData}/>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.labelEmail}> EMAIL </label>
                            <input type="text" 
                            id="email" 
                            className={styles.inputData}/>
                        </div>
                    </div>

                    <div className={styles.messageContainer}>          
                        <label htmlFor="subject" className={styles.labelSubject}> ASUNTO </label>
                        <input type="text" 
                        id="subject" 
                        className={styles.input}/>

                        <label htmlFor="message" className={styles.labelMessage}> MENSAJE </label>
                        <textarea name="message" 
                        id="message" 
                        cols={30} 
                        rows={10} 
                        className={styles.textarea}></textarea>
                        {/* <input type="text" 
                        id="message" 
                        className={styles.inputMessage}/>       */}
                    </div>          
                </section>
                <button className={styles.buttonSubmit}> ENVIAR </button>
            </form>
        </main>
    )
};

export default Contact;