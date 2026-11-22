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
        'My curiosity about the world started at a young age. Travelling with my family to **India and South Korea** opened my eyes to different cultures, places and ways of life. That curiosity soon grew into a desire to explore the world on my own, starting at just **eighteen**.',
        'My first big adventure took me to **Tanzania**, where I volunteered at a childcare project. Two years later, I returned for three months to help develop an **educational project for children living on the streets**. Not long after, I set off on my first **solo backpacking trip through Peru**, including a multi-day trek deep into the Amazon.',
        'Since then, I’ve travelled to **more than 35 countries**, each bringing new perspectives. And this is only the beginning.',
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
        'As a **graduated marketeer**, I set off to explore the world with my camera. Along the way, I started creating **photo and video content** for **tourism brands**, which led to my first collaborations with **Urang Utan Trekking** in Sumatra, **The Gibbon Experience** in Laos and **Palawan Camping** in the Philippines. I later spent time living in **Bali**, where I managed **social media for hotel chains**.',
        'These experiences helped me discover what I enjoy most: capturing the feeling of a place, **turning real experiences into stories** that inspire and helping brands connect with their audience through **authentic content**.',
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
        "In early 2024, after travelling through Asia, I ended up in **Sydney**. I quickly fell in love with the city's energy and decided to stay for a while. That little detour eventually turned into **two and a half years of living, working and exploring Australia**.",
        'During that time, I gained **marketing and sales experience** in the **hospitality and tourism industry**, a world driven by people and experiences.',
        'Alongside my work, I started creating content for **Australian tourism brands**, which took me from city to city and country to country, **from Indonesia to New Zealand**.',
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
        'With **over eight years of experience** in **social media management**, **photography** and **drone content creation**, there’s nothing I love more than turning creative ideas into content that **brings your brand to life**.',
        'For **over two years**, I’ve been growing my own social media channels and collaborating with **more than 25 brands and partners** along the way. And the journey is only getting started!',
        '**Want to be part of the story?**',
      ],
    },
  },
];
