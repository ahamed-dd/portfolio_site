import { useState, useEffect } from "react"
import axios from "axios"
import Typewriter from 'typewriter-effect'
import { Link } from "react-router-dom"
import Skills from "./Skills"
import Projects from "./Projects"

 
export type Project = {
  id: number
  title: string
  description?: string
  github_url?: string 
  live_url?: string 
  tech_stack?: string
  order?: number
}
type SkillCategory = "Programming" | "Data Engineering and Visualization" | "AI, ML and NLP" | "SDLC, Cloud and Devops"

export type Skill = {
  id: number
  name: string
  image_url: string
  category: SkillCategory
}
type Education = {
  institute_name: string
  degree?: string
  field?: string
  year_started?:number
  year_ended?: number
  grade?: number
  located?: string
}
type Experience = {
  company_name: string
  role: string
  description?: string
  year_worked?: number
  located?: string
}

type UserData = {
    name: string
    linkedin?: string
    github?: string 
    medium?: string
    bio?: string
    about?: string
    projects?: Project[]
    education?: Education[]
    experience?: Experience[]
    skills?: Skill[]
}

const BASE_URL = import.meta.env.VITE_BASE_URL

function Home() {
  const scrollToSection = (sectionId: any) => {
    const section: any = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  async function getUserData(): Promise<UserData | null> {
    const response = await axios.get(`${BASE_URL}/me/`, )
    return response.data
  }

  const [userData, setuserData] = useState<UserData | null>(null)

  const allData = async () => {
    setuserData(await getUserData())
  }

  useEffect(() => {
    allData()
  }, [])

  return (
    <>
    <div>
            <h1>Hello, I'm </h1>
            <h1>
              <Typewriter
                options={{
                  strings: userData?.name && userData.name,
                  autoStart: true,
                }}
              />
            </h1>
    </div>
    <div>
      {userData?.about && userData.about}
      <Link
                  to="https://drive.google.com/file/d/1JNhoViPEGQuhDiHAcBDnd1yPodSmeIWA/view?usp=sharing"
                  target="_blank"
                  id="home-button"
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <button >
                    Resume
                  </button>
      </Link>
      
                <button
                  id="home-button"
                  className="btn"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
    </div>

    <section>
     {userData?.skills && (
      <Skills skills={userData.skills}/>
     )
     }
    </section>
    <section>
      {userData?.projects && (
        <Projects projecttype={userData.projects} />
      )}
    </section>
    </>
  )
}

export default Home