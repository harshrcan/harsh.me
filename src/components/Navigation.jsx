import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const top = element.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass border-b border-portfolio-border/50 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-portfolio-accent to-portfolio-purple flex items-center justify-center text-sm font-bold text-white">
                H
              </div>
              <span className="text-lg font-semibold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                Harsh
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-portfolio-accent'
                      : 'text-portfolio-text-secondary hover:text-portfolio-text hover:bg-portfolio-card/50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-portfolio-accent rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden relative z-50 p-2 text-portfolio-text hover:text-portfolio-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-portfolio-dark/95 backdrop-blur-xl" />
          <div className="relative flex flex-col items-center justify-center h-full gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-medium py-3 px-8 rounded-xl transition-all duration-300 animate-fade-in ${
                  activeSection === item.id
                    ? 'text-portfolio-accent bg-portfolio-accent/10'
                    : 'text-portfolio-text-secondary hover:text-portfolio-text'
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
