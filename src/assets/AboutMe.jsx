import React from 'react'


const AboutMe = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'HTML',
    'CSS / Tailwind',
    'Git',
    'Responsive Design',
  ]

  return (
    <section className=" mx-auto px-7 sm:px-10 py-12">
      <div className="rounded-2xl bg-gradient-to-br from-stone-900/80 to-stone-800/70 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12">

          <div className="md:col-span-5 bg-zinc-800/50 flex items-center justify-center p-6">
            <div className="w-45 h-45 sm:w-56 sm:h-56 rounded-2xl overflow-hidden ring-1 ring-stone-900/30 bg-gradient-to-tr from-stone-700 to-stone-800 flex items-center justify-center">
              <img
                src="/images/me.JPG"
                alt="Punyabrata Jana"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 p-6 sm:p-10 bg-zinc-900/50">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold text-stone-100">Punyabrata Jana</h1>
                <p className="mt-1 text-amber-400 text-xl font-medium">MERN Developer — Full‑Stack</p>


                <p className="mt-4 text-stone-200/90 text-md leading-relaxed">
                  Hello! I'm Punyabrata Jana, a passionate MERN stack developer and a BCA student currently in my 5th semester at CCLMS College (MAKAUT). I specialize in building modern, responsive, and user-friendly web applications using MongoDB, Express.js, React, and Node.js, along with strong fundamentals in JavaScript, HTML, and CSS.

                  I enjoy solving real-world problems through clean code and innovative solutions, and I’m always eager to learn and explore new technologies to level up my skills. My goal is to grow as a full-stack developer and contribute to impactful projects that make a difference.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone-400">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400 inline-block" />
                    <span>Based in India</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-stone-500 inline-block" />
                    <span>Semester: 5th (BCA)</span>
                  </div>
                </div>
              </div>

              {/* small social icons (decorative) */}
              <div className="flex items-center gap-3 text-stone-300">
                <a href="https://github.com/janapunya" aria-label="GitHub" className="p-2 rounded-md hover:bg-stone-700/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.17-3.37-1.17-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.338 1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/punya-brata-jana-01837627b/" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-stone-700/40">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2" />
                    <rect x="2" y="8" width="4" height="12" rx="1" ry="1" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Skills tags */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-stone-300 mb-3">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span key={s} className="text-sm px-3 py-1 rounded-full bg-stone-700/60 border border-stone-600 text-stone-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 text-sm text-stone-400">
              Last updated: Aug 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
