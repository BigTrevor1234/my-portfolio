function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
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
          className="border rounded px-6 py-2"
        >
          📧 Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/sheriff-opatola-599b2a128"
          target="_blank"
          rel="noreferrer"
          className="border rounded px-6 py-2"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/BigTrevor1234"
          target="_blank"
          rel="noreferrer"
          className="border rounded px-6 py-2"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact