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
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-3"
              />

              <h3 className="font-semibold text-lg">
                {project.title}
              </h3>

              <p className="text-sm mt-2 text-gray-600">
                {project.description}
              </p>

              <p className="text-xs mt-2 text-gray-500">
                {project.tech}
              </p>

              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={project.liveLink}
                  className="text-blue-600 hover:underline"
                >
                  Live
                </a>

                <a
                  href={project.codeLink}
                  className="text-blue-600 hover:underline"
                >
                  Code
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