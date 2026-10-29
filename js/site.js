const CONTACT_EMAIL = 'hello@vianex.example';

const translations = {
  fr: {skip:'Aller au contenu',catalog:'Catalogue',approach:'Notre approche',browse:'Voir les produits',heroEyebrow:'MATIÈRES · MACHINES · MOUVEMENT',heroLineOne:'Tout commence',heroLineTwo:'au bon emballage.',heroIntro:'Des consommables aux lignes automatisées, trouvez les bons équipements pour chaque étape de votre expédition.',exploreCatalog:'Explorer le catalogue',browseFamilies:'Parcourir les familles',heroFootnote:'MATÉRIEL DE CONDITIONNEMENT PROFESSIONNEL',heroImageCaption:'FILM ÉTIRABLE · PALETTISATION',familyEyebrow:'LE CATALOGUE, PAR USAGE',familyTitle:'Une ligne. Plusieurs points d’appui.',familyIntro:'Explorez les équipements et matières qui accompagnent vos colis, du poste manuel à la cadence automatisée.',machines:'Machines',machineSub:'Cerclage, filmage, formage',materials:'Matériaux',materialSub:'Films, feuillards, calage',selectionEyebrow:'SÉLECTION VNX',selectionTitle:'Repères pour démarrer.',seeAll:'Voir les 143 références',loading:'Chargement du catalogue…',methodEyebrow:'CHOISIR AVEC MÉTHODE',methodTitle:'Le bon format fait gagner de la place. Le bon geste, du temps.',methodText:'Partez de votre produit, de votre cadence et de votre destination. Comparez ensuite les familles de machines et de consommables qui correspondent à votre opération.',methodLink:'Trouver une solution',catalogEyebrow:'INDEX DES PRODUITS',catalogTitle:'Trouver la bonne pièce du puzzle.',catalogIntro:'Machines et matériaux pour préparer, fermer, protéger et expédier.',catalogCount:'143 PRODUITS INDEXÉS',searchLabel:'RECHERCHER',searchPlaceholder:'Nom, référence, usage',typeLabel:'TYPE DE PRODUIT',all:'Tout le catalogue',familyLabel:'FAMILLE',allFamilies:'Toutes les familles',sortLabel:'TRIER PAR',sortName:'Nom, A à Z',sortCategory:'Famille',reset:'Réinitialiser les filtres',loadMore:'Afficher plus',noResults:'Aucun résultat. Modifiez vos filtres.',reference:'RÉFÉRENCE',features:'Points clés',related:'Dans la même famille',backCatalog:'Retour au catalogue',product:'Produit',material:'Matériau',machine:'Machine',references:'références',viewProduct:'Voir le produit',catalogLink:'Explorer le catalogue',footerNote:'Matières et machines pour vos lignes de conditionnement.',footerCatalog:'Catalogue',footerApproach:'Notre approche',footerRights:'Tous droits réservés',results:(count)=>`${count} référence${count===1?'':'s'}`},
  en: {skip:'Skip to content',catalog:'Catalog',approach:'Our approach',browse:'Browse products',heroEyebrow:'MATERIALS · MACHINES · MOVEMENT',heroLineOne:'Every shipment',heroLineTwo:'starts with a choice.',heroIntro:'From consumables to automated lines, find the right equipment for every step of your packaging process.',exploreCatalog:'Explore the catalog',browseFamilies:'Browse product families',heroFootnote:'PROFESSIONAL PACKAGING EQUIPMENT',heroImageCaption:'STRETCH FILM · PALLETIZING',familyEyebrow:'THE CATALOG, BY USE',familyTitle:'One line. More ways forward.',familyIntro:'Explore equipment and materials for every parcel, from manual stations to automated throughput.',machines:'Machines',machineSub:'Strapping, wrapping, forming',materials:'Materials',materialSub:'Films, strapping, cushioning',selectionEyebrow:'VNX SELECTION',selectionTitle:'A place to start.',seeAll:'See all 143 products',loading:'Loading catalog…',methodEyebrow:'CHOOSE WITH A METHOD',methodTitle:'The right format saves space. The right workflow saves time.',methodText:'Start with the product, throughput and destination. Then compare the machine and material families that fit the operation.',methodLink:'Find a solution',catalogEyebrow:'PRODUCT INDEX',catalogTitle:'Find the right piece of the puzzle.',catalogIntro:'Machines and materials to prepare, close, protect and ship.',catalogCount:'143 PRODUCTS INDEXED',searchLabel:'SEARCH',searchPlaceholder:'Name, reference, use',typeLabel:'PRODUCT TYPE',all:'All products',familyLabel:'FAMILY',allFamilies:'All families',sortLabel:'SORT BY',sortName:'Name, A to Z',sortCategory:'Family',reset:'Reset filters',loadMore:'Show more',noResults:'No matches. Adjust your filters.',reference:'REFERENCE',features:'Key details',related:'From the same family',backCatalog:'Back to catalog',product:'Product',material:'Material',machine:'Machine',references:'products',viewProduct:'View product',catalogLink:'Explore the catalog',footerNote:'Materials and machines for your packaging line.',footerCatalog:'Catalog',footerApproach:'Our approach',footerRights:'All rights reserved',results:(count)=>`${count} product${count===1?'':'s'}`},
  ar: {skip:'انتقل إلى المحتوى',catalog:'الكتالوج',approach:'منهجنا',browse:'استكشف المنتجات',heroEyebrow:'المواد · الآلات · الحركة',heroLineOne:'كل شحنة تبدأ',heroLineTwo:'باختيار التغليف.',heroIntro:'من المواد الاستهلاكية إلى خطوط التعبئة الآلية، اكتشف المعدات المناسبة لكل مرحلة من مراحل الشحن.',exploreCatalog:'استكشف الكتالوج',browseFamilies:'تصفح الفئات',heroFootnote:'معدات تغليف احترافية',heroImageCaption:'فيلم مطاطي · منصات نقالة',familyEyebrow:'الكتالوج حسب الاستخدام',familyTitle:'خط واحد. خيارات متعددة.',familyIntro:'اكتشف المعدات والمواد التي ترافق طرودك، من المحطات اليدوية إلى الإنتاج الآلي.',machines:'الآلات',machineSub:'الربط والتغليف والتشكيل',materials:'المواد',materialSub:'الأفلام والأشرطة والحماية',selectionEyebrow:'اختيارات VNX',selectionTitle:'ابدأ من هنا.',seeAll:'عرض المنتجات الـ 143',loading:'جار تحميل الكتالوج…',methodEyebrow:'اختر بمنهجية',methodTitle:'المقاس المناسب يوفر المساحة. والطريقة المناسبة توفر الوقت.',methodText:'ابدأ بمنتجك وسرعة الإنتاج ووجهة الشحن، ثم قارن فئات الآلات والمواد المناسبة للعملية.',methodLink:'ابحث عن حل',catalogEyebrow:'فهرس المنتجات',catalogTitle:'اعثر على القطعة المناسبة.',catalogIntro:'آلات ومواد للتحضير والإغلاق والحماية والشحن.',catalogCount:'143 منتجاً في الفهرس',searchLabel:'بحث',searchPlaceholder:'الاسم أو المرجع أو الاستخدام',typeLabel:'نوع المنتج',all:'كل المنتجات',familyLabel:'الفئة',allFamilies:'جميع الفئات',sortLabel:'ترتيب حسب',sortName:'الاسم',sortCategory:'الفئة',reset:'إعادة ضبط الفلاتر',loadMore:'عرض المزيد',noResults:'لا توجد نتائج. غيّر عوامل التصفية.',reference:'المرجع',features:'تفاصيل أساسية',related:'من الفئة نفسها',backCatalog:'العودة إلى الكتالوج',product:'المنتج',material:'مادة',machine:'آلة',references:'منتج',viewProduct:'عرض المنتج',catalogLink:'استكشف الكتالوج',footerNote:'مواد وآلات لخطوط التعبئة والتغليف.',footerCatalog:'الكتالوج',footerApproach:'منهجنا',footerRights:'جميع الحقوق محفوظة',results:(count)=>`${count} منتج`}
};

