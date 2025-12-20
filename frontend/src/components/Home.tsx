import { useState, useEffect } from "react"
import axios from "axios"
import Typewriter from 'typewriter-effect'
import { toast, ToastContainer } from "react-toastify"
import { Modal } from "react-bootstrap"
import Navbar from "./Navbar"
import Skills from "./Skills"
import type { SkillType } from "./Skills"
import Projects from "./Projects"
import type { ProjectType } from "./Projects"
import Experience from "./Experience"
import type { ExperienceType } from "./Experience"
import Contact from "./Contact"
import 'react-toastify/dist/ReactToastify.css'
import './styles/home.css'

export type EducationType = {
  institute_name: string
  degree?: string
  field?: string
  year_started?:number
  year_ended?: number
  grade?: number
  located?: string
}

export type SocialMediaType = {
  id: number
  name: string
  url: string
  icon_url: string
}

type UserData = {
    name: string
    linkedin?: string
    github?: string 
    medium?: string
    bio?: string
    about?: string
    profile_image?: string
    projects?: ProjectType[]
    education?: EducationType[]
    experience?: ExperienceType[]
    skills?: SkillType[]
    extra_info?: string
}

const BASE_URL = import.meta.env.VITE_BASE_URL

// ===== SOCIAL MEDIA COMPONENT =====
function SocialMedia({ socials }: { socials: SocialMediaType[] }) {
  return (
    <div className="social-icons">
      {socials.map(social => (
        <a 
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          title={social.name}
        >
          <img src={social.icon_url} alt={social.name} />
        </a>
      ))}
    </div>
  )
}

// ===== RESUME MODAL COMPONENT =====
function ResumeModal({ show, onHide }: { show: boolean; onHide: () => void }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="resume-modal">
      <Modal.Header closeButton>
        <Modal.Title>Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 0 }}>
        <iframe
          src="https://drive.google.com/file/d/1JNhoViPEGQuhDiHAcBDnd1yPodSmeIWA/preview"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="Resume"
        />
      </Modal.Body>
    </Modal>
  )
}

function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [socials, setSocials] = useState<SocialMediaType[]>([])
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

  async function getSocials(): Promise<SocialMediaType[]> {
    try {
      const response = await axios.get(`${BASE_URL}/socials/`)
      return response.data
    } catch (error) {
      console.error("Failed to load social media links")
      return []
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const [user, socialData] = await Promise.all([getUserData(), getSocials()])
      setUserData(user)
      setSocials(socialData)
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
              <div className="logo-container">
              A  {/* Or use your logo/initials */}
              </div>
            </div>
              <h1 className="hero-title">
                <Typewriter
                  options={{
                    strings: userData?.bio || "Full-stack developer",
                    autoStart: true,
                    loop: false,
                    delay: 50,
                  }}
                />
              </h1>
              {userData?.about && (
                <p className="hero-description">{userData.about}</p>
              )}
              {socials.length > 0 && <SocialMedia socials={socials} />}
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
                  <circle cx="100" cy="60" r="25" fill="#333"/>
                  <ellipse cx="100" cy="110" rx="35" ry="50" fill="#333"/>
                  <path d="M 70 90 Q 60 110 70 130" stroke="#333" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <path d="M 130 90 Q 140 110 130 130" stroke="#333" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <circle cx="85" cy="55" r="3" fill="#fff"/>
                  <circle cx="115" cy="55" r="3" fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ME SECTION ===== */}
        <section className="about-section" id="about">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            {userData?.extra_info && (
              <p className="about-text">{userData.extra_info}</p>
            )}
          </div>
        </section>

        {/* ===== SKILLS SECTION ===== */}
        {userData?.skills && userData.skills.length > 0 && (
          <Skills skills={userData.skills} />
        )}

        {/* ===== PROJECTS SECTION ===== */}
        {userData?.projects && userData.projects.length > 0 && (
          <section id="projects">
            <Projects projecttype={userData.projects} />
          </section>
        )}

        {/* ===== EXPERIENCE SECTION ===== */}
        {userData?.experience && userData.experience.length > 0 && (
          <section id="experience">
            <Experience exp={userData.experience} />
          </section>
        )}

        {/* ===== CONTACT SECTION ===== */}
        <Contact />

        {/* ===== RESUME MODAL ===== */}
        <ResumeModal show={showResume} onHide={() => setShowResume(false)} />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default Home