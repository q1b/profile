import type { Site } from "../types/site.type";

export const SITE:Site = {
  title: 'Astro Documentation',
  description: 'Build faster websites with less client-side Javascript.',
};

export const OPEN_GRAPH = {
  locale: 'en_US',
  image: {
    src: '/ogImage.jpg?v=1',
    alt:
      'explore the space' +
      'explore the nature',
  },
  twitter: 'XSukhpreet',
};