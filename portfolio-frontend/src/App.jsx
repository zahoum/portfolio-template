import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberBackground from './components/CyberBackground'; // زيد هاد السطر
import './App.css';

function App() {
  return (
    <div className="app">
      <CyberBackground /> 
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;