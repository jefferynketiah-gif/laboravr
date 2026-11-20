import { useState } from 'react';
import Image from 'next/image';

// A YouTube film that loads nothing from YouTube until the visitor presses play.
// Until then it is only our own poster image, so no YouTube cookies or scripts reach the page.
// After the click it plays from youtube-nocookie.com (YouTube's privacy-enhanced mode).
export default function YouTubeFilm({ id, title, poster, caption }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="card-shadow overflow-hidden rounded-2xl border border-edge bg-chalk">
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-uv"
            aria-label={`Play the film: ${title}`}
          >
            <Image
              src={poster}
              alt=""
              fill
              priority
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-chalk/20 transition-colors group-hover:bg-chalk/10" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-uv text-white shadow-2xl transition-transform group-hover:scale-110 md:h-24 md:w-24">
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-current md:h-10 md:w-10" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="absolute bottom-4 right-4 hidden sm:block rounded-full bg-chalk/80 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-white">
              2:48 · PLAYS FROM YOUTUBE
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="bg-void px-5 py-4 text-sm text-chalk-dim">{caption}</figcaption>
      )}
    </figure>
  );
}
