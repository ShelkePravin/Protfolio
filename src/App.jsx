import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Project from './sections/Project'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {

  return (
    <div className='min-h-screen bg-black'>
      <Navbar />

      {/* main section means body part */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
