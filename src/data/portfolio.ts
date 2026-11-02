// Portfolio-projecten: hier voeg je video's en content toe of pas je ze aan.
// - featured: video's voor bedrijven (For Brands toont ze allemaal, liefst 5)
// - home: true → deze video staat ook op de homepagina (kies er 3)
// - more: overige content (3 à 4)
// - cover: bestandsnaam in public/images/portfolio/ (staand 9:16 voor video's, 4:5 voor overige content)

export type FeaturedProject = {
  brand: string;
  title: string;
  href: string;
  cover: string;
  home?: boolean;
};

export type MoreProject = {
  type: 'video' | 'photos';
  href: string;
  cover: string;
};

export const featured: FeaturedProject[] = [
  { brand: 'AJ Hackett', title: 'Jump into a new chapter', href: 'https://www.instagram.com/p/DZfxVNqNaAi/', cover: 'aj-hackett.jpg', home: true },
  { brand: 'Mojo Surf', title: 'Wavy week', href: 'https://www.instagram.com/p/DVnsul6EX6v/', cover: 'mojo-surf.jpg', home: true },
  { brand: 'HeliWorks', title: 'Helicopter above Queenstown', href: 'https://www.instagram.com/p/DdRcLkDthSo/', cover: 'heliworks.jpg', home: true },
  { brand: 'Pure Milford', title: "Into New Zealand's fjords", href: 'https://www.instagram.com/p/DZZD31-xcip/', cover: 'pure-milford.jpg' },
];

export const more: MoreProject[] = [
  { type: 'video', href: 'https://www.instagram.com/p/DCYxUT1yiOm/', cover: 'more-1.jpg' },
  { type: 'video', href: 'https://www.instagram.com/p/C2o0BYNPXaP/', cover: 'more-2.jpg' },
  { type: 'photos', href: 'https://www.instagram.com/p/CzT0FervoKb/', cover: 'more-3.jpg' },
];