const homepageCopy = {
  fr: {heroEyebrow:"LE CONDITIONNEMENT, C'EST HUMAIN.",heroLineOne:'Bien emballé,',heroLineTwo:'prêt à partir.',heroIntro:'Pour ce que vous fabriquez, vendez et envoyez : les bons outils, les bons gestes, au bon rythme.',exploreCatalog:'Trouver mon emballage',browseFamilies:'Voir ce qui vous aide',heroFootnote:'LES BONS GESTES. LES BONS OUTILS.',heroImageCaption:'FAIT AVEC SOIN. PRÊT À BOUGER.',tickerOne:'DU PREMIER RUBAN AU DERNIER TOUR DE FILM',tickerTwo:"BIEN EMBALLÉ, C'EST DÉJÀ EN ROUTE",tickerThree:'DES SOLUTIONS QUI SUIVENT VOTRE RYTHME',familyEyebrow:'CHAQUE GESTE A SON OUTIL',familyTitle:'De vos mains à la ligne, on vous suit.',familyIntro:"Un colis à caler, une palette à filmer, une cadence à tenir ? Commencez par le geste qui compte aujourd'hui.",selectionEyebrow:'QUELQUES BONS POINTS DE DÉPART',selectionTitle:'Des favoris du terrain.',methodEyebrow:'UN MOT DU QUOTIDIEN',methodTitle:'Le bon emballage ? Celui qui rend la journée plus simple.',methodText:"Chaque expédition a ses contraintes et chaque équipe sa façon de faire. Parcourez les produits, comparez les options et trouvez le coup de main qu'il vous faut.",methodLink:'On regarde ensemble'},
  en: {heroEyebrow:'PACKING IS A PEOPLE THING.',heroLineOne:'Packed with care,',heroLineTwo:'ready to go.',heroIntro:'For the things you make, sell and send: the right tools, the right touches, at your pace.',exploreCatalog:'Find my packaging',browseFamilies:'See what can help',heroFootnote:'GOOD HANDS. GOOD TOOLS.',heroImageCaption:'MADE WITH CARE. READY TO MOVE.',tickerOne:'FROM THE FIRST STRIP OF TAPE TO THE LAST WRAP',tickerTwo:'PACKED WELL, ALREADY ON ITS WAY',tickerThree:'SOLUTIONS THAT KEEP UP WITH YOU',familyEyebrow:'EVERY TASK HAS ITS TOOL',familyTitle:'From your hands to the line, we’re with you.',familyIntro:'A parcel to cushion, a pallet to wrap, a pace to keep? Start with the task in front of you.',selectionEyebrow:'A FEW GOOD PLACES TO START',selectionTitle:'Field-tested favorites.',methodEyebrow:'A NOTE FROM THE EVERYDAY',methodTitle:'Good packaging? The kind that makes the day easier.',methodText:'Every shipment has its quirks, and every team has its way of working. Browse the products, compare options, and find the helping hand you need.',methodLink:'Let’s figure it out'},
  ar: {heroEyebrow:'التغليف يبدأ بالناس.',heroLineOne:'مغلّف بعناية،',heroLineTwo:'وجاهز للانطلاق.',heroIntro:'لما تصنعه وتبيعه وترسله: الأدوات المناسبة واللمسات الصحيحة بالوتيرة التي تناسبك.',exploreCatalog:'اعثر على التغليف المناسب',browseFamilies:'اكتشف ما يساعدك',heroFootnote:'أيدٍ ماهرة. أدوات مناسبة.',heroImageCaption:'صُنع بعناية. جاهز للحركة.',tickerOne:'من أول شريط لاصق إلى آخر لفة فيلم',tickerTwo:'تغليف جيد يعني أن الشحنة بدأت رحلتها',tickerThree:'حلول تواكب إيقاع عملك',familyEyebrow:'لكل مهمة أداتها',familyTitle:'من عمل يديك إلى خط الإنتاج، نحن معك.',familyIntro:'هل تحتاج إلى حماية طرد أو تغليف منصة أو مواكبة وتيرة العمل؟ ابدأ بالمهمة أمامك.',selectionEyebrow:'بدايات جيدة لاختيارك',selectionTitle:'اختيارات من أرض الواقع.',methodEyebrow:'كلمة من يوم العمل',methodTitle:'التغليف الجيد هو ما يجعل يومك أسهل.',methodText:'لكل شحنة تحدياتها ولكل فريق طريقته. تصفح المنتجات وقارن الخيارات واعثر على المساعدة التي تحتاجها.',methodLink:'لنجدها معاً'}
};
Object.assign(translations.fr, homepageCopy.fr);
Object.assign(translations.en, homepageCopy.en);
Object.assign(translations.ar, homepageCopy.ar);

