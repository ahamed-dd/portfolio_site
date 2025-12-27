import { useState } from 'react'
import './styles/projects.css'

export type ProjectType = {
  id: number
  title: string
  description?: string
  github_url?: string 
  live_url?: string 
  tech_stack?: string
  proj_image_url?: string
  order?: number
}

type props = {
  projecttype: ProjectType[]
}

function Projects({ projecttype }: props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextProject = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % projecttype.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const prevProject = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev - 1 + projecttype.length) % projecttype.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const goToProject = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  if (projecttype.length === 0) return null

  const getPrevIndex = () => (currentIndex - 1 + projecttype.length) % projecttype.length
  const getNextIndex = () => (currentIndex + 1) % projecttype.length

  const currentProject = projecttype[currentIndex]
  const prevProjectData = projecttype[getPrevIndex()]
  const nextProjectData = projecttype[getNextIndex()]

  return (
    <section id= 'projects' className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-carousel-container">
        <div className="projects-carousel">
          {/* Previous Project Preview */}
          {projecttype.length > 1 && (
            <div className="project-card-preview project-card-prev">
              {prevProjectData.proj_image_url && (
                <div className="project-image-preview">
                  <img src={prevProjectData.proj_image_url} alt={prevProjectData.title} />
                </div>
              )}
              <h3 className="project-title">{prevProjectData.title}</h3>
              <p className="project-description">{prevProjectData.description}</p>
            </div>
          )}

          {/* Current Project */}
          <div className="project-card-carousel">
            {currentProject.proj_image_url && (
              <div className="project-image">
                <img
                  src={currentProject.proj_image_url}
                />
              </div>
            )}
            <h3 className="project-title">{currentProject.title}</h3>
            <p className="project-description">{currentProject.description}</p>
            {currentProject.tech_stack && (
              <p className="project-tech">{currentProject.tech_stack}</p>
            )}
            <div className="project-links">
              {currentProject.live_url && (
                <a 
                  href={currentProject.live_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn project-btn-primary"
                >
                  Live Demo
                </a>
              )}
              {currentProject.github_url && (
                <a 
                  href={currentProject.github_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn project-btn-secondary"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Next Project Preview */}
          {projecttype.length > 1 && (
            <div className="project-card-preview project-card-next">
              {nextProjectData.proj_image_url && (
                <div className="project-image-preview">
                  <img src={nextProjectData.proj_image_url} alt={nextProjectData.title} />
                </div>
              )}
              <h3 className="project-title">{nextProjectData.title}</h3>
              <p className="project-description">{nextProjectData.description}</p>
            </div>
          )}
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button 
            onClick={prevProject} 
            className="carousel-btn carousel-prev"
            aria-label="Previous project"
            disabled={isTransitioning}
          >
            ‹
          </button>
          
          <div className="carousel-dots">
            {projecttype.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to project ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
          
          <button 
            onClick={nextProject} 
            className="carousel-btn carousel-next"
            aria-label="Next project"
            disabled={isTransitioning}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects