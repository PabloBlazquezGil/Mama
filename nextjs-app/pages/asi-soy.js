import Head from 'next/head';
import Layout from '../components/Layout';

const galleryAsi = [
  'https://blogger.googleusercontent.com/img/a/AVvXsEjwebU_uwaG9zy9GJ9TYZEY6SNlbFiWcNwuROeRQ60j11o_n2mrVFb0240CzZenXaU3AU5bLPG1k0rvu0a8OK8ifeuWGbNpTwCI6PsfEj5VxVzUWgrvuGtEXQ1AHgwMrbqCQhTsADZe4lsPjo6qG72eEK3qCdL8X5cNepk9QJkORD78p1Sr1Ow7GQYMXYE=s216',
  'https://blogger.googleusercontent.com/img/a/AVvXsEi0GDqNbfmSW7iFXSMPJOlyHv1YLmRLV0X7mmCLcXhbmcfC2e8dxaEP0AZXoLnpbW_cEXU9k03V3mU-4BgqmQ0kJhJA5k_nLQ-Wbv0f-yw4UiRbf4Lw2eBpzPUXHcK=-no',
  'https://blogger.googleusercontent.com/img/a/AVvXsEiCvWR0b-7E5hDoWBKGpGRIJDl3MIV5n48HN0Y8e9kQDJnHm3RyC3oK4ADJWuGnnY-7dVaME2aRHHl-9RRJtpHzBJK4L9Nk7MMk2ld4OMiSWMGzAimIEY15c2dIIiUxNg=-no',
  'https://blogger.googleusercontent.com/img/a/AVvXsEhE74_BPMf8-4IHQPQniGzOoqbcmEBIB8iCnJN2HXriGvRhWiB9faBhFQPuBnYJzqdNGnqcXw98n-oEVBkZ3j8k8_gTiR3T7sE82WMFJGTLdJr5SEtLdZl7Kz2nphxbUQ=-no',
];

export default function AsiSoy() {
  return (
    <Layout>
      <Head>
        <title>Así Soy – Asociación Open Music</title>
        <meta name="description" content="Así Soy: el musical más reciente de la Asociación Open Music. Temporada 2024-26 en Almendralejo, Plasencia y Villanueva de la Serena." />
      </Head>

      {/* HERO */}
      <section className="relative w-full h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <img alt="Así Soy – Asociación Open Music" className="absolute inset-0 w-full h-full object-cover object-center" src={galleryAsi[0]} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/80 text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
            Cuarto Musical · Temporada 2024-26
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">Así Soy</h1>
          <p className="font-body text-lg text-white/80 max-w-2xl mb-8">Un musical de autoconocimiento y valentía. Representado en Almendralejo, Plasencia y Villanueva de la Serena.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.youtube.com/watch?v=2DhEJegyIU4" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-sm">play_circle</span>
              Ver Vídeo Promocional
            </a>
            <a href="https://www.facebook.com/ortega.open" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/25 transition-colors">
              Facebook Open Music
            </a>
          </div>
        </div>
      </section>

      {/* SINOPSIS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">Sobre la obra</h2>
            <p className="font-body text-on-surface-variant leading-relaxed mb-4">
              <strong>Así Soy</strong> es la cuarta gran producción de la Asociación Open Music. Un musical que explora la identidad, el valor de ser uno mismo y la amistad, con canciones originales y coreografías que emocionaron al público en tres ciudades extremeñas.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed">
              La obra se representó en el <strong>Teatro López de Ayala (Badajoz)</strong>, en <strong>Plasencia</strong> y en <strong>Villanueva de la Serena</strong>, cosechando aplausos del público y críticas muy positivas en las redes sociales.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {galleryAsi.map((src, i) => (
              <img key={i} src={src} alt={`Así Soy - foto ${i+1}`} className="rounded-xl object-cover w-full h-32 hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">Vídeo Promocional</h2>
          <p className="font-body text-on-surface-variant mb-8">Así Soy · Temporada 2025-26</p>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2DhEJegyIU4"
              title="Así Soy – Vídeo Promocional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
