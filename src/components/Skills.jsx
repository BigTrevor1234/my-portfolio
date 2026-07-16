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
    <section 
    id="skills"
    className="min-h-screen flexi tems-center px-4 py-20 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">My Skills</h2>

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