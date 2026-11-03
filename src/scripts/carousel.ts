// Gedeelde logica voor alle swipes op de site.
// Opbouw in de HTML:
//   [data-carousel]                → wrapper
//     [data-carousel-track]        → de rij die horizontaal scrollt (kinderen = slides)
//     [data-carousel-prev/next]    → de ‹ en › knoppen (CarouselControls.astro)
//     [data-carousel-dots]         → container voor de bolletjes
// Eén bolletje per "pagina" (= het aantal slides dat tegelijk in beeld is).

function initCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-carousel-track]');
  const prev = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
  const dotsContainer = root.querySelector<HTMLElement>('[data-carousel-dots]');
  const controls = root.querySelector<HTMLElement>('[data-carousel-controls]');
  if (!track || !prev || !next || !dotsContainer) return;

  const step = () => {
    const slide = track.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    return slide ? slide.offsetWidth + gap : track.clientWidth;
  };
  const maxIndex = () => Math.max(0, Math.round((track.scrollWidth - track.clientWidth) / step()));
  const index = () => Math.round(track.scrollLeft / step());
  const perPage = () => Math.max(1, Math.round(track.clientWidth / step()));
  const goTo = (i: number) => track.scrollTo({ left: Math.min(Math.max(i, 0), maxIndex()) * step(), behavior: 'smooth' });

  // Kleuren van de bolletjes (instelbaar via CarouselControls tone)
  const activeClass = controls?.dataset.dotActive || 'bg-[#1CABB0]';
  const inactiveClass = controls?.dataset.dotInactive || 'bg-[#1CABB0]/25';

  const update = () => {
    const dots = dotsContainer.querySelectorAll<HTMLElement>('button');
    const active = index() >= maxIndex() ? dots.length - 1 : Math.round(index() / perPage());
    dots.forEach((dot, i) => {
      dot.classList.toggle(activeClass, i === active);
      dot.classList.toggle(inactiveClass, i !== active);
    });
    prev.disabled = index() <= 0;
    next.disabled = index() >= maxIndex();
  };

  const build = () => {
    dotsContainer.innerHTML = '';
    const pages = Math.ceil(maxIndex() / perPage()) + 1;
    // Past alles in beeld (bijv. op desktop), dan is er niets om door te klikken
    controls?.classList.toggle('invisible', pages <= 1);
    for (let p = 0; p < pages; p++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'h-2 w-2 rounded-full transition-colors duration-300';
      dot.setAttribute('aria-label', `${p + 1} / ${pages}`);
      dot.addEventListener('click', () => goTo(p * perPage()));
      dotsContainer.appendChild(dot);
    }
    update();
  };

  prev.addEventListener('click', () => goTo(index() - perPage()));
  next.addEventListener('click', () => goTo(index() + perPage()));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', build);
  build();
}

export function initCarousels() {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((root) => {
    if (root.dataset.carouselReady) return;
    root.dataset.carouselReady = 'true';
    initCarousel(root);
  });
}
