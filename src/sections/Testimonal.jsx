// ...existing code...
import React, { useState, useEffect, useRef } from 'react'

export default function Testimonal() {
  const testimonials = [
    {
      id: 1,
      name: 'Ali Usman Qureshi',
      role: 'Local Guide',
      quote:
        'I came to them from some reference,but first I read the reviews of their clients which is satisfactory, I talked to them and took my car and got the best possible tyres in my budget.I prefer others to visit there for alignment and tyre replacement, they are highly professional.',
      img: 'https://lh3.googleusercontent.com/a-/ALV-UjVp1pMlpu3DN4-TlrYW5uxg5V3X9cTgcIHNNzjWqZ5Gmz8c4lEA=w54-h54-p-rp-mo-ba3-br100',
      rating: 5
    },
    {
      id: 2,
      name: 'Yasir Noman',
      role: 'Delivery Driver',
      quote:
        'Very professional in wheels.alignment.and balance automotive cars and trucks. With good manners having qualities.of tyre .',
      img: 'https://lh3.googleusercontent.com/a-/ALV-UjXkVbfdfiqtARj7tzsYvwcGRCvOPuQrZ6VzUkQn9U0e6oSYWomo=w54-h54-p-rp-mo-ba6-br100',
      rating: 5
    },
    {
      id: 3,
      name: 'Mohammad Ahmed',
      role: 'Commuter',
      quote:
        'Perfect in every aspect 🙌🏻 …',
      img: 'https://lh3.googleusercontent.com/a/ACg8ocK0idvCsS87khWXHzgsW0IiubfooeO06-RkVUbmfIRqEYZZx0c=w54-h54-p-rp-mo-br100',
      rating: 5
    },
    {
      id: 4,
      name: 'Bilal C',
      role: 'Commuter',
      quote:
        'The owner has good knowledge about different tyres and offers really good advice regarding whatever tyre you are buying. The prices are reasonable and no-doubt in the quality of service this shop provides.',
      img: 'https://lh3.googleusercontent.com/a-/ALV-UjXuUbGaD2m6yW6zRmZyBocLHRlamI0tOkDwUm3578ETsBe9K76A=w54-h54-p-rp-mo-ba3-br100',
      rating: 5
    },
    {
      id: 5,
      name: 'Jawad Butt',
      role: 'Commuter',
      quote:
        'Very professional service. Honest and professional people.',
      img: 'https://lh3.googleusercontent.com/a/ACg8ocJm03CZa3k1378mL3t-iXQjVwd6Srdus7qruf92nr5KSZ_-rK8F=w54-h54-p-rp-mo-ba2-br100',
      rating: 5
    },
  ]

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length
  const intervalRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count])

  useEffect(() => {
    clearInterval(intervalRef.current)
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % count)
      }, 5000)
    }
    return () => clearInterval(intervalRef.current)
  }, [paused, count])

  function prev() {
    setIndex((i) => (i - 1 + count) % count)
  }
  function next() {
    setIndex((i) => (i + 1) % count)
  }
  function goTo(i) {
    setIndex(i)
  }

  function Stars({ value }) {
    return (
      <div className="flex items-center gap-1" aria-hidden="false" role="img" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < value
          return (
            <svg
              key={i}
              className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
              viewBox="0 0 20 20"
              fill={filled ? 'currentColor' : 'none'}
              stroke={filled ? 'none' : 'currentColor'}
              strokeWidth="1.2"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10 1.6l2.462 4.99 5.513.802-3.987 3.887.94 5.487L10 13.9 4.072 16.766l.94-5.487L1.025 7.392l5.513-.802L10 1.6z" />
            </svg>
          )
        })}
      </div>
    )
  }

  return (
    <section
      className="max-w-4xl mx-auto p-6 font-[montserrat]"
      id='testimonal'
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="text-center text-2xl font-semibold mb-6 font-[montserrat]">What our customers say</h2>

      <div className="relative">
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live="polite"
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="min-w-full px-6 py-8"
                aria-roledescription="slide"
                aria-label={`${t.name} — ${t.role}`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 font-[montserrat]">
                  <img
                    src={t.img}
                    alt={`${t.name} avatar`}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-none ring-2 ring-gray-100 font-[montserrat]"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <blockquote className="text-gray-900 text-base md:text-base leading-relaxed font-[montserrat]">“{t.quote}”</blockquote>
                    <footer className="mt-3 text-sm text-gray-600 flex gap-2 items-center font-[m]">
                      <span className="font-medium text-gray-900">{t.name}</span>

                      {/* <span className="text-xs text-gray-500">— {t.role}</span> */}
                    </footer>
                    <div className="flex-shrink-0">
                      <Stars value={t.rating} />
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      {/* <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 focus:outline-none"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 focus:outline-none"
        >
          ›
        </button> */}


      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-3" role="tablist" aria-label="Select testimonial">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial ${i + 1}`}
            className={`w-3 h-3 rounded-full focus:outline-none ${i === index ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  )
}
// ...existing code...