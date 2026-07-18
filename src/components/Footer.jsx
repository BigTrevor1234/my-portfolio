function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Big<span className="text-blue-500">Trevor</span>
            </h2>

            <p className="mt-2 text-sm text-gray-400 max-w-sm">
              Building modern web applications and helping businesses stay
              organized through reliable virtual assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#tools" className="hover:text-blue-400 transition">
              Tools
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p>
            © {year} BigTrevor. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="mailto:sheriffopatola@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>

            <a
              href="https://github.com/BigTrevor1234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sheriff-opatola-599b2a128"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;