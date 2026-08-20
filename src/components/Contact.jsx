function Contact() {
  return (
    <section
      id="contact"
      className="reveal-up relative overflow-hidden rounded-4xl border border-cyan-200/20 bg-cyan-100/5 p-6 sm:p-10"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-200/25 blur-3xl" aria-hidden="true" />
      <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-cyan-100/90">
        Get In Touch
      </p>

      <h2 className="mt-3 max-w-3xl font-['Syne'] text-3xl font-bold leading-tight text-white sm:text-5xl">
        Have a project with edge, taste, and ambition? Let&apos;s build it.
      </h2>

      <a
        href="mailto:sandeshgh19@example.com"
        className="mt-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2.5 font-['JetBrains_Mono'] text-sm tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-white/20"
      >
        sandeshgh19@example.com
      </a>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {[
          ['GitHub', 'https://github.com/sandesh4510'],
          ['LinkedIn', 'https://www.linkedin.com/in/sandesh-ghimire-27b9253b9/'],
          ['Dribbble', 'https://dribbble.com/sandeshgh19'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-100/35 px-4 py-2 font-['JetBrains_Mono'] text-xs uppercase tracking-[0.12em] text-cyan-50 transition hover:border-cyan-100/70 hover:text-white"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
