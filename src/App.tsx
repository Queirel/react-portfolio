import styles from './App.module.css'
import { Fede } from './components/Fede/Fede'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About';


function App() {

  return (
    <div className={styles.App}>
            <Navbar />
            <Fede />
            <About />

    </div>
  )
}

export default App
