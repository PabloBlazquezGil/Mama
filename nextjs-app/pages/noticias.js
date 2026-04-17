import Head from 'next/head';
import Layout from '../components/Layout';

export default function Noticias() {
  return (
    <Layout>
      <Head>
        <title>Noticias y Eventos – Asociación Open Music</title>
        <meta name="description" content="Últimas noticias, artículos y próximos eventos de la Asociación Open Music del CEIP Ortega y Gasset." />
      </Head>
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-12 flex flex-col gap-16">

        {/* HERO */}
        <section className="relative w-full rounded-xl overflow-hidden min-h-[409px] flex items-end p-8 md:p-16"
          style={{ backgroundImage:"linear-gradient(to top, rgba(28,27,27,0.8) 0%, rgba(28,27,27,0.2) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgD23P8KK1QcM5O0sgpILlXbtRlpYl_UNJKuKfr4tJu4kkHqYmdFCTkq8kXb9PwbhbP5OtL72Q-veHXCxS7cbdIWXzq0Y8dKNyQceXzodeSH9RhTtOQNVs0Que0U41rsktSyaQsgblRbdAtg1kQJ9vuHl1zGKGuOlgcIozab7b0EXUFhkYGx4LGozlihjaEAJuXOHFGAjw_DcR3QoH_IBuP7UcpTKw0OA3SRrHo4FsJcpvmTTR-4yTnM_Hp58Da67BHGI6xBLAS-0')", backgroundSize:"cover", backgroundPosition:"center" }}>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-surface-container-low text-primary rounded-full backdrop-blur-sm">Lo Último</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-4">Noticias &amp; Anuncios</h1>
            <p className="font-body text-xl text-surface-container-low max-w-2xl">Actualizaciones, calendarios e historias desde entre bastidores de la Asociación Open Music.</p>
          </div>
        </section>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* FEED */}
          <section className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-headline text-3xl font-bold text-primary">Artículos Recientes</h2>
            </div>
            {/* Destacado */}
            <article className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col md:flex-row transition-transform hover:-translate-y-1 duration-300">
              <div className="md:w-2/5 h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage:"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC36fbgfSQfCrqBMYJobJyXZqK41Sgo-QF9e4h2SmjwzMVlqTjhNR8eS85GJbhXKAUICszZv-g56BvqPKcJgYjNYaZSZc_HD3tqp-X8tk54fgr4QWI9u3--oe9WvCTxcBIuamQBN4225PlMDNFoZjtjZqWt9MFox9eFiqNIXYliG3y2bfiV_1sLhBlH3eqpAp7oB0N7fkjxI9oJ8mo6CF_nd6QIvE9mxTpwRXWL6u1ZKg-vE7_uhu5Ax_1VaGYM5eAeG6mA6b8nb4')" }} />
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary-fixed-dim text-on-secondary-fixed rounded-md">Destacado</span>
                  <span className="text-sm text-on-surface-variant font-body">Mayo 2025</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface hover:text-primary transition-colors">
                  Audiciones para el próximo musical
                </h3>
                <p className="font-body text-on-surface-variant mb-6 line-clamp-3">Nos preparamos para los próximos eventos de la temporada. ¡Atentos a todas las novedades del colegio!</p>
                <a href="https://www.facebook.com/ortega.open" target="_blank" rel="noreferrer"
                   className="font-body font-semibold text-primary hover:text-primary-container transition-colors mt-auto inline-flex items-center gap-1">
                  Ver en Facebook <span className="material-symbols-outlined text-sm">chevron_right</span>
                </a>
              </div>
            </article>
            {/* Lista */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { tag: 'Anuncio', tagIcon: 'campaign', tagColor: 'text-tertiary', title: 'Nueva sala de ensayo en el Colegio', desc: 'A partir del mes que viene, se realizarán los ensayos generales en el CEIP Ortega y Gasset.', date: 'Marzo 2025' },
                { tag: 'Reseña', tagIcon: 'article', tagColor: 'text-secondary', title: 'Así Soy cierra la temporada con gran éxito', desc: 'Lee la recepción del público y mira la galería de fotos de nuestra última producción.', date: 'Abril 2025' },
              ].map(a => (
                <article key={a.title} className="bg-surface-container-low p-6 rounded-xl flex flex-col group hover:bg-surface-container-highest transition-colors">
                  <span className={`text-sm font-semibold mb-2 font-body flex items-center gap-2 ${a.tagColor}`}>
                    <span className="material-symbols-outlined text-base">{a.tagIcon}</span>{a.tag}
                  </span>
                  <h4 className="font-headline text-xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">{a.title}</h4>
                  <p className="font-body text-sm text-on-surface-variant mb-4">{a.desc}</p>
                  <span className="text-xs text-on-surface-variant font-body mt-auto">{a.date}</span>
                </article>
              ))}
            </div>
          </section>

          {/* CALENDARIO */}
          <aside className="lg:col-span-4 bg-surface-container-low rounded-xl p-6 md:p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
            <h2 className="font-headline text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b-2 border-tertiary pb-2 w-max">
              <span className="material-symbols-outlined">calendar_month</span> Próximos Eventos
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { month: 'Sep', day: '15', title: 'Inicio de Ensayos', sub: '5:00 PM · Sala de Actos' },
                { month: 'Oct', day: '20', title: 'Ensayo General', sub: '6:30 PM · Escenario Principal' },
                { month: 'Nov', day: '08', title: 'NOCHE DE ESTRENO', sub: '7:00 PM · Teatro Municipal', highlight: true },
              ].map(ev => (
                <div key={ev.day} className={`flex gap-4 relative${ev.highlight ? ' bg-primary-container/10 p-3 -mx-3 rounded-lg border border-primary-container/20' : ''}`}>
                  <div className={`flex flex-col items-center justify-center rounded-lg min-w-[3.5rem] h-14 shadow-sm${ev.highlight ? ' bg-primary text-on-primary' : ' bg-surface-container-lowest'}`}>
                    <span className={`text-xs font-bold uppercase leading-none mt-1${ev.highlight ? '' : ' text-primary'}`}>{ev.month}</span>
                    <span className="text-xl font-bold leading-none mb-1">{ev.day}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    {ev.highlight && <span className="text-xs font-bold text-primary mb-1">NOCHE DE ESTRENO</span>}
                    <h4 className="font-headline font-bold text-on-surface leading-tight">{ev.title}</h4>
                    <p className="font-body text-sm text-on-surface-variant">{ev.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://www.facebook.com/ortega.open" target="_blank" rel="noreferrer"
               className="mt-8 w-full bg-secondary text-on-secondary py-3 rounded-md font-body font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-colors text-center block">
              Ver en Facebook
            </a>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
