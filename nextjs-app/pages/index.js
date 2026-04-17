import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const obras = [
  { href: '/tarzan',    title: 'Entre Lianas', season: 'Segundo Musical · 2021-23',
    desc: 'Nuestra versión del clásico Tarzán. Dos temporadas de actuaciones incluyendo el Teatro López de Ayala de Badajoz.',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF3mIVxJuHC2cZB8GfMqzZJAA-Ll01cBdWwdHjxI9L4mVXgU6Y5qJtBXz2OXiG2_7UHpXxINIePQwuT-xAyI8HJjMmC2aTCXHcXi5zXqVPdcPDfYLYFhgUuyoL3KOsexumT3mXQdxf7w/s320/foto+grupo.jpg' },
  { href: '/peter-pan', title: 'Peter Pan', season: 'Primer Musical · 2014-15',
    desc: 'El musical que lo inició todo. Con cobertura en el Periódico Extremadura, entrevista en TV Almendralejo y 5 vídeos de YouTube.',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNK7jxsharkjBVz6-0GdOG1w_PlSUe5dmTbB9a-LArcrnGJ5NJockhfTjZ0utZZJsQL8R3hwIcSPFv0kVgKWYa5l2d_fpFFwtiqd59vwzN30UT08jqd3_u67CvboqYbfdpQXeJTp6Gwrg/s320/DSC_0122.JPG' },
  { href: '/hercules',  title: 'Hércules', season: 'Tercer Musical · 2017-18',
    desc: 'El héroe que conquistó tres escenarios. Representaciones en Almendralejo, Plasencia y Arroyo de la Luz.',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwHNhW9KoSDlLCrgG5FOQxXk9lLdOstqlvcQwaek_jt8oLB8hC0cI1y0qV_aHsXSHQJxCupVRqtCeaKO3RfgheAFM0UAdjOiqb8qnMclsDsZCx9FrJmlspSEKp575laEIsQpT5BEuA8lk/s320/IMG-20180424-WA0004.jpg' },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Asociación Open Music – Inicio</title>
        <meta name="description" content="Sitio oficial de la Asociación Open Music del CEIP Ortega y Gasset de Almendralejo. Musicales, fotos, vídeos y mucho más." />
      </Head>

      {/* HERO */}
      <section className="relative w-full h-[870px] min-h-[600px] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img
            alt="Así Soy – Musical Asociación Open Music Almendralejo"
            className="w-full h-full object-cover object-center"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjwebU_uwaG9zy9GJ9TYZEY6SNlbFiWcNwuROeRQ60j11o_n2mrVFb0240CzZenXaU3AU5bLPG1k0rvu0a8OK8ifeuWGbNpTwCI6PsfEj5VxVzUWgrvuGtEXQ1AHgwMrbqCQhTsADZe4lsPjo6qG72eEK3qCdL8X5cNepk9QJkORD78p1Sr1Ow7GQYMXYE=s216"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent z-10" />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-8 mt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/80 backdrop-blur-md text-white text-sm font-semibold uppercase tracking-widest border border-white/20">
            ✦ En Cartelera · Temporada 2025-26
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl leading-tight">
            Así Soy
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto font-medium leading-relaxed">
            Nuestro musical más reciente: un viaje de autoconocimiento y valentía representado en Almendralejo, Plasencia y Villanueva de la Serena. Música, danza y emoción en estado puro.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a href="https://www.youtube.com/watch?v=2DhEJegyIU4" target="_blank" rel="noreferrer"
               className="inline-block bg-primary text-on-primary text-center rounded-md px-8 py-3.5 text-base font-semibold hover:bg-primary-container hover:shadow-[0_8px_32px_rgba(117,0,3,0.3)] transition-all duration-300 w-full sm:w-auto">
              Ver Vídeo Promocional 25-26
            </a>
            <Link href="/asi-soy"
              className="bg-white/15 backdrop-blur-md text-white border border-white/30 rounded-md px-8 py-3.5 text-base font-semibold hover:bg-white/25 transition-all duration-300 w-full sm:w-auto text-center">
              Ver Página del Musical
            </Link>
          </div>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-surface-container-low rounded-3xl mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">Nuestra Historia</h2>
            <p className="font-body text-lg text-on-surface-variant">Desde el dosel de la selva hasta el País de Nunca Jamás, explora los mundos a los que hemos dado vida.</p>
          </div>
          <Link href="/obras" className="text-primary font-semibold flex items-center gap-2 hover:text-tertiary transition-colors group">
            Ver Todo
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {obras.map((obra) => (
            <Link key={obra.href} href={obra.href}
              className="group relative bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_32px_64px_-12px_rgba(28,27,27,0.1)] ring-1 ring-outline-variant/15 block">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img alt={obra.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={obra.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">{obra.season}</span>
                </div>
              </div>
              <div className="p-6 bg-surface-container-lowest">
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{obra.title}</h3>
                <p className="font-body text-sm text-on-surface-variant">{obra.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
