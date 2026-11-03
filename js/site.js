// Configurable business details
const WHATSAPP_NUMBER = '212664779295';
const EMAIL = 'vianex.sarl@gmail.com';
// Web3Forms access key (free, from web3forms.com, linked to the email above).
// While empty, the form falls back to opening the visitor's email app.
const WEB3FORMS_KEY = 'e3a847a2-31d5-4111-b590-5fa7f2c81a4f';
const PHONE = '+212 664 779 295';
const MAP_LINK = 'https://maps.app.goo.gl/HXFnm5qyad69JsRP8';
// Translations (js/i18n.js); falls back to French if that file is missing
const I18N = window.I18N || { lang: 'fr', langs: ['fr'], t: (s) => s, tf: (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? ''), apply() {}, urlFor: () => '#' };
const { t, tf } = I18N;
const LANG = I18N.lang;
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const WA_LINK = waLink(t('Bonjour VIANEX, je souhaite recevoir un devis.'));

const NAV = [
  ['Accueil', '#accueil'], ['À propos', '#apropos'], ['Nos produits', '#produits'],
  ['Nos solutions', '#solutions'], ["Secteurs d'activité", '#secteurs'], ['Contact', 'contact.html'],
];
const CATEGORIES = [
  'Solutions réseau Cisco', 'Emballage industriel', "Machines et équipements d'emballage", 'EPI — Protection individuelle',
  'Fournitures industrielles', 'Clips et pièces en caoutchouc moulé',
];

const copy = {
  noResults: t('Aucun résultat. Modifiez vos filtres.'),
  reference: t('RÉFÉRENCE'),
  sizes: t('TAILLES DISPONIBLES'),
  customSize: t('Sur mesure · toutes dimensions'),
  features: t('Points clés'),
  related: t('Dans la même famille'),
  backCatalog: t('Retour au catalogue'),
  material: t('Matériau'),
  machine: t('Machine'),
  seeAll: t('Voir tout'),
  quote: t('Demander un devis'),
  whatsapp: t('Discuter sur WhatsApp'),
  results: (count) => tf(count === 1 ? '{n} référence' : '{n} références', { n: count }),
};

