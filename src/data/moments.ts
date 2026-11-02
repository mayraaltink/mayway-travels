// MAY WAY Moments: jouw eigen favoriete ervaringen.
// - image: pad in public/ (staande foto's werken het mooist)
// - title + location: korte titel en plek
// - text (optioneel): een korte zin over het moment
// Ontbreekt een foto, dan toont de kaart een turquoise vlak.

export type Moment = {
  image: string;
  title: { nl: string; en: string };
  location: string;
  text?: { nl: string; en: string };
};

export const moments: Moment[] = [
  {
    image: '/images/australia/unnamed.jpg',
    title: { nl: 'Duiken tussen het koraal', en: 'Diving among the coral' },
    location: 'Great Barrier Reef',
  },
  {
    image: '/images/australia/aus_main.webp',
    title: { nl: 'Op weg naar Uluru', en: 'On the road to Uluru' },
    location: 'Northern Territory',
  },
  {
    image: '/images/australia/surf-boys.jpg',
    title: { nl: 'Surfochtend aan de kust', en: 'Surf morning on the coast' },
    location: 'New South Wales',
  },
  {
    image: '/images/about/great-ocean-road.jpg',
    title: { nl: 'De Great Ocean Road', en: 'The Great Ocean Road' },
    location: 'Victoria',
  },
  {
    image: '/images/about/sydney-opera.jpg',
    title: { nl: 'Zonsondergang in Sydney', en: 'Sunset in Sydney' },
    location: 'Sydney',
  },
];
