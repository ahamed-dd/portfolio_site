import './styles/experience.css'

export type ExperienceType = {
  company_name: string
  role: string
  description: string
}


type ExpProps = {
  exp: ExperienceType[]
}

function Experience({ exp }: ExpProps) {
  return (
    <section className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-list">
        {exp.map((expp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-company">{expp.company_name}</h3>
              <div className="experience-meta">
                {expp.year_worked && (
                  <span className="experience-year">{expp.year_worked}</span>
                )}
                {expp.located && (
                  <span className="experience-location">📍 {expp.located}</span>
                )}
              </div>
            </div>
            <h4 className="experience-role">{expp.role}</h4>
            {expp.description && (
              <p className="experience-description">{expp.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience