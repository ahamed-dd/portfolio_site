import { useState, useEffect } from "react"
import axios from "axios"
import Typewriter from 'typewriter-effect'
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
import 'react-toastify/dist/ReactToastify.css'
import './styles/home.css'
import ReactMardown from 'react-markdown'

export type EducationType = {
  institute_name: string
  degree?: string
  field?: string
  year_started?:number
  year_ended?: number
  grade?: number
  located?: string
}

type UserData = {
    name: string
    linkedin?: string
    github?: string 
    medium?: string
    bio?: string
    about?: string
    profile_image?: string
    resume_url?: string
    projects?: ProjectType[]
    education?: EducationType[]
    experience?: ExperienceType[]
    skills?: SkillType[]
    extra_info?: string
    socials?: SocialMediaType[]
}
const BASE_URL = import.meta.env.VITE_BASE_URL

function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [showResume, setShowResume] = useState(false)

  async function getUserData(): Promise<UserData | null> {
    try {
      const response = await axios.get(`${BASE_URL}/me/`)
      return response.data
    } catch (error) {
      toast.error("Failed to load user data")
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
    const loadData = async () => {
      setLoading(true)
      const [user] = await Promise.all([getUserData()])
      setUserData(user)
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        {/* ===== HERO SECTION ===== */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-left-header">
              {userData?.profile_image && (
                <div className="profile-image">
                  <img src={userData.profile_image} alt="Profile" />
                </div>
              )}

            </div>
                <h1 className="hero-title">
                  Hello, I'm{" "}
                  <span className="hero-name">
                    <Typewriter
                      options={{
                        strings: userData?.name || "Ahamed",
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
                      strings: userData?.extra_info || "Full-stack developer",
                      autoStart: true,
                      delay: 50,
                    }}
                  />
                </h2>

              {userData?.bio && (
                <div className="hero-description">
                <ReactMardown >
                  {userData.bio}
                </ReactMardown>
                </div>
              )}
              <div className="hero-buttons">
                        <a
                          href={userData?.resume_url}
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
              {userData?.socials && userData.socials.length > 0 &&(
                <SocialMedia socials={userData.socials}/>
              )}
              
              
          </div>
            <div className="hero-right">
              <div className="hero-image">
                {/* Placeholder illustration - you can replace with an actual image */}
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

        {/* ===== ABOUT ME SECTION ===== 
        <section className="about-section" id="about">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            {userData?.extra_info && (
              <p className="about-text">{userData.extra_info}</p>
            )}
          </div>
        </section> -- About Section is commented As I think it is not useful as
        bio and about are mostly similar. */}

        {/* ===== PROJECTS SECTION ===== */}
        {userData?.projects && userData.projects.length > 0 && (
            <Projects projecttype={userData.projects} />
        )}

        {/* ===== SKILLS SECTION ===== */}
        {userData?.skills && userData.skills.length > 0 && (
          <Skills skills={userData.skills} />
        )}

        {/* ===== EXPERIENCE SECTION ===== */}
        {userData?.experience && userData.experience.length > 0 && (
          <section id="experience">
            <Experience exp={userData.experience} />
          </section>
        )}

        {/* ===== CONTACT SECTION ===== */}
        <Contact />
      
      </div>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default Home


 