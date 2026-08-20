function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-cyan-200/20 bg-slate-900/55 px-4 py-3 text-sm backdrop-blur-lg sm:px-6 reveal-up">
      <a
        href="#top"
        className="font-['JetBrains_Mono'] text-xs font-semibold tracking-[0.28em] text-cyan-200 transition hover:text-cyan-100"
      >
        Sandesh Ghimire
      </a>
      <nav className="flex items-center gap-2 sm:gap-3">
        {[
          ['Work', '#work'],
          ['About', '#about'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="rounded-full border border-cyan-200/15 px-3 py-1.5 font-['JetBrains_Mono'] text-[11px] tracking-[0.17em] text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-200/55 hover:text-cyan-100"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
