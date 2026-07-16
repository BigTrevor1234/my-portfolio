function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-gray-50"
    >
      <h2 className="text-2xl font-bold mb-4">
        Contact Me
      </h2>

      <p className="max-w-md mb-6">
        I'm available for Web Development, Virtual Assistant,
        and remote freelance opportunities.
      </p>

      <div className="flex flex-col gap-3">
        <a
          href="sheriffopatola@gmail.com"
          className="border border-blue-600 text-blue-600 rounded-lg px-6 py-3 hover:bg-blue-600 hover:text-white transition duration-300"
        >
          📧 Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/sheriff-opatola-599b2a128"
          target="_blank"
          rel="noreferrer"
          className="border border-blue-600 text-blue-600 rounded-lg px-6 py-3 hover:bg-blue-600 hover:text-white transition duration-300"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/BigTrevor1234"
          target="_blank"
          rel="noreferrer"
          className="border border-blue-600 text-blue-600 rounded-lg px-6 py-3 hover:bg-blue-600 hover:text-white transition duration-300"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact