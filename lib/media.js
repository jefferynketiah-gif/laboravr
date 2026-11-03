// Where the lab films are hosted (Cloudflare R2, bucket "laboravr-media").
// The r2.dev address is for testing and is rate-limited. When a custom domain such as https://media.laboravr.com is
// connected to the bucket, set NEXT_PUBLIC_MEDIA_BASE to it (in .env.local and in the host's environment settings)
// and nothing else needs to change. The 360 page (public/360/index.html) has its own copy of the address.
export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE || 'https://pub-7ec837506c4d4d0a8c05482fc32de42c.r2.dev';

export const films = {
  lab: {
    src: `${MEDIA_BASE}/laboravr-student-view-v2.mp4`,
    poster: '/lab-screens/film-student-poster.jpg',
    title: 'A guided cation test',
    caption: 'Pouring sodium hydroxide at the bench, the hint when the wrong tube is picked, washing hands, and the observation question at the end.',
  },
  architect: {
    src: `${MEDIA_BASE}/laboravr-ai-architect-v2.mp4`,
    poster: '/lab-screens/film-architect-poster.jpg',
    title: 'AI Practical Architect',
    caption: 'A gas test at the bench, set up with the AI Practical Architect: limewater, a test tube, and the lesson steps in the lab.',
  },
  // Hidden until a new 360 film is recorded from the current lab build (see HANDOFF.md).
  lab360: {
    enabled: false,
    page: '/360/index.html',
    title: 'The lab in 360°',
    caption: 'Look around the lab, then watch three cation tests at the bench.',
  },
};
