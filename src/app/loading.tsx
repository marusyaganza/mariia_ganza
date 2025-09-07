export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,232,31,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(143,189,198,0.03)_0%,transparent_50%)] pointer-events-none z-10 mix-blend-overlay" />

      <div className="text-center z-20 relative">
        <div className="mb-8">
          <span className="font-[var(--font-accent)] text-sm text-[var(--green-light)] tracking-widest">
            CASE FILE: LOADING-001
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="font-[var(--font-heading)] text-4xl text-[var(--text-color)] mb-4">
            Investigating...
          </h1>

          <p className="font-[var(--font-body)] text-lg text-[var(--text-color)] opacity-80 max-w-md mx-auto">
            &quot;The digital detective is gathering evidence. Please stand by
            while the case files are being assembled.&quot;
          </p>

          <div className="flex justify-center mt-8">
            <div className="relative">
              <div className="w-1 h-8 bg-[var(--green-light)] animate-pulse"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--green-light)] animate-ping"></div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-[var(--blue)] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-[var(--yellow)] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-[var(--pink)] rounded-full animate-bounce"></div>
          </div>
        </div>

        <div className="mt-12 text-xs text-[var(--text-color)] opacity-50 font-[var(--font-accent)]">
          Loading evidence... Please wait
        </div>
      </div>
    </div>
  );
}