const contactCopy = {
  fr: {contactNav:'Contact',contactEyebrow:'ON EN PARLE ?',contactTitle:'Votre prochain colis commence par une question.',contactIntro:'Dites-nous ce que vous expédiez et ce qui vous ferait gagner du temps. On préparera la suite ensemble.',contactName:'Votre nom',contactEmail:'Votre e-mail',contactMessage:'Que souhaitez-vous emballer ?',contactSend:'Préparer ma demande',contactNote:'Votre application e-mail s’ouvrira avec le message prêt à envoyer.'},
  en: {contactNav:'Contact',contactEyebrow:'LET’S TALK',contactTitle:'Your next shipment starts with a question.',contactIntro:'Tell us what you’re shipping and what could make the process easier. We’ll work out the next step together.',contactName:'Your name',contactEmail:'Your email',contactMessage:'What are you packing?',contactSend:'Prepare my enquiry',contactNote:'Your email app will open with the message ready to send.'},
  ar: {contactNav:'تواصل معنا',contactEyebrow:'لنتحدث',contactTitle:'شُحنتك القادمة تبدأ بسؤال.',contactIntro:'أخبرنا بما تريد شحنه وما الذي يسهل العملية. سنحدد الخطوة التالية معاً.',contactName:'اسمك',contactEmail:'بريدك الإلكتروني',contactMessage:'ما الذي تريد تغليفه؟',contactSend:'جهّز طلبي',contactNote:'سيفتح تطبيق البريد لديك مع رسالة جاهزة للإرسال.'}
};
Object.assign(translations.fr, contactCopy.fr);
Object.assign(translations.en, contactCopy.en);
Object.assign(translations.ar, contactCopy.ar);

