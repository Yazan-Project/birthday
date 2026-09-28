import styles from "./FloatingElements.module.css";
import { Heart, Sparkles, Star } from "lucide-react";

const PARTICLES = [
  { type: "heart", left: "8%", delay: 0, duration: 12, color: "#C8788A" },
  { type: "star", left: "18%", delay: 2, duration: 15, color: "#D4AF37" },
  { type: "dot", color: "#D4AF37", size: 8, left: "28%", delay: 4, duration: 10 },
  { type: "sparkle", left: "38%", delay: 1.5, duration: 13, color: "#C8788A" },
  { type: "star", left: "48%", delay: 3, duration: 16, color: "#E8A0AE" },
  { type: "dot", color: "#722F37", size: 6, left: "58%", delay: 0.5, duration: 11 },
  { type: "heart", left: "68%", delay: 2.5, duration: 14, color: "#D4AF37" },
  { type: "star", left: "78%", delay: 1, duration: 12, color: "#C8788A" },
  { type: "dot", color: "#E8A0AE", size: 10, left: "88%", delay: 3.5, duration: 9 },
  { type: "sparkle", left: "93%", delay: 0.8, duration: 17, color: "#D4AF37" },
  { type: "heart", left: "5%", delay: 5, duration: 11, color: "#C8788A" },
  { type: "dot", color: "#D4AF37", size: 7, left: "72%", delay: 6, duration: 13 },
];

export function FloatingElements() {
  return (
    <div className={styles.container} aria-hidden="true">
      {PARTICLES.map((p, i) => {
        const animStyle: React.CSSProperties = {
          left: p.left,
          bottom: "-10%",
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
        };
        if (p.type === "dot") {
          return (
            <span key={i} className={`${styles.particle} ${styles.dot}`}
              style={{ ...animStyle, width: p.size, height: p.size, backgroundColor: p.color }} />
          );
        }
        if (p.type === "heart") {
          return (
            <span key={i} className={`${styles.particle} ${styles.zap}`} style={animStyle}>
              <Heart size={22} fill={p.color} stroke="none" />
            </span>
          );
        }
        if (p.type === "sparkle") {
          return (
            <span key={i} className={`${styles.particle} ${styles.zap}`} style={animStyle}>
              <Sparkles size={20} color={p.color} />
            </span>
          );
        }
        return (
          <span key={i} className={`${styles.particle} ${styles.star}`} style={{ ...animStyle, color: p.color || "#D4AF37" }}>
            <Star size={20} fill="currentColor" stroke="none" />
          </span>
        );
      })}
    </div>
  );
}