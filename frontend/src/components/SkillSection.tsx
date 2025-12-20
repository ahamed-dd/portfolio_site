import { type SkillType } from "./Skills"

type SkillSectionProps = {
    title: string
    skills: SkillType[]
}

function SkillSection({ title, skills }: SkillSectionProps) {
  if (skills.length === 0) return null

  return (
    <div className="skill-section">
      <h3 className="skill-section-title">{title}</h3>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.id}>
            <div className="skill-icon">
              <img src={skill.image_url} alt={skill.name} />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillSection