import React from "react";

/**
 * Technology.jsx
 * - Responsive grid (mobile → tablet → desktop)
 * - Colors: text white / zinc-200 / zinc-300; backgrounds use stone / zinc / amber accents
 * - Accessible imgs, hover/focus states, graceful scaling
 */

const logos = [
  { src: "/images/html.png", alt: "HTML5" },
  { src: "/images/css.png", alt: "CSS3" },
  { src: "/images/js.png", alt: "JavaScript" },
  { src: "/images/Bootstrap.png", alt: "Bootstrap" },
  { src: "/images/tailwind.png", alt: "Tailwind CSS" },
  { src: "/images/gssap.png", alt: "GSAP" },
  { src: "/images/react.png", alt: "React" },
  { src: "/images/node_js.png", alt: "Node.js" },
  { src: "/images/mongodb.png", alt: "MongoDB" },
  { src: "/images/socket.io.png", alt: "socket.io" },

];

export default function Technology() {
  return (
    <section className=" mx-auto px-7 sm:px-10 py-12">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-4xl font-extrabold text-white">Technology</h2>
        <span className="hidden sm:inline-block h-1 w-24 rounded bg-amber-400/90" />
      </div>

      <p className="max-w-2xl text-zinc-400 mb-8">
        Tools & technologies I work with — a selection of front-end & back-end
        stacks I use to build modern, responsive web applications.
      </p>

      <div
        className="grid gap-4 max-w-7xl
                   grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10
                   items-stretch"
      >
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex items-center justify-center gap-3 p-3 rounded-xl
                       bg-stone-700/60 border border-zinc-700
                       hover:scale-105 focus-within:scale-105 transform transition
                       shadow-sm hover:shadow-md"
          >

            <div className="flex-1 flex items-center justify-center px-2 py-2">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                className="max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}
