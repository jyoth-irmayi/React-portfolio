import { Download } from "lucide-react"

const ResumeSection = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <div className="section-title">
          <h2>Resume</h2>
          <div className="divider"></div>
        </div>

        <div className="resume-download">
          <p>Download my resume to learn more about my experience, education, and skills.</p>
          <a href="/Resume.pdf" download className="btn btn-primary">
            <Download size={18} className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
