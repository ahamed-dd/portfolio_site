import { useState, useEffect } from "react"
import axios from "axios"
import Typewriter from 'typewriter-effect'
import { Link } from "react-router-dom"
import Skills from "./Skills"
type UserData = {
    name: string
    linkedin?: string
    github?: string 
    medium?: string
    bio?: string
    about?: string
    experience?: string
    skills?: string
    programming?: string
    communication?: string
    tools?: string
    projects?: object
    education?: string 
}

const BASE_URL = import.meta.env.VITE_BASE_URL

function Home() {
  const scrollToSection = (sectionId: any) => {
    const section: any = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  async function getUserData(): Promise<UserData | null> {
    const response = await axios.get(`${BASE_URL}/me/`, )
    return response.data[0]
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
     <Skills/>
    </section>
    </>
  )
}

export default Home