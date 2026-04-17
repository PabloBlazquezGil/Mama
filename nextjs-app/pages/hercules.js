import Head from 'next/head';
import Layout from '../components/Layout';

const almendralejo = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwHNhW9KoSDlLCrgG5FOQxXk9lLdOstqlvcQwaek_jt8oLB8hC0cI1y0qV_aHsXSHQJxCupVRqtCeaKO3RfgheAFM0UAdjOiqb8qnMclsDsZCx9FrJmlspSEKp575laEIsQpT5BEuA8lk/s320/IMG-20180424-WA0004.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHlXFPSduvX7gH4VHEw4tnrLlOzFEkz8pf-8JXu3_jJE1O9JF3JkNH-K5jc0e0jXFQ7HFqZ5-mhOa28rBrBm-_2x8YcN9GRsHZIIlXAR6iqm7a0bVGGkXstZSgTJ4yb0J/s320/IMG-20180424-WA0013.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipzp37rFWe0kSd2H3A1mj_y5ZQ0MVXLOC69q4akZgn-H6OIuknMFXfBv4_-1nCgIcYLLKS3NNPTZ2AomDRZwq0GlvQhCtGbMT2WJRtWtDDpxzBHqnkzE8K2MiOBTKp7PIHG3C5GVUFu4/s320/IMG-20180424-WA0007.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2LrKiZIbMO1QDSC3rxJqL7y2A2NtCVYBVVhzijv0N7TKpxRHPuNkzRvJqUH4Ly6N3p4L_hgkMQG0fY3JNUn5d1CbVi4T5f5TbNFZ1JEPiE2fTaLVpxn9gIQH7S-FyCLTrpAWqeibhk/s320/IMG-20180424-WA0014.jpg',
];
const plasencia = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQgbBJEfCxEG1FNxXqWBlpNJm978NZB07CjIMqovHVNLGhG1YVpIVDAKP1X-oGq34HcOw4ydtNVGAD8j0ghsJJJzaIqatxmwvSmXh2bSfvVAZ1Xe8M13-eRKifqv6QwC_kuhwXBscPCNA/s320/IMG-20180612-WA0006.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUxlOlbkA7NbOCFqHlnLmzWH3jfJzAaH9TS_HAdDqWFoxHzJgJEwbXQlRdQaHKaC4ISEa6wH61RFUQMRh42TLBC4YKrCMQ3L2VBqSNQhh_qHBLlKPp65DjXq9Y5pQalG2/s320/IMG-20180612-WA0008.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEij_bFDWBCfxEdAjNXnJz7o7sNrVoHXFVrQnGjS-B6GFLf8Yaz6i0IkIqkmSMLr7uRZs4pmkb9n37-KBhefWr7n9wkjBR_C8_tNXrFRYsMHdTLJJKpwE3V8oWJkdY591/s320/IMG-20180612-WA0018.jpg',
];
const arroyoDelaLuz = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1cLNnIAXVCaVGFMOPiYXfpqDcJcb4cPnqktdZQJ_wK4lLf8j3e4nJg3j7B3bD8fFGh0CbX_MFKl2EJfaEKWb_CpTZTCFnbSN-z0MBQQ8-V5xQWaIwWjn4Xn5KVVM27pZPT2xJl8sJY/s320/IMG-20180707-WA0003.jpg',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuodEv_RwPF8tTv9UPb8hk-hJHtQMikxv-8dC1l2bkHN_tKVz-dqD9_5nmxhQ3pM1oEcsDQx4y5qWQ4V98oJLpSoqHe8oN6rHBSDhxDZM8IaBtv1WJIU4j7sXsRcHaFq1RvIMkIcLiMM/s320/IMG-20180707-WA0005.jpg',
];

const GalleryGrid = ({ photos, cols = 3 }) => (
  <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-4`}>
    {photos.map((src, i) => (
      <img key={i} src={src} alt={`Hércules foto ${i+1}`} className="rounded-xl object-cover w-full h-48 hover:scale-105 transition-transform duration-300" />
    ))}
  </div>
);

export default function Hercules() {
  return (
    <Layout>
      <Head>
        <title>Hércules – Asociación Open Music</title>
        <meta name="description" content="Hércules: el tercer musical de la Asociación Open Music. Temporada 2017-18 con representaciones en Almendralejo, Plasencia y Arroyo de la Luz." />
      </Head>

      {/* HERO */}
      <section className="relative w-full h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <img alt="Hércules – Asociación Open Music" className="absolute inset-0 w-full h-full object-cover object-center" src={almendralejo[0]} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/80 text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
            Tercer Musical · Temporada 2017-18
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">Hércules</h1>
          <p className="font-body text-lg text-white/80 max-w-2xl mb-8">El héroe que conquistó tres escenarios extremeños. Un musical épico de fuerza, corazón y amistad verdadera.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://ortegaopenmusic.blogspot.com/p/fotografias-y-videos-hercules-2018.html" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-container transition-colors">
              Ver en el Blog Original
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
              <strong>Hércules</strong> fue el tercer gran musical de la Asociación Open Music, representado durante la temporada 2017-18. Una adaptación épica del héroe griego que llenó de emoción tres escenarios extremeños.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed mb-4">
              La obra se representó por primera vez en <strong>Almendralejo</strong> en abril de 2018, luego viajó a <strong>Plasencia</strong> como excursión especial en junio, y cerró la temporada en <strong>Arroyo de la Luz</strong> en julio.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['📍 Almendralejo', '📍 Plasencia', '📍 Arroyo de la Luz', '🏛️ Musical Épico'].map(t => (
                <span key={t} className="text-xs bg-surface-container px-3 py-1.5 rounded-full text-on-surface-variant font-medium">{t}</span>
              ))}
            </div>
          </div>
          <GalleryGrid photos={almendralejo} cols={2} />
        </div>
      </section>

      {/* PLASENCIA */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-headline text-2xl font-bold text-primary">Actuación en Plasencia</h2>
            <span className="text-xs bg-secondary text-on-secondary px-3 py-1 rounded-full font-bold">Junio 2018</span>
          </div>
          <GalleryGrid photos={plasencia} cols={3} />
        </div>
      </section>

      {/* ARROYO */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-headline text-2xl font-bold text-primary">Actuación en Arroyo de la Luz</h2>
          <span className="text-xs bg-tertiary text-on-tertiary px-3 py-1 rounded-full font-bold">Julio 2018</span>
        </div>
        <GalleryGrid photos={arroyoDelaLuz} cols={2} />
      </section>
    </Layout>
  );
}
