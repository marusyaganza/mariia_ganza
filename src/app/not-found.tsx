import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,232,31,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(143,189,198,0.03)_0%,transparent_50%)] pointer-events-none z-10 mix-blend-overlay" />

      <div className="text-center z-20 relative max-w-2xl mx-auto px-5">
        <div className="mb-8">
          <span className="font-accent text-sm text-[var(--pink)] tracking-widest">
            CASE FILE: MISSING-404
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="font-heading text-6xl text-[var(--text-color)] mb-4">
            404
          </h1>

          <h2 className="font-heading text-2xl text-[var(--pink)] mb-4">
            Case File Not Found
          </h2>

          <p className="font-body text-lg text-[var(--text-color)] opacity-80 mb-8">
            &quot;The evidence you&apos;re looking for has gone missing. This
            case file appears to have been misplaced or never existed in the
            first place. For now, this trail has gone cold.&quot;
          </p>

          <div className="bg-gradient-to-br from-[rgba(215,199,183,0.06)] to-[rgba(215,199,183,0.02)] border border-[rgba(215,199,183,0.15)] p-6 rounded-none relative overflow-hidden shadow-[var(--shadow-noir)] mb-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--green-light)] via-[var(--blue)] to-[var(--pink)]"></div>
            <div className="absolute top-4 right-4 font-accent text-xs text-[var(--yellow)] tracking-widest opacity-60">
              MISSING EVIDENCE
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--blue)]">
                Possible Causes:
              </h3>
              <ul className="font-body text-[var(--text-color)] space-y-2 text-left">
                <li>• The URL was mistyped</li>
                <li>• The page has been moved or deleted</li>
                <li>• The case file is classified</li>
                <li>• You&apos;ve stumbled into a digital dead end</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--green-light)] hover:bg-[var(--green-dark)] text-[var(--bg-color)] font-heading px-8 py-3 transition-all duration-300 hover:shadow-[var(--glow-green)] hover:transform hover:-translate-y-1"
            >
              Return to Base
            </Link>
            <Link
              href="/#projects"
              className="border border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-[var(--bg-color)] font-heading px-8 py-3 transition-all duration-300"
            >
              View Case Files
            </Link>
          </div>
        </div>

        <div className="mt-12 text-xs text-[var(--text-color)] opacity-50 font-accent">
          Error 404 - Case file not found in the digital archives
        </div>
      </div>
    </div>
  );
}
