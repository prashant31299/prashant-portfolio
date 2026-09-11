const projects = {
  dice: { title: 'THE JOB HUNT. AUTOMATED.', eyebrow: 'ASTITVA SYSTEMS / AI PRODUCT & AUTOMATION', lead: 'An AI-powered job application workflow that helps bench sales teams find relevant Dice opportunities and apply with less manual work.', metrics: [['80%', 'Lower GPT / API cost'], ['90%', 'Application accuracy']], challenge: 'Manual job searches and repetitive application steps made it difficult to consistently identify relevant opportunities and maintain application quality.', work: ['Built a Selenium workflow for Dice job search and application steps.', 'Added resume parsing and GPT-4o evaluation to score resume-to-job fit before applying.', 'Improved matching rules, relevance checks, and portal-field handling.', 'Packaged the system in Docker for a repeatable setup that bench sales staff could use.'], outcome: 'Prompt optimization, filtering, and a leaner evaluation flow reduced GPT/API costs by 80%. Refinements to matching and application handling improved application accuracy to 90%.', tools: ['GPT-4o', 'Selenium', 'Resume parsing', 'Docker'], source: 'Results reported in the supplied resume. The card is an illustrative workflow visualization.', links: [['Read the resume', './assets/prashant-chavan-resume.pdf']] },
  ayugenix: { title: 'A DIGITAL PRESENCE. BUILT TO GROW.', eyebrow: 'AYUGENIX LAB / B2B WEBSITE & GROWTH', lead: 'An end-to-end digital presence and lead generation system for a B2B manufacturing business.', metrics: [['₹50K', 'Monthly Meta Ads budget'], ['2 sprints', 'Campaign improvement cycle']], challenge: 'The business needed a professional website, a structured digital presence, and a reliable way to capture and qualify inbound B2B inquiries.', work: ['Built and launched a conversion-focused React website, then iterated on pages using lead quality and funnel observations.', 'Established SEO foundations and profiles on B2B portals.', 'Managed Meta and Google Ads and created GA4 dashboards for acquisition, conversion, and campaign performance.', 'Diagnosed a 30% CPL spike, rebuilt targeting, and improved campaign performance within two sprint cycles.', 'Defined qualification and follow-up workflows to connect marketing with sales.'], outcome: 'Created a structured, trackable lead pipeline and a stronger digital foundation for B2B growth.', tools: ['React', 'Meta Ads', 'Google Ads', 'GA4', 'SEO'], source: 'Based on the supplied resume and portfolio. Card artwork is a concept visual, not a screenshot of the delivered website.', links: [['Read the case study', './assets/prashant-chavan-portfolio.pdf#page=5']] },
  driveu: { title: 'TURNING SCROLLS INTO INQUIRIES.', eyebrow: 'DRIVE U / META ADS & CREATIVE STRATEGY', lead: 'Messaging-focused performance campaigns for a self-drive car rental business in Nagpur.', metrics: [['₹8.28', 'Cost per messaging conversation'], ['597K+', 'Video plays'], ['66.09%', 'Video hold rate']], challenge: 'Stand out in a competitive local market and turn a controlled ad budget into high-intent messaging inquiries.', work: ['Created messaging-focused Meta campaigns using WhatsApp and Messenger.', 'Used short video creative and tested hooks to capture attention.', 'Refined Nagpur location targeting and audiences.', 'Monitored messaging costs, video engagement, retention, and audience demographics to guide optimization.'], outcome: 'The supplied campaign report records a ₹8.28 cost per messaging conversation, 597,373+ video plays, an 11% hook rate, and a 66.09% hold rate.', tools: ['Meta Ads', 'Creative testing', 'WhatsApp', 'Campaign analytics'], source: 'Metrics from the Drive U results page in the supplied portfolio (page 11).', links: [['View campaign results', './assets/prashant-chavan-portfolio.pdf#page=11']] },
  dufft: { title: 'CARE, DOWN TO THE LAST DETAIL.', eyebrow: 'DUFFT SKIN CARE / PRODUCT LABEL DESIGN', lead: 'A green tea toner label that brings product identity, ingredients, and usage information into one consistent visual system.', metrics: [['Brand', 'Visual identity'], ['Print', 'Product label design']], challenge: 'Make the product recognizable while organizing front-of-pack branding and detailed label information clearly.', work: ['Designed the front and back label artwork for a green tea toner.', 'Used a botanical green palette, ingredient imagery, and a clear product hierarchy.', 'Organized ingredients, directions, and other packaging information into a readable layout.'], outcome: 'A complete product label design, available as original artwork in the shared portfolio archive.', tools: ['Packaging', 'Typography', 'Visual hierarchy', 'Brand design'], image: './assets/work/label.jpg', imageAlt: 'Original Dufft Skin Care toner label design', source: 'Original artwork supplied in the product label folder. Product statements shown belong to the supplied artwork.', links: [['Explore label designs', 'https://drive.google.com/drive/folders/1E7HVY2owPqOHnL3WqxLPVafL_7Lhlxhe']] },
  bharat: { title: 'SMALL BUSINESS. MEET YOUR AI TEAM.', eyebrow: 'BHARAT SMB GROWTH AGENT / AI PRODUCT PROJECT', lead: 'An AI assistant designed to help Indian small businesses create useful marketing content in Hindi, Marathi, and English.', metrics: [['3', 'Supported content languages'], ['7 days', 'Content calendar workflow']], challenge: 'Small business owners need consistent marketing content that fits their audience, language, and everyday sales channels.', work: ['Created flows for seven-day content calendars, reel hooks, captions, WhatsApp messages, and retail sales pitches.', 'Designed a safe-claim checker to flag risky skincare or health statements and suggest safer marketing copy.', 'Defined product metrics for content usage, copy-paste rate, unsafe claim rate, repeat usage, latency, and cost.'], outcome: 'A product workflow that connects multilingual content creation with practical distribution and quality checks. No public launch or adoption metrics are claimed.', tools: ['LLM workflows', 'Multilingual content', 'Product metrics', 'Claim checking'], source: 'Project scope from the supplied resume. The card visual illustrates the product concept.', links: [['Read project overview', './assets/prashant-chavan-resume.pdf#page=2']] },
  hilarius: { title: 'MAKING NATURAL FEEL ESSENTIAL.', eyebrow: 'HILARIUS AYURVEDA / E-COMMERCE & PRODUCT GRAPHICS', lead: 'Product visuals and packaging work for an Ayurveda brand, bringing its products into a consistent e-commerce presentation.', metrics: [['E-commerce', 'Product presentation'], ['Design', 'Packaging & infographics']], challenge: 'Present product information clearly and help shoppers recognize the brand across packaging and online listings.', work: ['Created product graphics and infographics for e-commerce listings.', 'Developed packaging and supporting product visuals.', 'Applied consistent typography and ingredient-led imagery across assets.'], outcome: 'A collection of product and listing assets designed to support presentation and customer trust.', tools: ['Product graphics', 'Packaging', 'E-commerce', 'Infographics'], image: './assets/work/hilarius.jpg', imageAlt: 'Original Hilarius Ayurveda product packaging mockup', source: 'Based on the portfolio mini case study and original artwork in the shared Hilarius Ayurveda folder.', links: [['View original design work', 'https://drive.google.com/drive/folders/1BudEHAPnl-CO-pbzENR5nN1OTHT07kBT']] },
  rag: { title: 'ANSWERS YOU CAN TRACE.', eyebrow: 'RAG QUALITY STUDIO / AI PRODUCT PROJECT', lead: 'A document Q&A product concept with an evaluation layer for retrieval performance and answer quality.', metrics: [['RAG', 'Document question answering'], ['Quality', 'Evaluation-led product decisions']], challenge: 'A fluent AI answer is not enough. Users need relevant responses, reliable citations, and signals that help them judge the answer.', work: ['Designed document upload, parsing, chunking, retrieval, citation, and answer-generation flows.', 'Defined checks for relevance, faithfulness, completeness, citation quality, hallucination risk, latency, and cost.', 'Mapped evaluation findings to prompt changes, retrieval improvements, and user trust signals.'], outcome: 'A product and evaluation design that makes answer quality part of the development workflow. The resume describes design scope rather than published deployment results.', tools: ['RAG', 'Document parsing', 'LLM evaluation', 'Citations', 'Product design'], source: 'Project description from the supplied resume.', links: [['Read project overview', './assets/prashant-chavan-resume.pdf#page=2']] },
  integrafin: { title: 'A CLEARER PATH TO CONVERSION.', eyebrow: 'INTEGRAFIN.TAX / WEBSITE, CONTENT & SEO', lead: 'A USA-focused tax and accounting website built and managed as part of my work at Astitva Systems.', metrics: [['USA', 'Market focus'], ['Web + SEO', 'Integrated execution']], challenge: 'Give prospective clients an understandable service experience while supporting organic discovery across relevant locations and topics.', work: ['Built and managed the website, service pages, and blog publishing.', 'Added a tax calculator and state-level SEO pages.', 'Updated SEO structure, landing pages, content briefs, and campaign assets.', 'Connected website execution with USA-focused lead generation efforts.'], outcome: 'A website and content foundation for organic traffic and lead generation in the USA market.', tools: ['Website development', 'SEO', 'Content strategy', 'Landing pages'], source: 'Work description from the supplied resume. Card artwork is an editorial project visualization.', links: [['Visit Integrafin.tax', 'https://integrafin.tax'], ['Read the resume', './assets/prashant-chavan-resume.pdf']] }
};

