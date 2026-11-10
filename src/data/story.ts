// "Dit is mijn verhaal" op de Over mij-pagina (component StorySections.astro).
// Vier stops, van begin tot nu: passie → achtergrond → internationale ervaring → we groeien door.
// - label: korte naam van de stop
// - title: kop boven de tekst          - paragraphs: alinea's (zet **woorden** tussen dubbele sterretjes voor dikgedrukt)
// - image: foto uit /public/images

type Text = { nl: string; en: string };

export type StoryChapter = {
  id: string;
  image: string;
  label: Text;
  title: Text;
  paragraphs: { nl: string[]; en: string[] };
};

export const chapters: StoryChapter[] = [
  {
    id: 'passie',
    image: '/images/about/sydney-opera.jpg',
    label: { nl: 'Passie voor avontuur', en: 'A passion for adventure' },
    title: { nl: 'Waar mijn avontuur begon', en: 'Where my adventure began' },
    paragraphs: {
      nl: [
        'Mijn liefde voor avontuur en het ontdekken van de wereld begon al op jonge leeftijd. De reizen die ik met mijn familie maakte naar **India en Zuid-Korea** wakkerden mijn nieuwsgierigheid naar de wereld aan. Die nieuwsgierigheid vormde de basis voor mijn eigen avontuur, dat begon toen ik **achttien** was.',
        'Mijn eerste grote reis bracht me naar **Tanzania**, waar ik vrijwilligerswerk deed binnen een childcareproject. Twee jaar later keerde ik terug om drie maanden lang mee te bouwen aan een project dat **straatkinderen toegang gaf tot onderwijs**. Niet veel later volgde mijn eerste **solobackpackreis door Peru**, inclusief een meerdaagse tocht diep door de Amazone.',
        'Inmiddels heb ik **meer dan 35 landen** bezocht. Iedere reis heeft mijn blik op de wereld verbreed en me ervaringen en verhalen gegeven die ik graag met anderen deel.',
      ],
      en: [
        'My love for adventure and discovering the world started at a young age. The trips I made with my family to **India and South Korea** sparked my curiosity about the world. That curiosity laid the foundation for my own adventure, which began when I was **eighteen**.',
        'My first big trip took me to **Tanzania**, where I volunteered in a childcare project. Two years later I returned to spend three months helping to build a project that **gave street children access to education**. Not long after came my first **solo backpacking trip through Peru**, including a multi-day trek deep into the Amazon.',
        'By now I have visited **more than 35 countries**. Every trip has broadened my view of the world and given me experiences and stories that I love to share with others.',
      ],
    },
  },
  {
    id: 'achtergrond',
    image: '/images/about/reis-specialist.jpg',
    label: { nl: 'Achtergrond', en: 'Background' },
    title: { nl: 'Marketeer met een reisvirus', en: 'A marketer with a travel bug' },
    paragraphs: {
      nl: [
        'Als **afgestudeerd marketeer** trok ik de wereld over met mijn camera. Met mijn passie voor **fotografie en videografie** maakte ik beelden voor de socials van **toerismebedrijven**. Onderweg ontstonden zo mijn eerste projecten, onder andere met **Urang Utan Trekking** op Sumatra, **The Gibbon Experience** in Laos en **Palawan Camping** op de Filipijnen.',
        'Daar ontdekte ik hoe bijzonder het is om **échte ervaringen te vertalen naar verhalen** die mensen inspireren en merken op een **authentieke manier** zichtbaar maken.',
      ],
      en: [
        'As a **marketing graduate**, I travelled the world with my camera. With my passion for **photography and videography**, I created content for the socials of **tourism companies**. Along the way my first projects came about, including with **Urang Utan Trekking** on Sumatra, **The Gibbon Experience** in Laos and **Palawan Camping** in the Philippines.',
        'That is where I discovered how special it is to **turn real experiences into stories** that inspire people and make brands visible in an **authentic way**.',
      ],
    },
  },
  {
    id: 'outofthebox',
    image: '/images/australia/surf-boys.jpg',
    label: { nl: 'Internationale ervaring', en: 'International experience' },
    title: { nl: 'Grenzen verleggen', en: 'Pushing boundaries' },
    paragraphs: {
      nl: [
        "Begin 2024 kwam ik na een reis door Azië terecht in **Sydney**. Ik werd verliefd op de sfeer van de stad en besloot er een tijdje te wonen en werken. Dat 'tijdje' groeide uiteindelijk uit tot **2,5 jaar avontuur in Australië**.",
        'Daar deed ik **marketing- en saleservaring** op in de **hospitality- en toerismebranche**, een wereld waarin alles draait om beleving, mensen en onvergetelijke ervaringen.',
        'In die jaren reisde ik van stad naar stad en land naar land om bijzondere ervaringen vast te leggen, **van Indonesië tot Nieuw-Zeeland**. De internationale ervaring, **ondernemende mindset** en **creatieve blik** neem ik mee in mijn werk.',
      ],
      en: [
        "In early 2024, after a trip through Asia, I ended up in **Sydney**. I fell in love with the vibe of the city and decided to live and work there for a while. That 'while' eventually grew into **2.5 years of adventure in Australia**.",
        'There I gained **marketing and sales experience** in the **hospitality and tourism industry**, a world that revolves around experiences, people and unforgettable moments.',
        'During those years I travelled from city to city and country to country to capture special experiences, **from Indonesia to New Zealand**. I bring this international experience, **entrepreneurial mindset** and **creative eye** to my work.',
      ],
    },
  },
  {
    id: 'groeien',
    image: '/images/about/Camera.jpg',
    label: { nl: 'Social media & partners', en: 'Social media & partners' },
    title: { nl: 'We groeien door', en: 'Still growing' },
    paragraphs: {
      nl: [
        'Met **ruim acht jaar ervaring in social media**, een **dronebrevet** en **fotografiecursussen** op zak, en de socials van uiteenlopende merken onder mijn beheer: van drankmerk **STËLZ Delivery** en **Puri Garden** tot talentwervingsplatform **Qompas**, weet ik precies hoe je **een merk tot leven brengt**.',
        'Ondertussen bleef ook mijn eigen platform groeien. Al **meer dan vijf jaar** beheer ik actief mijn eigen socials, en inmiddels werk ik samen met **meer dan 25 partners**. En we blijven groeien! **Wil jij ook onderdeel worden van het verhaal?**',
      ],
      en: [
        'With **more than eight years of experience in social media**, a **drone licence** and **photography courses** under my belt, and the socials of a wide range of brands in my hands: from drinks brand **STËLZ Delivery** and **Puri Garden** to talent recruitment platform **Qompas**, I know exactly how to **bring a brand to life**.',
        'Meanwhile my own platform kept growing too. For **more than five years** I have been actively managing my own socials, and I now work with **more than 25 partners**. And we keep growing! **Would you like to become part of the story?**',
      ],
    },
  },
];