const app = { products: [] };
const isHome = () => document.body.dataset.page === 'home';
const icon = (name, cls = '') => `<i data-lucide="${name}"${cls ? ` class="${cls}"` : ''}></i>`;
const refreshIcons = () => window.lucide?.createIcons();

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------- Header, footer, WhatsApp button ---------- */
function renderShell() {
  const base = isHome() ? '' : 'index.html';
  const onCatalog = ['catalog', 'product'].includes(document.body.dataset.page);
  const page = document.body.dataset.page;
  const href = (h) => (h.startsWith('#') ? base + h : h);
  const current = (h) => (h === 'contact.html' && page === 'contact' ? ' aria-current="page"' : '');
  const quoteHref = isHome() ? '#contact' : 'contact.html';
  const navLinks = NAV.map(([label, h]) => `<a href="${href(h)}"${current(h)}>${t(label)}</a>`).join('')
    + `<a href="catalog.html"${onCatalog ? ' aria-current="page"' : ''}>${t('Catalogue')}</a>`;
  const langSwitch = (cls) => `<div class="lang-switch ${cls}" role="group" aria-label="${t('Langue')}">${I18N.langs.map((code) => `<a href="${I18N.urlFor(code)}" hreflang="${code}" lang="${code}"${code === LANG ? ' aria-current="true"' : ''}>${code.toUpperCase()}</a>`).join('')}</div>`;
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');

  if (header) {
    header.innerHTML = `<header class="site-header" id="header">
      <div class="container header-bar">
        <a class="header-logo" href="${base}#accueil" aria-label="${t('VIANEX — accueil')}"><img src="assets/vianex-logo-new.png" alt="VIANEX — Smart Packaging Solution" width="900" height="174"></a>
        <nav class="header-nav">${navLinks}</nav>
        <div class="header-right">
          ${langSwitch('lang-switch-header')}
          <a class="btn btn-cta header-cta" href="${quoteHref}">${t('Demander un devis')}</a>
          <button class="menu-btn" id="menu-btn" type="button" aria-label="${t('Menu')}" aria-expanded="false">${icon('menu', 'icon-open')}${icon('x', 'icon-close')}</button>
        </div>
      </div>
      <nav class="mobile-nav" id="mobile-nav" hidden>${navLinks}<a class="btn btn-cta" href="${quoteHref}">${t('Demander un devis')}</a></nav>
    </header>`;
    const el = document.getElementById('header');
    const onScroll = () => el.classList.toggle('scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const btn = document.getElementById('menu-btn');
    const mobile = document.getElementById('mobile-nav');
    const setOpen = (open) => { mobile.hidden = !open; btn.setAttribute('aria-expanded', String(open)); };
    btn.addEventListener('click', () => setOpen(mobile.hidden));
    mobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  }

  if (footer) {
    footer.innerHTML = `<footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <div class="footer-logo"><img src="assets/vianex-logo-light.png" alt="VIANEX" loading="lazy" width="900" height="174"></div>
          <p class="footer-tag">${escapeHtml(t('Machines & Emballages — Des solutions adaptées à tous vos besoins.'))}</p>
        </div>
        <div><h4>${t('Navigation')}</h4><ul class="footer-list">${NAV.map(([l, h]) => `<li><a href="${href(h)}">${t(l)}</a></li>`).join('')}<li><a href="catalog.html">${t('Catalogue')}</a></li></ul></div>
        <div><h4>${t('Produits')}</h4><ul class="footer-list">${CATEGORIES.map((c) => `<li><a href="${base}${c.includes('Cisco') ? '#cisco' : '#produits'}">${t(c)}</a></li>`).join('')}</ul></div>
        <div><h4>${t('Contact')}</h4><ul class="footer-list">
          <li class="row">${icon('mail')}<a href="mailto:${EMAIL}">${EMAIL}</a></li>
          <li class="row">${icon('map-pin')}<a href="${MAP_LINK}" target="_blank" rel="noopener noreferrer">${t('Zone Industrielle Gzenaya, Tanger')}</a></li>
          <li class="row">${icon('clock')}${t('Lun – Ven, 09:00 – 18:00')}</li>
          <li class="row">${icon('phone')}<a href="tel:${PHONE.replace(/\s/g, '')}">${PHONE}</a></li>
          <li class="row">${icon('message-circle')}<a href="${WA_LINK}" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul></div>
      </div>
      <div class="container footer-bottom">© ${new Date().getFullYear()} VIANEX. ${t('Tous droits réservés.')}</div>
    </footer>
    <a class="wa-float" href="${WA_LINK}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${icon('message-circle')}</a>`;
  }

  document.querySelectorAll('.js-wa').forEach((a) => { a.href = WA_LINK; });
  document.querySelectorAll('.js-wa-cisco').forEach((a) => {
    a.href = waLink(t('Bonjour VIANEX, je souhaite recevoir un devis pour des équipements réseau Cisco.'));
  });
  // Buttons that pre-select a category in the quote form
  document.querySelectorAll('[data-pick-category]').forEach((a) => a.addEventListener('click', () => {
    const select = document.querySelector('#quote-form select[name="category"]');
    if (select) select.value = a.dataset.pickCategory;
  }));
}

/* ---------- Home: product carousel dots (mobile) ---------- */
function setupCatDots() {
  const grid = document.querySelector('.cat-grid');
  const dots = document.getElementById('cat-dots');
  if (!grid || !dots) return;
  const cards = [...grid.querySelectorAll('.cat-card')];
  dots.innerHTML = cards.map(() => '<span></span>').join('');
  const marks = [...dots.children];
  const update = () => {
    // Active card = the one whose left edge is closest to the carousel's left edge
    const start = grid.getBoundingClientRect().left;
    let current = 0;
    let best = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.getBoundingClientRect().left - start - 20);
      if (dist < best) { best = dist; current = i; }
    });
    if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4) current = cards.length - 1;
    marks.forEach((m, i) => m.classList.toggle('active', i === current));
  };
  grid.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------- Scroll reveal ---------- */
function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

