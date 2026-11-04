// Where the lab films are hosted (Cloudflare R2, bucket "laboravr-media").
// The r2.dev address is for testing and is rate-limited. When a custom domain such as https://media.laboravr.com is
// connected to the bucket, set NEXT_PUBLIC_MEDIA_BASE to it (in .env.local and in the host's environment settings)
// and nothing else needs to change. The 360 page (public/360/index.html) has its own copy of the address.
export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE || 'https://pub-7ec837506c4d4d0a8c05482fc32de42c.r2.dev';

export const films = {
  arrival: {
    src: `${MEDIA_BASE}/laboravr-arrival-v1.mp4`,
    poster: '/lab-screens/film-arrival-poster.jpg',
    title: 'Arriving at the lab',
    caption: 'Up the path to the entrance, through the doors, and into the lobby, where the subjects and practicals are laid out on boards.',
  },
  chemistry: {
    src: `${MEDIA_BASE}/laboravr-chemistry-v1.mp4`,
    poster: '/lab-screens/film-chemistry-poster.jpg',
    title: 'Chemistry practicals',
    caption: 'A cation test, the hint when the wrong reagent is picked, flame tests with the Bunsen burner and wire, litmus and an ammonia test, and a carbonate gas test through limewater.',
  },
  physics: {
    src: `${MEDIA_BASE}/laboravr-physics-v1.mp4`,
    poster: '/lab-screens/film-physics-poster.jpg',
    title: 'Physics: the period of a pendulum',
    caption: 'The pendulum on its stand, the timing dial and reading table, and the graph board.',
  },
  // Recorded 2026-11-04 from the current lab build. The player page (public/360/index.html) has its own copy of the file address.
  lab360: {
    enabled: true,
    page: '/360/index.html',
    title: 'The lab in 360°',
    caption: 'Stand at the bench and look around the LaboraVR chemistry lab. Drag to turn, scroll or pinch to zoom.',
  },
};
