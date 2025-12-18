export type ExperienceType = {
  company_name: string
  role: string
  description?: string
  year_worked?: number
  located?: string
}

type ExpProps = {
     exp: ExperienceType[]
}

function Experience({exp}: ExpProps) {
  return (
    <div>
        {
            exp.map(expp => (
                <li>
                    <h3>{expp.company_name}</h3>
                    <h4>{expp.role}</h4>
                    <h4>{expp.description}</h4>
                    <p>-----------------------</p>
                </li>
            ))
        }
    </div>
  )
}

export default Experience