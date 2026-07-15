function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold">Trevor</h1>

      <p className="text-lg mt-2">
        Web Developer & Virtual Assistant
      </p>

      <p className="max-w-md mt-4">
        I build modern websites and help businesses stay organized with
        administrative and technical support.
      </p>

      <a
        href="#contact"
        className="mt-6 px-6 py-2 border rounded"
      >
        Contact Me
      </a>
    </section>
  )
}

export default Hero