/* ---------- Quote form (home) ---------- */
function validateQuote(v) {
  const errs = {};
  const len = (s) => s.trim().length;
  if (len(v.name) < 2) errs.name = t('Nom requis');
  else if (len(v.name) > 100) errs.name = t('Nom trop long');
  if (len(v.company) < 2) errs.company = t('Société requise');
  else if (len(v.company) > 120) errs.company = t('Nom de société trop long');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()) || len(v.email) > 255) errs.email = t('Email invalide');
  if (len(v.phone) < 6) errs.phone = t('Téléphone requis');
  else if (len(v.phone) > 30 || !/^[+\d\s().-]+$/.test(v.phone.trim())) errs.phone = t('Téléphone invalide');
  if (!v.category) errs.category = t('Choisissez une catégorie');
  if (len(v.message) < 10) errs.message = t('Message trop court');
  else if (len(v.message) > 2000) errs.message = t('Message trop long');
  return errs;
}

function setupQuoteForm() {
  const form = document.getElementById('quote-form');
  if (!form) return;
  const submitBtn = document.getElementById('quote-submit');
  const produit = new URLSearchParams(location.search).get('produit');
  if (produit && form.elements.message) form.elements.message.value = `${tf('Je souhaite recevoir un devis pour : {p}', { p: produit })}\n${t('Quantité :')} `;
  const status = document.getElementById('form-status');
  const showStatus = (msg, type) => { status.textContent = msg; status.dataset.type = type; status.hidden = false; };

  // Validate the form; returns trimmed values, or null if there are errors
  const readForm = () => {
    const data = Object.fromEntries(['name', 'company', 'email', 'phone', 'category', 'message'].map((k) => [k, String(new FormData(form).get(k) ?? '')]));
    const errs = validateQuote(data);
    form.querySelectorAll('[data-err]').forEach((el) => { el.textContent = errs[el.dataset.err] ?? ''; });
    if (Object.keys(errs).length) {
      status.hidden = true;
      form.querySelector('.field-err:not(:empty)')?.previousElementSibling?.focus();
      return null;
    }
    return Object.fromEntries(Object.entries(data).map(([k, val]) => [k, val.trim()]));
  };
  const sep = LANG === 'fr' ? ' : ' : ': ';
  const summary = (v) => [['Nom', v.name], ['Société', v.company], ['Email', v.email], ['Téléphone', v.phone], ['Catégorie', t(v.category)]]
    .map(([label, value]) => t(label) + sep + value).join('\n') + `\n\n${v.message}`;

  // Main button: send straight to the VIANEX inbox through Web3Forms
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const v = readForm();
    if (!v) return;
    const subject = `Demande de devis — ${v.company}`;

    if (!WEB3FORMS_KEY) {
      // No key yet: fall back to the visitor's email app
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary(v))}`;
      showStatus(t("Votre messagerie s'ouvre pour finaliser l'envoi. Vous pouvez aussi envoyer votre demande par WhatsApp."), 'info');
      return;
    }

    submitBtn.disabled = true;
    showStatus(t('Envoi en cours…'), 'info');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: 'Site VIANEX',
          replyto: v.email,
          botcheck: form.elements.botcheck.checked,
          'Nom complet': v.name,
          'Société': v.company,
          'Email': v.email,
          'Téléphone': v.phone,
          'Catégorie': v.category,
          'Message': v.message,
          'Langue du site': LANG.toUpperCase(),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || `HTTP ${res.status}`);
      form.reset();
      showStatus(t('Merci ! Votre demande a bien été envoyée. Notre équipe vous répond rapidement.'), 'success');
    } catch (error) {
      console.error(error);
      showStatus(t("L'envoi a échoué. Réessayez, ou envoyez votre demande par WhatsApp."), 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });

  // Second button: same request, sent through WhatsApp
  document.getElementById('quote-whatsapp')?.addEventListener('click', () => {
    const v = readForm();
    if (!v) return;
    const text = `${t('Bonjour VIANEX, je souhaite recevoir un devis.')}\n\n${summary(v)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    showStatus(t("WhatsApp s'ouvre avec votre demande : il ne reste qu'à appuyer sur Envoyer."), 'info');
  });
}