const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => {
  const count = cards.filter(card => button.dataset.filter === 'all' || card.dataset.category.split(' ').includes(button.dataset.filter)).length;
  button.setAttribute('aria-controls', 'project-grid');
  if (!button.querySelector('sup')) button.insertAdjacentHTML('beforeend', `<sup>${String(count).padStart(2, '0')}</sup>`);
});
cards.forEach(card => { card.setAttribute('aria-label', `View project: ${card.querySelector('h3').textContent}`); card.setAttribute('aria-haspopup', 'dialog'); });
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); });
  let count = 0;
  cards.forEach(card => {
    const visible = button.dataset.filter === 'all' || card.dataset.category.split(' ').includes(button.dataset.filter);
    card.hidden = !visible;
    card.classList.remove('filter-enter');
    if (visible) { count++; void card.offsetWidth; card.classList.add('filter-enter'); }
  });
  document.querySelector('.work-count').textContent = `${String(count).padStart(2, '0')} PROJECT${count === 1 ? '' : 'S'}`;
}));

const dialog = document.querySelector('.project-dialog');
const content = document.querySelector('#dialog-content');
const escapeHTML = str => str.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
let activeProjectCard;
const previousProject = document.querySelector('#project-prev');
const nextProject = document.querySelector('#project-next');
function showProject(card) {
  activeProjectCard = card;
  const visibleCards = cards.filter(item => !item.hidden);
  const index = visibleCards.indexOf(card);
  document.querySelector('#project-position').textContent = `${index + 1} / ${visibleCards.length}`;
  previousProject.disabled = index === 0;
  nextProject.disabled = index === visibleCards.length - 1;
  const project = projects[card.dataset.project];
  content.innerHTML = `<p class="dialog-eyebrow">${escapeHTML(project.eyebrow)}</p><h2 id="dialog-title">${escapeHTML(project.title)}</h2><p class="dialog-lead">${escapeHTML(project.lead)}</p><div class="dialog-metrics">${project.metrics.map(([value, label]) => `<div><strong>${escapeHTML(value)}</strong><span>${escapeHTML(label)}</span></div>`).join('')}</div><div class="dialog-section"><h3>THE CHALLENGE</h3><p>${escapeHTML(project.challenge)}</p></div><div class="dialog-section"><h3>WHAT I DID</h3><ul>${project.work.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></div><div class="dialog-section"><h3>THE OUTCOME</h3><p>${escapeHTML(project.outcome)}</p></div>${project.image ? `<img class="dialog-image" src="${project.image}" alt="${escapeHTML(project.imageAlt)}">` : ''}<div class="skill-tags dialog-section">${project.tools.map(tool => `<span>${escapeHTML(tool)}</span>`).join('')}</div><div class="dialog-links">${project.links.map(([label, url]) => `<a class="button outline" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} <span>↗</span></a>`).join('')}</div><p class="dialog-source">${escapeHTML(project.source)}</p>`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}
