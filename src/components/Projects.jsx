import { ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon } from './Icons'

const Projects = () => {
  const projects = [
    {
      title: 'Modern Snake Game',
      description:
        'A modern take on the classic Snake game with smooth gameplay, responsive controls, and a clean UI.',
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS'],
      link: 'https://snake.game.harshrana.me/',
      repo: '',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      accent: 'text-emerald-400',
    },
    {
      title: 'Restaurant Website',
      description:
        'A fully functional restaurant website featuring a menu showcase, reservation system, and contact integration.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://harshrcan.github.io/Restraunt-website-/',
      repo: 'https://github.com/harshrcan/Restraunt-website-',
      gradient: 'from-orange-500/20 to-amber-500/20',
      accent: 'text-orange-400',
    },
    {
      title: 'Virtual Photobooth',
      description:
        'An interactive virtual photobooth with filters, effects, and real-time camera integration for fun photo sessions.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://photobooth-by-harsh.netlify.app/',
      repo: '',
      gradient: 'from-pink-500/20 to-rose-500/20',
      accent: 'text-pink-400',
    },
    {
      title: 'rentAroom',
      description:
        'A room rental platform that connects property owners with tenants, featuring listings, search, and user management.',
      tech: ['TypeScript', 'SQL', 'Vercel'],
      link: 'https://rent-aroom.vercel.app/',
      repo: '',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      accent: 'text-blue-400',
    },
  ]

  return (
    <section
      id="projects"
      className="section-fade py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-portfolio-accent font-mono text-sm mb-2">03. Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-portfolio-text-secondary max-w-xl">
            A selection of projects I've built while learning and growing as a developer.
            Each one taught me something new.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-portfolio-card/50 border border-portfolio-border overflow-hidden hover:border-portfolio-border-hover transition-all duration-500 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
            >
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
                <Sparkles
                  size={32}
                  className={`${project.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 ml-4 shrink-0">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-portfolio-border/50 text-portfolio-text-muted hover:text-portfolio-text transition-all"
                        aria-label="View repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-portfolio-border/50 text-portfolio-text-muted hover:text-portfolio-text transition-all"
                      aria-label="Visit site"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-portfolio-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-portfolio-dark/50 text-portfolio-text-muted border border-portfolio-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/harshrcan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-portfolio-border text-portfolio-text-secondary font-medium text-sm hover:border-portfolio-accent/50 hover:text-portfolio-accent transition-all duration-300"
          >
            <GithubIcon size={16} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
