// MAY WAY Moments: jouw eigen favoriete ervaringen.
// - image: pad in public/ (staande foto's werken het mooist)
// - title + location: korte titel en plek (zichtbaar op de kaart)
// - story: het korte verhaal dat verschijnt als je op het moment klikt
// Ontbreekt een foto, dan toont de kaart een turquoise vlak.

type Text = { nl: string; en: string };

export type Moment = {
  image: string;
  title: Text;
  location: string;
  story: Text;
};

export const moments: Moment[] = [
  {
    image: '/images/australia/unnamed.jpg',
    title: { nl: 'Duiken tussen het koraal', en: 'Diving among the coral' },
    location: 'Great Barrier Reef',
    story: {
      nl: 'Mijn eerste duik op het Great Barrier Reef voelde als een andere wereld binnenstappen. Overal kleuren, vissen en stilte, alleen het geluid van mijn eigen ademhaling.',
      en: 'My first dive on the Great Barrier Reef felt like stepping into another world. Colours and fish everywhere, and silence, just the sound of my own breathing.',
    },
  },
  {
    image: '/images/australia/aus_main.webp',
    title: { nl: 'Op weg naar Uluru', en: 'On the road to Uluru' },
    location: 'Northern Territory',
    story: {
      nl: 'Kilometers lang alleen rode aarde, en dan verschijnt Uluru ineens aan de horizon. Ik zal nooit vergeten hoe klein ik me voelde naast deze heilige rots.',
      en: 'Nothing but red earth for miles, and then Uluru suddenly appears on the horizon. I will never forget how small I felt next to this sacred rock.',
    },
  },
  {
    image: '/images/australia/surf-boys.jpg',
    title: { nl: 'Surfochtend aan de kust', en: 'Surf morning on the coast' },
    location: 'New South Wales',
    story: {
      nl: 'Vroeg opstaan, wetsuit aan en de eerste golven pakken terwijl de zon opkomt. Hier leerde ik dat vallen er gewoon bij hoort.',
      en: 'Up early, wetsuit on and catching the first waves as the sun comes up. This is where I learned that falling is simply part of it.',
    },
  },
  {
    image: '/images/about/great-ocean-road.jpg',
    title: { nl: 'De Great Ocean Road', en: 'The Great Ocean Road' },
    location: 'Victoria',
    story: {
      nl: 'Bocht na bocht nieuwe uitzichten op ruige kliffen en een woeste oceaan. Een roadtrip waarbij je eigenlijk nooit het eindpunt wilt bereiken.',
      en: 'Bend after bend of new views over rugged cliffs and a wild ocean. A road trip where you never really want to reach the end.',
    },
  },
  {
    image: '/images/about/sydney-opera.jpg',
    title: { nl: 'Zonsondergang in Sydney', en: 'Sunset in Sydney' },
    location: 'Sydney',
    story: {
      nl: 'Het Opera House dat oranje kleurt terwijl de stad langzaam tot rust komt. Het moment waarop Sydney echt als thuis voelde.',
      en: 'The Opera House turning orange as the city slowly winds down. The moment Sydney truly started to feel like home.',
    },
  },
  {
    image: '/images/moments/skydive-queenstown.jpg',
    title: { nl: 'Skydiven boven Queenstown', en: 'Skydiving above Queenstown' },
    location: 'Queenstown · Nieuw-Zeeland',
    story: {
      nl: 'Uit een vliegtuig springen boven de bergen van Queenstown. De eerste seconden vrije val waren pure adrenaline, daarna alleen maar verwondering.',
      en: 'Jumping out of a plane above the mountains of Queenstown. The first seconds of free fall were pure adrenaline, after that just wonder.',
    },
  },
  {
    image: '/images/moments/bungy-queenstown.jpg',
    title: { nl: 'Mijn eerste bungyjump', en: 'My first bungy jump' },
    location: 'Queenstown · Nieuw-Zeeland',
    story: {
      nl: 'Met trillende benen op de rand staan en dan toch springen. Het spannendste én meest bevrijdende moment van mijn reis.',
      en: 'Standing on the edge with shaking legs and jumping anyway. The most thrilling and most freeing moment of my trip.',
    },
  },
  {
    image: '/images/moments/helicopter.jpg',
    title: { nl: 'Met de helikopter over de bergen', en: 'By helicopter over the mountains' },
    location: 'Queenstown · Nieuw-Zeeland',
    story: {
      nl: 'Vanuit de lucht zie je pas hoe groots Nieuw-Zeeland is: besneeuwde toppen, meren en dalen zover je kunt kijken.',
      en: 'Only from the air do you see how vast New Zealand is: snowy peaks, lakes and valleys as far as the eye can see.',
    },
  },
  {
    image: '/images/moments/milford-sound.jpg',
    title: { nl: 'Varen door Milford Sound', en: 'Cruising through Milford Sound' },
    location: 'Fiordland · Nieuw-Zeeland',
    story: {
      nl: 'Watervallen die van steile rotswanden storten en mist die tussen de bergen hangt. Milford Sound is in het echt nog mooier dan op de foto’s.',
      en: 'Waterfalls tumbling down steep cliffs and mist hanging between the mountains. Milford Sound is even more beautiful in real life than in photos.',
    },
  },
  {
    image: '/images/moments/bridgeclimb.jpg',
    title: { nl: 'Op de top van de Harbour Bridge', en: 'On top of the Harbour Bridge' },
    location: 'Sydney',
    story: {
      nl: 'Stap voor stap naar de top van de Harbour Bridge, met de hele stad onder je voeten. Het uitzicht was elke trede waard.',
      en: 'Step by step to the top of the Harbour Bridge, with the whole city beneath your feet. The view was worth every single step.',
    },
  },
  {
    image: '/images/moments/mojo-surf.jpg',
    title: { nl: 'Een week surfkamp', en: 'A week of surf camp' },
    location: 'New South Wales',
    story: {
      nl: 'Een week lang surfen, lachen en leven aan het strand met mensen van over de hele wereld. Hier ontstonden vriendschappen voor het leven.',
      en: 'A whole week of surfing, laughing and living on the beach with people from all over the world. Friendships for life started here.',
    },
  },
  {
    image: '/images/moments/byron-kayak.jpg',
    title: { nl: 'Kajakken langs Cape Byron', en: 'Kayaking along Cape Byron' },
    location: 'Byron Bay',
    story: {
      nl: 'Peddelen langs de vuurtoren van Cape Byron, terwijl je om je heen speurt naar dolfijnen en schildpadden. Byron Bay op z’n allermooist.',
      en: 'Paddling past the Cape Byron lighthouse while scanning the water for dolphins and turtles. Byron Bay at its very best.',
    },
  },
  {
    image: '/images/moments/kakadu.jpg',
    title: { nl: 'De wildernis van Kakadu', en: 'The wilderness of Kakadu' },
    location: 'Northern Territory',
    story: {
      nl: 'Eeuwenoude rotstekeningen, watervallen en krokodillen in de rivier. In Kakadu voel je hoe oud en wild dit land is.',
      en: 'Ancient rock art, waterfalls and crocodiles in the river. In Kakadu you feel how old and wild this land is.',
    },
  },
  {
    image: '/images/moments/taronga.jpg',
    title: { nl: 'Dieren met uitzicht op de skyline', en: 'Wildlife with a skyline view' },
    location: 'Taronga Zoo · Sydney',
    story: {
      nl: 'Giraffen spotten met de skyline van Sydney op de achtergrond. Een plek waar natuur en stad op een bijzondere manier samenkomen.',
      en: 'Spotting giraffes with the Sydney skyline in the background. A place where nature and city come together in a special way.',
    },
  },
  {
    image: '/images/moments/orangutans.jpg',
    title: { nl: 'Orang-oetans in de jungle', en: 'Orangutans in the jungle' },
    location: 'Sumatra · Indonesië',
    story: {
      nl: 'Diep in de jungle van Sumatra ineens oog in oog staan met een orang-oetan. Een ontmoeting die me nog steeds kippenvel geeft.',
      en: 'Deep in the Sumatran jungle, suddenly coming face to face with an orangutan. An encounter that still gives me goosebumps.',
    },
  },
];
