/** Curated Pexels CDN URLs — reliable hotlinking for development & production */

const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const SITE_IMAGES = {
  hero: {
    main: pexels(442150, 1920),
    avatars: [
      pexels(2379004, 200),
      pexels(2182970, 200),
      pexels(774909, 200),
      pexels(1239291, 200),
    ],
  },
  cta: pexels(162553, 1920),
  values: {
    panel: pexels(3184296, 1200),
  },
  about: {
    intro: pexels(257736, 1200),
    team: pexels(3184296, 1200),
    history: pexels(1108101, 1200),
    historyVideo: {
      poster: pexels(3184296, 1920),
      /** Pexels stock — replace with your own file in /public when ready */
      src: "https://videos.pexels.com/video-files/6774643/6774643-uhd_2560_1440_25fps.mp4",
    },
  },
  services: {
    electrical: pexels(442150, 1200),
    automation: pexels(4483610, 1200),
    maintenance: pexels(3861969, 1200),
    technical: pexels(3861969, 800),
    delivery: pexels(4483610, 800),
    inventory: pexels(585625, 800),
    hero: pexels(257736, 1200),
  },
  products: {
    caseStudy1: pexels(7688336, 800),
    caseStudy2: pexels(3184465, 800),
    caseStudy3: pexels(7376, 800),
    caseStudy4: pexels(3861969, 800),
    caseStudy5: pexels(3184296, 800),
    caseStudy6: pexels(1181396, 800),
    hero: pexels(3861969, 1200),
  },
  contact: {
    hero: pexels(3184296, 1200),
  },
} as const;
