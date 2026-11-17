// SEO per pagina: de titel (tabblad + Google) en omschrijving (het grijze tekstje onder de link in Google).
// - sleutel = het pad zonder taal, bijv. '/for-brands' voor /nl/for-brands/ en /en/for-brands/
// - titel: maximaal ± 60 tekens, omschrijving: ± 140–160 tekens (langer wordt in Google afgekapt)
// - Elke pagina in deze lijst komt ook in de sitemap (/sitemap.xml) waarmee Google de site vindt.
// Pagina's die hier niet in staan krijgen de titel uit de pagina zelf en de standaard omschrijving.

type Lang = 'nl' | 'en';
type Seo = { title: string; description: string };

export const SITE_URL = 'https://may-ways.com';
export const SITE_NAME = 'MAY WAYS';

// Standaard deelfoto (als een link gedeeld wordt via WhatsApp, Instagram, LinkedIn enz.)
export const DEFAULT_IMAGE = '/images/hero/header-6.jpg';

export const defaultSeo: Record<Lang, Seo> = {
  nl: {
    title: 'MAY WAYS',
    description:
      'MAY WAYS legt merkbelevingen vast en beheert jouw socials. Gespecialiseerd in mobile-first content voor merken met een verhaal én een beleving.',
  },
  en: {
    title: 'MAY WAYS',
    description:
      'MAY WAYS captures brand experiences and manages your socials. Specialised in mobile-first content for brands with a story and an experience.',
  },
};

