import styles from './App.module.css'
import { Fede } from './components/Fede/Fede'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';



function App() {

  return (
    <div className={styles.App}>
            <Navbar />
            <Fede />
            <About />
            <Skills />
            <Projects />
            <Contact />
    </div>
  )
}

export default App
