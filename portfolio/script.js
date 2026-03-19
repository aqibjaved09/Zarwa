// ── Social Section Data ──
const socialData = {
  campaigns: [
    { img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&q=90', event: 'META ADS', name: 'BRAND CAMPAIGN', sub: 'FACEBOOK · INSTAGRAM', tags: 'REACH · ENGAGE · CONVERT · GROW' },
    { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=90', event: 'CAMPAIGN', name: 'DIGITAL LAUNCH', sub: 'FULL FUNNEL STRATEGY', tags: 'AWARENESS · TRAFFIC · LEADS · SALES', center: true },
    { img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=90', event: 'GROWTH', name: 'SCALE UP', sub: 'MULTI-CHANNEL CAMPAIGN', tags: 'DATA · STRATEGY · RESULTS · ROI' },
    { img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=90', event: 'EMAIL', name: 'MAILCHIMP', sub: 'AUTOMATION CAMPAIGN', tags: 'OPEN · CLICK · CONVERT · RETAIN' },
  ],
  seo: [
    { img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=500&q=90', event: 'SEO', name: 'RANK #1', sub: 'ON-PAGE OPTIMIZATION', tags: 'KEYWORDS · CONTENT · LINKS · RANK' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=90', event: 'SEO', name: 'ORGANIC GROWTH', sub: 'TECHNICAL SEO', tags: 'SPEED · CRAWL · INDEX · AUTHORITY', center: true },
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=90', event: 'SEO', name: 'LOCAL SEO', sub: 'GOOGLE MY BUSINESS', tags: 'LOCAL · MAPS · REVIEWS · TRUST' },
    { img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=90', event: 'SEO', name: 'LINK BUILDING', sub: 'OFF-PAGE AUTHORITY', tags: 'BACKLINKS · DA · TRUST · RANK' },
  ],
  ads: [
    { img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=90', event: 'PPC', name: 'GOOGLE ADS', sub: 'SEARCH & DISPLAY', tags: 'BID · TARGET · CONVERT · SCALE' },
    { img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=90', event: 'META', name: 'FACEBOOK ADS', sub: 'RETARGETING & PIXEL', tags: 'AUDIENCE · PIXEL · ROAS · PROFIT', center: true },
    { img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=90', event: 'SHOPIFY', name: 'ECOM ADS', sub: 'AFFILIATE MARKETING', tags: 'STORE · TRAFFIC · SALES · GROWTH' },
    { img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&q=90', event: 'CRO', name: 'CONVERSION', sub: 'LANDING PAGE OPT.', tags: 'TEST · OPTIMIZE · CONVERT · WIN' },
  ],
  social: [
    { img: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=500&q=90', event: 'INSTAGRAM', name: 'CONTENT STRATEGY', sub: 'REELS · STORIES · POSTS', tags: 'VISUAL · VIRAL · ENGAGE · GROW' },
    { img: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=500&q=90', event: 'LINKEDIN', name: 'B2B MARKETING', sub: 'THOUGHT LEADERSHIP', tags: 'NETWORK · LEADS · BRAND · TRUST', center: true },
    { img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=90', event: 'FACEBOOK', name: 'COMMUNITY', sub: 'PAGE MANAGEMENT', tags: 'FANS · REACH · ENGAGE · CONVERT' },
    { img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&q=90', event: 'TIKTOK', name: 'SHORT VIDEO', sub: 'VIRAL CONTENT', tags: 'HOOK · TREND · SHARE · GROW' },
  ],
  content: [
    { img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=90', event: 'BLOG', name: 'CONTENT WRITING', sub: 'SEO ARTICLES & COPY', tags: 'WRITE · RANK · ENGAGE · CONVERT' },
    { img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&q=90', event: 'EMAIL', name: 'EMAIL COPY', sub: 'NEWSLETTERS & DRIPS', tags: 'OPEN · READ · CLICK · BUY', center: true },
    { img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=90', event: 'VIDEO', name: 'VIDEO SCRIPTS', sub: 'ADS & SOCIAL CONTENT', tags: 'HOOK · STORY · CTA · SHARE' },
    { img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=90', event: 'COPY', name: 'AD COPYWRITING', sub: 'HEADLINES & CTAs', tags: 'PERSUADE · CLICK · SELL · WIN' },
  ]
};

const socialCategories = ['campaigns', 'seo', 'ads', 'social', 'content'];
let socialCatIndex = 0;
let socialCat = socialCategories[0];
let socialIndex = 0;

function renderSocialCards() {
  const track = document.getElementById('socialCardTrack');
  if (!track) return;
  const items = socialData[socialCat];
  const total = items.length;
  const prev  = (socialIndex - 1 + total) % total;
  const next  = (socialIndex + 1) % total;

  track.innerHTML = '';
  [prev, socialIndex, next].forEach((idx, pos) => {
    const d = items[idx];
    const isCenter = pos === 1;
    const card = document.createElement('div');
    card.className = 'port-card' + (isCenter ? ' port-card-center' : '');
    card.innerHTML = `
      <img src="${d.img}" alt="${d.name}"/>
      <div class="port-card-info">
        <p class="pc-event">${d.event}</p>
        <p class="pc-name">${d.name}</p>
        <p class="pc-sub">${d.sub}</p>
        <p class="pc-tags">${d.tags}</p>
      </div>`;
    track.appendChild(card);
  });

  // update label
  const labelEl = document.querySelector('.social-panel .port-label-text');
  if (labelEl) labelEl.textContent = 'SOCIAL MEDIA | ' + socialCat.toUpperCase();

  // sync active tab
  document.querySelectorAll('[data-social]').forEach(t => {
    t.classList.toggle('ptab-active', t.dataset.social === socialCat);
  });
}

function switchSocialCat(dir) {
  socialCatIndex = (socialCatIndex + dir + socialCategories.length) % socialCategories.length;
  socialCat = socialCategories[socialCatIndex];
  socialIndex = 0;
  renderSocialCards();
}

// Social tabs — click changes category
document.querySelectorAll('[data-social]').forEach(tab => {
  tab.addEventListener('click', () => {
    socialCat = tab.dataset.social;
    socialCatIndex = socialCategories.indexOf(socialCat);
    socialIndex = 0;
    renderSocialCards();
  });
});

// Arrows — change category
document.getElementById('socialArrowLeft')?.addEventListener('click', () => switchSocialCat(-1));
document.getElementById('socialArrowRight')?.addEventListener('click', () => switchSocialCat(1));

// Init
renderSocialCards;

// 3D mouse tilt on hero image
const heroImg = document.getElementById('heroImg');
if (heroImg) {
  const heroLeft = heroImg.parentElement;
  heroLeft.addEventListener('mousemove', (e) => {
    const rect = heroLeft.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    heroImg.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale(1.03)`;
  });
  heroLeft.addEventListener('mouseleave', () => {
    heroImg.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
}

// Animate skill bars on load
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = w; }, 300);
  });
});


/* ══════════════════════════════════════
   LIVE ANIMATIONS JS
══════════════════════════════════════ */

// ── Cursor glow trail ──
const glowEl = document.createElement('div');
glowEl.id = 'cursor-glow';
const trailEl = document.createElement('div');
trailEl.id = 'cursor-trail';
document.body.appendChild(glowEl);
document.body.appendChild(trailEl);

let trailX = 0, trailY = 0;
document.addEventListener('mousemove', (e) => {
  glowEl.style.left = e.clientX + 'px';
  glowEl.style.top  = e.clientY + 'px';
  // trail follows with slight lag
  setTimeout(() => {
    trailEl.style.left = e.clientX + 'px';
    trailEl.style.top  = e.clientY + 'px';
  }, 80);
});

// ── Scroll Reveal (IntersectionObserver) ──
const revealEls = document.querySelectorAll(
  '.skill-card, .about-body, .about-img-wrap, .about-text, .port-card, .port-tabs, .about-footer, .port-label'
);

// Add reveal classes
document.querySelectorAll('.skill-card').forEach((el, i) => {
  el.classList.add('reveal-scale');
  el.classList.add('delay-' + Math.min((i % 4) + 1, 6));
});
document.querySelector('.about-text')?.classList.add('reveal-left');
document.querySelector('.about-img-wrap')?.classList.add('reveal-right');
document.querySelector('.about-footer')?.classList.add('reveal');
document.querySelector('.port-label')?.classList.add('reveal');
document.querySelector('.port-tabs')?.classList.add('reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
  observer.observe(el);
});

// ── Typing effect on hero name ──
const heroNameEl = document.querySelector('.hero-name-hover');
if (heroNameEl) {
  const fullText = 'ZARWA\nZULQARNAIN';
  heroNameEl.innerHTML = '';
  heroNameEl.classList.add('typing-cursor');
  let i = 0;
  const type = () => {
    if (i < fullText.length) {
      if (fullText[i] === '\n') {
        heroNameEl.innerHTML = heroNameEl.innerHTML.replace('|', '') + '<br>';
      } else {
        heroNameEl.innerHTML = heroNameEl.innerHTML.replace('|', '') + fullText[i];
      }
      i++;
      setTimeout(type, 80);
    } else {
      heroNameEl.classList.remove('typing-cursor');
    }
  };
  setTimeout(type, 600);
}

// ── Navbar scrolled glow ──
document.querySelectorAll('.navbar').forEach(nav => {
  const panel = nav.closest('.panel');
  if (!panel) return;
  panel.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', panel.scrollTop > 10);
  });
});
// also on window scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.navbar').forEach(nav => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });
});

// ── Skill bars animate when visible ──
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
        const target = bar.getAttribute('data-width') || bar.style.width;
        bar.setAttribute('data-width', target);
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = target; }, 200 + i * 80);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skills-grid').forEach(g => skillObserver.observe(g));

// ── Port cards stagger on tab switch ──
const origRender = renderSocialCards;
window.renderSocialCards = function() {
  origRender();
  document.querySelectorAll('.port-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 100);
  });
};
// re-init with animation
window.renderSocialCards();