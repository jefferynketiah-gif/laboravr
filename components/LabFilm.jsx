// A lab film: a plain video with controls. It loads only its first frame until someone presses play,
// so a page with a film on it stays light.
export default function LabFilm({ src, title, caption, poster }) {
  return (
    <figure className="lift-hover card-shadow overflow-hidden rounded-2xl border border-edge bg-panel">
      <video
        className="aspect-video w-full bg-void"
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
      />
      {(title || caption) && (
        <figcaption className="px-5 py-4">
          {title && <p className="font-mono text-[11px] tracking-[0.2em] text-uv">{title}</p>}
          {caption && <p className="mt-2 text-sm text-chalk-dim">{caption}</p>}
        </figcaption>
      )}
    </figure>
  );
}
