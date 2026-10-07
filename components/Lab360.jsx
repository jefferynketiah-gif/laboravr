// The 360 degree lab clip, in its own player page (public/360/index.html) so the heavy video and the
// 3D viewer only load when someone opens it.
export default function Lab360({ page = '/360/index.html', title, caption }) {
  return (
    <figure className="lift-hover card-shadow overflow-hidden rounded-2xl border border-edge bg-panel">
      <iframe
        className="aspect-video w-full bg-void"
        src={page}
        title={title || 'The lab in 360°'}
        loading="lazy"
        allow="fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
        allowFullScreen
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
