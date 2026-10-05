import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { reviews, type ReviewItem } from "@/data/redesign-home";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { trackClick, trackEvent } from "@/core/helpers/analytics";

const excerpt = (text: string, words = 28) => {
  const parts = text.trim().split(/\s+/);
  if (parts.length <= words) return text;
  return `${parts.slice(0, words).join(" ")}…`;
};

export default function ReviewsCarousel() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<ReviewItem | null>(null);
  const stageRef = useRef<HTMLQuoteElement>(null);
  const total = reviews.length;
  const review = reviews[index];
  const reviewText = t.reviews.items[review.id] ?? review.text;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((current) => (current + dir + total) % total);
      trackEvent("select_content", {
        content_type: "review",
        item_id: dir === 1 ? "next" : "previous",
      });
    },
    [total]
  );

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const tl = gsap.timeline();
    tl.fromTo(
      node,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" }
    );
    return () => {
      tl.kill();
    };
  }, [index, reviewText]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="review-carousel">
      <p className="quote-mark" aria-hidden="true">
        “
      </p>
      <blockquote ref={stageRef} className="review-stage">
        <p className="quote" id="testimonio-title">
          {excerpt(reviewText)}
        </p>
      </blockquote>
      <p className="quote-by">
        {review.author} · {t.reviews.by} {review.dateLabel}
      </p>
      {reviewText.trim().split(/\s+/).length > 28 && (
        <button
          type="button"
          className="review-more"
          onClick={() => {
            setOpen(review);
            trackClick("review_read_full", { item_id: review.id });
          }}
        >
          {t.reviews.readFull}
        </button>
      )}
      <div className="review-nav">
        <button type="button" className="review-arrow" onClick={() => go(-1)} aria-label={t.reviews.prev}>
          ←
        </button>
        <div className="review-dots" role="tablist" aria-label={t.reviews.list}>
          {reviews.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              className={itemIndex === index ? "review-dot is-active" : "review-dot"}
              onClick={() => {
                setIndex(itemIndex);
                trackEvent("select_content", { content_type: "review", item_id: item.id });
              }}
              aria-label={`${item.author}`}
            />
          ))}
        </div>
        <button type="button" className="review-arrow" onClick={() => go(1)} aria-label={t.reviews.next}>
          →
        </button>
      </div>

      {open && (
        <div className="review-modal" role="presentation" onClick={() => setOpen(null)}>
          <div
            className="review-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="quote-by" id="review-dialog-title">
              {open.author} · {t.reviews.by} {open.dateLabel}
            </p>
            <p className="review-full">“{t.reviews.items[open.id] ?? open.text}”</p>
            <button type="button" className="review-more" onClick={() => setOpen(null)}>
              {t.reviews.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