cards.forEach(card => card.addEventListener('click', () => showProject(card)));
function moveProject(direction) {
  const visibleCards = cards.filter(card => !card.hidden);
  const card = visibleCards[visibleCards.indexOf(activeProjectCard) + direction];
  if (card) {
    showProject(card);
    const title = document.querySelector('#dialog-title');
    title.tabIndex = -1;
    title.focus({ preventScroll: true });
  }
}
previousProject.addEventListener('click', () => moveProject(-1));
nextProject.addEventListener('click', () => moveProject(1));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); mobileNav.hidden = !open; });
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', event => { if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu(); });
matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

document.querySelectorAll('.services details').forEach(detail => detail.addEventListener('toggle', () => { if (detail.open) document.querySelectorAll('.services details').forEach(other => { if (other !== detail) other.open = false; }); }));
document.querySelector('#year').textContent = new Date().getFullYear();

// Open a linked campaign before scrolling to its full case study.
function openLinkedGrowthCase() {
  const id = location.hash.slice(1);
  const caseStudy = document.getElementById(id);
  if (caseStudy?.classList.contains('growth-case')) caseStudy.open = true;
}
document.querySelector('#drive-case-link').addEventListener('click', () => {
  document.querySelector('#case-drive-u').open = true;
});
window.addEventListener('hashchange', openLinkedGrowthCase);
openLinkedGrowthCase();

