import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Entrada del hero, deriva de los gráficos y revelado al scroll. */
export default function PageMotion() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (context.conditions?.reduceMotion) return;

        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .fromTo(
            "[data-enter]",
            { autoAlpha: 0, y: 26 },
            { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.07 }
          )
          .fromTo(
            ".float-art",
            { autoAlpha: 0, y: 18, scale: 0.92 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
            "-=0.35"
          );

        intro.eventCallback("onComplete", () => {
          gsap.to(".float-data", {
            y: 9,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          gsap.to(".float-ux", {
            y: -11,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          gsap.to(".float-ai", {
            y: 8,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.35,
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 86%",
                once: true,
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-case-media]").forEach((media) => {
          gsap.fromTo(
            media,
            { scale: 1.06 },
            {
              scale: 1,
              duration: 0.9,
              ease: "power2.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: media,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
      }
    );

    return () => mm.revert();
  }, []);

  return null;
}
