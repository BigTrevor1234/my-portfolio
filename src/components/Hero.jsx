function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-900">Trevor</h1>

      <p className="text-x1 mt-3 text-blue-600 font-semibold">
        Web Developer & Virtual Assistant
      </p>

      <p className="max-w-x1 mt-6 text-gray-600 leading-relaxed">
        I build modern websites and help businesses stay organized with
        administrative and technical support.
      </p>

      <a
        href="#contact"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-ig hover:bg-blue-700 transition duration-300"
      >
        Contact Me
      </a>
    </section>
  )
}

export default Hero