// Evidence keeps its source link as a fallback when JavaScript is unavailable.
const proofDialog = document.querySelector('.proof-dialog');
const proofLinks = [...document.querySelectorAll('[data-proof]')];
const proofImage = document.querySelector('#proof-image');
const proofError = document.querySelector('#proof-error');
const previousProof = document.querySelector('#proof-prev');
const nextProof = document.querySelector('#proof-next');
const zoomProof = document.querySelector('#proof-zoom');
const proofStage = document.querySelector('.proof-image-stage');
let proofGroup = [];
let proofIndex = 0;

function showProof(index) {
  proofIndex = index;
  proofStage.classList.remove('is-zoomed');
  zoomProof.setAttribute('aria-pressed', 'false');
  zoomProof.textContent = 'Zoom in';
  const link = proofGroup[index];
  document.querySelector('#proof-title').textContent = link.dataset.proofTitle;
  document.querySelector('#proof-kind').textContent = link.dataset.proofKind;
  document.querySelector('#proof-caption').textContent = link.dataset.proofNote;
  document.querySelector('#proof-source').href = link.href;
  document.querySelector('#proof-count').textContent = `${index + 1} / ${proofGroup.length}`;
  previousProof.disabled = index === 0;
  nextProof.disabled = index === proofGroup.length - 1;
  proofError.hidden = true;
  proofImage.hidden = false;
  proofImage.alt = link.dataset.proofTitle;
  proofImage.src = link.dataset.proof;
}
proofImage.addEventListener('error', () => { proofImage.hidden = true; proofError.hidden = false; });
proofLinks.forEach(link => link.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  proofGroup = proofLinks.filter(item => item.dataset.proofGroup === link.dataset.proofGroup);
  showProof(proofGroup.indexOf(link));
  proofDialog.showModal();
  document.body.classList.add('dialog-open');
}));
previousProof.addEventListener('click', () => { if (proofIndex > 0) showProof(proofIndex - 1); });
nextProof.addEventListener('click', () => { if (proofIndex < proofGroup.length - 1) showProof(proofIndex + 1); });
zoomProof.addEventListener('click', () => {
  const zoomed = proofStage.classList.toggle('is-zoomed');
  zoomProof.setAttribute('aria-pressed', String(zoomed));
  zoomProof.textContent = zoomed ? 'Fit image' : 'Zoom in';
  proofStage.scrollTo(0, 0);
});
proofDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' && proofIndex > 0) { event.preventDefault(); showProof(proofIndex - 1); }
  if (event.key === 'ArrowRight' && proofIndex < proofGroup.length - 1) { event.preventDefault(); showProof(proofIndex + 1); }
});
document.querySelector('.proof-close').addEventListener('click', () => proofDialog.close());
proofDialog.addEventListener('click', event => {
  if (event.target !== proofDialog) return;
  const rect = proofDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) proofDialog.close();
});
proofDialog.addEventListener('close', () => {
  if (!document.querySelector('dialog[open]')) document.body.classList.remove('dialog-open');
});
document.querySelectorAll('[data-close-case]').forEach(button => button.addEventListener('click', () => {
  const story = button.closest('.growth-case');
  story.open = false;
  story.querySelector('summary').focus({ preventScroll: true });
  story.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
}));

