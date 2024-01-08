import styles from './page.module.css'
import Navbar from './components/Navbar'
import Init from './components/Init'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Init />
    </main>
  )
}
