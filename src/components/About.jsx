function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          About Me
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed text-lg">
          I'm Trevor, an HND graduate and passionate Web Developer with a growing
          interest in modern frontend technologies. I enjoy creating responsive,
          user-friendly websites using React and continuously expanding my
          technical skills through real-world projects.
        </p>

        <p className="text-gray-600 mt-6 leading-relaxed text-lg">
          Alongside web development, I also provide Virtual Assistant services,
          helping businesses stay organized through administrative support,
          project coordination, workflow management, and productivity tools.
        </p>

        <p className="text-gray-600 mt-6 leading-relaxed text-lg">
          I'm committed to continuous learning, solving real-world problems,
          and delivering reliable digital solutions that create value for
          clients and teams.
        </p>

      </div>
    </section>
  );
}

export default About;