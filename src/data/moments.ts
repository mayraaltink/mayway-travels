// MAY WAY Moments: jouw eigen favoriete ervaringen (maximaal 12).
// - image: pad in public/ (staande foto's werken het mooist)
// - title + location: korte titel en plek (zichtbaar op de kaart)
// - story: het korte verhaal dat verschijnt als je op het moment klikt
// - zoom (optioneel): inzoomen op een punt van de foto, bijv. { scale: 1.8, origin: '48% 100%' }
//   (handig als het belangrijkste onderaan staat en anders achter de tekst valt)
// Ontbreekt een foto, dan toont de kaart een turquoise vlak.

type Text = { nl: string; en: string };

export type Moment = {
  image: string;
  title: Text;
  location: string;
  story: Text;
  zoom?: { scale: number; origin: string };
};

export const moments: Moment[] = [
  {
    image: '/images/australia/heli.jpg',
    title: { nl: 'Helikoptervlucht boven Katherine Gorge', en: 'Helicopter flight over Katherine Gorge' },
    location: 'Katherine · Australië',
    story: {
      nl: 'Vanaf Katherine in een vlucht van 25 minuten met de helikopter over de kloven van Katherine Gorge vliegen, met de rivier die zich diep beneden tussen de rode rotswanden door slingert. Pas vanuit de lucht zie je hoe groot en ruig dit landschap is.',
      en: 'A 25-minute helicopter flight from Katherine over the gorges of Katherine Gorge, with the river winding far below between the red rock walls. Only from the air do you see how vast and rugged this landscape is.',
    },
  },
  {
    image: '/images/australia/kili.jpg',
    title: { nl: 'De Kilimanjaro beklimmen', en: 'Climbing Kilimanjaro' },
    location: 'Kilimanjaro · Tanzania',
    story: {
      nl: 'Een van de bizarste avonturen: het beklimmen van de Kilimanjaro via de zesdaagse Machame-route. Iedere dag liepen we door een ander landschap naar de hoogste vrijstaande berg van Afrika.',
      en: 'One of the most incredible adventures: climbing Kilimanjaro via the six-day Machame route. Every day we walked through a different landscape towards the highest free-standing mountain in Africa.',
    },
  },
  {
    image: '/images/australia/sahara.jpg',
    title: { nl: 'Overnachten in de Sahara Woestijn', en: 'Spending the night in the Sahara Desert' },
    location: 'Sahara · Marokko',
    story: {
      nl: 'Eindeloze zandduinen zover je kunt kijken, en ’s nachts een sterrenhemel zoals je die nergens anders ziet. In de stilte van de Sahara voel je pas hoe groot de wereld is.',
      en: 'Endless sand dunes as far as you can see, and at night a starry sky like nowhere else. In the silence of the Sahara you truly feel how big the world is.',
    },
  },
  {
    image: '/images/australia/redwoods-trail.jpg',
    title: { nl: 'Wandelen door de Redwoods', en: 'Walking through the Redwoods' },
    location: 'Rotorua · Nieuw-Zeeland',
    story: {
      nl: 'Overdag voel je je al piepklein tussen de gigantische redwoods, maar ’s avonds wordt het bos pas echt magisch. Lantaarns verlichten de hangbruggen hoog tussen de stammen, en het voelt alsof je door een sprookje loopt.',
      en: 'During the day you already feel tiny among the giant redwoods, but at night the forest becomes truly magical. Lanterns light up the suspension bridges high between the trunks, and it feels like walking through a fairytale.',
    },
  },
  {
    image: '/images/australia/mooi.jpg',
    title: { nl: 'Het mooiste strand van West-Australië', en: 'The most beautiful beach in Western Australia' },
    location: 'Hamelin Bay · Australië',
    // ingezoomd op ons tweetjes onderaan het strand, zodat we boven de tekst staan
    zoom: { scale: 1.6, origin: '48% 100%' },
    story: {
      nl: 'Aan de westkust, zo’n 15 minuten rijden vanaf Margaret River, ligt Hamelin Bay Beach. Wit zand, helderblauw water en niemand anders te bekennen: paradijs op aarde!',
      en: 'On the west coast, about a 15-minute drive from Margaret River, lies Hamelin Bay Beach. White sand, crystal-clear blue water and not another soul in sight: paradise on earth!',
    },
  },
  {
    image: '/images/australia/filippijnen.jpg',
    title: { nl: 'Kerst vieren op expeditie', en: 'Celebrating Christmas on expedition' },
    location: 'El Nido → Coron · Filipijnen',
    story: {
      nl: 'Tijdens de expeditie van El Nido naar Coron vierden we kerst op een bijzondere manier: onderweg deelden we voedselpakketten uit in de kleine dorpjes op de eilanden. Een kerst die ik nooit meer vergeet.',
      en: 'During the expedition from El Nido to Coron we celebrated Christmas in a special way: along the way we handed out food parcels in the small island villages. A Christmas I will never forget.',
    },
  },
  {
    image: '/images/australia/gibbon-boomhut.jpg',
    title: { nl: 'Slapen in de hoogste boomhut ter wereld', en: 'Sleeping in the highest treehouse in the world' },
    location: 'The Gibbon Experience · Laos',
    story: {
      nl: 'Met een zipline door de jungle naar je slaapplek: een boomhut hoog in de toppen van het regenwoud, een van de hoogste boomhutten ter wereld. ’s Ochtends word je wakker van de gibbons die door het bos roepen.',
      en: 'Ziplining through the jungle to your bed for the night: a treehouse high in the rainforest canopy, one of the highest treehouses in the world. In the morning you wake up to the gibbons calling through the forest.',
    },
  },
];