// Keep navigation useful throughout the long portfolio.
document.querySelectorAll('[data-focus-filter]').forEach(link => link.addEventListener('click', () => {
  filters.find(button => button.dataset.filter === link.dataset.focusFilter)?.click();
}));
document.querySelectorAll('.desktop-nav a[href="#work"], #mobile-nav a[href="#work"], .hero-actions a[href="#work"]').forEach(link => link.addEventListener('click', () => filters[0].click()));
mobileNav.addEventListener('focusout', event => {
  if (event.relatedTarget && !mobileNav.contains(event.relatedTarget) && event.relatedTarget !== menuButton) closeMenu();
});
const navLinks = [...document.querySelectorAll('.desktop-nav a, #mobile-nav a')];
const sectionLinks = navLinks.map(link => ({ link, section: document.querySelector(link.hash) }));
let navigationScheduled = false;
function updateNavigation() {
  const offset = window.innerHeight * .35;
  let current = '';
  sectionLinks.forEach(({ section }) => {
    if (section && section.getBoundingClientRect().top <= offset) current = section.id;
  });
  navLinks.forEach(link => {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  navigationScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!navigationScheduled) { navigationScheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();

// Motion is optional; all content remains visible without JavaScript.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle = document.querySelector('.motion-toggle');
const revealAnimations = new Set();
let motionPaused = false;
function syncMotion() {
  const disabled = motionPreference.matches || motionPaused;
  document.body.classList.toggle('motion-enabled', !motionPreference.matches);
  document.body.classList.toggle('motion-paused', disabled);
  motionToggle.hidden = motionPreference.matches;
  motionToggle.setAttribute('aria-pressed', String(motionPaused));
  motionToggle.textContent = motionPaused ? 'Resume animations' : 'Pause animations';
  if (disabled) revealAnimations.forEach(animation => animation.cancel());
}
motionToggle.addEventListener('click', () => { motionPaused = !motionPaused; syncMotion(); });
motionPreference.addEventListener('change', syncMotion);
syncMotion();
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      revealObserver.unobserve(entry.target);
      if (motionPreference.matches || motionPaused) return;
      const animation = entry.target.animate([
        { opacity: .35, transform: 'translateY(22px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' });
      revealAnimations.add(animation);
      animation.finished.catch(() => {}).finally(() => revealAnimations.delete(animation));
    });
  }, { threshold: .12 });
  document.querySelectorAll('.section-heading, .growth-spotlight, .about-grid, .experience-grid').forEach(element => revealObserver.observe(element));
}
