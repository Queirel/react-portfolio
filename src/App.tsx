import styles from './App.module.css'
import { Fede } from './components/Fede/Fede'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';


function App() {

  return (
    <div className={styles.App}>
            <Navbar />
            <Fede />
            <About />
            <Skills />
            <Projects />
    </div>
  )
}

export default App
