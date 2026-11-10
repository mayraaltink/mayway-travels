// "Een kijkje door mijn lens": max 10 foto's. De eerste is de mooiste; ze staan van links naar rechts
// (rij voor rij) in deze volgorde. Verander de volgorde door regels te verschuiven.
// - file: pad binnen src/assets/ (foto's worden automatisch verkleind)
// - location: optioneel, verschijnt bij hover en in de lightbox

export type LensPhoto = {
  file: string;
  location?: { nl: string; en: string };
};

export const lensPhotos: LensPhoto[] = [
  { file: 'portfolio/lens/markt.jpg' },
  { file: 'portfolio/marokko/street.jpg', location: { nl: 'Marokko', en: 'Morocco' } },
  { file: 'portfolio/indonesia/jungle.jpg', location: { nl: 'Sumatra, Indonesië', en: 'Sumatra, Indonesia' } },
  { file: 'portfolio/lens/opa.jpg' },
];
