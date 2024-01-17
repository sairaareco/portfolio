import styles from "../styles/Contact.module.css";

const Contact = () => {

    return(
        <main id="contact" className={styles.containerContact}>
            <h2 className={styles.titleContact}> CONTACTO </h2>

            <form action="" className={styles.form}>
                <div className={styles.personalInfoContainer}>          
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}> NOMBRE </label>
                        <input type="text" 
                        id="name" 
                        className={styles.input}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}> EMAIL </label>
                        <input type="text" 
                        id="email" 
                        className={styles.input}/>
                        </div>
                </div>

                <div className={styles.messageContainer}>
                    <label htmlFor="subject" className={styles.label}> ASUNTO </label>
                    <input type="text" 
                    id="subject" 
                    className={styles.input}/>

                    <label htmlFor="message" className={styles.label}> MENSAJE </label>
                    <input type="text" 
                    id="message" 
                    className={styles.input}/>
                </div>
            </form>
        </main>
    )
};

export default Contact;