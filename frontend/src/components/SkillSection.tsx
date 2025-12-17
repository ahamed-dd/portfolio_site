import { type Skill } from "./Home"


type SkillSectionProps = {
    title: string
    skills: Skill[]
}

function SkillSection({ title, skills }: SkillSectionProps) {
  if (skills.length === 0) return null

  return (
    <>
      <h3>{title}</h3>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.id}>
            <img src={skill.image_url} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        
        .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 16px;
      }

       .skill-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
      }

       .skill-card img {
        width: 60px;
        height: 60px;
        object-fit: contain;
      }`}
      </style>
    </>
  )
}

export default SkillSection