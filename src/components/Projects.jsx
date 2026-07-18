import weatherImg from "../assets/weather-app.jpg";
import glowImg from "../assets/glow-skincare.jpg";

const projects = [
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather application that displays live weather information using a weather API.",
    tech: "React • JavaScript • Weather API",
    image: weatherImg,
    alt: "Screenshot of the Weather Forecast App interface",
    liveLink: "https://bigtrevor1234.github.io/weather_projectupdate/",
    codeLink: "https://bigtrevor1234.github.io/weather_projectupdate/",
  },
  {
    title: "Glow Skincare",
    description:
      "A responsive skincare website showcasing premium products with a modern and elegant user interface.",
    tech: "React • Vercel",
    image: glowImg,
    alt: "Homepage of the Glow Skincare website",
    liveLink: "https://glow-skincare-six.vercel.app",
    codeLink: "https://github.com/bigtrevor1234/glow-skincare",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Featured Projects
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've built to strengthen my skills in
          modern web development and responsive design.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <span className="inline-block mt-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {project.tech}
                </span>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    View Code
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;