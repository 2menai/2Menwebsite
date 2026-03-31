const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <a href="#" className="text-lg font-bold tracking-tight">
              <span className="text-accent">2men</span>
              <span className="text-white">.ai</span>
            </a>
            <p className="mt-1 text-sm text-slate-500">
              An AI Venture Company
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 text-sm text-slate-500 sm:items-end">
            <span>Huntsville, AL</span>
            <a
              href="mailto:info@2men.ai"
              className="text-slate-400 transition-colors hover:text-accent"
            >
              info@2men.ai
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            &copy; {YEAR} Two Men and AI. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <ul className="flex gap-6 text-xs text-slate-500">
              <li>
                <a href="#about" className="transition-colors hover:text-slate-300">
                  About
                </a>
              </li>
              <li>
                <a href="#ventures" className="transition-colors hover:text-slate-300">
                  Ventures
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-slate-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-slate-300">
                  Contact
                </a>
              </li>
            </ul>
            <p className="text-xs text-slate-600">
              The Build Bot and all associated ventures are 2men.ai companies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
