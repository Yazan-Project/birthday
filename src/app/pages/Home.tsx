import { FloatingElements } from "../components/FloatingElements";
import { Countdown } from "../components/Countdown";
import styles from "../App.module.css";
import { Calendar, MapPin, Clock, Heart, Cake, Sparkles, Navigation } from 'lucide-react';

export function Home() {
  return (
    <div className={styles.page}>
      <FloatingElements />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div style={{ position: 'relative' }}>
            <span className={styles.badge}>✦ Você está convidada ✦</span>
            <span className={styles.eyebrow}>Celebrando com elegância</span>
            <h1 className={styles.title}>
              <span className={styles.titleAccent}>60</span><br />
              Anos
            </h1>
            <p className={styles.subtitle}>Maria José</p>
          </div>

          <div style={{ margin: '2rem auto', textAlign: 'center' }}>
            <span style={{ fontSize: '4rem', display: 'block', lineHeight: 1 }}>🌸</span>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#B8860B', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0.5rem 0 0' }}>Sessenta Anos</p>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}><Calendar size={18} strokeWidth={2.5} /></span>
              <span className={styles.metaText}>24 de Outubro de 2026</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}><Clock size={18} strokeWidth={2.5} /></span>
              <span className={styles.metaText}>19h00</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}><MapPin size={18} strokeWidth={2.5} /></span>
              <span className={styles.metaText}>Rua Joaquim Cruz 1137A</span>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <a
              href="https://share.google/bfPzBqoD9rGAvbVRo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <Navigation size={16} strokeWidth={2.5} />
              <span>Ver localização no mapa</span>
            </a>

            <button className={styles.generateButton} onClick={() => window.location.href = '/convite'}>
              Gerar meu convite
            </button>
          </div>
        </div>
      </section>

      {/* ── Birthday Kid ── */}
      <section className={styles.couple}>
        <div className={styles.coupleNames}>
          Maria José
        </div>
      </section>

      {/* ── Divider ── */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerOrb}><Cake size={24} color="#D4AF37" /></span>
        <div className={styles.dividerLine} />
      </div>

      {/* ── Countdown ── */}
      <Countdown />

      {/* ── Divider ── */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerOrb}><Sparkles size={24} color="#D4AF37" /></span>
        <div className={styles.dividerLine} />
      </div>

      {/* ── Details card ── */}
      <div className={styles.detailsWrap}>
        <div className={styles.detailsCard}>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}><Calendar size={22} strokeWidth={2} /></span>
              <span className={styles.detailTitle}>Data</span>
              <span className={styles.detailValue}>24 de Outubro de 2026</span>
              <span className={styles.detailSub}>Sábado</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}><Clock size={22} strokeWidth={2} /></span>
              <span className={styles.detailTitle}>Horário</span>
              <span className={styles.detailValue}>19h00</span>
              <span className={styles.detailSub}>Venha celebrar este momento especial</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}><MapPin size={22} strokeWidth={2} /></span>
              <span className={styles.detailTitle}>Local</span>
              <span className={styles.detailValue}>Rua Joaquim Cruz 1137A</span>
              <span className={styles.detailSub}>Bairro Aeroporto</span>
              <a href="https://share.google/bfPzBqoD9rGAvbVRo" target="_blank" rel="noopener noreferrer" className={styles.mapsButton}>
                Ver no Mapa
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <span className={styles.footerScript} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          Venha comemorar com a gente! <Heart size={20} fill="#D4AF37" stroke="none" />
        </span>
        <p className={styles.footerText}>Maria José · Outubro 2026</p>
      </footer>
    </div>
  );
}