import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Particle from './components/Particle';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
