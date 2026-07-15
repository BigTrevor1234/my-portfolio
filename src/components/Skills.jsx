const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
  "Virtual Assistance",
  "CRM",
]

function Skills() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold mb-6">My Skills</h2>

      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border rounded px-4 py-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills