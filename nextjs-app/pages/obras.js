import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const previas = [
  {
    href: '/peter-pan', title: 'Peter Pan', season: 'Primer Musical', years: '2014-15',
    desc: 'El musical que lo inició todo. Con cobertura en el Periódico Extremadura, entrevista en TV Almendralejo y 5 vídeos de YouTube del estreno.',
    tags: ['📺 TV Almendralejo', '🎬 5 Vídeos', '📰 Prensa'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNK7jxsharkjBVz6-0GdOG1w_PlSUe5dmTbB9a-LArcrnGJ5NJockhfTjZ0utZZJsQL8R3hwIcSPFv0kVgKWYa5l2d_fpFFwtiqd59vwzN30UT08jqd3_u67CvboqYbfdpQXeJTp6Gwrg/s320/DSC_0122.JPG',
  },
  {
    href: '/hercules', title: 'Hércules', season: 'Tercer Musical', years: '2017-18',
    desc: 'El héroe que conquistó tres escenarios. Representaciones en Almendralejo, Plasencia (excursión especial) y Arroyo de la Luz.',
    tags: ['📍 Almendralejo', '📍 Plasencia', '📍 Arroyo de la Luz'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwHNhW9KoSDlLCrgG5FOQxXk9lLdOstqlvcQwaek_jt8oLB8hC0cI1y0qV_aHsXSHQJxCupVRqtCeaKO3RfgheAFM0UAdjOiqb8qnMclsDsZCx9FrJmlspSEKp575laEIsQpT5BEuA8lk/s320/IMG-20180424-WA0004.jpg',
    offset: true,
  },
  {
    href: '/tarzan', title: 'Entre Lianas', season: 'Segundo Musical', years: '2021-23',
    desc: 'Nuestra versión del clásico Tarzán. Dos temporadas incluyendo el Teatro López de Ayala de Badajoz y la Feria de Almendralejo.',
    tags: ['🎭 T. López de Ayala', '📺 Canal Extremadura'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF3mIVxJuHC2cZB8GfMqzZJAA-Ll01cBdWwdHjxI9L4mVXgU6Y5qJtBXz2OXiG2_7UHpXxINIePQwuT-xAyI8HJjMmC2aTCXHcXi5zXqVPdcPDfYLYFhgUuyoL3KOsexumT3mXQdxf7w/s320/foto+grupo.jpg',
  },
];

export default function Obras() {
  return (
    <Layout>
      <Head>
        <title>Nuestras Obras – Asociación Open Music</title>
        <meta name="description" content="Descubre todos los musicales de la Asociación Open Music: Peter Pan, Hércules, Entre Lianas y Así Soy." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-16 w-full">

        {/* HEADER */}
        <section className="mb-16 relative overflow-hidden rounded-xl bg-surface-container-low">
          <div className="flex flex-col lg:flex-row items-center gap-0">
            <div className="lg:w-1/2 p-8 lg:p-16">
              <span className="inline-block px-3 py-1 bg-primary text-on-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">4 Musicales · Desde 2014</span>
              <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">Nuestras Obras</h1>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-4">
                Más de diez años llevando la magia del teatro musical a Extremadura. Desde el País de Nunca Jamás hasta las hazañas de Hércules, cada producción ha reunido a decenas de alumnos del <strong>CEIP Ortega y Gasset de Almendralejo</strong>.
              </p>
              <div className="flex gap-6 mt-6">
                {[['4','Musicales'],['8+','Escenarios'],['10+','Años']].map(([n,l])=>(
                  <div key={l} className="text-center">
                    <p className="font-headline text-3xl font-bold text-primary">{n}</p>
                    <p className="font-body text-xs text-on-surface-variant uppercase tracking-wide">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-72 lg:h-96 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent z-10" />
              <img alt="Entre Lianas – Asociación Open Music" className="w-full h-full object-cover object-center"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF3mIVxJuHC2cZB8GfMqzZJAA-Ll01cBdWwdHjxI9L4mVXgU6Y5qJtBXz2OXiG2_7UHpXxINIePQwuT-xAyI8HJjMmC2aTCXHcXi5zXqVPdcPDfYLYFhgUuyoL3KOsexumT3mXQdxf7w/s320/foto+grupo.jpg" />
            </div>
          </div>
        </section>

        {/* ASÍ SOY – destacado */}
        <section className="mb-10">
          <div className="relative rounded-xl overflow-hidden group">
            <img alt="Así Soy 2024-25 – Asociación Open Music" className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjwebU_uwaG9zy9GJ9TYZEY6SNlbFiWcNwuROeRQ60j11o_n2mrVFb0240CzZenXaU3AU5bLPG1k0rvu0a8OK8ifeuWGbNpTwCI6PsfEj5VxVzUWgrvuGtEXQ1AHgwMrbqCQhTsADZe4lsPjo6qG72eEK3qCdL8X5cNepk9QJkORD78p1Sr1Ow7GQYMXYE=s216" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-xl">
                <span className="inline-block bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">✦ En Cartelera · Más Reciente</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-3">Así Soy</h2>
                <p className="font-body text-white/80 mb-6 leading-relaxed">Temporada 2024-26 · Musical de autoconocimiento y valentía representado en Almendralejo, Plasencia y Villanueva de la Serena.</p>
                <Link href="/asi-soy" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                  Ver Página Completa
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GRID 3 obras anteriores */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {previas.map((obra) => (
            <article key={obra.href}
              className={`bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 ring-1 ring-outline-variant/15${obra.offset ? ' md:mt-8' : ''}`}>
              <div className="h-72 overflow-hidden relative">
                <img alt={`${obra.title} – Asociación Open Music`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src={obra.img} />
                <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold tracking-wide">{obra.season}</div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-bold">{obra.years}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-headline text-2xl font-bold text-primary mb-2">{obra.title}</h2>
                <p className="font-body text-sm text-on-surface-variant mb-4 flex-grow leading-relaxed">{obra.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {obra.tags.map(t => <span key={t} className="text-xs bg-surface-container px-2 py-1 rounded text-on-surface-variant">{t}</span>)}
                </div>
                <Link href={obra.href} className="self-start text-secondary hover:text-primary transition-colors font-semibold flex items-center gap-2 group text-sm">
                  Ver obra completa
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </Layout>
  );
}
