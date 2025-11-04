'use client'

import { useState } from 'react'

export default function VideoGallery() {
  // Path Recharge actual YouTube videos
  const videos = [
    'a26XOsaMqN8',
    '0SRJa0E0-jU',
    'lcWRzrGRqJ4',
    'QD4mTnxR0B8',
    'bd6JIWh7JM0',
    'kIX7bIsP5W0',
    'LBG0HDS7jJQ',
  ]

  const [active, setActive] = useState(null)

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header / Hero */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400">Path Recharge —<span className='text-orange-300'>Video Showcase</span> </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Explore our journey through these videos highlighting Path Recharge’s modern Way Side Amenities across India.
        </p>
      </div>

      {/* Grid of video cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((id, i) => (
          <article
            key={id}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => setActive(i)}
          >
            {/* Responsive video */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                title={`video-${i}`}
                src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                className="absolute inset-0 w-full h-full border-0 rounded-t-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">Video {i + 1}</h3>
              <p className="text-sm text-gray-500 mt-1">Click to view in fullscreen</p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal - enlarged video */}
      {active !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ paddingTop: '56.25%' }} className="relative">
              <iframe
                title={`video-modal-${active}`}
                src={`https://www.youtube.com/embed/${videos[active]}?autoplay=1&rel=0&modestbranding=1`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 rounded-full px-3 py-1 text-sm font-medium shadow transition"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* Footer note */}
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Path Recharge | Way Side Amenities Video Gallery
      </div>
    </section>
  )
}