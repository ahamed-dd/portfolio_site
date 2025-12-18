import SkillSection from "./SkillSection"

export type SkillCategory = "Programming" | "Data Engineering and Visualization" | "AI, ML and NLP" | "SDLC, Cloud and Devops"

export type SkillType = {
  id: number
  name: string
  image_url: string
  category: SkillCategory
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
