function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 bg-gray-50">

      {/* Availability Badge */}
      <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Open to Remote Roles
      </span>

      <h1 className="text-5xl font-bold text-gray-900">
        Trevor
      </h1>

      <p className="text-xl mt-3 text-blue-600 font-semibold">
        Web Developer & Virtual Assistant
      </p>

      <p className="max-w-xl mt-6 text-gray-600 leading-relaxed">
        I build modern websites and help businesses stay organized with
        administrative and technical support.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Contact Me
        </a>

        <a
          href="/Sheriff-Opatola-Resume.pdf"
          download
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Download Resume
        </a>
      </div>

    </section>
  );
}

export default Hero;