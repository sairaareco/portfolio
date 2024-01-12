import styles from './page.module.css'
import Navbar from './components/Navbar'
import Init from './components/Init'
import About from './components/About'
import Footer from './components/Footer'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
import Link from 'next/link'



export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Init />
      <About />
      <Proyects />
      <Contact />
      <Footer />
    </main>
  )
}
