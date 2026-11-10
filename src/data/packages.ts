// Social media pakketten (pagina /nl/social-media en /en/social-media).
// De pakketten verschillen in niveau van ontzorging, niet alleen in aantallen:
// Citytrip = zichtbaar & consistent · Roadtrip = groeien met een community · Wereldreis = volledig ontzorgd
// - name: pakkende naam   - tagline: waar het pakket voor staat   - bestFor: voor wie het ideaal is
// - price: prijs of "Op aanvraag"   - featured: true = uitgelicht in het midden
// - includes: optioneel, bijv. "Alles van Citytrip, plus:" (dan staan in items alleen de extra's)
// - items: wat er in het pakket zit (bij includes: alleen wat er bovenop het vorige pakket bij komt)

type Text = { nl: string; en: string };

export type Package = {
  id: string;
  name: Text;
  tagline: Text;
  bestFor: Text;
  price: Text;
  featured?: boolean;
  includes?: Text;
  items: { nl: string[]; en: string[] };
};

export const packages: Package[] = [
  {
    id: 'citytrip',
    name: { nl: 'Citytrip', en: 'City Trip' },
    tagline: { nl: 'Zichtbaar en consistent online', en: 'Visible and consistent online' },
    bestFor: {
      nl: 'Ideaal voor merken die willen starten of hun socials eindelijk op orde willen hebben.',
      en: 'Ideal for brands that want to get started or finally get their socials in order.',
    },
    price: { nl: 'Op aanvraag', en: 'On request' },
    items: {
      nl: [
        '8 posts per maand',
        '2 storysets per week',
        'Feed glow-up: bio, highlights en feed geoptimaliseerd',
        'Maandelijkse contentkalender',
        'Bewerking van aangeleverd beeldmateriaal',
        'Opmaak van stories en graphics in jouw huisstijl',
        'Pakkende captions en relevante hashtags',
        'Inplannen en publiceren op piekmomenten',
        "Community management: DM's en comments",
        'Maandelijks resultatenoverzicht',
      ],
      en: [
        '8 posts per month',
        '2 story sets per week',
        'Feed glow-up: bio, highlights and feed optimised',
        'Monthly content calendar',
        'Editing and finishing of supplied visuals',
        'Story and graphic design in your brand style',
        'Catchy captions and relevant hashtags',
        'Scheduling and publishing at peak times',
        'Community management: DMs and comments',
        'Monthly results overview',
      ],
    },
  },
  {
    id: 'roadtrip',
    name: { nl: 'Roadtrip', en: 'Road Trip' },
    tagline: { nl: 'Groeien met een actieve community', en: 'Growing with an active community' },
    bestFor: {
      nl: 'Ideaal voor merken die willen groeien en een betrokken community willen opbouwen.',
      en: 'Ideal for brands that want to grow and build an engaged community.',
    },
    price: { nl: 'Op aanvraag', en: 'On request' },
    featured: true,
    includes: { nl: 'Alles van Citytrip, plus:', en: 'Everything in City Trip, plus:' },
    items: {
      nl: [
        '10 posts per maand (i.p.v. 8)',
        '3 storysets per week (i.p.v. 2)',
        'Bewerking van beeldmateriaal: aangeleverd of door mij geschoten (in overleg)',
        'Maandelijkse optimalisatie van de contentstrategie',
        'Promotie-instellingen',
        'Actief inspelen op trends en relevante ontwikkelingen',
        'Maandelijkse resultatenanalyse en bijsturing',
      ],
      en: [
        '10 posts per month (instead of 8)',
        '3 story sets per week (instead of 2)',
        'Editing of visuals: supplied or shot by me (by arrangement)',
        'Monthly optimisation of the content strategy',
        'Promotion settings',
        'Actively responding to trends and relevant developments',
        'Monthly results analysis and adjustments',
      ],
    },
  },
  {
    id: 'wereldreis',
    name: { nl: 'Wereldreis', en: 'World Tour' },
    tagline: { nl: 'Volledig ontzorgd, maximaal zichtbaar', en: 'Fully handled, maximum visibility' },
    bestFor: {
      nl: 'Ideaal voor merken die alles uit handen willen geven en écht willen opvallen.',
      en: 'Ideal for brands that want to hand everything over and truly stand out.',
    },
    price: { nl: 'Op aanvraag', en: 'On request' },
    includes: { nl: 'Alles van Roadtrip, plus:', en: 'Everything in Road Trip, plus:' },
    items: {
      nl: [
        '12 posts per maand (i.p.v. 10)',
        '4 storysets per week (i.p.v. 3)',
        'Maandelijks content schieten op locatie (max. 3 uur)',
        'Editing van alle geschoten content',
        'Maandelijkse analyse met presentatie en strategiegesprek',
      ],
      en: [
        '12 posts per month (instead of 10)',
        '4 story sets per week (instead of 3)',
        'Monthly content shoot on location (max. 3 hours)',
        'Editing of all footage shot',
        'Monthly analysis with presentation and strategy call',
      ],
    },
  },
];
