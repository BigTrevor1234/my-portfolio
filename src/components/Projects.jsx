import weatherImg from "../assets/weather-app.jpg"
import glowImg from "../assets/glow-skincare.jpg"

const projects = [
  {
    title: "Weather Forecast App",
    description: "A responsive weather application that displays live weather information.",
    tech: "React, JavaScript, Weather API",
    image: weatherImg,
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Glow Skincare",
    description: "A responsive skincare website showcasing products and modern UI design.",
    tech: "React, Vercel",
    image: glowImg,
    liveLink: "#",
    codeLink: "#",
  },
]

function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
        {projects.map((project) => (
          <div key={project.title} className="border rounded p-4">
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-3"
            />

            <h3 className="font-semibold">{project.title}</h3>

            <p className="text-sm mt-2">
              {project.description}
            </p>

            <p className="text-xs mt-2">
              {project.tech}
            </p>

            <div className="flex gap-4 mt-4 underline">
              <a href={project.liveLink}>Live</a>
              <a href={project.codeLink}>Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects