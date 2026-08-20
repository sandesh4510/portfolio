const projects = [
  {
    title: 'Pokemon-Explorer',
    year: '2026',
   tags: ['React', 'PokéAPI', 'API Integration'],
    blurb:
      'An interactive Pokémon explorer built with React, using the PokéAPI to fetch and display Pokémon data. Features include dynamic search, Pokémon details, responsive UI, and API-based data handling.',
    link: 'https://github.com/sandesh4510/Pokemon-explorer',
  },
  {
    title: 'Country Atlas',
    year: '2026',
    tags: ['React', 'REST API', 'Responsive Design'],
    blurb:
      'A responsive country exploration website that uses a REST API to display detailed information about countries. Users can search and explore countries through a clean and interactive interface.A responsive country exploration website that uses a REST API to display detailed information about countries. Users can search and explore countries through a clean and interactive interface.',
    link: 'https://github.com/sandesh4510/country-atlas',
  },
  {
    title: 'Calculator',
    year: '2025',
    tags: ['React', 'JavaScript', 'State Management'],
    blurb:
      'A clean and responsive calculator built with React, featuring essential arithmetic operations and an intuitive interface. Designed to practice React state management, event handling, and dynamic UI updates.',
    link: 'https://github.com/sandesh4510/Calculator',
  },
  {
    title: 'Todo List',
    year: '2026',
    tags: ['React', 'JavaScript', 'Interactive UI'],
    blurb:
       'A clean and responsive todo list application built with React, featuring task creation, completion tracking, deletion, and dynamic state updates. Designed to practice React hooks, state management, event handling, and interactive UI design.',
    link: 'https://github.com/sandesh4510/To-Do',
  },
]
function Projects() {
  return (
    <section id="work" className="reveal-up rounded-4xl border border-slate-300/10 bg-slate-950/45 p-6 sm:p-8">
      <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
        <div>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-sky-200/90">
            Selected Work
          </p>
          <h2 className="mt-2 font-['Syne'] text-2xl font-bold text-white sm:text-3xl">
            Things I’ve built while learning, exploring, and pushing my skills further.
          </h2>
        </div>
      </div>
      <ul className="grid gap-4">
        {projects.map((project, index) => (
          <li key={project.title}>
            <a
              href={project.link}
              className="group mesh-card block rounded-3xl border border-slate-200/10 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_18px_60px_-18px_rgba(35,219,255,0.4)] sm:px-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Project {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-['Syne'] text-2xl font-bold text-white transition group-hover:text-cyan-100">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-full border border-slate-300/20 bg-slate-50/5 px-3 py-1.5 font-['JetBrains_Mono'] text-xs tracking-[0.14em] text-slate-200">
                  {project.year}
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {project.blurb}
              </p>
              <p className="mt-4 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.15em] text-orange-200/95">
                {project.tags.join(' / ')}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
