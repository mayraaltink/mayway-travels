// MAY WAY Moments: jouw eigen favoriete ervaringen (maximaal 12).
// - image: pad in public/ (staande foto's werken het mooist)
// - title + location: korte titel en plek (zichtbaar op de kaart)
// - story: het verhaal dat verschijnt als je op het moment klikt (\n\n = nieuwe alinea)
// - zoom (optioneel): inzoomen op een punt van de foto, bijv. { scale: 1.8, origin: '48% 100%' }
//   (handig als het belangrijkste onderaan staat en anders achter de tekst valt)
// Ontbreekt een foto (of is image leeg), dan toont de kaart een turquoise vlak.

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
      nl: 'De Katherine Gorge ligt in het indrukwekkende Nitmiluk National Park, op ongeveer drie uur rijden van Darwin in het noorden van Australië. Je kunt de kloven vanaf het water ontdekken per kano of boot, maar ook vanuit de lucht bewonderen tijdens een spectaculaire helikoptervlucht.\n\nIn een vlucht van 25 minuten vlieg je dwars over de diepe kloven. Pas vanuit de lucht zie je hoe uitgestrekt, ruig en indrukwekkend dit landschap werkelijk is.',
      en: 'Katherine Gorge lies in the impressive Nitmiluk National Park, about a three-hour drive from Darwin in the north of Australia. You can explore the gorges from the water by canoe or boat, but you can also admire them from the air on a spectacular helicopter flight.\n\nIn a 25-minute flight you fly right across the deep gorges. Only from the air do you see how vast, rugged and impressive this landscape really is.',
    },
  },
  {
    image: '/images/australia/kili.jpg',
    title: { nl: 'De Kilimanjaro beklimmen', en: 'Climbing Kilimanjaro' },
    location: 'Kilimanjaro · Tanzania',
    story: {
      nl: 'Een van de meest bijzondere en tegelijkertijd bizarre avonturen die ik ooit heb meegemaakt: het beklimmen van de 5.895 meter hoge Kilimanjaro in Tanzania. In zes dagen tijd volgden we de Machame-route, waarbij we iedere dag door een compleet ander landschap trokken. Van tropisch regenwoud naar uitgestrekte heidevelden, en uiteindelijk een bijna buitenaards maanlandschap.',
      en: 'One of the most special and at the same time surreal adventures I have ever experienced: climbing the 5,895-metre-high Kilimanjaro in Tanzania. Over six days we followed the Machame route, passing through a completely different landscape every day. From tropical rainforest to vast heathland, and finally an almost otherworldly moonscape.',
    },
  },
  {
    image: '/images/australia/sahara.jpg',
    title: { nl: 'Overnachten in de Sahara Woestijn', en: 'Spending the night in the Sahara Desert' },
    location: 'Sahara · Marokko',
    story: {
      nl: 'We startten onze roadtrip in Marrakech en reden vanuit daar richting het Atlasgebergte, om vervolgens door te reizen naar de Sahara. Hier lieten we de auto achter en werden we op kamelen naar ons kamp midden in de woestijn gebracht. Een van de mooiste zonsondergangen die ik heb gezien! Een bijzonder gevoel om zo ver van de bewoonde wereld te zijn, omringd door eindeloze zandduinen onder de sterrenhemel ’s nachts.',
      en: 'We started our road trip in Marrakech and drove from there towards the Atlas Mountains, before continuing on to the Sahara. Here we left the car behind and were taken by camel to our camp in the middle of the desert. One of the most beautiful sunsets I have ever seen! A special feeling to be so far from civilisation, surrounded by endless sand dunes under the starry night sky.',
    },
  },
  {
    image: '/images/australia/redwoods-trail.jpg',
    title: { nl: 'Wandelen door de Redwoods', en: 'Walking through the Redwoods' },
    location: 'Rotorua · Nieuw-Zeeland',
    story: {
      nl: 'Midden in Rotorua, op het Noordereiland van Nieuw-Zeeland, vind je het bijzondere Redwoods Forest. Hier wandel je tussen gigantische Californische redwoodbomen die soms wel 75 meter hoog zijn. Vooral de Redwoods Treewalk is een aanrader! Je koopt een ticket voor een wandeling over hangbruggen hoog tussen de bomen. Ga vooral in de avond, wanneer honderden lantaarns en lichtinstallaties het bos verlichten. Het voelt alsof je midden in een Disneyfilm bent beland!',
      en: 'In the middle of Rotorua, on New Zealand’s North Island, you’ll find the special Redwoods Forest. Here you walk among giant Californian redwoods that can reach up to 75 metres tall. The Redwoods Treewalk in particular is a must! You buy a ticket for a walk across suspension bridges high up between the trees. Go in the evening if you can, when hundreds of lanterns and light installations light up the forest. It feels like you’ve landed in the middle of a Disney film!',
    },
  },
  {
    image: '/images/australia/mooi.jpg',
    title: { nl: 'Het mooiste strand van West-Australië', en: 'The most beautiful beach in Western Australia' },
    location: 'Hamelin Bay · Australië',
    // ingezoomd op ons tweetjes onderaan het strand, zodat we boven de tekst staan
    zoom: { scale: 1.6, origin: '48% 100%' },
    story: {
      nl: 'Op ongeveer 15 minuten rijden van het plaatsje Hamelin Bay, aan de zuidwestkust van Australië, vind je een van de mooiste stranden van West-Australië. Met onze 4WD reden we dwars door het duinlandschap richting de kust. Eenmaal aangekomen werden we beloond met het gevoel alsof je op een onbewoond eiland bent. Geen voetspoor te bekennen van andere mensen, witte zandstranden, het mooiste turquoise water en bizarre natuur.',
      en: 'About a 15-minute drive from the small town of Hamelin Bay, on the southwest coast of Australia, you’ll find one of the most beautiful beaches in Western Australia. In our 4WD we drove right through the dunes towards the coast. Once we arrived, we were rewarded with the feeling of being on a deserted island. Not a single footprint of other people, white sandy beaches, the most beautiful turquoise water and incredible nature.',
    },
  },
  {
    image: '/images/australia/filippijnen.jpg',
    title: { nl: 'Kerst vieren op expeditie', en: 'Celebrating Christmas on expedition' },
    location: 'El Nido → Coron · Filipijnen',
    story: {
      nl: 'Een absolute must-do als je op de Filipijnen bent: de meerdaagse bootexpeditie van Coron naar El Nido (of andersom). In vier dagen vaar je langs afgelegen eilanden, verborgen lagunes en de mooiste paradijselijke stranden, terwijl je drie nachten op kleine, verborgen eilanden overnacht.\n\nWij deden deze expeditie net voor kerst en dat maakte het extra bijzonder. Onderweg bezochten we een afgelegen eilandcommunity, waar we samen voedselpakketten uitdeelden aan de lokale bewoners. Een klein gebaar om iets terug te geven aan de mensen die op deze eilanden wonen. Dat is waar kerst om draait!',
      en: 'An absolute must-do when you’re in the Philippines: the multi-day boat expedition from Coron to El Nido (or the other way around). In four days you sail past remote islands, hidden lagoons and the most beautiful paradise beaches, spending three nights on small, hidden islands.\n\nWe did this expedition just before Christmas, which made it extra special. Along the way we visited a remote island community, where together we handed out food parcels to the local residents. A small gesture to give something back to the people who live on these islands. That’s what Christmas is all about!',
    },
  },
  {
    image: '/images/australia/gibbon-boomhut.jpg',
    title: { nl: 'Slapen in de hoogste boomhut ter wereld', en: 'Sleeping in the highest treehouse in the world' },
    location: 'The Gibbon Experience · Laos',
    story: {
      nl: 'Slapen in een boomhut midden in het regenwoud, en alleen bereikbaar via ziplines? Dat hebben we gedaan bij The Gibbon Experience in Laos! Met een zipline vlieg je dwars door de jungle naar je slaapplek: een boomhut hoog tussen de boomtoppen, met een fantastisch uitzicht over de jungle.\n\nSamen met je groep word je ’s ochtends wakker van de gibbons, die ergens diep in het bos door de bomen slingeren. Echt een mega vette overnachting die je niet snel ergens anders meemaakt!',
      en: 'Sleeping in a treehouse in the middle of the rainforest, reachable only by zipline? We did it at The Gibbon Experience in Laos! You zipline right through the jungle to your bed for the night: a treehouse high up in the treetops, with a fantastic view over the jungle.\n\nTogether with your group you wake up in the morning to the gibbons swinging through the trees somewhere deep in the forest. A seriously cool night that you won’t easily experience anywhere else!',
    },
  },
  {
    image: '/images/australia/lyngen-alps.jpg',
    title: { nl: 'Sneeuwscootertocht door de Noorse Alpen', en: 'Snowmobile tour through the Norwegian Alps' },
    location: 'Lyngen Alps · Noorwegen',
    story: {
      nl: 'Vanuit Tromsø, ook wel de toegangspoort tot de Arctische wildernis genoemd, trokken we richting de Lyngen Alps in Noord-Noorwegen. Dit indrukwekkende berggebied strekt zich uit over zo’n 90 kilometer en staat bekend om zijn gigantische bergtoppen, fjorden en sneeuwlandschappen.\n\nDe vetste manier om dit gebied te ontdekken? Met een sneeuwscooter! Maar liefst zes uur lang cruisden we dwars door het landschap, tussen de bergen en over bevroren vlaktes. Onderweg kwamen we zelfs husky’s tegen. Een grote aanrader om in de wintermaanden te doen!',
      en: 'From Tromsø, also known as the gateway to the Arctic wilderness, we headed towards the Lyngen Alps in northern Norway. This impressive mountain range stretches for about 90 kilometres and is known for its giant peaks, fjords and snowy landscapes.\n\nThe coolest way to explore this area? By snowmobile! For no less than six hours we cruised right through the landscape, between the mountains and across frozen plains. Along the way we even came across huskies. Highly recommended during the winter months!',
    },
  },

  {
    image: '/images/australia/amazone-moment.jpg',
    title: { nl: 'Op jungle-expeditie door de Amazone', en: 'A jungle expedition through the Amazon' },
    location: 'Iquitos · Peru',
    story: {
      nl: 'Vanuit Iquitos, een van de grootste steden midden in het Peruaanse Amazonegebied, stapte ik op een boot die ons in drie uur diep de jungle in bracht. Vanaf daar begon een vierdaagse expeditie, verder weg van de bewoonde wereld dan ik ooit eerder ben geweest. Zonder internet, midden in de natuur.\n\nWe trokken steeds dieper het regenwoud in en spotten de meest bijzondere dieren. Van spinnen waarvan ik niet eens wist dat ze bestonden tot kaaimannen, roze rivierdolfijnen en slangen. ’s Nachts sliepen we midden in het regenwoud in een hangmat.\n\nJe komt hier zo dichtbij de meest pure en indrukwekkende vorm van moedernatuur. Een avontuur dat je eigenlijk zelf moet ervaren en dat ik iedereen kan aanraden!',
      en: 'From Iquitos, one of the largest cities in the heart of the Peruvian Amazon, I boarded a boat that took us three hours deep into the jungle. From there a four-day expedition began, further away from civilisation than I had ever been before. No internet, right in the middle of nature.\n\nWe ventured deeper and deeper into the rainforest and spotted the most extraordinary animals. From spiders I didn’t even know existed to caimans, pink river dolphins and snakes. At night we slept in a hammock in the middle of the rainforest.\n\nHere you get so close to the purest and most impressive form of Mother Nature. An adventure you really have to experience for yourself, and one I can recommend to everyone!',
    },
  },

  {
    image: '/images/australia/salkantay-moment.jpg',
    title: { nl: 'Salkantay: op naar Machu Picchu!', en: 'Salkantay: on to Machu Picchu!' },
    location: 'Salkantay Trek · Peru',
    story: {
      nl: 'In vier dagen tijd liepen we vanuit de omgeving van Cusco richting een van de zeven wereldwonderen: Machu Picchu! De Salkantay Trek is een van de mooiste meerdaagse hikes van Peru en brengt je door ontzettend veel afwisselende landschappen. Van besneeuwde bergtoppen en turquoise meren tot gigantische valleien en tropisch regenwoud. Iedere dag was weer compleet anders.\n\nNa vier dagen wandelen, flink wat hoogtemeters en de mooiste uitzichten werden we uiteindelijk beloond met een bezoek aan Machu Picchu. Een pittige tocht, maar absoluut een van de mooiste avonturen van mijn reis door Peru!',
      en: 'Over four days we walked from the area around Cusco towards one of the seven wonders of the world: Machu Picchu! The Salkantay Trek is one of the most beautiful multi-day hikes in Peru and takes you through an incredible variety of landscapes. From snow-capped peaks and turquoise lakes to huge valleys and tropical rainforest. Every day was completely different.\n\nAfter four days of walking, plenty of elevation gain and the most beautiful views, we were finally rewarded with a visit to Machu Picchu. A tough trek, but definitely one of the best adventures of my trip through Peru!',
    },
  },
  {
    image: '/images/australia/nevis.jpg',
    title: { nl: 'Nevis Jump: de hoogste van Nieuw-Zeeland!', en: 'Nevis Jump: the highest in New Zealand!' },
    location: 'Queenstown · Nieuw-Zeeland',
    story: {
      nl: 'In 2022 bezocht ik voor het eerst Queenstown, een van mijn favoriete plekken op het Zuidereiland van Nieuw-Zeeland. Daar maakte ik mijn eerste bungeejump vanaf de Kawarau Bridge, 43 meter boven de rivier.\n\nDit jaar keerde ik terug naar Queenstown en was het tijd voor een nóg grotere uitdaging: de Nevis Bungy. Met maar liefst 134 meter is dit de hoogste bungeejump van Nieuw-Zeeland! Hangend boven een diepe kloof, midden in de bergen, maak je een vrije val van ongeveer 8,5 seconden. Even twijfel je of je dit wel écht gaat doen, maar zodra je springt, vergeet je alles om je heen. Wat is dit een gave ervaring!',
      en: 'In 2022 I visited Queenstown for the first time, one of my favourite places on New Zealand’s South Island. There I did my first bungy jump from the Kawarau Bridge, 43 metres above the river.\n\nThis year I returned to Queenstown and it was time for an even bigger challenge: the Nevis Bungy. At no less than 134 metres, it is the highest bungy jump in New Zealand! Hanging above a deep canyon in the middle of the mountains, you free fall for about 8.5 seconds. For a moment you wonder whether you’re really going to do this, but as soon as you jump, you forget everything around you. What an amazing experience!',
    },
  },
];
