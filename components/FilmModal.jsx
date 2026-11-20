import { useEffect } from 'react';
import { X } from 'lucide-react';
import YouTubeFilm from './YouTubeFilm';

// The competition film in a full-screen overlay. Nothing loads from YouTube until the play button is pressed
// inside it (YouTubeFilm handles that), so opening the overlay is still privacy-neutral.
export const FILM = {
  id: 'lS0m0WvklyA',
  title: 'LaboraVR: a science lab in your hands',
  poster: '/competition/youtube-thumbnail.jpg',
};

export default function FilmModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={FILM.title}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <X size={16} /> Close
          </button>
        </div>
        <YouTubeFilm id={FILM.id} title={FILM.title} poster={FILM.poster} />
      </div>
    </div>
  );
}
