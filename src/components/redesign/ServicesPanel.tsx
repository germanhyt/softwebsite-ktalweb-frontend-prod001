import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { services } from "@/data/redesign-home";

type Box = {
  left: string;
  top: string;
  width: string;
  height: string;
};

type Scene = {
  a: Box;
  b: Box;
  c: Box;
  fill: Box;
};

const scenes: Record<string, Scene> = {
  ux: {
    a: { left: "8%", top: "12%", width: "46%", height: "28%" },
    b: { left: "58%", top: "18%", width: "34%", height: "18%" },
    c: { left: "8%", top: "56%", width: "58%", height: "22%" },
    fill: { left: "66%", top: "62%", width: "22%", height: "16%" },
  },
  systems: {
    a: { left: "10%", top: "16%", width: "24%", height: "22%" },
    b: { left: "38%", top: "16%", width: "24%", height: "22%" },
    c: { left: "66%", top: "16%", width: "24%", height: "22%" },
    fill: { left: "10%", top: "52%", width: "80%", height: "18%" },
  },
  research: {
    a: { left: "12%", top: "14%", width: "28%", height: "34%" },
    b: { left: "48%", top: "22%", width: "18%", height: "18%" },
    c: { left: "70%", top: "14%", width: "18%", height: "42%" },
    fill: { left: "18%", top: "62%", width: "36%", height: "16%" },
  },
  brand: {
    a: { left: "8%", top: "18%", width: "40%", height: "48%" },
    b: { left: "54%", top: "18%", width: "16%", height: "14%" },
    c: { left: "54%", top: "38%", width: "34%", height: "12%" },
    fill: { left: "54%", top: "56%", width: "34%", height: "18%" },
  },
  software: {
    a: { left: "8%", top: "18%", width: "84%", height: "12%" },
    b: { left: "8%", top: "36%", width: "62%", height: "12%" },
    c: { left: "8%", top: "54%", width: "46%", height: "12%" },
    fill: { left: "8%", top: "72%", width: "28%", height: "10%" },
  },
  web: {
    a: { left: "8%", top: "18%", width: "52%", height: "56%" },
    b: { left: "66%", top: "34%", width: "26%", height: "16%" },
    c: { left: "66%", top: "56%", width: "26%", height: "12%" },
    fill: { left: "66%", top: "74%", width: "26%", height: "10%" },
  },
  ai: {
    a: { left: "18%", top: "22%", width: "22%", height: "22%" },
    b: { left: "46%", top: "14%", width: "16%", height: "16%" },
    c: { left: "66%", top: "34%", width: "18%", height: "18%" },
    fill: { left: "40%", top: "48%", width: "20%", height: "20%" },
  },
};

export default function ServicesPanel() {
  const [activeId, setActiveId] = useState(services[0].id);
  const previewRef = useRef<HTMLDivElement>(null);
  const active = services.find((item) => item.id === activeId) ?? services[0];

  useEffect(() => {
    const root = previewRef.current;
    const scene = scenes[active.id];
    if (!root || !scene) return;

    const wireA = root.querySelector(".wire-a");
    const wireB = root.querySelector(".wire-b");
    const wireC = root.querySelector(".wire-c");
    const fill = root.querySelector(".wire-fill");
    const num = root.querySelector(".service-num");
    const meta = root.querySelector(".service-meta");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(wireA, scene.a);
      gsap.set(wireB, scene.b);
      gsap.set(wireC, scene.c);
      gsap.set(fill, { ...scene.fill, scale: 1, autoAlpha: 1 });
      gsap.set([num, meta], { y: 0, autoAlpha: 1 });
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.68 },
    });
    tl.to(wireA, scene.a, 0)
      .to(wireB, scene.b, 0)
      .to(wireC, scene.c, 0)
      .to(fill, { ...scene.fill, scale: 1 }, 0)
      .to(num, { y: 0, autoAlpha: 1, duration: 0.45 }, 0)
      .to(meta, { y: 0, autoAlpha: 1, duration: 0.4 }, 0.04);

    return () => {
      tl.kill();
    };
  }, [active.id]);

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
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActiveId(service.id);
              }}
              onFocus={() => setActiveId(service.id)}
              onClick={() => setActiveId(service.id)}
            >
              <span className="service-row">
                <span className="service-index">{service.index}</span>
                <span className="service-title">{service.title}</span>
              </span>
              <p className="service-copy">
                <span>{service.description}</span>
              </p>
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
