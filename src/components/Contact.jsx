function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Let's Connect
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          I'm currently open to Web Development, Virtual Assistant,
          freelance, and remote opportunities. If you'd like to work
          together or just say hello, I'd love to hear from you.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <a
            href="mailto:sheriffopatola@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            📧 Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/sheriff-opatola-599b2a128"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/BigTrevor1234"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            💻 GitHub
          </a>

        </div>

        {/* Availability */}
        <div className="mt-12">

          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Remote Opportunities
          </span>

        </div>

      </div>
    </section>
  );
}

export default Contact;