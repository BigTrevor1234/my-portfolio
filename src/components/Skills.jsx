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
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 text-gray-900">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills