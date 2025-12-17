import { Carousel } from "react-bootstrap"
import { type Project } from "./Home"
import projectImage from "../media/projects-default.jpg";



type props = {
projecttype: Project[]
}


function Projects({projecttype}: props) {
  return (
    <>
    <div>
    <Carousel>
    {projecttype.map(project => (
      
     
      <Carousel.Item>
        <img
          className="proj-img"
          src={projectImage}
          alt="project image for Ahamed portfolio website."
          />
        <Carousel.Caption>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.tech_stack}</p>
         
          <a 
            href={project.live_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>
          <a 
            href={project.github_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
           Source Code
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    
     
    ))}
    </Carousel>
    </div>
    <style>{`
        proj-img{
        width: 50%;
        height: 100px;
        object-fit: none;
        }
        `}
    </style>
    </>
  )
}

export default Projects

