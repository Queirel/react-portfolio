import styles from './App.module.css'
import { Fede } from './components/Fede/Fede'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <div className={styles.App}>
            <Navbar />
            <Fede />

    </div>
  )
}

export default App
