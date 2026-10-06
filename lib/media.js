// Where the lab films are hosted (Cloudflare R2, bucket "laboravr-media").
// The r2.dev address is for testing and is rate-limited. When a custom domain such as https://media.laboravr.com is
// connected to the bucket, set NEXT_PUBLIC_MEDIA_BASE to it (in .env.local and in the host's environment settings)
// and nothing else needs to change. The 360 page (public/360/index.html) has its own copy of the address.
export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE || 'https://pub-7ec837506c4d4d0a8c05482fc32de42c.r2.dev';

export const films = {
  lab: {
    src: `${MEDIA_BASE}/laboravr-cation-trail.mp4`,
    title: 'Inside the LaboraVR lab',
    caption: 'A guided cation test, from the bottle to the mark-scheme observation.',
  },
  student: {
    src: `${MEDIA_BASE}/laboravr-student-view.mp4`,
    title: 'What the student sees',
    caption: 'The real guided lesson in VR: the lab, the questions, and the feedback on a wrong answer.',
  },
  lab360: {
    page: '/360/index.html',
    title: 'The lab in 360°',
    caption: 'Look around the lab, then watch three cation tests at the bench.',
  },
};
