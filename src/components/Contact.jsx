import { Mail, Send, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      url: 'https://github.com/harshrcan',
      handle: '@harshrcan',
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/harsh-rana-can',
      handle: 'Harsh Rana',
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: 'https://www.instagram.com/harsh_rana05x',
      handle: '@harsh_rana05x',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:harshrcan@gmail.com',
      handle: 'harshrcan@gmail.com',
    },
  ]

  return (
    <section
      id="contact"
      className="section-fade py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-portfolio-accent font-mono text-sm mb-2">05. Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-portfolio-text-secondary max-w-lg mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
            Feel free to reach out!
          </p>
        </div>

        <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-portfolio-card/80 to-portfolio-dark-alt border border-portfolio-border overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-portfolio-purple/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-portfolio-border">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-portfolio-accent to-portfolio-purple flex items-center justify-center text-3xl font-bold text-white shrink-0">
                HR
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-portfolio-text mb-1">
                  Harsh Rana
                </h3>
                <p className="text-portfolio-accent text-sm font-medium mb-1">
                  Web Developer
                </p>
                <p className="text-portfolio-text-muted text-sm flex items-center justify-center sm:justify-start gap-1">
                  <MapPin size={14} />
                  India
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-portfolio-dark/40 border border-portfolio-border hover:border-portfolio-accent/30 transition-all duration-300 hover:bg-portfolio-dark/60"
                  >
                    <div className="p-2.5 rounded-lg bg-portfolio-card border border-portfolio-border group-hover:border-portfolio-accent/30 transition-colors">
                      <Icon
                        size={18}
                        className="text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-portfolio-text">
                        {link.name}
                      </p>
                      <p className="text-xs text-portfolio-text-muted truncate">
                        {link.handle}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-8 text-center">
              <a
                href="mailto:harshrcan@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-portfolio-accent to-portfolio-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-portfolio-accent/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Send size={16} />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
