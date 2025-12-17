import { type Skill } from "./Home"
import SkillSection from "./SkillSection"

type SkillsProps = {
  skills: Skill[]
}

function Skills({ skills }: SkillsProps) {
  const groupedSkills = {
    programming: skills.filter(s => s.category === "Programming"),
    data: skills.filter(s => s.category === "Data Engineering and Visualization"),
    sdlc: skills.filter(s => s.category === "SDLC, Cloud and Devops"),
    ai: skills.filter(s => s.category === "AI, ML and NLP"),
  }

  return (
    <section>
      <h2>Skills</h2>

      <SkillSection title="Programming Skills" skills={groupedSkills.programming} />
      <SkillSection title="Data Science" skills={groupedSkills.data} />
      <SkillSection title="SDLC, Cloud and Devops" skills={groupedSkills.sdlc} />
      <SkillSection title="AI, ML and NLP" skills={groupedSkills.ai} />
    </section>
  )
}

export default Skills
