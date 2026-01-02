import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"
import { toast, ToastContainer } from "react-toastify"
import Navbar from "./Navbar"
import Skills from "./Skills"
import type { SkillType } from "./Skills"
import Projects from "./Projects"
import type { ProjectType } from "./Projects"
import Experience from "./Experience"
import type { ExperienceType } from "./Experience"
import Contact from "./Contact"
import { SocialMedia } from "./SocialIcons"
import { type SocialMediaType } from "./SocialIcons"
import "react-toastify/dist/ReactToastify.css"
import "./styles/home.css"
import ReactMarkdown from 'react-markdown'

export type ProfileType = {
  name: string
  email?: string
  bio: string
  about?: string
  extra_info?: string
  resume_url?: string
  socials: SocialMediaType[]
}

export type UserData = {
  profile: ProfileType
  projects: ProjectType[]
  experience: ExperienceType[]
  skills: SkillType[]
}

function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  async function getUserData(): Promise<UserData | null> {
    try {
      const res = await fetch("/data/portfolio.json")
      if (!res.ok) throw new Error("Failed to load portfolio data")
      return await res.json()
    } catch {
      toast.error("Failed to load portfolio data")
      return null
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      setLoading(true)
      const user = await getUserData()
      if (mounted && user) {
        setUserData(user)
        setLoading(false)
      }
    }

    loadData()
    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    )
  }

  if (!userData) {
  return null
}


  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        {/* ===== HERO SECTION ===== */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Hello, I'm{" "}
                <span className="hero-name">
                  <Typewriter
                    options={{
                      strings: userData?.profile.name || "Ahamed",
                      autoStart: true,
                      delay: 40,
                      cursor: " "
                    }}
                  />
                </span>
              </h1>

              <h2 className="hero-titletwo">
                <Typewriter
                  options={{
                    strings: userData?.profile.extra_info || "Full-stack developer",
                    autoStart: true,
                    delay: 50
                  }}
                />
              </h2>

              {userData?.profile.bio && (
                <div className="hero-description">
                 <ReactMarkdown>
                  {userData.profile.bio}
                </ReactMarkdown>
                  
                </div>
              )}

              <div className="hero-buttons">
                <a
                  href={userData?.profile.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn hero-btn-primary"
                >
                  Resume
                </a>

                <button
                  className="hero-btn hero-btn-secondary"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </button>
              </div>

              {userData?.profile.socials.length > 0 && (
                <SocialMedia socials={userData.profile.socials} />
              )}
            </div>

            <div className="hero-right">
              <div className="hero-image">
                {/* SVG unchanged */}
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                      <rect width="4" height="4" fill="none" stroke="#333" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#grid)"/>
                  <path d="M 60 160 L 95 40"
                        stroke="#333"
                        strokeWidth="14"
                        strokeLinecap="round"/>
                  <path d="M 140 160 L 105 40"
                        stroke="#333"
                        strokeWidth="14"
                        strokeLinecap="round"/>
                  <circle cx="85" cy="105" r="6" fill="#333"/>
                  <path d="M 85 111 L 95 120"
                        stroke="#333"
                        strokeWidth="8"
                        strokeLinecap="round"/>
                  <circle cx="115" cy="105" r="6" fill="#333"/>
                  <path d="M 115 111 L 105 120"
                        stroke="#333"
                        strokeWidth="8"
                        strokeLinecap="round"/>
                  <path d="M 95 120 L 105 120"
                        stroke="#333"
                        strokeWidth="10"
                        strokeLinecap="round"/>
                  <circle cx="100" cy="55" r="3" fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        {userData?.projects.length > 0 && (
          <Projects projecttype={userData.projects} />
        )}

        {/* ===== SKILLS ===== */}
        {userData?.skills.length > 0 && (
          <Skills skills={userData.skills} />
        )}

        {/* ===== EXPERIENCE ===== */}
        {userData?.experience.length > 0 && (
          <section id="experience">
            <Experience exp={userData.experience} />
          </section>
        )}

        {/* ===== CONTACT ===== */}
        <Contact />
      </div>

      <ToastContainer position="bottom-right" />
    </>
  )
}

export default Home



 