const sizeCopy = {
  fr: {sizes:'TAILLES DISPONIBLES',customSize:'Sur mesure · toutes dimensions'},
  en: {sizes:'AVAILABLE SIZES',customSize:'Made to measure · any size'},
  ar: {sizes:'المقاسات المتوفرة',customSize:'حسب الطلب · جميع المقاسات'}
};
Object.assign(translations.fr, sizeCopy.fr);
Object.assign(translations.en, sizeCopy.en);
Object.assign(translations.ar, sizeCopy.ar);

const app = { locale: localStorage.getItem('vianex-locale') || 'fr', products: [] };
const text = (key) => translations[app.locale]?.[key] ?? translations.fr[key] ?? key;

function renderShell() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = `<header class="site-header"><a class="brand" href="index.html" aria-label="Vianex, accueil"><img class="brand-art" src="assets/vianex-logo.png?v=2" alt="Vianex, smart packaging solution"></a><nav class="primary-nav" id="primary-nav"><a href="catalog.html" data-copy="catalog">Catalogue</a><a href="index.html#approach" data-copy="approach">Notre approche</a><a href="index.html#contact" data-copy="contactNav">Contact</a></nav><div class="header-tools"><button class="language-button" id="language-toggle" type="button" aria-label="Change language">FR</button><a class="header-cta" href="catalog.html" data-copy="browse">Voir les produits <span aria-hidden="true">↗</span></a><button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">MENU</button></div></header>`;
  if (footer) footer.innerHTML = `<footer class="site-footer"><div class="footer-inner"><a class="footer-brand" href="index.html" aria-label="Vianex, accueil"><img class="brand-art" src="assets/vianex-logo.png?v=2" alt="Vianex, smart packaging solution"></a><p class="footer-note" data-copy="footerNote">Matières et machines pour vos lignes de conditionnement.</p><nav class="footer-links"><a href="catalog.html" data-copy="footerCatalog">Catalogue</a><a href="index.html#approach" data-copy="footerApproach">Notre approche</a><a href="index.html#contact" data-copy="contactNav">Contact</a></nav><span class="footer-copyright">© ${new Date().getFullYear()} Vianex · <span data-copy="footerRights">Tous droits réservés</span></span></div></footer>`;
  document.getElementById('language-toggle')?.addEventListener('click', cycleLocale);
  document.getElementById('menu-toggle')?.addEventListener('click', (event) => {
    const nav = document.getElementById('primary-nav');
    const open = nav?.classList.toggle('open') ?? false;
    event.currentTarget.setAttribute('aria-expanded', String(open));
  });
  updateLocale();
}

