// "Dit is mijn verhaal" op de Over mij-pagina (component StorySections.astro).
// Vier stops, van begin tot nu: passie → achtergrond → internationale ervaring → we groeien door.
// - label: korte naam van de stop
// - title: kop boven de tekst          - paragraphs: alinea's (zet **woorden** tussen dubbele sterretjes voor dikgedrukt)
// - image: foto uit /public/images
// - location (optioneel): locatielabel rechtsonder op de foto, bijv. { nl: 'Arusha · Tanzania', en: 'Arusha · Tanzania' }
// - imagePosition (optioneel): welk deel van de foto in beeld blijft, bijv. 'center 75%' (lager) of 'center top'

type Text = { nl: string; en: string };

export type StoryChapter = {
  id: string;
  image: string;
  imagePosition?: string;
  location?: Text;
  label: Text;
  title: Text;
  paragraphs: { nl: string[]; en: string[] };
};

export const chapters: StoryChapter[] = [
  {
    id: 'passie',
    image: '/images/africa.jpg',
    location: { nl: 'Arusha · Tanzania', en: 'Arusha · Tanzania' },
    label: { nl: 'Passie voor avontuur', en: 'A passion for adventure' },
    title: { nl: 'Waar mijn avontuur begon', en: 'Where my adventure began' },
    paragraphs: {
      nl: [
        'Mijn liefde voor reizen begon al jong. De reizen die ik met mijn familie maakte naar **India en Zuid-Korea** wakkerden mijn nieuwsgierigheid naar de wereld aan. Die nieuwsgierigheid vormde de basis voor mijn eigen avontuur, dat begon toen ik **achttien** was.',
        'Mijn eerste grote reis bracht me naar **Tanzania**, waar ik vrijwilligerswerk deed bij een childcareproject. Twee jaar later ging ik terug en bouwde ik drie maanden mee aan een project dat **straatkinderen toegang gaf tot onderwijs**. Kort daarna volgde mijn eerste **solo-backpackreis door Peru**, met een meerdaagse tocht diep de Amazone in.',
        'Inmiddels heb ik **meer dan 35 landen** bezocht. Elke reis heeft mijn blik op de wereld verbreed en me verhalen en ervaringen opgeleverd die ik graag met jou deel.',
      ],
      en: [
        'My love for travel started young. The trips I made with my family to **India and South Korea** sparked my curiosity about the world. That curiosity laid the foundation for my own adventure, which began when I was **eighteen**.',
        'My first big trip took me to **Tanzania**, where I volunteered at a childcare project. Two years later I went back and spent three months helping to build a project that **gave street children access to education**. Shortly after came my first **solo backpacking trip through Peru**, with a multi-day trek deep into the Amazon.',
        'By now I have visited **more than 35 countries**. Every trip has broadened my view of the world and given me stories and experiences that I love to share with you.',
      ],
    },
  },
  {
    id: 'achtergrond',
    // spatie in de mapnaam als %20, zodat de link overal werkt
    image: '/images/mijn%20verhaal/surf.jpg',
    location: { nl: 'Lombok · Indonesië', en: 'Lombok · Indonesia' },
    label: { nl: 'Creatief avontuur', en: 'Creative adventure' },
    title: { nl: 'Van backpack naar brand stories', en: 'From backpack to brand stories' },
    paragraphs: {
      nl: [
        "Net **afgestudeerd als marketeer** trok ik met mijn camera de wereld over. Onderweg maakte ik **foto's en video's** voor de socials van **toerismebedrijven**, en zo ontstonden mijn eerste projecten: met onder andere **Urang Utan Trekking** op Sumatra, **The Gibbon Experience** in Laos en **Palawan Camping** in de Filipijnen. Daarna woonde ik een tijd op **Bali**, waar ik de **socials van hotelketens** beheerde.",
        'Zo ontdekte ik wat ik het allerleukste vind: **échte ervaringen vertalen naar verhalen** die mensen inspireren, en merken op een **authentieke manier** zichtbaar maken.',
      ],
      en: [
        'Fresh out of my **marketing degree**, I travelled the world with my camera. Along the way I made **photos and videos** for the socials of **tourism companies**, and that is how my first projects came about: with, among others, **Urang Utan Trekking** on Sumatra, **The Gibbon Experience** in Laos and **Palawan Camping** in the Philippines. After that I lived on **Bali** for a while, managing the **socials of hotel chains**.',
        'That is how I discovered what I love most: **turning real experiences into stories** that inspire people, and making brands visible in an **authentic way**.',
      ],
    },
  },
  {
    id: 'outofthebox',
    image: '/images/mijn%20verhaal/helikopter.jpg',
    location: { nl: 'Queenstown · Nieuw-Zeeland', en: 'Queenstown · New Zealand' },
    // hoge foto: uitsnede lager, zodat je van top tot teen in beeld bent
    imagePosition: 'center 75%',
    label: { nl: 'Internationale ervaring', en: 'International experience' },
    title: { nl: 'Grenzen verleggen', en: 'Pushing boundaries' },
    paragraphs: {
      nl: [
        "Begin 2024 kwam ik na een reis door Azië terecht in **Sydney**. Ik werd verliefd op de sfeer van de stad en besloot er een tijdje te wonen en werken. Dat 'tijdje' groeide uiteindelijk uit tot **2,5 jaar avontuur in Australië**.",
        'Daar deed ik verder **marketing- en saleservaring** op in de **hospitality- en toerismebranche**, een wereld waarin alles draait om beleving, mensen en onvergetelijke ervaringen.',
        'In die jaren reisde ik van stad naar stad en land naar land om bijzondere ervaringen vast te leggen, **van Indonesië tot Nieuw-Zeeland**.',
      ],
      en: [
        "In early 2024, after a trip through Asia, I ended up in **Sydney**. I fell in love with the vibe of the city and decided to live and work there for a while. That 'while' eventually grew into **2.5 years of adventure in Australia**.",
        'There I gained further **marketing and sales experience** in the **hospitality and tourism industry**, a world that revolves around experiences, people and unforgettable moments.',
        'During those years I travelled from city to city and country to country to capture special experiences, **from Indonesia to New Zealand**.',
      ],
    },
  },
  {
    id: 'groeien',
    image: '/images/mijn%20verhaal/groeien.jpg',
    location: { nl: 'Sydney · Australië', en: 'Sydney · Australia' },
    label: { nl: 'Social media & partners', en: 'Social media & partners' },
    title: { nl: 'We groeien door', en: 'Still growing' },
    paragraphs: {
      nl: [
        'Met **ruim acht jaar ervaring in social media**, een **dronebrevet** en **fotografiecursussen** op zak en de socials van uiteenlopende merken onder mijn beheer, vind ik niets leuker dan **jouw merk tot leven brengen**.',
        'Al **ruim twee jaar** bouw ik actief aan mijn eigen socials, en inmiddels werk ik samen met **meer dan 25 partners**. En we blijven groeien!',
        '**Wil jij ook onderdeel worden van het verhaal?**',
      ],
      en: [
        'With **more than eight years of experience in social media**, a **drone licence** and **photography courses** under my belt, and the socials of a wide range of brands in my hands, there is nothing I love more than **bringing your brand to life**.',
        'For **more than two years** I have been actively building my own socials, and I now work with **more than 25 partners**. And we keep growing!',
        '**Would you like to become part of the story?**',
      ],
    },
  },
];
