const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <a href="#" className="text-lg font-bold tracking-tight">
              <span className="text-accent">2men</span>
              <span className="text-white">.ai</span>
            </a>
            <p className="mt-1 text-sm text-slate-500">
              AI Solutions That Work
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 text-sm text-slate-500 sm:items-end">
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
          <ul className="flex gap-6 text-xs text-slate-500">
            <li>
              <a href="#platform" className="transition-colors hover:text-slate-300">
                Platform
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="transition-colors hover:text-slate-300">
                How It Works
              </a>
            </li>
            <li>
              <a href="#why-us" className="transition-colors hover:text-slate-300">
                Why Us
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-slate-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
