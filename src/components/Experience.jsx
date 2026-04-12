import { useState } from 'react'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const experienceData = {
    experience: [
      {
        title: 'Assistant Network Technician',
        date: 'Jan 2025 - Present',
        company: 'Hillcrest Computer Solutions',
        location: 'Vancouver, BC',
        description:
          'Troubleshoot technical issues, maintain hardware, and support network infrastructure. Deploy tech equipment including POS systems, PCs, and peripherals for clients. Gained a well-rounded perspective on both the front and back end of tech systems.',
        skills: ['Networking', 'Hardware', 'Troubleshooting', 'POS Deployment', 'PC Setup'],
      },
    ],
    education: [
      {
        title: 'Diploma in Computer Information Systems',
        date: 'Expected 2026',
        company: 'Kwantlen Polytechnic University (KPU)',
        location: 'Vancouver, BC',
        description:
          'Studying computer information systems with coursework in programming, databases, networking, and web development.',
        skills: ['Programming', 'Databases', 'Web Development', 'Networking'],
      },
    ],
    achievements: [],
  }

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Award },
  ]

  return (
    <section
      id="experience"
      className="section-fade py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-portfolio-accent font-mono text-sm mb-2">02. Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Experience & Education
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 p-1 bg-portfolio-card/50 rounded-xl border border-portfolio-border w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-portfolio-accent text-white shadow-md shadow-portfolio-accent/25'
                    : 'text-portfolio-text-secondary hover:text-portfolio-text hover:bg-portfolio-card'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="relative">
          {experienceData[activeTab]?.length > 0 && (
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-portfolio-accent/50 via-portfolio-purple/30 to-transparent" />
          )}

          <div className="space-y-8">
            {experienceData[activeTab]?.map((item, index) => (
              <div key={index} className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-portfolio-card border-2 border-portfolio-accent flex items-center justify-center group-hover:bg-portfolio-accent/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-portfolio-accent" />
                </div>

                <div className="p-6 rounded-xl bg-portfolio-card/50 border border-portfolio-border hover:border-portfolio-accent/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-portfolio-accent/5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-portfolio-text">
                        {item.title}
                      </h3>
                      <p className="text-portfolio-accent text-sm font-medium">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-portfolio-text-muted bg-portfolio-dark/50 px-3 py-1 rounded-full border border-portfolio-border whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-sm text-portfolio-text-muted mb-1">
                    {item.location}
                  </p>

                  <p className="text-sm text-portfolio-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.skills && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-portfolio-accent/10 text-portfolio-accent border border-portfolio-accent/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {(!experienceData[activeTab] ||
              experienceData[activeTab].length === 0) && (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-portfolio-card border border-portfolio-border flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'education' ? (
                    <GraduationCap size={24} className="text-portfolio-text-muted" />
                  ) : (
                    <Award size={24} className="text-portfolio-text-muted" />
                  )}
                </div>
                <p className="text-portfolio-text-secondary text-sm">
                  No entries yet. Stay tuned!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
