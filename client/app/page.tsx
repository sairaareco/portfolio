import styles from './page.module.css'
import Navbar from './components/Navbar'
import Init from './components/Init'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Proyects from './components/Proyects'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Init />
      <About />
      <Skills />
      <Proyects />
      <Footer />
    </main>
  )
}
