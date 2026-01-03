export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brand-gold/10 bg-brand-dark">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-lg font-semibold text-white">United Veterans Empowerment Association</div>
            <p className="mt-2 text-sm text-white/70">
              Empowering veterans through community support, resources and cutting‑edge technology.
            </p>
          </div>
          <div className="text-sm text-white/70 md:text-right">
            <div>Dallas, TX</div>
            <div className="mt-1">info@tuvea.org</div>
            <div className="mt-1">(972) 836‑7153</div>
            <div className="mt-2 text-white/50">© {year} UVEA. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}