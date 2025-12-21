import { useState, useEffect } from "react"
import './styles/navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        {/* Mobile bar */}
        <div className="nav-mobile-bar">
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="logo-container mobile-logo">
            <img src="/portfolio.svg" alt="logo" />
          </div>
        </div>

        {/* Desktop logo */}
        <div className="logo-container desktop-logo">
          <img src="/portfolio.svg" alt="logo" />
        </div>

        {/* Desktop menu */}
        <div className="nav-menu-desktop">
          <button onClick={() => scrollToSection('home')} className="nav-link active">Home</button>
          {/*<button onClick={() => scrollToSection('about')} className="nav-link">About</button> */}
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>

      </div>

      {isOpen && (
        <div className="nav-menu-mobile">
          <button onClick={() => scrollToSection('home')} className="nav-link-mobile">Home</button>
          {/*<button onClick={() => scrollToSection('about')} className="nav-link">About</button> */}
          <button onClick={() => scrollToSection('projects')} className="nav-link-mobile">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link-mobile">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link-mobile">Contact</button>
        </div>
      )}
    </nav>


  )
}

export default Navbar