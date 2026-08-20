function Footer() {
  return (
    <footer className="mx-auto mt-6 w-full max-w-6xl rounded-2xl border border-slate-300/10 bg-slate-950/45 px-6 py-4 text-center font-['JetBrains_Mono'] text-xs tracking-[0.12em] text-slate-300">
      <p>
        © {new Date().getFullYear()} Sandesh Ghimire. Designed and built with React,
        Tailwind, and intent.
      </p>
    </footer>
  )
}

export default Footer
