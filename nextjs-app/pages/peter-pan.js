import Head from 'next/head';
import Layout from '../components/Layout';

const videos = [
  { id: 'r8msGzfPjxE', title: 'Peter Pan – Actuación completa (parte 1)' },
  { id: 'wDOl0GFZBbI', title: 'Peter Pan – Actuación completa (parte 2)' },
  { id: 'JKPzqIwYnlw', title: 'Peter Pan – Detrás de las cámaras' },
  { id: 'bqsRILaycHw', title: 'Peter Pan – Entrevista TV Almendralejo' },
  { id: 'SX_ViX4G5Is', title: 'Peter Pan – Resumen de la obra' },
];

const photos = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNK7jxsharkjBVz6-0GdOG1w_PlSUe5dmTbB9a-LArcrnGJ5NJockhfTjZ0utZZJsQL8R3hwIcSPFv0kVgKWYa5l2d_fpFFwtiqd59vwzN30UT08jqd3_u67CvboqYbfdpQXeJTp6Gwrg/s320/DSC_0122.JPG',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjawP1R0DF2fWfz-TMPe5Mf5u-t8WFKvkoxkHwD8jWpCJxLi9GRhUy2axsNBY2pQlyHHsVXgn_MJl0E_F-rlb9zTPB8vlsf6EEKSiHkDpJ1l3Bz1zWZNhCuqBbJIcPJnBHoOTOqGHTN/s320/DSC_0059.JPG',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjywzwz3mWiIaBVLQgYBNJsS_1Rz3T2m2bLikuSqJklcnYuXqQj7nMuqiGAVKhOw42c-z5CPKJ7p9CX5LX6h2_i5K7W9xrqdj0PoWh5buvYbBpwzMBt_DPYo0aQpnwvkT_RA/s320/DSC_0065.JPG',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgswTGiQbXw0F6JbVoXYJ6G0VEHLA_oEjSgApjj0K2oVXt3VRt2L-ZMlm5oBHGT5lUfenMOIJXNniNGPQd1hFBvIvdYT2k5r5BAQTH-OaRx4JN7RInFYvvSEJsHJlF2l5lU_J-Cv8/s320/DSC_0109.JPG',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8M7uTVU7UrCXnqrKS3w7sKl2kP6vq8Bn3GOIiCRnjkrn5uaXpWp8sO_9N3fjq2VNDpq2VUbX5OJDMjwKi_ERpfhPFUfMGVmxNhH_cYSzZqvERpAFqz-GuwymJI5-HmUf568KFTQ/s320/DSC_0087.JPG',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLFCT7e7NxYjmGRjv2EaFVDH8JnExz1W8gqUABVTy2pB0ZPaP3Lnp3vopIv5BXxiQY0LX93UxiY0GTefJIMzMsMHxFRg5vfBFXpj3A2nZ_KgpnI0pJM3z3lrHgTSMIuK-9_n4JKNK/s320/DSC_0023.JPG',
];

export default function PeterPan() {
  return (
    <Layout>
      <Head>
        <title>Peter Pan – Asociación Open Music</title>
        <meta name="description" content="Peter Pan: el primer musical de la Asociación Open Music del CEIP Ortega y Gasset. Temporada 2014-15, con cobertura en prensa y televisión." />
      </Head>

      {/* HERO */}
      <section className="relative w-full h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <img alt="Peter Pan – Asociación Open Music" className="absolute inset-0 w-full h-full object-cover object-center" src={photos[0]} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/80 text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
            Primer Musical · Temporada 2014-15
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">Peter Pan</h1>
          <p className="font-body text-lg text-white/80 max-w-2xl mb-8">El musical que lo inició todo. Con cobertura en el Periódico Extremadura, entrevista en TV Almendralejo y 5 vídeos en YouTube.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`https://www.youtube.com/watch?v=${videos[0].id}`} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-sm">play_circle</span>Ver Actuación
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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">Sobre la obra</h2>
            <p className="font-body text-on-surface-variant leading-relaxed mb-4">
              <strong>Peter Pan</strong> fue el primer gran musical de la Asociación Open Music, representado durante la temporada 2014-15. El País de Nunca Jamás cobró vida en el escenario del CEIP Ortega y Gasset de Almendralejo, reuniendo a alumnos, familias y la comunidad educativa en un espectáculo sin precedentes.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed mb-4">La obra recibió cobertura en el <strong>Periódico Extremadura</strong> y fue entrevistada en <strong>TV Almendralejo</strong>. Se registraron 5 vídeos completos de la actuación, disponibles en YouTube.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['📺 TV Almendralejo', '📰 Periódico Extremadura', '🎬 5 Vídeos YouTube', '🏆 Primer Musical de la Asociación'].map(t => (
                <span key={t} className="text-xs bg-surface-container px-3 py-1.5 rounded-full text-on-surface-variant font-medium">{t}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {photos.slice(0,4).map((src, i) => (
              <img key={i} src={src} alt={`Peter Pan foto ${i+1}`} className="rounded-xl object-cover w-full h-36 hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-primary mb-8">Galería de Fotografías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <img key={i} src={src} alt={`Peter Pan foto ${i+1}`} className="rounded-xl object-cover w-full h-48 hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-headline text-3xl font-bold text-primary mb-8">Vídeos de la Actuación</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(v => (
            <div key={v.id}>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-3">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <p className="font-body text-sm text-on-surface-variant">{v.title}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
