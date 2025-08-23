import React from "react";

/**
 * Footer.jsx
 * - Responsive, accessible footer for portfolio
 * - Colors: stone / zinc backgrounds, amber accents, zinc/white text
 * - Edit links, social URLs and text as needed
 */

export default function Footer() {
  const email = "punyabratajana022@gmail.com"; 

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Technology", href: "/#technology" },
    { label: "Contact", href: `/mailto:${email}` },
  ];

  const tech = [
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind",
    "GSAP",
    "Bootstrap",
    "Socket.io",
  ];

  return (
    <footer className="bg-stone-900 text-zinc-200">
      <div className=" mx-auto px-7 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white">About</h3>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              Hello! I'm <strong className="text-amber-400">Punyabrata Jana</strong>, a MERN stack developer and BCA student.
              I build modern, responsive web applications with a focus on clean code, accessibility, and polished UX.
            </p>

            <div className="mt-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-3 py-2 bg-amber-500 text-stone-900 rounded-md text-sm font-medium shadow-sm hover:scale-105 transform transition"
                aria-label="Email contact"
              >
                ✉️ Contact
                <span className="sr-only">Email Punyabrata</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation" className="md:col-span-1">
            <h4 className="text-lg font-medium text-white">Quick links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {quickLinks.map((q) => (
                <li key={q.label}>
                  <a
                    href={q.href}
                    className="text-zinc-300 hover:text-amber-400 transition"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tech / Skills */}
          <div>
            <h4 className="text-lg font-medium text-white">Tech stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-stone-800/60 border border-zinc-700 text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Prefer a custom tech list? Update the <code>tech</code> array in the component.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-medium text-white">Find me</h4>
            <p className="mt-3 text-sm text-zinc-300">
              Connect on GitHub or LinkedIn — I share projects and updates there.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/janapunya"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition"
                aria-label="GitHub"
              >
                {/* GitHub icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-100">
                  <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.8 3.1 8.9 7.3 10.3.5.1.7-.2.7-.5v-1.9c-3 .6-3.7-1.2-3.7-1.2-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.4-.3-4.9-1.2-4.9-5.1 0-1.1.4-2.1 1-2.8-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1.9-.2 1.9-.3 2.8-.3s1.9.1 2.8.3c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.6.7 1 1.7 1 2.8 0 3.9-2.5 4.8-4.9 5.1.4.4.7 1.1.7 2.2v3.2c0 .3.2.6.7.5 4.2-1.4 7.3-5.5 7.3-10.3C23.2 5.4 18.3.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/punya-brata-jana-01837627b"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition"
                aria-label="LinkedIn"
              >
                {/* LinkedIn icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-100">
                  <path d="M4.98 3.5C4.98 5 3.9 6.2 2.48 6.2 1 6.2 0 5 0 3.5 0 2 .98.8 2.5.8 3.9.8 4.98 2 4.98 3.5zM.3 8.4h4.4V24H.3V8.4zM7.9 8.4h4.2v2.1h.1c.6-1 2.1-2.1 4.4-2.1 4.7 0 5.6 3.1 5.6 7.2V24H18.3v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24H7.9V8.4z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}
