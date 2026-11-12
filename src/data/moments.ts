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
      nl: 'Met de helikopter over de kloven van Katherine Gorge vliegen, met de rivier die zich diep beneden tussen de rode rotswanden door slingert. Pas vanuit de lucht zie je hoe groot en ruig dit landschap is.',
      en: 'Flying over the gorges of Katherine Gorge, with the river winding far below between the red rock walls. Only from the air do you see how vast and rugged this landscape is.',
    },
  },
  {
    image: '/images/australia/kilimanjaro-climb.jpg',
    title: { nl: 'De Kilimanjaro beklimmen', en: 'Climbing Kilimanjaro' },
    location: 'Kilimanjaro · Tanzania',
    story: {
      nl: 'Dag na dag hoger, langs kampen als Barranco Camp op 3900 meter, met elke stap ijlere lucht en een steeds weidser uitzicht. Samen met de groep naar het dak van Afrika: zwaar, maar onvergetelijk.',
      en: 'Day after day climbing higher, past camps like Barranco Camp at 3,900 metres, with thinner air and wider views at every step. Heading for the roof of Africa together with the group: tough, but unforgettable.',
    },
  },
  {
    image: '/images/australia/sahara.jpg',
    title: { nl: 'De Sahara woestijn', en: 'The Sahara desert' },
    location: 'Sahara · Marokko',
    story: {
      nl: 'Eindeloze zandduinen zover je kunt kijken, en ’s nachts een sterrenhemel zoals je die nergens anders ziet. In de stilte van de Sahara voel je pas hoe groot de wereld is.',
      en: 'Endless sand dunes as far as you can see, and at night a starry sky like nowhere else. In the silence of the Sahara you truly feel how big the world is.',
    },
  },
  {
    image: '/images/australia/redwoods-trail.jpg',
    title: { nl: 'De Redwoods Trail', en: 'The Redwoods Trail' },
    location: 'Rotorua · Nieuw-Zeeland',
    story: {
      nl: 'Overdag voel je je al piepklein tussen de gigantische redwoods, maar ’s avonds wordt het bos pas echt magisch. Lantaarns verlichten de hangbruggen hoog tussen de stammen, en het voelt alsof je door een sprookje loopt.',
      en: 'During the day you already feel tiny among the giant redwoods, but at night the forest becomes truly magical. Lanterns light up the suspension bridges high between the trunks, and it feels like walking through a fairytale.',
    },
  },
  {
    image: '/images/australia/mooi.jpg',
    title: { nl: 'Ons eigen privéstrand', en: 'Our own private beach' },
    location: 'Hamelin Bay · Australië',
    // ingezoomd op ons tweetjes onderaan het strand, zodat we boven de tekst staan
    zoom: { scale: 1.4, origin: '48% 100%' },
    story: {
      nl: 'Aan de westkust, zo’n 15 minuten rijden vanaf Margaret River, ligt Hamelin Bay Beach. Wit zand, helderblauw water en bijna niemand om je heen: het voelde alsof we het hele strand voor onszelf hadden.',
      en: 'On the west coast, about a 15-minute drive from Margaret River, lies Hamelin Bay Beach. White sand, crystal-clear blue water and hardly anyone around: it felt like we had the whole beach to ourselves.',
    },
  },
  {
    image: '/images/australia/filippijnen.jpg',
    title: { nl: 'Kerst op expeditie', en: 'Christmas on expedition' },
    location: 'El Nido → Coron · Filipijnen',
    story: {
      nl: 'Tijdens de expeditie van El Nido naar Coron vierden we kerst op een bijzondere manier: onderweg deelden we voedselpakketten uit in de kleine dorpjes op de eilanden. Een kerst die ik nooit meer vergeet.',
      en: 'During the expedition from El Nido to Coron we celebrated Christmas in a special way: along the way we handed out food parcels in the small island villages. A Christmas I will never forget.',
    },
  },
  {
    image: '/images/australia/colca-canyon.jpg',
    title: { nl: 'Hiken door de Colca Canyon', en: 'Hiking through the Colca Canyon' },
    location: 'Colca Canyon · Peru',
    story: {
      nl: 'Een tweedaagse trekking door de Colca Canyon, een van de diepste kloven ter wereld. Afdalen naar de bodem, overnachten bij de rivier en de volgende ochtend weer helemaal omhoog: zwaar, maar wat een uitzichten.',
      en: 'A two-day trek through the Colca Canyon, one of the deepest canyons in the world. Descending to the bottom, spending the night by the river and climbing all the way back up the next morning: tough, but what views.',
    },
  },
  {
    image: '/images/australia/Ozsnow.jpg',
    title: { nl: 'Sneeuw in Australië', en: 'Snow in Australia' },
    location: 'Perisher · Australië',
    story: {
      nl: 'Skiën in Australië? Ja, dat kan echt! In Perisher, het grootste skigebied van het land, ruil je de zon en de surfplank even in voor sneeuw en besneeuwde bergtoppen.',
      en: 'Skiing in Australia? Yes, really! In Perisher, the country’s biggest ski resort, you swap the sun and the surfboard for snow and snowy peaks for a while.',
    },
  },
  {
    image: '/images/australia/lighthouse.jpg',
    title: { nl: 'Sunrise hike naar de vuurtoren', en: 'Sunrise hike to the lighthouse' },
    location: 'Byron Bay',
    story: {
      nl: 'In het donker de wekker, en dan omhoog naar de vuurtoren van Cape Byron om de zon als eerste van Australië te zien opkomen. Met een beetje geluk zie je onderweg dolfijnen of walvissen in de oceaan.',
      en: 'Alarm in the dark, then up to the Cape Byron lighthouse to watch the sun rise over Australia before anyone else. With a bit of luck you spot dolphins or whales in the ocean along the way.',
    },
  },
  {
    image: '/images/australia/kerst.jpg',
    title: { nl: 'Kerst aan het strand', en: 'Christmas on the beach' },
    location: 'Australië',
    story: {
      nl: 'Je gaat het niet geloven: op Boxing Day komt in Australië iedereen samen op het strand, helemaal in het rood! Kerstmutsen, zon, zee en een gezellige drukte. Kerst voelt hier totaal anders, en dat is precies wat het zo bijzonder maakt.',
      en: 'You won’t believe it: on Boxing Day in Australia everyone gets together on the beach, all dressed in red! Santa hats, sun, sea and a cheerful crowd. Christmas feels completely different here, and that is exactly what makes it so special.',
    },
  },
  {
    image: '/images/australia/bridge.jpg',
    title: { nl: 'BridgeClimb in Sydney', en: 'BridgeClimb in Sydney' },
    location: 'Sydney · Australië',
    story: {
      nl: 'Stap voor stap naar de top van de Sydney Harbour Bridge, met de hele stad onder je voeten en het Opera House aan je zij. Het uitzicht was elke trede waard.',
      en: 'Step by step to the top of the Sydney Harbour Bridge, with the whole city beneath your feet and the Opera House by your side. The view was worth every single step.',
    },
  },
];