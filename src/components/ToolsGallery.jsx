import asana from "../assets/asana-workspace2.jpg";
import zapier from "../assets/zapier-automation.jpg";

const tools = [
  {
    name: "Git & GitHub",
    letter: "G",
    description: "Version Control & Collaboration",
    available: false,
  },
  {
    name: "VS Code",
    letter: "V",
    description: "Code Editor",
    available: false,
  },
  {
    name: "Asana",
    image: asana,
    alt: "Screenshot of an Asana project management workspace",
    description: "Project & Task Management",
    available: true,
  },
  {
    name: "Zapier",
    image: zapier,
    alt: "Screenshot of a Zapier automation workflow",
    description: "Workflow Automation",
    available: true,
  },
  {
    name: "Google Workspace",
    letter: "W",
    description: "Productivity Suite",
    available: false,
  },
  {
    name: "Canva",
    letter: "C",
    description: "Visual Content Creation",
    available: false,
  },
  {
    name: "Notion",
    letter: "N",
    description: "Documentation & Knowledge Base",
    available: false,
  },
  {
    name: "Supabase",
    letter: "S",
    description: "Backend & Database Services",
    available: false,
  },
];

function ToolsGallery() {
  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Tools & Technologies
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">
          The technologies and platforms I use to build modern web
          applications, collaborate with teams, and improve productivity.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >

              {/* Image or Placeholder */}
              {tool.available ? (
                <img
                  src={tool.image}
                  alt={tool.alt}
                  className="w-full h-44 object-cover"
                />
              ) : (
                <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
                  <span className="text-7xl font-bold text-gray-300">
                    {tool.letter}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-lg font-semibold text-gray-900">
                  {tool.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {tool.description}
                </p>

                {tool.available ? (
                  <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                    In Portfolio
                  </span>
                ) : (
                  <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-600 rounded-full">
                    Coming Soon
                  </span>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ToolsGallery;