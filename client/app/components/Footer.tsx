import styles from "../styles/Footer.module.css";

const Footer = () => {

    return(
        <main className={styles.containerFooter}>
            <h4 className={styles.textFooter}> <span className={styles.name}> Saira Areco </span> © 2024 </h4>
            <div className={styles.socialMediaFooter}>
            <a href="https://github.com/sairaareco" target="_blank" rel="noopener noreferrer">
                  <img src="/images/github.svg" alt="logo de github" width={20} className={styles.imageGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/saira-areco/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin.svg" alt="logo de linkedin" width={20} className={styles.imageLinkedin}/>
                </a> 
            </div>
        </main>
    )
};

export default Footer;