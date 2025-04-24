import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
      "A dynamic e-commerce platform developed using Django, SQL, and AJAX. Features include product listing, user authentication, cart management with real-time quantity updates, and order tracking.",
      image: "/ecommerce.png?height=300&width=500",
      tags: ["Django", "SQL", "AJAX", "Python", "Bootstrap"],
      github: "https://github.com/jyoth-irmayi/Bellus",
      demo: "https://jyothirmayi.site/user_login/?next=/",
    },
    {
      title: "NetFlix clone",
      description: "A fully responsive Netflix clone built using React and Vite. Implements user authentication, dynamic content browsing, and component-based UI inspired by the original platform.",
      image: "/netflix.png?height=300&width=500",
      tags: ["React", "Vite", "Firebase Auth", "Tailwind CSS"],
      github: "https://github.com/jyoth-irmayi/Netflix",
      demo: "https://netflix-zg3c.vercel.app/",
    },
    {
      title: "KFC - clone using HTML and CSS",
      description:
        "A clone using html and css . Clean and organized code using HTML5 and CSS3.Styling with focus on typography, colors, and alignment to match KFC’s branding.",
      image: "/kfc.png?height=300&width=500",
      tags: ["CSS3", "HTML5"],
      github: "https://github.com/jyoth-irmayi/KFC-Website",
      demo: " https://jyoth-irmayi.github.io/KFC-Website/",
    },
    {
      title: "OLX-clone",
      description: "A fully responsive OLX clone built using React and Vite. Implements user authentication, dynamic content browsing, and component-based UI inspired by the original platform.",
      image: "/olx.png?height=300&width=500",
      tags: ["React","firebase","vite"],
      github: "https://github.com/jyoth-irmayi/OLX_clone",
      demo: "https://olx-clone-puce.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-title">
          <h2>My Projects</h2>
          <div className="divider"></div>
          <p>Here are some of the projects I've worked on. Each project showcases different skills and technologies.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link btn btn-outline"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link btn btn-primary"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
