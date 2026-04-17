import Head from 'next/head';
import Layout from '../components/Layout';

const galeriaTarzan = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF3mIVxJuHC2cZB8GfMqzZJAA-Ll01cBdWwdHjxI9L4mVXgU6Y5qJtBXz2OXiG2_7UHpXxINIePQwuT-xAyI8HJjMmC2aTCXHcXi5zXqVPdcPDfYLYFhgUuyoL3KOsexumT3mXQdxf7w/s320/foto+grupo.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicGSagAUXqsGT-5gXsWNL0b0AqBtdXV43q86sY_5mvAfFd3-xZGMVbSwHPGFEwGGSBOCNfEL-ppW2hZhXbQG1mcaGT0iy_k_IDVqhXe88P36u7bB3MLp0eDVkJq6UckJVd-_EYBwZ09uo/s320/Kala.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiN7zMCdvAiSlXy3BKRA4C7sKVBE_EVcpNV7vJHH0hkWtV0kgdOvXyHlSLAa2EFHwmKqz0gFGS-j7haTd5KBST-TnGNqXqidyFpC_Yda4x9GKw3E9y5JCn5YgBSxMvq6vXLMM3y4tCCYk/s320/Tarzan.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOYelKE5OoVh2yFX_2QZSWHi3nLuSPFjYGt7XjnP-Y5r4pORzZmEZ5S0ULp99hgfj7d5HMuDInrCkJxFB85rGZAr27n7d5BVj7EmdRAQqVLV9hzFbq3HHCpnr1lyvb_LNi_3_bG9Nblxg/s320/Jane.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjELVhT5DFtliBw-iFGOHUHlQM9oCsMYi9EuBH6Fd7OIVdx3G_8bFSz7G8X5gLyJMK3zQ8ERbk0vGVBST-Y2M40Oe6HoJbR0VuBODttnf6pRMoRW5QfLNpHJhcyM-5H3dH4y2GBblrfGv/s320/Portada.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_9cCrKkFWoNOhVJvMmHIatWCJpjrNKksMb8vHJnjMBX3dZiNKzLEiSzXD0wkTJ3gJSRg0biT7AFoNMJFH5bFdgjdBmPFWuMAbYjmg-T_ufMOFNWtjqd8bOb_L_LIMnXuygQj3vTLqQl4/s320/Actuando.jpg',
];

const videos = [
  { id: 'LRuCHtCDG-Q', title: 'Entre Lianas – Vídeo Feria 2023' },
  { id: 'WbMvIbNPMrQ', title: 'Entre Lianas – Actuación Teatro' },
];

export default function Tarzan() {
  return (
    <Layout>
      <Head>
        <title>Entre Lianas (Tarzán) – Asociación Open Music</title>
        <meta name="description" content="Entre Lianas: el musical de Tarzán de la Asociación Open Music. Dos temporadas de representaciones en Extremadura, 2021-2023." />
      </Head>

      {/* HERO */}
      <section className="relative w-full h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <img alt="Entre Lianas – Asociación Open Music" className="absolute inset-0 w-full h-full object-cover object-center" src={galeriaTarzan[0]} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/80 text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
            Segundo Musical · Temporada 2021-23
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">Entre Lianas</h1>
          <p className="font-body text-lg text-white/80 max-w-2xl mb-8">Basado en el clásico Tarzán. Dos temporadas de actuaciones que llevaron la selva a los escenarios de Extremadura.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.youtube.com/watch?v=LRuCHtCDG-Q" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-sm">play_circle</span>
              Ver Vídeo
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
              <strong>Entre Lianas</strong> es la adaptación musical del clásico Tarzán, representada durante dos temporadas. Una historia de identidad, familia adoptiva y la fuerza de la naturaleza que emocionó a miles de espectadores.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed mb-4">
              La obra se representó en la <strong>Feria de Almendralejo 2022 y 2023</strong>, en el <strong>Teatro López de Ayala de Badajoz</strong> y en varias localidades extremeñas. Incluso fue emitida por <strong>Canal Extremadura</strong>.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['🎭 Teatro López de Ayala', '📺 Canal Extremadura', '🎪 Feria de Almendralejo', '📍 Múltiples ciudades'].map(t => (
                <span key={t} className="text-xs bg-surface-container px-3 py-1.5 rounded-full text-on-surface-variant font-medium">{t}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {galeriaTarzan.slice(0,4).map((src, i) => (
              <img key={i} src={src} alt={`Entre Lianas foto ${i+1}`} className="rounded-xl object-cover w-full h-36 hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-primary mb-8">Galería de la Obra</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galeriaTarzan.map((src, i) => (
              <img key={i} src={src} alt={`Entre Lianas foto ${i+1}`} className="rounded-xl object-cover w-full h-48 hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-headline text-3xl font-bold text-primary mb-8">Vídeos</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
