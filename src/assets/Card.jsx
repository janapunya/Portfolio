import React, { useState, useMemo, useEffect } from "react";



const initialProjects = [
  {
    id: 1,
    title: "Bike Website",
    img: "/images/bike.png",
    tech: ["HTML5", "CSS3", "Bootstrap", "Responsive"],
    short:
      "Responsive bike showroom UI built with Bootstrap and optimized for mobile & desktop.",
    live: "https://janapunya.github.io/Bike-website/",
    gitRepoLink:"https://github.com/janapunya/Bike-website.git",
  },
  {
    id: 2,
    title: "E_commerce",
    img: "/images/project2.png",
    tech: ["React", "CSS3","Tailwindcss", "Node Js","exprerss Js","MongoBD", "Responsive"],
    short:
      "Responsive E_commerce website backend built normal CRUD operations , UI built with react and optimized for mobile & desktop.",
    live: "https://prime-bazaar-one.vercel.app/",
    gitRepoLink:"https://github.com/janapunya/PrimeBazaar.git",
  },
  {
    id: 3,
    title: "GPTclone",
    img: "/images/GPTclone.png",
    tech: ["React", "CSS3","Tailwindcss", "Node Js","exprerss Js","MongoBD", "Responsive","socket.io","vector database",],
    short:
   "A responsive ChatGPT clone website that handles AI responses and manages short-term and long-term data using Pinecone. It features real-time data transfer through Socket.IO and a modern, fully optimized UI built with React for both mobile and desktop devices.",
    live: "https://gp-tclone.vercel.app/",
    gitRepoLink:"https://github.com/janapunya/GPTclone.git",
  },
 
];

export default function ProjectShowcase() {
  const [projects] = useState(initialProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [modalProject, setModalProject] = useState(null);

  const techList = useMemo(() => {
    const all = new Set();
    projects.forEach((p) => p.tech.forEach((t) => all.add(t)));
    return ["All", ...Array.from(all).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const byFilter = activeFilter === "All" || p.tech.includes(activeFilter);
      const byQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.short.toLowerCase().includes(query.toLowerCase());
      return byFilter && byQuery;
    });
  }, [projects, activeFilter, query]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setModalProject(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className=" mx-auto sm:px-10 px-7 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-500">
          Selected <span className="text-amber-500">Projects</span>
        </h2>
        <p className="mt-2 text-md text-gray-500 max-w-2xl">
          A compact showcase of selected works — click any card to read more
          or open the live demo / source code.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {techList.map((t) => (
            <button
              key={t}
              onClick={() => setActiveFilter(t)}
              className={`text-sm px-4 py-2 rounded-full duration-400  text-white
                ${
                  activeFilter === t
                    ? "bg-amber-600/70"
                    : "bg-stone-800 border-gray-700 hover:bg-stone-700"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 max-w-100 "
          >
            {/* Big image area */}
            <div
              className="relative h-44 sm:h-48 md:h-44 lg:h-40 overflow-hidden "
              role="button"
              tabIndex={0}
              onClick={() => setModalProject(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setModalProject(p);
              }}
              aria-label={`Open ${p.title} details`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                aria-hidden="true"
              >
                <div className="w-full flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-base font-semibold">
                      {p.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 line-clamp-2">
                      {p.short}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs inline-block px-3 py-1 rounded-md bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 bg-zinc-300 border-2 h-full" >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className=" flex">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {p.title}
                  </h4>
                  <a href={p.gitRepoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4  text-indigo-600 hover:text-indigo-800 text-[17px] font-medium ">Show Code</a>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {p.short}
                  </p>
                </div>
                <button
                  onClick={() => setModalProject(p)}
                  className="ml-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  aria-label={`Read more about ${p.title}`}
                >
                  Read
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          No projects found. Try a different filter or search.
        </div>
      )}

      {/* Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setModalProject(null)}
          />

          {/* modal card */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={modalProject.img}
                  alt={modalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-6  bg-zinc-300">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {modalProject.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {modalProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setModalProject(null)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Close project modal"
                  >
                    ✕
                  </button>
                </div>

                <p className="mt-4 text-gray-600">{modalProject.short}</p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={modalProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
                  >
                    Open Live
                  </a>

                  <a href={modalProject.gitRepoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 ">Show Code</a>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