export const pageSeo: Record<string, Record<Lang, Seo>> = {
  '/': {
    nl: defaultSeo.nl,
    en: defaultSeo.en,
  },
  '/for-brands': {
    nl: {
      title: 'Mobile-first content & video’s op locatie | MAY WAYS',
      description:
        'Creatieve concepten en short-form video’s op locatie voor TikTok en Instagram. Ik leg jouw merkbeleving vast en zet jouw merk avontuurlijk op de kaart.',
    },
    en: {
      title: 'Mobile-first content & on-location video | MAY WAYS',
      description:
        'Creative concepts and short-form videos shot on location for TikTok and Instagram. I capture your brand experience and put your brand on the map.',
    },
  },
  '/social-media': {
    nl: {
      title: 'Social media uit handen geven: pakketten | MAY WAYS',
      description:
        'Je socials uit handen geven? Van contentstrategie en creatieve concepten tot mobile-first video’s, captions en community management. Bekijk de pakketten.',
    },
    en: {
      title: 'Social media management packages | MAY WAYS',
      description:
        'Hand over your socials: from content strategy and creative concepts to mobile-first videos, captions and community management. View the packages.',
    },
  },
  '/about': {
    nl: {
      title: 'Over Mayra: content creator & creative partner | MAY WAYS',
      description:
        'Hi, ik ben Mayra: content creator en creative partner voor merken. Na 2,5 jaar Australië leg ik merkbelevingen vast met een avontuurlijke, mobile-first blik.',
    },
    en: {
      title: 'About Mayra: content creator & creative partner | MAY WAYS',
      description:
        'Hi, I’m Mayra: content creator and creative partner for brands. After 2.5 years in Australia, I capture brand experiences with an adventurous, mobile-first eye.',
    },
  },
  '/community': {
    nl: {
      title: 'Community & MAY Moments | MAY WAYS',
      description:
        'Mijn mooiste reismomenten, van de Kilimanjaro tot de Nevis Bungy, en reisinspiratie voor jouw volgende avontuur in Australië of Nieuw-Zeeland.',
    },
    en: {
      title: 'Community & MAY Moments | MAY WAYS',
      description:
        'My favourite travel moments, from Kilimanjaro to the Nevis Bungy, and travel inspiration for your next adventure in Australia or New Zealand.',
    },
  },
  '/contact': {
    nl: {
      title: 'Contact: samenwerken met MAY WAYS',
      description:
        'Op zoek naar een content creator of creative partner voor je socials? Neem contact op voor video’s op locatie, creatieve concepten en social media beheer.',
    },
    en: {
      title: 'Contact: work with MAY WAYS',
      description:
        'Looking for a content creator or creative partner for your socials? Get in touch for on-location videos, creative concepts and social media management.',
    },
  },
  '/privacy': {
    nl: {
      title: 'Privacy-instellingen & cookies | MAY WAYS',
      description:
        'Welke cookies en gegevens MAY WAYS gebruikt, hoe je cookies uitzet in je browser en hoe je je gegevens kunt inzien, aanpassen of laten verwijderen.',
    },
    en: {
      title: 'Privacy settings & cookies | MAY WAYS',
      description:
        'Which cookies and data MAY WAYS uses, how to turn off cookies in your browser and how to view, change or delete your personal data.',
    },
  },
  '/destinations': {
    nl: {
      title: 'Bestemmingen: Australië & Nieuw-Zeeland | MAY WAYS',
      description:
        'Ontdek Australië en Nieuw-Zeeland: hotspots, reisroutes en persoonlijke tips van iemand die er jaren woonde en reisde.',
    },
    en: {
      title: 'Destinations: Australia & New Zealand | MAY WAYS',
      description:
        'Discover Australia and New Zealand: hotspots, travel routes and personal tips from someone who lived and travelled there for years.',
    },
  },
  '/destinations/australia': {
    nl: {
      title: 'Australië: reisroutes, hotspots & tips | MAY WAYS',
      description:
        'Reizen door Australië: de mooiste reisroutes langs de oost- en westkust, hotspots zoals het Great Barrier Reef en K’gari, en praktische reistips.',
    },
    en: {
      title: 'Australia: travel routes, hotspots & tips | MAY WAYS',
      description:
        'Travelling Australia: the best routes along the east and west coast, hotspots like the Great Barrier Reef and K’gari, and practical tips for your trip.',
    },
  },
  '/destinations/new-zealand': {
    nl: {
      title: 'Nieuw-Zeeland: reisroutes, hotspots & tips | MAY WAYS',
      description:
        'Reizen door Nieuw-Zeeland: reisroutes over het Noorder- en Zuidereiland, hotspots als Milford Sound, Tongariro en Queenstown, en persoonlijke tips.',
    },
    en: {
      title: 'New Zealand: travel routes, hotspots & tips | MAY WAYS',
      description:
        'Travelling New Zealand: routes across the North and South Island, hotspots like Milford Sound, Tongariro and Queenstown, and personal tips.',
    },
  },
  '/route-planner': {
    nl: {
      title: 'Routeplanner: jouw reis op maat | MAY WAYS',
      description:
        'Vertel waar je naartoe wilt en hoe jouw ideale reis eruitziet. Wij vertalen jouw wensen naar een persoonlijk reisplan op maat.',
    },
    en: {
      title: 'Route planner: your tailor-made trip | MAY WAYS',
      description:
        'Tell us where you want to go and what your ideal trip looks like. We turn your wishes into a personal, tailor-made travel plan.',
    },
  },
  '/blogs/voorbereidingen': {
    nl: {
      title: 'Voorbereidingen Working Holiday Australië | MAY WAYS',
      description:
        'Wat neem je mee naar Australië? Zorgverzekering, bankrekening, simkaart, inpaklijst en handige apps: alles voor je Working Holiday op een rij.',
    },
    en: {
      title: 'Preparing for your Working Holiday in Australia | MAY WAYS',
      description:
        'What to bring to Australia? Health insurance, bank account, SIM card, packing list and handy apps: everything for your Working Holiday in one place.',
    },
  },
  '/blogs/VisaAus': {
    nl: {
      title: 'Working Holiday visum Australië aanvragen | MAY WAYS',
      description:
        'Stap voor stap je eerste Working Holiday visum voor Australië aanvragen, met tips uit eigen ervaring.',
    },
    en: {
      title: 'Applying for your Australian Working Holiday visa | MAY WAYS',
      description:
        'Step by step: applying for your first Working Holiday visa for Australia, with tips from my own experience.',
    },
  },
  '/blogs/travel-budget': {
    nl: {
      title: 'Het leven in Australië | MAY WAYS',
      description:
        'Hoe is het leven in Australië echt? Over de laid-back lifestyle, koffiecultuur, barbecues, sporten en wat het kost om er te wonen.',
    },
    en: {
      title: 'Life in Australia | MAY WAYS',
      description:
        'What is life in Australia really like? About the laid-back lifestyle, coffee culture, barbecues, sports and the cost of living there.',
    },
  },
  '/blogs/tips-australia': {
    nl: {
      title: 'Stap in een reismentaliteit: tips voor Australië | MAY WAYS',
      description:
        'Tips om het meeste uit je reis door Australië te halen: hoe je nieuwe mensen ontmoet, slim reist en openstaat voor spontane avonturen.',
    },
    en: {
      title: 'Step into a travel mindset: tips for Australia | MAY WAYS',
      description:
        'Tips to make the most of your trip through Australia: how to meet new people, travel smart and stay open to spontaneous adventures.',
    },
  },
  '/blogs/beste-reisseizoen': {
    nl: {
      title: 'Wat is het beste reisseizoen voor Australië? | MAY WAYS',
      description:
        'Wanneer kun je het beste naar Australië? De seizoenen per regio, de kracht van de zon en waar je in welke maand naartoe gaat.',
    },
    en: {
      title: 'What is the best season to travel Australia? | MAY WAYS',
      description:
        'When is the best time to visit Australia? The seasons per region, the strength of the sun and where to go in which month.',
    },
  },
};
