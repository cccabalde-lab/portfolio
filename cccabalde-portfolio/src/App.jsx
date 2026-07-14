import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
