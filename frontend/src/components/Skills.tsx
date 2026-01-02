import SkillSection from "./SkillSection"
import './styles/skills.css'

export type SkillCategory = "Programming" | "Data Engineering and Visualization" | "AI, ML and NLP" | "SDLC, Cloud and Devops"

export type SkillType = {
  name: string
  image_url: string
  category: string
}


type SkillsProps = {
  skills: SkillType[]
}

function Skills({ skills }: SkillsProps) {
  const groupedSkills = {
    programming: skills.filter(s => s.category === "Programming"),
    data: skills.filter(s => s.category === "Data Engineering and Visualization"),
    sdlc: skills.filter(s => s.category === "SDLC, Cloud and Devops"),
    ai: skills.filter(s => s.category === "AI, ML and NLP"),
  }

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills & Technologies</h2>
      <SkillSection title="PROGRAMMING" skills={groupedSkills.programming} />
      <SkillSection title="DATA SCIENCE" skills={groupedSkills.data} />
      <SkillSection title="SDLC CLOUD DEVOPS" skills={groupedSkills.sdlc} />
      <SkillSection title="AI ML NLP" skills={groupedSkills.ai} />
    </section>
  )
}

export default Skills