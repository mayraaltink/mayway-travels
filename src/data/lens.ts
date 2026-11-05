// "Neem een kijkje door mijn lens": de mooiste foto's (max 20), in deze volgorde getoond.
// - file: pad binnen src/assets/ (foto's worden automatisch verkleind)
// - location: optioneel, verschijnt bij hover en in de lightbox

export type LensPhoto = {
  file: string;
  location?: { nl: string; en: string };
};

export const lensPhotos: LensPhoto[] = [
  { file: 'portfolio/indonesia/monkey-sit.jpg', location: { nl: 'Sumatra, Indonesië', en: 'Sumatra, Indonesia' } },
  { file: 'Header.jpg', location: { nl: 'Margaret River, West-Australië', en: 'Margaret River, Western Australia' } },
  { file: 'portfolio/marokko/street.jpg', location: { nl: 'Marokko', en: 'Morocco' } },
  { file: 'portfolio/indonesia/jungle.jpg', location: { nl: 'Sumatra, Indonesië', en: 'Sumatra, Indonesia' } },
  { file: 'portfolio/indonesia/monkey-stand.jpg', location: { nl: 'Sumatra, Indonesië', en: 'Sumatra, Indonesia' } },
  { file: 'portfolio/marokko/marktstreet.jpg', location: { nl: 'Marokko', en: 'Morocco' } },
];
