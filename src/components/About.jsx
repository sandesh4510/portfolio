function About() {
  return (
    <section id="about" className="reveal-up grid gap-6 md:grid-cols-[1.3fr_1fr]">
      <article className="mesh-card rounded-4xl border border-slate-200/10 p-6 sm:p-8">
        <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-sky-200/90">
          About Me
        </p>
        <div className="mt-5 max-w-3xl space-y-5 text-[1.05rem] leading-8 text-slate-200/95 sm:text-[1.1rem] sm:leading-9">
          <p>
            Hey! I am a first-year student and a creative learner exploring web
            development and graphic design.
          </p>

          <p>
            I enjoy turning ideas into visually appealing and interactive
            experiences. Whether it is designing a poster, creating a website,
            or experimenting with new technologies, I am always looking for
            something new to learn and build.
          </p>

          <p>
            I am a hardworking and curious person who enjoys working with
            others, sharing ideas, and taking on challenges. I may still be at
            the beginning of my journey, but I am constantly learning,
            improving my skills, and building projects that help me grow.
          </p>

          <p className="font-semibold tracking-[0.01em] text-cyan-100">
            Still learning. Still creating. Still building.
          </p>
        </div>
      </article>

      <aside className="rounded-4xl border border-orange-200/20 bg-orange-50/5 p-6 sm:p-8">
        <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.2em] text-orange-100">
          Toolkit
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {[
            'React',
            'Javascript',
            'Tailwind',
            'Figma',
            'Canva',
            'C',
            'C++',
            'Python',
            ,
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-orange-100/35 px-3 py-1.5 font-['JetBrains_Mono'] text-xs tracking-[0.09em] text-orange-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </aside>
    </section>
  )
}

export default About