function updateLocale() {
  const locale = translations[app.locale] ? app.locale : 'fr';
  app.locale = locale;
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-copy]').forEach((element) => {
    const value = text(element.dataset.copy);
    if (typeof value === 'string') element.textContent = value;
  });
  const languageButton = document.getElementById('language-toggle');
  if (languageButton) languageButton.textContent = locale.toUpperCase();
  const search = document.getElementById('product-search');
  if (search) search.placeholder = text('searchPlaceholder');
}

function cycleLocale() {
  const locales = ['fr', 'en', 'ar'];
  app.locale = locales[(locales.indexOf(app.locale) + 1) % locales.length];
  localStorage.setItem('vianex-locale', app.locale);
  updateLocale();
  if (document.body.dataset.page === 'catalog') renderCatalog();
}

function setupContactForm() {
  document.getElementById('contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const labels = {
      fr: {name: 'Nom', email: 'E-mail', subject: 'Demande de renseignement Vianex'},
      en: {name: 'Name', email: 'Email', subject: 'Vianex information request'},
      ar: {name: 'الاسم', email: 'البريد الإلكتروني', subject: 'طلب معلومات من فيانيكس'}
    }[app.locale];
    const body = `${labels.name} : ${form.get('name')}\n${labels.email} : ${form.get('email')}\n\n${form.get('message')}`;
    const query = new URLSearchParams({subject: labels.subject, body});
    window.location.href = `mailto:${CONTACT_EMAIL}?${query.toString()}`;
  });
}

function makeProductCard(product) {
  const link = document.createElement('a');
  link.className = 'product-card';
  link.href = `product.html?slug=${encodeURIComponent(product.slug)}`;
  const imageWrap = document.createElement('div');
  imageWrap.className = 'product-image';
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  image.loading = 'lazy';
  imageWrap.append(image);
  const kind = document.createElement('span');
  kind.className = 'product-card-kind';
  kind.textContent = product.kind === 'machine' ? text('machine') : text('material');
  imageWrap.append(kind);
  const body = document.createElement('div');
  body.className = 'product-card-body';
  const category = document.createElement('p');
  category.className = 'product-card-category';
  category.textContent = product.category;
  const title = document.createElement('h3');
  title.textContent = product.name;
  const footer = document.createElement('div');
  footer.className = 'product-card-footer';
  const reference = document.createElement('span');
  reference.textContent = product.customSize ? text('customSize') : product.reference || product.category;
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';
  footer.append(reference, arrow);
  body.append(category, title, footer);
  link.append(imageWrap, body);
  return link;
}

