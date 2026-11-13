// Portfolio-projecten: hier voeg je video's en content toe of pas je ze aan.
// - featured: video's voor bedrijven (For Brands toont ze allemaal, liefst 5)
// - home: true → deze video staat ook op de homepagina (kies er 3)
// - more: overige content (3 à 4)
// - more: twee blokken rechts naast de YouTube-video (For Brands), linken naar Instagram;
//   omslagfoto (cover) liefst liggend of vierkant, wordt passend bijgesneden
// - photoProjects: staat momenteel niet op de site (bewaard voor later)
// - cover: bestandsnaam in public/images/portfolio/ (staand 9:16 voor video's, 4:5 voor overige content)
// - video (optioneel): bestandsnaam in public/videos/portfolio/ (mp4). Dan speelt de kaart af als een Reel
//   (vanzelf, zonder geluid; tik voor geluid). Zonder video linkt de kaart naar Instagram.
// - views (optioneel): aantal weergaven, rechts op de kaart zoals bij Reels, bijv. '12,4K' of '1,2M'

export type FeaturedProject = {
  brand: string;
  title: string;
  href: string;
  cover: string;
  video?: string;
  views?: string;
  home?: boolean;
};

export type MoreProject = {
  type: 'video' | 'photos';
  href: string;
  cover: string;
  video?: string;
  views?: string;
};

export const featured: FeaturedProject[] = [
  { brand: 'AJ Hackett', title: 'Jump into a new chapter', href: 'https://www.instagram.com/p/DZfxVNqNaAi/', cover: 'aj-hackett.jpg', home: true },
  { brand: 'Mojo Surf', title: 'Wavy week', href: 'https://www.instagram.com/p/DVnsul6EX6v/', cover: 'mojo-surf.jpg', home: true },
  { brand: 'HeliWorks', title: 'Helicopter above Queenstown', href: 'https://www.instagram.com/p/DdRcLkDthSo/', cover: 'heliworks.jpg', home: true },
  { brand: 'Pure Milford', title: "Into New Zealand's fjords", href: 'https://www.instagram.com/p/DZZD31-xcip/', cover: 'pure-milford.jpg' },
];

export const more: MoreProject[] = [
  { type: 'video', href: 'https://www.instagram.com/reel/Cyd4KKUP79o/', cover: 'more-1.jpg' },
  { type: 'video', href: 'https://www.instagram.com/reel/DcedpNguHWR/', cover: 'more-2.jpg' },
];

export type PhotoProject = {
  brand?: string;
  location: { nl: string; en: string };
  href?: string;
  images: string[];
};

export const photoProjects: PhotoProject[] = [
  {
    brand: 'Jungle Trekking',
    location: { nl: 'Sumatra · Indonesië', en: 'Sumatra · Indonesia' },
    href: 'https://www.instagram.com/sumatraorangutantrekking/',
    images: ['indonesia/monkey-sit.jpg', 'indonesia/jungle.jpg', 'indonesia/monkey-stand.jpg', 'indonesia/jungle-man.jpg'],
  },
  {
    location: { nl: 'Marokko', en: 'Morocco' },
    images: ['marokko/street.jpg', 'marokko/marktstreet.jpg'],
  },
];
