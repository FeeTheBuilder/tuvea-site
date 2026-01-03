import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/10 bg-brand-dark/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="UVEA logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-md"
            priority
          />
          <div className="leading-tight">
            <div className="font-semibold text-white">UVEA</div>
            <div className="text-xs text-brand-gold/70">United Veterans Empowerment</div>
          </div>
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a className="text-white/80 hover:text-white" href="#about">About</a>
          <a className="text-white/80 hover:text-white" href="#services">Services</a>
          <a className="text-white/80 hover:text-white" href="#timeline">Journey</a>
          <a className="text-white/80 hover:text-white" href="#resources">Resources</a>
          <a className="text-white/80 hover:text-white" href="#get-involved">Get Involved</a>
          <a className="text-white/80 hover:text-white" href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-xl border border-brand-gold bg-brand-gold px-4 py-2 text-sm font-medium text-black hover:bg-brand-lightGold md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}