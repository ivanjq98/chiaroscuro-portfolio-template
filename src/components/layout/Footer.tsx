export default function Footer() {
    const year = new Date().getFullYear()
  
    return (
      <footer className="relative z-10 border-t border-accent-muted px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display text-xl text-accent">Your Name.</span>
  
        <div className="flex gap-8">
          {['LinkedIn', 'GitHub', 'Dribbble'].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs tracking-widest uppercase text-text-muted hover:text-accent transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
  
        <p className="text-xs text-text-muted">
          © {year} Your Name. All rights reserved.
        </p>
      </footer>
    )
  }