// "Dit is mijn verhaal" op de Over mij-pagina (component StorySections.astro).
// Vier stops, van begin tot nu: passie → achtergrond → samenkomst → out of the box.
// - label: korte naam van de stop      - highlight: feitje op de foto
// - title: kop boven de tekst          - paragraphs: alinea's
// - image: foto uit /public/images

type Text = { nl: string; en: string };

export type StoryChapter = {
  id: string;
  image: string;
  label: Text;
  highlight: Text;
  title: Text;
  paragraphs: { nl: string[]; en: string[] };
};

export const chapters: StoryChapter[] = [
  {
    id: 'passie',
    image: '/images/about/sydney-opera.jpg',
    label: { nl: 'Passie voor avontuur', en: 'A passion for adventure' },
    highlight: { nl: '35+ landen ontdekt', en: '35+ countries explored' },
    title: { nl: 'Avontuur zit in mijn bloed', en: 'Adventure runs in my blood' },
    paragraphs: {
      nl: [
        'Het begon al toen ik klein was. Reizen met mijn familie naar India en Zuid-Korea maakten me nieuwsgierig naar de wereld, en die nieuwsgierigheid is nooit meer weggegaan.',
        'Sindsdien trek ik eropuit wanneer het maar kan. Van een solo backpackreis door Peru, diep de Amazone in, tot maanden door Zuidoost-Azië en met een camper door Nieuw-Zeeland. Inmiddels staat de teller op meer dan 35 landen.',
      ],
      en: [
        'It started when I was little. Family trips to India and South Korea made me curious about the world, and that curiosity never left.',
        'Ever since, I head out whenever I can. From a solo backpacking trip through Peru, deep into the Amazon, to months in Southeast Asia and a campervan through New Zealand. The counter now stands at more than 35 countries.',
      ],
    },
  },
  {
    id: 'achtergrond',
    image: '/images/about/reis-specialist.jpg',
    label: { nl: 'Achtergrond', en: 'Background' },
    highlight: { nl: 'Marketing & social media', en: 'Marketing & social media' },
    title: { nl: 'Marketeer met een reisvirus', en: 'A marketer with a travel bug' },
    paragraphs: {
      nl: [
        'Naast het reizen koos ik voor marketing. Ik ben afgestudeerd marketeer en specialiseerde me in marketing en social media: hoe je een merk neerzet, wat een doelgroep raakt en hoe je van volgers een betrokken community maakt.',
        'Als reisspecialist hielp ik daarna honderden reizigers aan hun droomreis. Zo leerde ik van dichtbij wat mensen écht laat dromen.',
      ],
      en: [
        'Alongside travelling, I chose marketing. I graduated as a marketer and specialised in marketing and social media: how to position a brand, what moves an audience and how to turn followers into an engaged community.',
        'As a travel specialist I then helped hundreds of travellers plan their dream trip. That showed me up close what truly makes people dream.',
      ],
    },
  },
  {
    id: 'vastleggen',
    image: '/images/about/Mayra-foto.jpg',
    label: { nl: 'Beleven en vastleggen', en: 'Living and capturing' },
    highlight: { nl: 'Avontuur × beeld', en: 'Adventure × visuals' },
    title: { nl: 'Waar alles samenkomt', en: 'Where it all comes together' },
    paragraphs: {
      nl: [
        'Op een gegeven moment viel alles op zijn plek. Mijn liefde voor avontuur en mijn kennis van social media bleken de perfecte combinatie.',
        'Nu leg ik de vetste avonturen vast, en vooral het gevoel dat erbij hoort. Want een mooi beeld is leuk, maar content die je laat voelen alsof je er zelf bij bent: daar draait het om.',
      ],
      en: [
        'At some point everything fell into place. My love for adventure and my knowledge of social media turned out to be the perfect match.',
        'Now I capture the most epic adventures, and above all the feeling that comes with them. A beautiful shot is nice, but content that makes you feel like you are right there: that is what it is all about.',
      ],
    },
  },
  {
    id: 'outofthebox',
    image: '/images/australia/surf-boys.jpg',
    label: { nl: 'Out of the box', en: 'Out of the box' },
    highlight: { nl: '2,5 jaar in Australië', en: '2.5 years in Australia' },
    title: { nl: 'Out of the box moves blijven maken', en: 'Making out of the box moves' },
    paragraphs: {
      nl: [
        'Ik denk soms heel letterlijk out of the box. Zo draaide ik in Tanzania mee in vrijwilligersprojecten: eerst in de kinderopvang en later drie maanden lang aan een project dat straatkinderen naar school hielp. En ik woonde tweeënhalf jaar in Australië.',
        'Stilzitten is niks voor mij. Ik houd van actie en van de gekste ideeën, want daar ontstaan de mooiste verhalen. Die energie neem ik mee in alles wat ik maak.',
      ],
      en: [
        'Sometimes I think quite literally out of the box. In Tanzania I worked on volunteer projects: first in childcare, and later for three months on a project that helped street children go to school. And I lived in Australia for two and a half years.',
        'Sitting still is not for me. I love action and the craziest ideas, because that is where the best stories begin. I bring that energy to everything I create.',
      ],
    },
  },
];
