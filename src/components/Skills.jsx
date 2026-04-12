import { Code2, Server, Wrench, BookOpen, Languages } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Backend & Languages',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      skills: ['Python', 'C++'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
    },
    {
      title: 'Currently Learning',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      skills: ['React', 'TypeScript', 'Docker', 'Next.js', 'MongoDB', 'Java', 'C'],
    },
    {
      title: 'Languages',
      icon: Languages,
      color: 'from-rose-500 to-pink-500',
      textColor: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      skills: ['English (Fluent)', 'Hindi (Fluent)', 'Punjabi (Fluent)'],
    },
  ]

  return (
    <section
      id="skills"
      className="section-fade py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-portfolio-accent font-mono text-sm mb-2">04. Toolkit</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-portfolio-text-secondary max-w-xl">
            Technologies I work with and the ones I'm actively exploring to expand my capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-portfolio-card/50 border border-portfolio-border hover:border-portfolio-border-hover transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-lg ${category.bgColor} border ${category.borderColor}`}
                  >
                    <Icon size={18} className={category.textColor} />
                  </div>
                  <h3 className="font-semibold text-portfolio-text">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1.5 rounded-lg ${category.bgColor} ${category.textColor} border ${category.borderColor} font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="p-6 rounded-xl bg-portfolio-card/30 border border-portfolio-border">
          <p className="text-sm text-portfolio-text-secondary leading-relaxed">
            I primarily work on web development projects across the full stack.
            I'm always experimenting with new technologies and building side projects to learn.
            Full resume available upon request via{' '}
            <a
              href="mailto:harshrcan@gmail.com"
              className="text-portfolio-accent hover:underline font-medium"
            >
              email
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
