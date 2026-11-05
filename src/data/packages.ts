// Social media pakketten (pagina /nl/social-media en /en/social-media).
// De pakketten verschillen in niveau van ontzorging, niet alleen in aantallen:
// Citytrip = zichtbaar & consistent · Roadtrip = groeien met een community · Wereldreis = volledig ontzorgd
// - name: pakkende naam   - tagline: waar het pakket voor staat   - bestFor: voor wie het ideaal is
// - price: prijs of "Op aanvraag"   - featured: true = uitgelicht in het midden
// - items: alles wat er in het pakket zit, volledig uitgeschreven

type Text = { nl: string; en: string };

export type Package = {
  id: string;
  name: Text;
  tagline: Text;
  bestFor: Text;
  price: Text;
  featured?: boolean;
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
        "Community management: reageren op DM's en comments",
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
        'Community management: replying to DMs and comments',
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
    items: {
      nl: [
        '10 posts per maand',
        '3 storysets per week',
        'Maandelijkse optimalisatie van de contentstrategie',
        'Feed glow-up: bio, highlights en feed geoptimaliseerd',
        'Maandelijkse contentkalender',
        'Bewerking van beeldmateriaal',
        'Actief inspelen op trends en relevante ontwikkelingen',
        'Opmaak van stories en graphics in jouw huisstijl',
        'Pakkende captions en relevante hashtags',
        'Inplannen en publiceren op piekmomenten',
        "Community management: reageren op DM's en comments",
        'Maandelijkse resultatenanalyse en bijsturing',
      ],
      en: [
        '10 posts per month',
        '3 story sets per week',
        'Monthly optimisation of the content strategy',
        'Feed glow-up: bio, highlights and feed optimised',
        'Monthly content calendar',
        'Editing of visuals',
        'Actively responding to trends and relevant developments',
        'Story and graphic design in your brand style',
        'Catchy captions and relevant hashtags',
        'Scheduling and publishing at peak times',
        'Community management: replying to DMs and comments',
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
    items: {
      nl: [
        '12 posts per maand',
        '4 storysets per week',
        'Maandelijks content schieten op locatie (max. 4 uur)',
        'Editing van alle geschoten content',
        'Uitgebreide contentstrategie en campagneplanning',
        'Feed glow-up: bio, highlights en feed geoptimaliseerd',
        'Maandelijkse contentkalender',
        'Actief inspelen op trends en relevante ontwikkelingen',
        'Opmaak van stories en graphics in jouw huisstijl',
        'Pakkende captions en relevante hashtags',
        'Inplannen en publiceren op piekmomenten',
        "Community management: reageren op DM's en comments",
        'Maandelijkse analyse met presentatie en strategiegesprek',
      ],
      en: [
        '12 posts per month',
        '4 story sets per week',
        'Monthly content shoot on location (max. 4 hours)',
        'Editing of all footage shot',
        'Extensive content strategy and campaign planning',
        'Feed glow-up: bio, highlights and feed optimised',
        'Monthly content calendar',
        'Actively responding to trends and relevant developments',
        'Story and graphic design in your brand style',
        'Catchy captions and relevant hashtags',
        'Scheduling and publishing at peak times',
        'Community management: replying to DMs and comments',
        'Monthly analysis with presentation and strategy call',
      ],
    },
  },
];
