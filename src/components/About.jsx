import { Globe, Server, Code } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="divider"></div>
        </div>

        <div className="about-cards">
          <div className="about-card card">
            <div className="about-card-icon">
              <Globe />
            </div>
            <h3>Web Development</h3>
            <p>I create responsive and user-friendly web applications using modern frameworks and best practices.</p>
          </div>

          <div className="about-card card">
            <div className="about-card-icon">
              <Server />
            </div>
            <h3>Backend Development</h3>
            <p>I build robust server-side applications with Python, Django, and SQL databases.</p>
          </div>

          <div className="about-card card">
            <div className="about-card-icon">
              <Code />
            </div>
            <h3>Problem Solving</h3>
            <p>I enjoy tackling complex problems and finding efficient, elegant solutions.</p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
            Hi! I'm Jyothirmayi, a passionate Python Web Developer who loves building modern web applications using Django and React.
            I enjoy turning ideas into functional, user-friendly products and solving real-world problems through clean and efficient code.
            </p>
            <p>
            With a strong foundation in Python, web technologies, and databases, I focus on writing scalable, maintainable, and well-structured software. 
            I'm always exploring new technologies to improve my skills and stay updated with the latest trends in web development.
            </p>
            <p>When I'm not coding, you’ll probably find me reading, watching tech content on YouTube, or experimenting with new tools and frameworks.
            </p>
          </div>
          <div className="about-journey">
            <h3>My Journey</h3>
            <div className="journey-item">
              <div className="journey-year">2021</div>
              <div className="journey-content">
                <h4>🎓 Passed Higher Secondary (Plus Two)</h4>
                <p> Government Higher Secondary school, Ponkunnam</p>
                <p>Became curious about programming and problem-solving</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-year">2021 – 2024</div>
              <div className="journey-content">
                <h4>🎓 Bachelor of Computer Applications (BCA) </h4>
                <p>St. Antony’s College, Peruvanthanam </p>
                <p>Built a strong foundation in software development, data structures, and web technologies</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-year">2024 – 2025</div>
              <div className="journey-content">
                <h4>🎯 Trained at Brototype, Kochi  </h4>
                <p>Completed an intensive full-time training in **Python, Django, React, MongoDB, SQL**   </p>
                <p>Worked on real-time projects and learned industry best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