/* ---------- Catalog ---------- */
function makeProductCard(product) {
  const link = document.createElement('a');
  link.className = 'product-card';
  link.href = `product.html?slug=${encodeURIComponent(product.slug)}`;
  link.innerHTML = `<div class="product-image"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy"><span class="product-card-kind">${product.kind === 'machine' ? copy.machine : copy.material}</span></div>
    <div class="product-card-body"><p class="product-card-category">${escapeHtml(t(product.category))}</p><h3>${escapeHtml(product.name)}</h3>
    <div class="product-card-footer"><span>${escapeHtml(product.customSize ? copy.customSize : product.reference || t(product.category))}</span><span aria-hidden="true">→</span></div></div>`;
  return link;
}

let visibleCount = 24;
function getFilteredProducts() {
  const search = document.getElementById('product-search')?.value.trim().toLocaleLowerCase() ?? '';
  const kind = document.querySelector('input[name="kind"]:checked')?.value ?? 'all';
  const category = document.getElementById('category-filter')?.value ?? '';
  const sort = document.getElementById('sort-filter')?.value ?? 'name';
  const products = app.products.filter((p) => {
    const haystack = `${p.name} ${p.reference} ${t(p.category)} ${p.description}`.toLocaleLowerCase();
    return (kind === 'all' || p.kind === kind) && (!category || p.category === category) && (!search || haystack.includes(search));
  });
  products.sort((a, b) => sort === 'category'
    ? t(a.category).localeCompare(t(b.category), LANG) || a.name.localeCompare(b.name, LANG)
    : a.name.localeCompare(b.name, LANG));
  return products;
}

function renderCatalog() {
  const container = document.getElementById('catalog-products');
  if (!container) return;
  const products = getFilteredProducts();
  container.replaceChildren(...products.slice(0, visibleCount).map(makeProductCard));
  document.getElementById('results-count').textContent = copy.results(products.length);
  document.getElementById('load-more').hidden = products.length <= visibleCount;
  document.getElementById('empty-state').hidden = products.length > 0;
}

function setupCatalog() {
  const category = document.getElementById('category-filter');
  const names = [...new Set(app.products.map((p) => p.category))].sort((a, b) => t(a).localeCompare(t(b), LANG));
  for (const name of names) category.append(new Option(t(name), name));
  const params = new URLSearchParams(location.search);
  const kind = params.get('kind');
  const pickedCategory = params.get('category');
  if (pickedCategory && names.includes(pickedCategory)) category.value = pickedCategory;
  if (kind) {
    const radio = document.querySelector(`input[name="kind"][value="${CSS.escape(kind)}"]`);
    if (radio) radio.checked = true;
  }
  const reset = () => { visibleCount = 24; renderCatalog(); };
  document.getElementById('product-search').addEventListener('input', reset);
  document.querySelectorAll('input[name="kind"]').forEach((input) => input.addEventListener('change', reset));
  category.addEventListener('change', reset);
  document.getElementById('sort-filter').addEventListener('change', renderCatalog);
  document.getElementById('load-more').addEventListener('click', () => { visibleCount += 24; renderCatalog(); });
  document.getElementById('reset-filters').addEventListener('click', () => {
    document.getElementById('product-search').value = '';
    document.querySelector('input[name="kind"][value="all"]').checked = true;
    category.value = '';
    document.getElementById('sort-filter').value = 'name';
    reset();
  });
  renderCatalog();
}

/* ---------- Home: featured products ---------- */
const FEATURED = ['spk-evo-cercleuse-batterie-lithium', 'film-etirable-machine-power-stretch', 'spk-tf-400-l', 'spk-rotate-banderoleuse-plateau-tournant'];
function renderHome() {
  document.querySelectorAll('[data-cat-count]').forEach((el) => {
    el.textContent = app.products.filter((p) => p.category === el.dataset.catCount).length;
  });
  document.querySelectorAll('[data-kind-count]').forEach((el) => {
    el.textContent = app.products.filter((p) => p.kind === el.dataset.kindCount).length;
  });
  const container = document.getElementById('featured-products');
  if (!container) return;
  const featured = FEATURED.map((slug) => app.products.find((p) => p.slug === slug)).filter(Boolean);
  container.replaceChildren(...featured.map(makeProductCard));
}

