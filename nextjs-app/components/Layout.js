import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/',         label: 'Inicio' },
  { href: '/obras',    label: 'Obras' },
  { href: '/comunidad',label: 'Comunidad' },
  { href: '/noticias', label: 'Noticias' },
];

export default function Layout({ children, title = 'Asociación Open Music' }) {
  const { pathname } = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-body antialiased">
      {/* NAV */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm bg-surface-container-low transition-colors duration-300">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tighter text-[#750003] hover:opacity-80 transition-opacity">
            Asociación Open Music
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href
                    ? 'text-[#750003] font-semibold border-b-2 border-[#735c00] pb-0.5 font-body tracking-tight'
                    : 'text-stone-600 hover:text-[#750003] transition-colors font-body tracking-tight'
                }
              >
                {label}
              </Link>
            ))}
          </nav>
          <button className="md:hidden text-primary" aria-label="Abrir menú">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow pt-[72px]">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-stone-200 bg-stone-100">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto">
          <Link href="/" className="font-headline text-lg font-semibold text-[#750003]">
            Asociación Open Music
          </Link>
          <nav className="flex flex-wrap justify-center gap-6">
            <a className="font-body text-sm tracking-wide text-stone-500 hover:text-[#735c00] underline transition-all" href="https://www.facebook.com/ortega.open" target="_blank" rel="noreferrer">Facebook Oficial</a>
            <a className="font-body text-sm tracking-wide text-stone-500 hover:text-[#735c00] underline transition-all" href="http://cportegaygasset.juntaextremadura.net/" target="_blank" rel="noreferrer">Web del Centro (CEIP Ortega y Gasset)</a>
            <a className="font-body text-sm tracking-wide text-stone-500 hover:text-[#735c00] underline transition-all" href="https://ortegaopenmusic.blogspot.com/" target="_blank" rel="noreferrer">Blog de la Asociación</a>
            <Link href="/obras" className="font-body text-sm tracking-wide text-stone-500 hover:text-[#735c00] underline transition-all">Todas las Obras</Link>
          </nav>
          <p className="font-body text-sm tracking-wide text-stone-500">
            © 2024-2025 Asociación Open Music – CEIP Ortega y Gasset (Almendralejo).
          </p>
        </div>
      </footer>
    </div>
  );
}
