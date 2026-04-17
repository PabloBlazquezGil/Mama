import Head from 'next/head';
import Layout from '../components/Layout';

export default function Comunidad() {
  return (
    <Layout>
      <Head>
        <title>Comunidad y Familia – Asociación Open Music</title>
        <meta name="description" content="La comunidad detrás de los musicales: familias, voluntarios y el equipo del CEIP Ortega y Gasset que hacen posible cada producción." />
      </Head>
      <main className="pt-8">
        {/* BACKSTAGE */}
        <section className="py-24 px-6 lg:px-12 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:w-2/3">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">Backstage Collaboration</h1>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">Se necesita todo un conjunto para crear una obra maestra. Descubre cómo nuestra comunidad impulsa la producción desde las sombras.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'construction', color: 'bg-secondary-container text-on-secondary-container', title: 'Set & Stage Crew', desc: 'Padres y alumnos trabajando juntos para construir los mundos físicos que habitan nuestras historias.', tag: 'Técnico' },
                { icon: 'styler', color: 'bg-tertiary-fixed text-on-tertiary-fixed', title: 'Diseño de Vestuario', desc: 'Desde la costura hasta el estilismo, ayuda a dar vida a los personajes a través del diseño colaborativo de vestuario.', tag: 'Creativo' },
              ].map(card => (
                <div key={card.title} className="bg-surface-container-lowest rounded-xl p-8 ring-1 ring-outline-variant/15 hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center mb-6`}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings:"'FILL' 1" }}>{card.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-secondary mb-3">{card.title}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-6">{card.desc}</p>
                  <span className="inline-block px-3 py-1 bg-secondary-fixed-dim text-on-secondary-fixed text-xs font-semibold rounded-full">{card.tag}</span>
                </div>
              ))}
              <div className="relative bg-surface-container-lowest rounded-xl overflow-hidden group min-h-[300px]">
                <img alt="Planificación de producción" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADMtrvw3x0gtLuKxGhY8YUiCkV7GvSqdVg4XDNrXvVE-giLQNTgWBzISFyHthqFlvHXTh4qZJPiRwszFAFAarbOPSrfeeD9UAaKhL41RiKeo0Qo6sx8OMBE8Ca3nR__ITTt142Po7RPIk-943ONI9ZrdJGqTzatvWxwOGecP4xH6iBQawhHi19352fNiMPoDzi3S2hh0M2pxLZtQaM8zD1Ev6HuMS6A99DEknIR3S0F6yrv0T4qjljBoqAZjsc4nVqXsxeBSS-oyE" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="font-headline text-xl font-bold text-surface-bright mb-2">Planificación de la Producción</h3>
                  <p className="text-surface-dim text-sm">Únete al conjunto administrativo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VOLUNTARIOS */}
        <section className="py-24 px-6 lg:px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Oportunidades de Voluntariado</h2>
                <p className="font-body text-lg text-on-surface-variant">Siempre buscamos personas apasionadas para unirse a nuestra familia entre bastidores. Tanto si tienes experiencia profesional como ganas de aprender, hay un papel para ti.</p>
                <div className="space-y-6 pt-4">
                  {[
                    { icon: 'theater_comedy', color: 'bg-primary/10 text-primary', title: 'Recepción y Acomodadores', desc: 'Ayuda con el recibimiento del público y crea un ambiente acogedor para todos los asistentes.' },
                    { icon: 'campaign', color: 'bg-secondary/10 text-secondary', title: 'Marketing y Promoción', desc: 'Ayuda a difundir la información a través de redes sociales, distribución de carteles y divulgación comunitaria.' },
                  ].map(item => (
                    <div key={item.title} className="flex gap-4 items-start pb-6 border-b border-outline-variant/30 last:border-0">
                      <div className={`mt-1 w-10 h-10 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings:"'FILL' 1" }}>{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-headline text-xl text-on-surface mb-2">{item.title}</h4>
                        <p className="text-sm text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="https://www.facebook.com/ortega.open" target="_blank" rel="noreferrer"
                   className="inline-block mt-4 bg-secondary/10 text-secondary hover:bg-secondary/20 px-8 py-3 rounded-full font-body font-bold transition-colors">
                  Contactar por Facebook
                </a>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(28,27,27,0.1)]">
                  <img alt="Voluntarios preparando el escenario" className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEfL4WJEXPeedTWLrr-mR4KbyiScqsR3EyyEJg02_dZhAdWnV4IctxXNla5zxFWnVEg9dbjbJWZc0HmY4n2Z7IwwqM2eLIfGgMAg7dQQoy5cFIbzeVMGHDRSoGJaEERrL9xzRQO0osiKxXDQe1u3O8E4AQkL_xK7lTAH6Z5tUkPOSFaa1YsawuivYhepfPB03ZbPGSeSP0FraLKVZghm9WfilE_O6dRfGZIzvWJrGaEAoz6FumE-YBssD4mYuFlPBaXb0MOZQ08qI" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
