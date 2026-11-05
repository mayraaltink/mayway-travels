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
    title: { nl: 'Waar mijn avontuur begon', en: 'Where my adventure began' },
    paragraphs: {
      nl: [
        'Mijn liefde voor avontuur en het ontdekken van de wereld begon al op jonge leeftijd. De reizen die ik met mijn familie maakte naar India en Zuid-Korea wakkerden mijn nieuwsgierigheid naar de wereld aan. Die nieuwsgierigheid vormde de basis voor mijn eigen avontuur, dat begon toen ik achttien was.',
        'Mijn eerste grote reis bracht me naar Tanzania, waar ik vrijwilligerswerk deed binnen een childcareproject. Twee jaar later keerde ik terug om drie maanden lang mee te bouwen aan een project dat straatkinderen toegang gaf tot onderwijs. Niet veel later volgde mijn eerste solobackpackreis door Peru, inclusief een meerdaagse tocht diep door de Amazone.',
        'Inmiddels heb ik meer dan 35 landen bezocht. Iedere reis heeft mijn blik op de wereld verbreed en me ervaringen en verhalen gegeven die ik graag met anderen deel.',
      ],
      en: [
        'My love for adventure and discovering the world started at a young age. The trips I made with my family to India and South Korea sparked my curiosity about the world. That curiosity laid the foundation for my own adventure, which began when I was eighteen.',
        'My first big trip took me to Tanzania, where I volunteered in a childcare project. Two years later I returned to spend three months helping to build a project that gave street children access to education. Not long after came my first solo backpacking trip through Peru, including a multi-day trek deep into the Amazon.',
        'By now I have visited more than 35 countries. Every trip has broadened my view of the world and given me experiences and stories that I love to share with others.',
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
        'Als afgestudeerd marketeer trok ik de wereld over met mijn camera. Ik ging op zoek naar de bijzonderste verhalen en ervaringen. Onderweg ontstonden mijn eerste samenwerkingen met onder andere Urang Utan Trekking op Sumatra, The Gibbon Experience in Laos en Palawan Camping op de Filipijnen.',
        'Daar ontdekte ik hoe bijzonder het is om échte ervaringen te vertalen naar verhalen die mensen inspireren en merken op een authentieke manier zichtbaar maken.',
      ],
      en: [
        'As a marketing graduate, I travelled the world with my camera, searching for the most special stories and experiences. Along the way my first collaborations came about, including Urang Utan Trekking on Sumatra, The Gibbon Experience in Laos and Palawan Camping in the Philippines.',
        'That is where I discovered how special it is to turn real experiences into stories that inspire people and make brands visible in an authentic way.',
      ],
    },
  },
  {
    id: 'outofthebox',
    image: '/images/australia/surf-boys.jpg',
    label: { nl: 'Internationale ervaring', en: 'International experience' },
    highlight: { nl: '2,5 jaar in Australië', en: '2.5 years in Australia' },
    title: { nl: 'Out of the box', en: 'Out of the box' },
    paragraphs: {
      nl: [
        'Ik geloof in actie, kansen grijpen en buiten je comfortzone durven gaan om iets bijzonders te creëren.',
        'Dat is ook hoe ik mijn eigen pad heb gevolgd. Na mijn reis door Azië kwam ik in 2024 terecht in Australië, waar ik uiteindelijk 2,5 jaar heb gewoond en gewerkt. Daar deed ik marketing- en saleservaring op in de toerismebranche, een wereld waarin alles draait om beleving, mensen en onvergetelijke ervaringen.',
        'Deze internationale ervaring, ondernemende mindset en creatieve blik neem ik mee in alles wat ik voor jouw merk doe.',
      ],
      en: [
        'I believe in action, seizing opportunities and daring to step outside your comfort zone to create something special.',
        'That is also how I followed my own path. After my trip through Asia, I ended up in Australia in 2024, where I lived and worked for 2.5 years. There I gained marketing and sales experience in the tourism industry, a world that revolves around experiences, people and unforgettable moments.',
        'I bring this international experience, entrepreneurial mindset and creative eye to everything I do for your brand.',
      ],
    },
  },
];
