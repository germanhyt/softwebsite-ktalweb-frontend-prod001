import { useEffect } from "react";
import { trackScrollDepth, trackSectionView } from "@/core/helpers/analytics";

const DEPTHS = [25, 50, 75, 100] as const;
const SECTIONS = [
  "inicio",
  "servicios",
  "productos",
  "proyectos",
  "capacidades",
  "proceso",
  "nosotros",
  "contacto",
];

export default function AnalyticsObserver() {
  useEffect(() => {
    const seenDepth = new Set<number>();
    const seenSection = new Set<string>();

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const percent = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
      for (const depth of DEPTHS) {
        if (percent >= depth && !seenDepth.has(depth)) {
          seenDepth.add(depth);
          trackScrollDepth(depth);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting && id && !seenSection.has(id)) {
            seenSection.add(id);
            trackSectionView(id);
          }
        }
      },
      { threshold: 0.35 }
    );

    for (const id of SECTIONS) {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
