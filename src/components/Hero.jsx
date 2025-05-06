import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-element hero-bg-element-1"></div>
      <div className="hero-bg-element hero-bg-element-2"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="gradient-text">Jyothirmayi</span>
            </h1>
            <h2>Python Web Developer | Full Stack Learner</h2>
            <p>
              I build robust web applications with Django and React, turning complex problems into elegant solutions.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Hire Me <ArrowRight className="ml-2" size={16} />
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img src="/me6.jpg?height=320&width=320" alt="Jyothirmayi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
