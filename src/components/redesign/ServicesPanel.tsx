import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { services } from "@/data/redesign-home";

export default function ServicesPanel() {
  const [activeId, setActiveId] = useState(services[0].id);
  const previewRef = useRef<HTMLDivElement>(null);
  const active = services.find((item) => item.id === activeId) ?? services[0];

  useEffect(() => {
    const node = previewRef.current;
    if (!node) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        node,
        { autoAlpha: 0.35, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    });

    return () => mm.revert();
  }, [activeId]);

  return (
    <div className="services">
      <div className="service-list">
        {services.map((service) => {
          const selected = service.id === active.id;
          return (
            <button
              key={service.id}
              type="button"
              className={selected ? "service is-active" : "service"}
              aria-pressed={selected}
              onClick={() => setActiveId(service.id)}
            >
              <span className="service-row">
                <span className="service-index">{service.index}</span>
                <span className="service-title">{service.title}</span>
              </span>
              {selected && <p className="service-copy">{service.description}</p>}
            </button>
          );
        })}
      </div>

      <div className="service-preview" ref={previewRef} aria-hidden="true">
        <div className="wire wire-a" />
        <div className="wire wire-b" />
        <div className="wire wire-c" />
        <div className="wire-fill" />
        <p className="service-meta">Servicio {active.index} / 07</p>
        <p className="service-num">{active.index}</p>
      </div>
    </div>
  );
}