function renderHome() {
  const container = document.getElementById('featured-products');
  if (!container) return;
  const featuredSlugs = ['spk-evo-cercleuse-batterie-lithium', 'film-etirable-machine-power-stretch', 'spk-tf-400-l'];
  const featured = featuredSlugs.map((slug) => app.products.find((product) => product.slug === slug)).filter(Boolean);
  container.replaceChildren(...featured.map(makeProductCard));
  setupHomeMotion();
}

function setupHomeMotion() {
  const targets = document.querySelectorAll('.family-tile,.featured-grid .product-card,.method-section > *');
  const show = (element) => element.classList.add('is-visible');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    targets.forEach(show);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      show(entry.target);
      observer.unobserve(entry.target);
    });
  }, {threshold: 0.14});
  targets.forEach((element, index) => {
    element.classList.add('will-reveal');
    element.style.setProperty('--reveal-delay', `${(index % 3) * 90}ms`);
    observer.observe(element);
  });
}

let visibleCount = 24;
function getFilteredProducts() {
  const search = document.getElementById('product-search')?.value.trim().toLocaleLowerCase() ?? '';
  const kind = document.querySelector('input[name="kind"]:checked')?.value ?? 'all';
  const category = document.getElementById('category-filter')?.value ?? '';
  const sort = document.getElementById('sort-filter')?.value ?? 'name';
  const products = app.products.filter((product) => {
    const matchesKind = kind === 'all' || product.kind === kind;
    const matchesCategory = !category || product.category === category;
    const haystack = `${product.name} ${product.reference} ${product.category} ${product.description}`.toLocaleLowerCase();
    return matchesKind && matchesCategory && (!search || haystack.includes(search));
  });
  products.sort((a, b) => sort === 'category' ? a.category.localeCompare(b.category, app.locale) || a.name.localeCompare(b.name, app.locale) : a.name.localeCompare(b.name, app.locale));
  return products;
}

function renderCatalog() {
  const container = document.getElementById('catalog-products');
  if (!container) return;
  const products = getFilteredProducts();
  const pageProducts = products.slice(0, visibleCount);
  container.replaceChildren(...pageProducts.map(makeProductCard));
  const count = document.getElementById('results-count');
  if (count) count.textContent = text('results')(products.length);
  const more = document.getElementById('load-more');
  if (more) more.hidden = products.length <= visibleCount;
  const empty = document.getElementById('empty-state');
  if (empty) empty.hidden = products.length > 0;
}

function setupCatalog() {
  const category = document.getElementById('category-filter');
  const categories = [...new Set(app.products.map((product) => product.category))].sort((a, b) => a.localeCompare(b, 'fr'));
  for (const name of categories) {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    category.append(option);
  }
  const params = new URLSearchParams(location.search);
  const kind = params.get('kind');
  if (kind) {
    const radio = document.querySelector(`input[name="kind"][value="${CSS.escape(kind)}"]`);
    if (radio) radio.checked = true;
  }
  document.getElementById('product-search')?.addEventListener('input', () => { visibleCount = 24; renderCatalog(); });
  document.querySelectorAll('input[name="kind"]').forEach((input) => input.addEventListener('change', () => { visibleCount = 24; renderCatalog(); }));
  category?.addEventListener('change', () => { visibleCount = 24; renderCatalog(); });
  document.getElementById('sort-filter')?.addEventListener('change', renderCatalog);
  document.getElementById('load-more')?.addEventListener('click', () => { visibleCount += 24; renderCatalog(); });
  document.getElementById('reset-filters')?.addEventListener('click', () => {
    document.getElementById('product-search').value = '';
    document.querySelector('input[name="kind"][value="all"]').checked = true;
    category.value = '';
    document.getElementById('sort-filter').value = 'name';
    visibleCount = 24;
    renderCatalog();
  });
  renderCatalog();
}

