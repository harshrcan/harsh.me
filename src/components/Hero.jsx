import { useEffect, useState } from 'react'
import { Mail, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [isTypingDone, setIsTypingDone] = useState(false)
  const fullText = 'CIS Student & Web Developer'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        setIsTypingDone(true)
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/harshrcan' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/harsh-rana-can' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/harsh_rana05x' },
    { name: 'Email', icon: Mail, url: 'mailto:harshrcan@gmail.com' },
  ]

  const scrollToExperience = () => {
    const el = document.getElementById('experience')
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="section-fade visible min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-portfolio-card/80 border border-portfolio-border text-portfolio-text-secondary text-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-portfolio-emerald animate-pulse" />
          Open to opportunities
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Harsh</span>
          </h1>

          <div className="h-8 sm:h-10 flex items-center justify-center">
            <p className="text-xl sm:text-2xl text-portfolio-text-secondary font-mono">
              {displayText}
              <span className={`inline-block w-0.5 h-6 bg-portfolio-accent ml-1 ${isTypingDone ? 'animate-pulse' : ''}`} />
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-portfolio-text-secondary leading-relaxed max-w-2xl mx-auto">
          Computer Information Systems student at{' '}
          <span className="text-portfolio-accent font-medium">Kwantlen Polytechnic University</span>.{' '}
          I love tech — whether it's tinkering with new tools, diving into a framework I've never tried,
          or just exploring what's possible. I'm always curious, always learning, and always looking
          for the next thing to build or break apart and understand.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-portfolio-card/60 border border-portfolio-border hover:border-portfolio-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-portfolio-accent/10"
              aria-label={link.name}
            >
              <link.icon
                size={20}
                className="text-portfolio-text-secondary group-hover:text-portfolio-accent transition-colors"
              />
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            onClick={scrollToExperience}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-portfolio-accent to-portfolio-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-portfolio-accent/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <a
            href="mailto:harshrcan@gmail.com"
            className="px-6 py-2.5 rounded-xl border border-portfolio-border text-portfolio-text-secondary font-medium text-sm hover:border-portfolio-accent/50 hover:text-portfolio-text transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <button
        onClick={scrollToExperience}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}

export default Hero
