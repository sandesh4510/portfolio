function Hero() {
  return (
    <section
      id="top"
      className="mesh-card fancy-border relative isolate overflow-hidden rounded-4xl border border-slate-300/10 px-6 py-10 sm:px-10 sm:py-14 reveal-up"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-orange-300/25 blur-3xl" aria-hidden="true" />

      <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.28em] text-cyan-100/85">
        
      </p>

      <h1 className="mt-4 max-w-4xl font-['Syne'] text-4xl font-extrabold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
        I build digital experiences that feel like album covers, not templates.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
        A curious CSIT student exploring web development, web design, and graphic design — learning, experimenting, and building one project at a time.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full border border-cyan-200/40 bg-cyan-200/10 px-4 py-2 font-['JetBrains_Mono'] tracking-[0.11em] text-cyan-100">
          Based in Butwal, Nepal
        </span>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-orange-200/45 bg-orange-200/10 px-4 py-2 font-['JetBrains_Mono'] tracking-[0.11em] text-orange-100 transition hover:-translate-y-0.5 hover:bg-orange-200/20"
        >
          Resume ↗
        </a>
      </div>

      <div className="float-slow pointer-events-none absolute -right-4 bottom-5 hidden rounded-xl border border-cyan-100/25 bg-slate-900/75 px-4 py-3 text-right shadow-2xl shadow-cyan-900/30 md:block">
        <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.2em] text-cyan-100/75">
          Now Crafting
        </p>
        <p className="font-['Syne'] text-lg text-white">Ecommerce Website</p>
      </div>
    </section>
  )
}

export default Hero