function renderProduct() {
  const root = document.getElementById('main-content');
  const slug = new URLSearchParams(location.search).get('slug');
  const product = app.products.find((item) => item.slug === slug || item.aliases?.includes(slug));
  if (!root) return;
  if (!product) {
    root.innerHTML = `<div class="product-loading"><p>${text('noResults')}</p><a class="button button-blue" href="catalog.html">${text('backCatalog')} ↗</a></div>`;
    return;
  }
  document.title = `${product.name} | Vianex`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', product.description.slice(0, 155));
  const related = app.products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  root.innerHTML = `<a class="product-back" href="catalog.html"><span aria-hidden="true">←</span><span data-copy="backCatalog">${text('backCatalog')}</span></a><section class="product-detail-shell"><div class="product-gallery"><span class="gallery-index">VNX / ${String(app.products.indexOf(product) + 1).padStart(3, '0')}</span><img src="${product.image}" alt="${escapeHtml(product.name)}"></div><div class="product-info"><p class="eyebrow"><span class="index-number">${product.kind === 'machine' ? text('machine') : text('material')}</span><span>${escapeHtml(product.category)}</span></p><h1>${escapeHtml(product.name)}</h1><p class="product-description">${escapeHtml(product.description)}</p>${product.customSize ? `<div class="product-reference"><span data-copy="sizes">${text('sizes')}</span><strong data-copy="customSize">${text('customSize')}</strong></div>` : ''}<div class="product-reference"><span data-copy="reference">${text('reference')}</span><strong>${escapeHtml(product.reference || '—')}</strong></div><a class="button button-blue" href="catalog.html?kind=${encodeURIComponent(product.kind)}">${text('catalogLink')} <span aria-hidden="true">↗</span></a></div></section>${product.features.length ? `<section class="feature-list-section"><div><p class="eyebrow"><span class="index-number">02</span><span>${escapeHtml(product.category)}</span></p><h2 data-copy="features">${text('features')}</h2></div><ul class="feature-list">${product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join('')}</ul></section>` : ''}<section class="related-section"><div class="related-heading"><h2 data-copy="related">${text('related')}</h2><a class="text-link" href="catalog.html?kind=${encodeURIComponent(product.kind)}">${text('seeAll')} <span aria-hidden="true">↗</span></a></div><div class="product-grid">${related.map((item) => productCardMarkup(item)).join('')}</div></section>`;
  root.querySelectorAll('.product-card').forEach((card, index) => card.replaceWith(makeProductCard(related[index])));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}

function productCardMarkup(product) {
  return `<a class="product-card" href="product.html?slug=${encodeURIComponent(product.slug)}"><div class="product-image"><img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy"><span class="product-card-kind">${product.kind === 'machine' ? text('machine') : text('material')}</span></div><div class="product-card-body"><p class="product-card-category">${escapeHtml(product.category)}</p><h3>${escapeHtml(product.name)}</h3><div class="product-card-footer"><span>${escapeHtml(product.customSize ? text('customSize') : product.reference || product.category)}</span><span aria-hidden="true">↗</span></div></div></a>`;
}

async function start() {
  renderShell();
  setupContactForm();
  try {
    const response = await fetch('data/products.json');
    if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
    app.products = await response.json();
    if (document.body.dataset.page === 'home') renderHome();
    if (document.body.dataset.page === 'catalog') setupCatalog();
    if (document.body.dataset.page === 'product') renderProduct();
  } catch (error) {
    document.querySelectorAll('.loading-note,.product-loading').forEach((element) => { element.textContent = 'Le catalogue ne peut pas être chargé. Ouvrez ce projet via un serveur local.'; });
    console.error(error);
  }
}

start();
