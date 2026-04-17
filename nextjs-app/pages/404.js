import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <span className="material-symbols-outlined text-8xl text-primary/30 mb-6">theater_comedy</span>
        <h1 className="font-headline text-6xl font-bold text-primary mb-4">404</h1>
        <p className="font-body text-xl text-on-surface-variant mb-8">Esta página no existe... ¡pero nuestros musicales sí!</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-md font-semibold hover:bg-primary-container transition-colors">
          <span className="material-symbols-outlined text-sm">home</span>
          Volver al Inicio
        </Link>
      </div>
    </Layout>
  );
}
