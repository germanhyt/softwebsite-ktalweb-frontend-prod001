import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type GoogleReview = {
  id: string;
  author: string;
  rating: number;
  text: string;
  dateLabel: string;
};

type Props = {
  reviews: GoogleReview[];
};

const MAX_WORDS = 28;

const truncateByWords = (text: string, maxWords: number) => {
  const words = text.trim().split(/\s+/);

  if (words.length <= maxWords) {
    return {
      excerpt: text,
      hasMore: false,
    };
  }

  return {
    excerpt: words.slice(0, maxWords).join(" "),
    hasMore: true,
  };
};

const GoogleReviewsCarousel: React.FC<Props> = ({ reviews }) => {
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [selectedReview, setSelectedReview] = useState<GoogleReview | null>(null);
  const [isClient, setIsClient] = useState(false);

  const total = reviews.length;

  useEffect(() => {
    setIsClient(true);
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (!selectedReview) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedReview]);

  if (!total) return null;

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const visibleReviews = Array.from({ length: Math.min(visibleCount, total) }, (_, index) => {
    const itemIndex = (active + index) % total;
    return reviews[itemIndex];
  });

  return (
    <>
      <section className="pt-[4rem] px-5 sm:container mx-auto flex flex-col items-center">
        <h2 className="text-center font-nunito text-3xl md:text-4xl font-medium text-black mb-10 lg:mb-12 mx-5">
          Reseñas en <span className="degradado-c3 font-semibold">Google</span>
        </h2>

        <div className="w-full  flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
          <button
            className="hidden sm:flex w-12 h-12 shrink-0 items-center justify-center rounded-full bg-white/90 border border-primary-purple-100 shadow-lg hover:bg-primary-purple-100 hover:text-white transition text-primary-purple-100 text-2xl z-20"
            aria-label="Reseña anterior"
            onClick={goPrev}
          >
            <IoIosArrowBack />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 w-full overflow-hidden min-h-[19rem]">
            {visibleReviews.map((review) => {
              const { excerpt, hasMore } = truncateByWords(review.text, MAX_WORDS);

              return (
                <article
                  key={review.id}
                  className="group rounded-2xl border border-primary-purple-100/20 bg-white p-6 md:p-7 shadow-sm min-h-[18rem] md:min-h-[15rem] lg:min-h-[18rem] flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary-purple-100/50 animate-fade-in"
                >
                  <div className="flex flex-col mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-nunito font-bold text-[1.15rem] text-slate-900 leading-tight">
                        {review.author}
                      </p>
                      <span className="font-nunito text-[0.7rem] font-bold text-slate-300 uppercase tracking-tighter whitespace-nowrap">{review.dateLabel}</span>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <FaStar key={`${review.id}-star-${idx}`} />
                      ))}
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <p className="font-nunito text-[1rem] text-slate-600 leading-relaxed italic">
                      “{excerpt}{hasMore ? "..." : ""}”
                    </p>
                    
                    {hasMore && (
                      <button
                        type="button"
                        onClick={() => setSelectedReview(review)}
                        className="mt-6 self-start font-nunito text-xs text-primary-purple-100 font-black hover:text-primary-purple-200 transition-colors uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 duration-300"
                        aria-label={`Ver reseña completa de ${review.author}`}
                      >
                        LEER MÁS
                        <span className="text-lg">→</span>
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <button
            className="hidden sm:flex w-12 h-12 shrink-0 items-center justify-center rounded-full bg-white/90 border border-primary-purple-100 shadow-lg hover:bg-primary-purple-100 hover:text-white transition text-primary-purple-100 text-2xl z-20"
            aria-label="Siguiente reseña"
            onClick={goNext}
          >
            <IoIosArrowForward />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden gap-6 mt-8">
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 border border-primary-purple-100 shadow-lg transition text-primary-purple-100 text-2xl"
            onClick={goPrev}
          ><IoIosArrowBack /></button>
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 border border-primary-purple-100 shadow-lg transition text-primary-purple-100 text-2xl"
            onClick={goNext}
          ><IoIosArrowForward /></button>
        </div>
      </section>

      {isClient && selectedReview
        ? createPortal(
            <div
              className="fixed inset-0 min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-10 z-[200] bg-black/60 backdrop-blur-sm animate-fade-in"
              onClick={() => setSelectedReview(null)}
            >
              <div
                className="relative bg-white rounded-3xl p-7 sm:p-9 w-full max-w-[44rem] max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 transition-all z-10"
                  aria-label="Cerrar modal"
                  onClick={() => setSelectedReview(null)}
                >
                  <IoClose className="text-2xl" />
                </button>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <h3 className="font-nunito text-2xl font-bold text-black mb-1">
                      {selectedReview.author}
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-yellow-500">
                        {Array.from({ length: selectedReview.rating }).map((_, idx) => (
                          <FaStar key={`${selectedReview.id}-modal-star-${idx}`} />
                        ))}
                      </div>
                      <span className="font-nunito text-sm text-slate-400 font-medium">{selectedReview.dateLabel}</span>
                    </div>
                  </div>

                  <div className="w-12 h-1 bg-primary-purple-100/20 rounded-full"></div>

                  <p className="font-nunito text-[1.1rem] text-slate-700 leading-relaxed italic">
                    “{selectedReview.text}”
                  </p>

                  <div className="mt-4 pt-6 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-purple-100/10 flex items-center justify-center text-primary-purple-100 font-bold">
                      {selectedReview.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-nunito font-bold text-slate-400 uppercase tracking-widest">Reseña Verificada</p>
                      <p className="text-xs font-nunito text-primary-purple-100 font-semibold">Cliente Google Business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        .animate-scale-in { animation: scaleIn 0.3s cubic-bezier(0.2, 1, 0.3, 1); }
      `}</style>
    </>
  );
};

export default GoogleReviewsCarousel;
