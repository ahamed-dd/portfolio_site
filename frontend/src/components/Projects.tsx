import './styles/projects.css'

export type ProjectType = {
  id: number
  title: string
  description?: string
  github_url?: string 
  live_url?: string 
  tech_stack?: string
  order?: number
}

type props = {
  projecttype: ProjectType[]
}

function Projects({ projecttype }: props) {
  return (
    <section className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projecttype.map(project => (
          <div key={project.id} className="project-card">
            {/*<div className="project-icon">
               You can add different icons based on tech_stack 
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="#FFB800" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>*/}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.tech_stack && (
              <p className="project-tech">{project.tech_stack}</p>
            )}
            <div className="project-links">
              {project.live_url && (
                <a 
                  href={project.live_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn project-btn-primary"
                >
                  Live Demo
                </a>
              )}
              {project.github_url && (
                <a 
                  href={project.github_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn project-btn-secondary"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects