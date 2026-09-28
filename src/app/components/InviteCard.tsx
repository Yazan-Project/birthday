import { Calendar, MapPin } from "lucide-react";

interface InviteCardProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  guestName?: string;
}

export function InviteCard({ cardRef, guestName }: InviteCardProps) {
  const displayName = guestName || "Convidado(a) Especial";
  return (
    <div
      ref={cardRef}
      style={{
        width: "100%",
        maxWidth: "420px",
        background: "linear-gradient(135deg, #FDE8EE 0%, #FDF8F0 100%)",
        borderRadius: "20px",
        padding: "10px",
        boxShadow: "0 20px 40px rgba(184, 134, 11, 0.15)",
        fontFamily: "'Lato', sans-serif",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        border: "2px solid #D4AF37",
        borderRadius: "16px",
        padding: "2rem 1.5rem",
        background: "white",
        height: "100%",
        boxSizing: "border-box"
      }}>
        {/* Header decorativo */}
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1rem', color: '#C8788A', margin: '0 0 0.25rem', letterSpacing: '0.05em' }}>Você está convidada para</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: '0.25rem 0' }}>
            <span style={{ fontSize: '1.5rem' }}>✦</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#722F37', margin: 0, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Aniversário</h2>
            <span style={{ fontSize: '1.5rem' }}>✦</span>
          </div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', color: '#B8860B', margin: '0.25rem 0 0', fontWeight: 700, letterSpacing: '0.03em' }}>60 Anos</p>
        </div>

        <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2.4rem', color: '#722F37', margin: '0 0 1.5rem 0', fontWeight: 700 }}>
          Maria José
        </h3>

        {/* Guest Name */}
        <div style={{ padding: '0.75rem 0', borderTop: '1px dashed #D4AF37', borderBottom: '1px dashed #D4AF37', marginBottom: '1.5rem', background: '#FFFDF7', borderRadius: '4px' }}>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#C8788A', margin: '0 0 0.25rem 0' }}>Convidado(a) Especial</p>
          <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#722F37', margin: 0, fontFamily: "'Playfair Display', serif" }}>{displayName}</p>
        </div>

        {/* Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', background: '#FDF8F0', padding: '1.25rem', borderRadius: '12px', fontSize: '0.9rem', color: '#722F37', border: '1px solid #F5D76E' }}>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={18} color="#D4AF37" /> <strong>Data:</strong> 24 de Outubro de 2026 às 19h
          </p>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MapPin size={18} color="#D4AF37" /> <strong>Local:</strong> Rua Joaquim Cruz 1137A, Bairro Aeroporto
          </p>
        </div>

        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.1rem', color: '#C8788A', margin: '1.25rem 0 0', letterSpacing: '0.02em' }}>Com amor, aguardamos sua presença 🌸</p>
      </div>
    </div>
  );
}