/* ---------- Product page ---------- */
function renderProduct() {
  const root = document.getElementById('main-content');
  if (!root) return;
  const slug = new URLSearchParams(location.search).get('slug');
  const product = app.products.find((p) => p.slug === slug || p.aliases?.includes(slug));
  if (!product) {
    root.innerHTML = `<div class="product-loading"><p>${copy.noResults}</p><a class="btn btn-cta btn-xl" href="catalog.html">${copy.backCatalog}</a></div>`;
    return;
  }
  document.title = `${product.name} | VIANEX`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', product.description.slice(0, 155));
  const related = app.products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const kindLabel = product.kind === 'machine' ? copy.machine : copy.material;
  const waProduct = waLink(tf('Bonjour VIANEX, je souhaite recevoir un devis pour : {p}.', { p: product.name + (product.reference ? ` (${product.reference})` : '') }));
  root.innerHTML = `<a class="product-back" href="catalog.html"><span aria-hidden="true">←</span><span>${copy.backCatalog}</span></a>
    <section class="product-detail-shell">
      <div class="product-gallery"><span class="gallery-index">VNX / ${String(app.products.indexOf(product) + 1).padStart(3, '0')}</span><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}"></div>
      <div class="product-info">
        <p class="eyebrow"><span class="index-number">${kindLabel}</span><span>${escapeHtml(t(product.category))}</span></p>
        <h1>${escapeHtml(product.name)}</h1>
        <p class="product-description">${escapeHtml(product.description)}</p>
        ${product.customSize ? `<div class="product-reference"><span>${copy.sizes}</span><strong>${copy.customSize}</strong></div>` : ''}
        <div class="product-reference"><span>${copy.reference}</span><strong>${escapeHtml(product.reference || '—')}</strong></div>
        <div class="product-actions">
          <a class="btn btn-cta btn-xl" href="contact.html?produit=${encodeURIComponent(product.name + (product.reference ? ` (${product.reference})` : ''))}">${copy.quote} ${icon('arrow-right')}</a>
          <a class="btn btn-navy btn-xl" href="${waProduct}" target="_blank" rel="noopener noreferrer">${icon('message-circle')} ${copy.whatsapp}</a>
        </div>
      </div>
    </section>
    ${product.features?.length ? `<section class="feature-list-section"><div><p class="eyebrow">${escapeHtml(t(product.category))}</p><h2>${copy.features}</h2></div><ul class="feature-list">${product.features.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}</ul></section>` : ''}
    ${related.length ? `<section class="related-section"><div class="related-heading"><h2>${copy.related}</h2><a class="text-link" href="catalog.html?kind=${encodeURIComponent(product.kind)}">${copy.seeAll} →</a></div><div class="product-grid" id="related-grid"></div></section>` : ''}`;
  document.getElementById('related-grid')?.replaceChildren(...related.map(makeProductCard));
  refreshIcons();
}

// Product names, descriptions and features in English / Spanish (data/products.<lang>.json)
async function loadTranslations(products) {
  if (LANG === 'fr') return products;
  try {
    const res = await fetch(`data/products.${LANG}.json?v=1`);
    if (!res.ok) return products;
    const tr = await res.json();
    return products.map((p) => (tr[p.slug] ? { ...p, ...tr[p.slug] } : p));
  } catch (error) {
    console.error(error);
    return products;
  }
}

async function start() {
  I18N.apply(document.body);
  renderShell();
  document.documentElement.classList.remove('i18n-wait');
  setupQuoteForm();
  setupReveal();
  setupCatDots();
  refreshIcons();
  try {
    const response = await fetch('data/products.json');
    if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
    app.products = await loadTranslations(await response.json());
    if (isHome()) renderHome();
    if (document.body.dataset.page === 'catalog') setupCatalog();
    if (document.body.dataset.page === 'product') renderProduct();
  } catch (error) {
    document.querySelectorAll('.loading-note').forEach((el) => { el.textContent = t('Le catalogue ne peut pas être chargé. Ouvrez ce projet via un serveur local.'); });
    console.error(error);
  }
}

start();
