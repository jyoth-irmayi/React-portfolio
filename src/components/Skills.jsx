const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "C++","C"],
      color: "badge-cyan",
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "Bootstrap","Redux","Tailwind css","React"],
      color: "badge-pink",
    },
    {
      title: "Frameworks",
      skills: ["Django", "React",],
      color: "badge-cyan",
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Firebase"],
      color: "badge-cyan",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "Cloudinary","VS code"],
      color: "badge-cyan",
    },
    // {
    //   title: "Concepts",
    //   skills: [
    //     "Django ORM",
    //     "RESTful APIs",
    //     "GraphQL",
    //     "Responsive Design",
    //     "Testing",
    //     "CI/CD",
    //   ],
    //   color: "badge-cyan",
    // },
    {
      title: "Data Structures & Algorithms",
      skills: [
        "Arrays",
        "Linked Lists",
        "Stacks",
        "Queues",
        "Trees",
        "Graphs",
        "Tries",
        "Searching Algorithms",
        "Sorting Algorithms",
      ],
      color: "badge-cyan",
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-title">
          <h2>My Skills</h2>
          <div className="divider"></div>
          <p>Here are the technologies and tools I work with to build robust and efficient applications.</p>
        </div>

        <div className="skills-cards">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-card card">
              <h3>{category.title}</h3>
              <div className="skills-badges">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={`badge ${category.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
