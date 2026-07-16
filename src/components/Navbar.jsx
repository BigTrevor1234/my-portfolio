function Navbar() {

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="font-bold text-xl">
          BigTrevor
        </h1>

        <div className="flex gap-6">

          {links.map((link) => (

            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.label}
            </a>

          ))}

        </div>

      </div>
    </nav>
  )

}

export default Navbar