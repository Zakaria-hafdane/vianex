// Site translations. French is the source language written in the HTML;
// English and Spanish replace each French text (used as the key) at load time.
(function () {
  const LANGS = ['fr', 'en', 'es'];
  const STORE_KEY = 'vianex-lang';

  const D = { en: {}, es: {} };
  // [French, English, Spanish]
  const rows = [
    // ---- Page titles & meta ----
    ['VIANEX — Emballage industriel & solutions professionnelles à Tanger', 'VIANEX — Industrial packaging & professional solutions in Tangier', 'VIANEX — Embalaje industrial y soluciones profesionales en Tánger'],
    ['VIANEX, fournisseur B2B à Tanger : emballage industriel, machines de cerclage et filmage, EPI et fournitures industrielles. Demandez un devis.', 'VIANEX, B2B supplier in Tangier: industrial packaging, strapping and stretch wrapping machines, PPE and industrial supplies. Request a quote.', 'VIANEX, proveedor B2B en Tánger: embalaje industrial, máquinas de flejado y enfardado, EPI y suministros industriales. Solicite un presupuesto.'],
    ['VIANEX — Machines & Emballages industriels', 'VIANEX — Industrial machines & packaging', 'VIANEX — Máquinas y embalajes industriales'],
    ['Des solutions adaptées à tous vos besoins : emballage, machines, EPI et fournitures industrielles au Maroc.', 'Solutions for all your needs: packaging, machines, PPE and industrial supplies in Morocco.', 'Soluciones adaptadas a todas sus necesidades: embalaje, máquinas, EPI y suministros industriales en Marruecos.'],
    ['Parcourez les machines et matériaux d\'emballage industriel du catalogue VIANEX.', 'Browse the industrial packaging machines and materials in the VIANEX catalogue.', 'Explore las máquinas y materiales de embalaje industrial del catálogo VIANEX.'],
    ['Catalogue | VIANEX', 'Catalogue | VIANEX', 'Catálogo | VIANEX'],
    ['Fiche produit du catalogue VIANEX.', 'Product sheet from the VIANEX catalogue.', 'Ficha de producto del catálogo VIANEX.'],
    ['Produit | VIANEX', 'Product | VIANEX', 'Producto | VIANEX'],
    ['Contact | VIANEX — Tanger', 'Contact | VIANEX — Tangier', 'Contacto | VIANEX — Tánger'],
    ['Contactez VIANEX à Tanger : demande de devis, email, téléphone, WhatsApp et adresse en Zone Industrielle Gzenaya.', 'Contact VIANEX in Tangier: quote requests, email, phone, WhatsApp and address in the Gzenaya Industrial Zone.', 'Contacte con VIANEX en Tánger: solicitud de presupuesto, email, teléfono, WhatsApp y dirección en la Zona Industrial Gzenaya.'],

    // ---- Header, navigation, footer ----
    ['Accueil', 'Home', 'Inicio'],
    ['À propos', 'About', 'Nosotros'],
    ['Nos produits', 'Our products', 'Nuestros productos'],
    ['Nos solutions', 'Our solutions', 'Soluciones'],
    ['Secteurs d\'activité', 'Industries', 'Sectores'],
    ['Contact', 'Contact', 'Contacto'],
    ['Catalogue', 'Catalogue', 'Catálogo'],
    ['VIANEX — accueil', 'VIANEX — home', 'VIANEX — inicio'],
    ['Menu', 'Menu', 'Menú'],
    ['Langue', 'Language', 'Idioma'],
    ['Aller au contenu', 'Skip to content', 'Ir al contenido'],
    ['Machines & Emballages — Des solutions adaptées à tous vos besoins.', 'Machines & Packaging — Solutions for all your needs.', 'Máquinas y embalajes — Soluciones adaptadas a todas sus necesidades.'],
    ['Navigation', 'Navigation', 'Navegación'],
    ['Produits', 'Products', 'Productos'],
    ['Zone Industrielle Gzenaya, Tanger', 'Gzenaya Industrial Zone, Tangier', 'Zona Industrial Gzenaya, Tánger'],
    ['Lun – Ven, 09:00 – 18:00', 'Mon – Fri, 09:00 – 18:00', 'Lun – Vie, 09:00 – 18:00'],
    ['Tous droits réservés.', 'All rights reserved.', 'Todos los derechos reservados.'],

    // ---- Home: hero ----
    ['Ligne d\'emballage industriel moderne avec palettes filmées et cerclées', 'Modern industrial packaging line with wrapped and strapped pallets', 'Línea moderna de embalaje industrial con palets enfardados y flejados'],
    ['Machines & Emballages · Tanger, Maroc', 'Machines & Packaging · Tangier, Morocco', 'Máquinas y embalajes · Tánger, Marruecos'],
    ['Votre partenaire en', 'Your partner in', 'Su socio en'],
    ['emballage industriel', 'industrial packaging', 'embalaje industrial'],
    ['et solutions professionnelles.', 'and professional solutions.', 'y soluciones profesionales.'],
    ['VIANEX accompagne les industriels avec des solutions fiables, des produits de qualité et des prix compétitifs pour répondre à leurs exigences opérationnelles.', 'VIANEX supports manufacturers with reliable solutions, quality products and competitive prices to meet their operational requirements.', 'VIANEX acompaña a las industrias con soluciones fiables, productos de calidad y precios competitivos para responder a sus exigencias operativas.'],
    ['Découvrir nos solutions', 'Discover our solutions', 'Descubra nuestras soluciones'],
    ['Demander un devis', 'Request a quote', 'Solicitar presupuesto'],
    ['Pôles d\'expertise', 'Areas of expertise', 'Áreas de especialidad'],
    ['Clients industriels', 'Industrial clients', 'Clientes industriales'],
    ['Sur mesure', 'Tailored', 'A medida'],
    ['Devis adaptés', 'Custom quotes', 'Presupuestos adaptados'],
    ['Maroc', 'Morocco', 'Marruecos'],
    ['& international', '& international', 'e internacional'],

    // ---- Home: partners & about ----
    ['Nos partenaires', 'Our partners', 'Nuestros socios'],
    ['Cisco — à l\'honneur', 'Cisco — featured', 'Cisco — destacado'],
    ['À l\'honneur', 'Featured', 'Destacado'],
    ['Logistique internationale : transport maritime, aérien et routier dans le monde', 'International logistics: sea, air and road transport worldwide', 'Logística internacional: transporte marítimo, aéreo y por carretera en todo el mundo'],
    ['Orienté industrie', 'Industry-focused', 'Orientado a la industria'],
    ['À propos de VIANEX', 'About VIANEX', 'Sobre VIANEX'],
    ['L\'expertise industrielle au service de votre performance.', 'Industrial expertise that drives your performance.', 'Experiencia industrial al servicio de su rendimiento.'],
    ['Basée à Tanger, avec des sièges en Espagne et en Italie, VIANEX est un partenaire professionnel spécialisé dans la distribution de solutions d’emballage industriel, d’équipements de protection individuelle (EPI) et d’équipements industriels.', 'Based in Tangier, with offices in Spain and Italy, VIANEX is a professional partner specialising in the distribution of industrial packaging solutions, personal protective equipment (PPE) and industrial equipment.', 'Con sede en Tánger y oficinas en España e Italia, VIANEX es un socio profesional especializado en la distribución de soluciones de embalaje industrial, equipos de protección individual (EPI) y equipos industriales.'],
    ['Nous accompagnons nos clients en leur proposant des solutions adaptées à leurs besoins, alliant qualité, compétitivité et fiabilité.', 'We support our clients with solutions tailored to their needs, combining quality, competitiveness and reliability.', 'Acompañamos a nuestros clientes con soluciones adaptadas a sus necesidades, combinando calidad, competitividad y fiabilidad.'],
    ['Expertise en sourcing industriel', 'Industrial sourcing expertise', 'Experiencia en aprovisionamiento industrial'],
    ['Prix compétitifs', 'Competitive prices', 'Precios competitivos'],
    ['Produits de qualité', 'Quality products', 'Productos de calidad'],
    ['Support commercial réactif', 'Responsive sales support', 'Soporte comercial ágil'],
    ['Partenariats durables', 'Lasting partnerships', 'Relaciones duraderas'],
    ['Approvisionnement sur mesure', 'Tailored supply', 'Suministro a medida'],

    // ---- Home: products ----
    ['Une offre complète pour vos sites industriels.', 'A complete range for your industrial sites.', 'Una oferta completa para sus plantas industriales.'],
    ['Six pôles d\'expertise pour équiper, protéger, connecter, approvisionner et fixer vos opérations.', 'Six areas of expertise to equip, protect, connect, supply and secure your operations.', 'Seis áreas de especialidad para equipar, proteger, conectar, abastecer y fijar sus operaciones.'],
    ['Marque à l\'honneur', 'Featured brand', 'Marca destacada'],
    ['Solutions réseau Cisco', 'Cisco network solutions', 'Soluciones de red Cisco'],
    ['VIANEX fournit les équipements réseau Cisco pour vos usines, entrepôts et bureaux : une infrastructure fiable pour connecter vos lignes de production, vos systèmes logistiques et vos équipes.', 'VIANEX supplies Cisco network equipment for your plants, warehouses and offices: reliable infrastructure to connect your production lines, logistics systems and teams.', 'VIANEX suministra equipos de red Cisco para sus fábricas, almacenes y oficinas: una infraestructura fiable para conectar sus líneas de producción, sistemas logísticos y equipos.'],
    ['Switches réseau', 'Network switches', 'Switches de red'],
    ['Routeurs', 'Routers', 'Routers'],
    ['Points d\'accès Wi-Fi', 'Wi-Fi access points', 'Puntos de acceso Wi-Fi'],
    ['Pare-feu et sécurité', 'Firewalls and security', 'Cortafuegos y seguridad'],
    ['Téléphonie IP', 'IP telephony', 'Telefonía IP'],
    ['Références sur demande', 'References on request', 'Referencias bajo pedido'],
    ['Demander un devis Cisco', 'Request a Cisco quote', 'Solicitar presupuesto Cisco'],
    ['Emballage industriel', 'Industrial packaging', 'Embalaje industrial'],
    ['Rubans adhésifs', 'Adhesive tapes', 'Cintas adhesivas'],
    ['Films étirables', 'Stretch films', 'Films estirables'],
    ['Feuillards PP / PET', 'PP / PET strapping', 'Fleje PP / PET'],
    ['Sacs et sachets plastiques', 'Plastic bags and pouches', 'Bolsas y bolsitas de plástico'],
    ['Big Bags', 'Big Bags', 'Big Bags'],
    ['Cartons et emballages sur mesure', 'Cardboard boxes and custom packaging', 'Cajas de cartón y embalajes a medida'],
    ['Découvrir', 'Discover', 'Descubrir'],
    ['Machines et équipements d\'emballage', 'Packaging machines and equipment', 'Máquinas y equipos de embalaje'],
    ['Machines de cerclage', 'Strapping machines', 'Máquinas de flejado'],
    ['Cercleuses', 'Strapping machines', 'Flejadoras'],
    ['Filmeuses', 'Stretch wrappers', 'Enfardadoras'],
    ['Outils de cerclage', 'Strapping tools', 'Herramientas de flejado'],
    ['Presses à balles', 'Balers', 'Prensas embaladoras'],
    ['Équipements de manutention', 'Handling equipment', 'Equipos de manutención'],
    ['Machine SPK de remplissage de coussins d\'air', 'SPK air cushion machine', 'Máquina SPK de cojines de aire'],
    ['produits', 'products', 'productos'],
    ['Remplissage par coussins d\'air', 'Air cushion void fill', 'Relleno con cojines de aire'],
    ['Machines SPK de remplissage de coussins d\'air pour le calage et la protection des produits à la demande.', 'SPK air cushion machines for on-demand void fill and product protection.', 'Máquinas SPK de cojines de aire para el relleno y la protección de productos bajo demanda.'],
    ['Plus d\'informations', 'More information', 'Más información'],
    ['Film étirable VCI anticorrosion ControlOx', 'ControlOx VCI anti-corrosion stretch film', 'Film estirable VCI anticorrosión ControlOx'],
    ['Anticorrosion VCI ControlOx', 'ControlOx VCI anti-corrosion', 'Anticorrosión VCI ControlOx'],
    ['Films, sachets ZIP et papier kraft VCI ControlOx pour protéger les métaux pendant stockage et transport.', 'ControlOx VCI films, ZIP bags and kraft paper to protect metals during storage and transport.', 'Films, bolsas ZIP y papel kraft VCI ControlOx para proteger los metales durante el almacenamiento y el transporte.'],
    ['Système Hot Melt Graco InvisiPac', 'Graco InvisiPac hot melt system', 'Sistema hot melt Graco InvisiPac'],
    ['Système Hot Melt thermofusible', 'Hot melt adhesive system', 'Sistema hot melt termofusible'],
    ['Le système InvisiPac HM25c Graco : zéro carbonisation, démarrage en 5 min, réduction consommation colle -20%.', 'The Graco InvisiPac HM25c system: zero charring, ready in 5 min, 20% less glue consumption.', 'El sistema InvisiPac HM25c de Graco: cero carbonización, arranque en 5 min, reducción del consumo de cola del 20%.'],
    ['Broyeur de cartons HSM Profipack', 'HSM Profipack cardboard shredder', 'Trituradora de cartón HSM Profipack'],
    ['Broyeurs Profipack HSM', 'HSM Profipack shredders', 'Trituradoras Profipack HSM'],
    ['Transformez vos cartons usagés en matériel de calage gratuit. Réduction volume déchets jusqu\'à 95%.', 'Turn used cardboard into free cushioning material. Cuts waste volume by up to 95%.', 'Convierta sus cartones usados en material de relleno gratuito. Reduce el volumen de residuos hasta un 95%.'],
    ['EPI — Protection individuelle', 'PPE — Personal protection', 'EPI — Protección individual'],
    ['Gants de protection', 'Protective gloves', 'Guantes de protección'],
    ['Chaussures de sécurité', 'Safety shoes', 'Calzado de seguridad'],
    ['Vêtements professionnels', 'Workwear', 'Ropa de trabajo'],
    ['Lunettes de protection', 'Safety glasses', 'Gafas de protección'],
    ['Casques et équipements de sécurité', 'Helmets and safety equipment', 'Cascos y equipos de seguridad'],
    ['Fournitures industrielles', 'Industrial supplies', 'Suministros industriales'],
    ['Consommables industriels', 'Industrial consumables', 'Consumibles industriales'],
    ['Accessoires de production', 'Production accessories', 'Accesorios de producción'],
    ['Produits techniques', 'Technical products', 'Productos técnicos'],
    ['Solutions d\'approvisionnement', 'Supply solutions', 'Soluciones de aprovisionamiento'],
    ['Clips et pièces en caoutchouc moulé', 'Clips and moulded rubber parts', 'Clips y piezas de caucho moldeado'],
    ['Clips et attaches souples en caoutchouc moulé pour maintenir, protéger et assembler vos ensembles. Chaque pièce remplit une fonction précise : boucle d\'accrochage, languette de guidage et crochet de verrouillage.', 'Flexible moulded rubber clips and fasteners to hold, protect and assemble your parts. Each piece has a specific job: hanging loop, guide tab and locking hook.', 'Clips y sujeciones flexibles de caucho moldeado para sujetar, proteger y ensamblar sus conjuntos. Cada pieza cumple una función precisa: lazo de enganche, lengüeta guía y gancho de bloqueo.'],
    ['Clips de maintien souples', 'Flexible holding clips', 'Clips de sujeción flexibles'],
    ['Attaches à boucle et crochet', 'Loop and hook fasteners', 'Sujeciones de lazo y gancho'],
    ['Caoutchouc moulé', 'Moulded rubber', 'Caucho moldeado'],
    ['Faites glisser pour voir tous nos pôles', 'Swipe to see all our areas', 'Deslice para ver todas nuestras áreas'],

    // ---- Home: catalogue block ----
    ['Plus de 140 références disponibles.', 'More than 140 products available.', 'Más de 140 referencias disponibles.'],
    ['Machines et matériaux d\'emballage : parcourez le catalogue complet et demandez un devis pour chaque produit.', 'Packaging machines and materials: browse the full catalogue and request a quote for any product.', 'Máquinas y materiales de embalaje: consulte el catálogo completo y solicite un presupuesto para cada producto.'],
    ['Cercleuse de table SPK 1600', 'SPK 1600 tabletop strapping machine', 'Flejadora de mesa SPK 1600'],
    ['Machines', 'Machines', 'Máquinas'],
    ['références', 'products', 'referencias'],
    ['· cerclage, filmage, formage', '· strapping, wrapping, forming', '· flejado, enfardado, formado'],
    ['Rouleaux de film étirable pour palettisation', 'Stretch film rolls for palletising', 'Bobinas de film estirable para paletizado'],
    ['Matériaux', 'Materials', 'Materiales'],
    ['· films, feuillards, calage', '· films, strapping, cushioning', '· films, fleje, relleno'],
    ['Produits à la une', 'Featured products', 'Productos destacados'],
    ['Voir tout', 'See all', 'Ver todo'],
    ['Chargement du catalogue…', 'Loading catalogue…', 'Cargando catálogo…'],
    ['Voir tout le catalogue', 'See the full catalogue', 'Ver todo el catálogo'],

    // ---- Home: sectors & why ----
    ['Des solutions adaptées aux exigences de chaque secteur.', 'Solutions suited to the demands of every industry.', 'Soluciones adaptadas a las exigencias de cada sector.'],
    ['Industrie automobile', 'Automotive industry', 'Industria automotriz'],
    ['Emballages et consommables pour les chaînes de production et équipementiers.', 'Packaging and consumables for production lines and suppliers.', 'Embalajes y consumibles para cadenas de producción y proveedores.'],
    ['Industrie manufacturière', 'Manufacturing', 'Industria manufacturera'],
    ['Solutions fiables pour sécuriser et expédier vos produits finis.', 'Reliable solutions to secure and ship your finished goods.', 'Soluciones fiables para asegurar y expedir sus productos terminados.'],
    ['Logistique et transport', 'Logistics and transport', 'Logística y transporte'],
    ['Filmage, cerclage et calage pour des palettes stables et sûres.', 'Wrapping, strapping and cushioning for stable, safe pallets.', 'Enfardado, flejado y relleno para palets estables y seguros.'],
    ['Production industrielle', 'Industrial production', 'Producción industrial'],
    ['EPI et fournitures pour la sécurité et la continuité de vos opérations.', 'PPE and supplies for safe, uninterrupted operations.', 'EPI y suministros para la seguridad y la continuidad de sus operaciones.'],
    ['Entrepôts et plateformes', 'Warehouses and hubs', 'Almacenes y plataformas'],
    ['Équipements de manutention et consommables pour vos flux quotidiens.', 'Handling equipment and consumables for your daily flows.', 'Equipos de manutención y consumibles para sus flujos diarios.'],
    ['Pourquoi VIANEX ?', 'Why VIANEX?', '¿Por qué VIANEX?'],
    ['Un fournisseur fiable pour vos exigences industrielles.', 'A reliable supplier for your industrial needs.', 'Un proveedor fiable para sus exigencias industriales.'],
    ['Une sélection rigoureuse auprès de fabricants reconnus.', 'Carefully selected from recognised manufacturers.', 'Una selección rigurosa de fabricantes reconocidos.'],
    ['Des tarifs étudiés selon vos volumes et votre récurrence.', 'Pricing based on your volumes and order frequency.', 'Tarifas estudiadas según sus volúmenes y su recurrencia.'],
    ['Approvisionnement fiable', 'Reliable supply', 'Suministro fiable'],
    ['Disponibilité et respect des délais pour vos lignes.', 'Availability and on-time delivery for your lines.', 'Disponibilidad y cumplimiento de plazos para sus líneas.'],
    ['Réactivité commerciale', 'Fast sales response', 'Agilidad comercial'],
    ['Une réponse rapide à chaque demande de devis.', 'A quick answer to every quote request.', 'Una respuesta rápida a cada solicitud de presupuesto.'],
    ['Solutions personnalisées', 'Custom solutions', 'Soluciones personalizadas'],
    ['Des produits adaptés à vos contraintes techniques.', 'Products adapted to your technical constraints.', 'Productos adaptados a sus requisitos técnicos.'],
    ['Partenariat à long terme', 'Long-term partnership', 'Colaboración a largo plazo'],
    ['Un interlocuteur dédié qui connaît votre activité.', 'A dedicated contact who knows your business.', 'Un interlocutor dedicado que conoce su actividad.'],
    ['Un besoin en emballage industriel ? Nous avons la solution.', 'Need industrial packaging? We have the solution.', '¿Necesita embalaje industrial? Tenemos la solución.'],
    ['Contactez notre équipe pour recevoir une offre adaptée à vos besoins et à vos volumes.', 'Contact our team to receive an offer suited to your needs and volumes.', 'Contacte con nuestro equipo para recibir una oferta adaptada a sus necesidades y volúmenes.'],
    ['Demander un devis maintenant', 'Request a quote now', 'Solicitar presupuesto ahora'],

    // ---- Contact & quote form ----
    ['Parlons de votre projet.', 'Let\'s talk about your project.', 'Hablemos de su proyecto.'],
    ['Décrivez votre besoin, notre équipe commerciale revient vers vous rapidement.', 'Describe your needs and our sales team will get back to you quickly.', 'Describa su necesidad y nuestro equipo comercial le responderá rápidamente.'],
    ['Téléphone', 'Phone', 'Teléfono'],
    ['Adresse', 'Address', 'Dirección'],
    ['Zone Industrielle Gzenaya, Tanger, Maroc', 'Gzenaya Industrial Zone, Tangier, Morocco', 'Zona Industrial Gzenaya, Tánger, Marruecos'],
    ['Horaires', 'Opening hours', 'Horario'],
    ['Lundi – Vendredi, 09:00 – 18:00', 'Monday – Friday, 09:00 – 18:00', 'Lunes – Viernes, 09:00 – 18:00'],
    ['Discuter sur WhatsApp', 'Chat on WhatsApp', 'Hablar por WhatsApp'],
    ['Localisation VIANEX — Tanger', 'VIANEX location — Tangier', 'Ubicación de VIANEX — Tánger'],
    ['Nom complet', 'Full name', 'Nombre completo'],
    ['Société', 'Company', 'Empresa'],
    ['Email professionnel', 'Business email', 'Email profesional'],
    ['Catégorie de produits', 'Product category', 'Categoría de productos'],
    ['Sélectionnez une catégorie', 'Select a category', 'Seleccione una categoría'],
    ['Autre demande', 'Other request', 'Otra solicitud'],
    ['Message', 'Message', 'Mensaje'],
    ['Produits, quantités, délais souhaités…', 'Products, quantities, desired lead times…', 'Productos, cantidades, plazos deseados…'],
    ['Envoyer ma demande', 'Send my request', 'Enviar mi solicitud'],
    ['Envoyer par WhatsApp', 'Send via WhatsApp', 'Enviar por WhatsApp'],
    ['Contactez-', 'Contact', 'Contacte'],
    ['nous', 'us', 'con nosotros'],
    ['Nom requis', 'Name required', 'Nombre obligatorio'],
    ['Nom trop long', 'Name too long', 'Nombre demasiado largo'],
    ['Société requise', 'Company required', 'Empresa obligatoria'],
    ['Nom de société trop long', 'Company name too long', 'Nombre de empresa demasiado largo'],
    ['Email invalide', 'Invalid email', 'Email no válido'],
    ['Téléphone requis', 'Phone required', 'Teléfono obligatorio'],
    ['Téléphone invalide', 'Invalid phone number', 'Teléfono no válido'],
    ['Choisissez une catégorie', 'Choose a category', 'Elija una categoría'],
    ['Message trop court', 'Message too short', 'Mensaje demasiado corto'],
    ['Message trop long', 'Message too long', 'Mensaje demasiado largo'],
    ['Nom', 'Name', 'Nombre'],
    ['Catégorie', 'Category', 'Categoría'],
    ['Quantité :', 'Quantity:', 'Cantidad:'],
    ['Je souhaite recevoir un devis pour : {p}', 'I would like a quote for: {p}', 'Deseo recibir un presupuesto para: {p}'],
    ['Bonjour VIANEX, je souhaite recevoir un devis.', 'Hello VIANEX, I would like to receive a quote.', 'Hola VIANEX, deseo recibir un presupuesto.'],
    ['Bonjour VIANEX, je souhaite recevoir un devis pour des équipements réseau Cisco.', 'Hello VIANEX, I would like a quote for Cisco network equipment.', 'Hola VIANEX, deseo recibir un presupuesto para equipos de red Cisco.'],
    ['Bonjour VIANEX, je souhaite recevoir un devis pour : {p}.', 'Hello VIANEX, I would like a quote for: {p}.', 'Hola VIANEX, deseo recibir un presupuesto para: {p}.'],
    ['Votre messagerie s\'ouvre pour finaliser l\'envoi. Vous pouvez aussi envoyer votre demande par WhatsApp.', 'Your email app is opening to finish sending. You can also send your request via WhatsApp.', 'Se abre su aplicación de correo para finalizar el envío. También puede enviar su solicitud por WhatsApp.'],
    ['Envoi en cours…', 'Sending…', 'Enviando…'],
    ['Merci ! Votre demande a bien été envoyée. Notre équipe vous répond rapidement.', 'Thank you! Your request has been sent. Our team will reply shortly.', '¡Gracias! Su solicitud se ha enviado. Nuestro equipo le responderá rápidamente.'],
    ['L\'envoi a échoué. Réessayez, ou envoyez votre demande par WhatsApp.', 'Sending failed. Please try again, or send your request via WhatsApp.', 'El envío ha fallado. Inténtelo de nuevo o envíe su solicitud por WhatsApp.'],
    ['WhatsApp s\'ouvre avec votre demande : il ne reste qu\'à appuyer sur Envoyer.', 'WhatsApp is opening with your request: just press Send.', 'WhatsApp se abre con su solicitud: solo tiene que pulsar Enviar.'],

    // ---- Catalogue & product pages ----
    ['Catalogue produits', 'Product catalogue', 'Catálogo de productos'],
    ['Trouvez la bonne', 'Find the right', 'Encuentre la'],
    ['solution d\'emballage.', 'packaging solution.', 'solución de embalaje.'],
    ['Machines et matériaux pour préparer, fermer, protéger et expédier.', 'Machines and materials to prepare, seal, protect and ship.', 'Máquinas y materiales para preparar, cerrar, proteger y expedir.'],
    ['143 PRODUITS INDEXÉS', '143 PRODUCTS LISTED', '143 PRODUCTOS'],
    ['Rechercher', 'Search', 'Buscar'],
    ['Nom, référence, usage', 'Name, reference, use', 'Nombre, referencia, uso'],
    ['Type de produit', 'Product type', 'Tipo de producto'],
    ['Tout le catalogue', 'Full catalogue', 'Todo el catálogo'],
    ['Famille', 'Family', 'Familia'],
    ['Toutes les familles', 'All families', 'Todas las familias'],
    ['Trier par', 'Sort by', 'Ordenar por'],
    ['Nom, A à Z', 'Name, A to Z', 'Nombre, de la A a la Z'],
    ['Réinitialiser les filtres', 'Reset filters', 'Restablecer filtros'],
    ['143 références', '143 products', '143 referencias'],
    ['Afficher plus', 'Show more', 'Mostrar más'],
    ['Aucun résultat. Modifiez vos filtres.', 'No results. Try changing your filters.', 'Sin resultados. Modifique sus filtros.'],
    ['Fiche produit', 'Product sheet', 'Ficha de producto'],
    ['{n} référence', '{n} product', '{n} referencia'],
    ['{n} références', '{n} products', '{n} referencias'],
    ['RÉFÉRENCE', 'REFERENCE', 'REFERENCIA'],
    ['TAILLES DISPONIBLES', 'AVAILABLE SIZES', 'TAMAÑOS DISPONIBLES'],
    ['Sur mesure · toutes dimensions', 'Made to measure · any size', 'A medida · todas las dimensiones'],
    ['Points clés', 'Key features', 'Puntos clave'],
    ['Dans la même famille', 'In the same family', 'En la misma familia'],
    ['Retour au catalogue', 'Back to catalogue', 'Volver al catálogo'],
    ['Matériau', 'Material', 'Material'],
    ['Machine', 'Machine', 'Máquina'],
    ['Le catalogue ne peut pas être chargé. Ouvrez ce projet via un serveur local.', 'The catalogue cannot be loaded. Open this project through a local server.', 'No se puede cargar el catálogo. Abra este proyecto mediante un servidor local.'],

    // ---- Product families (catalogue data) ----
    ['Film et palettisation', 'Film and palletising', 'Film y paletizado'],
    ['Banderoleuses de palettes', 'Pallet stretch wrappers', 'Enfardadoras de palets'],
    ['Thermofilmeuses', 'Shrink wrapping machines', 'Retractiladoras'],
    ['Remplissage et protection', 'Void fill and protection', 'Relleno y protección'],
    ['Banderoleuses horizontales', 'Horizontal stretch wrappers', 'Enfardadoras horizontales'],
    ['Calage et protection', 'Cushioning and protection', 'Acolchado y protección'],
    ['Feuillard et accessoires', 'Strapping and accessories', 'Fleje y accesorios'],
    ['Manutention et logistique', 'Handling and logistics', 'Manutención y logística'],
    ['Ensacheuses', 'Bagging machines', 'Ensacadoras'],
    ['Films rétractables', 'Shrink films', 'Films retráctiles'],
    ['Cercleuses automatiques', 'Automatic strapping machines', 'Flejadoras automáticas'],
    ['Fermeuses de cartons', 'Case sealers', 'Precintadoras de cajas'],
    ['Humecteurs de papier gommé', 'Gummed tape dispensers', 'Dispensadores de cinta engomada'],
    ['Films VCI anticorrosion', 'VCI anti-corrosion films', 'Films VCI anticorrosión'],
    ['Sacs en plastique', 'Plastic bags', 'Bolsas de plástico'],
    ['Formeuses de cartons', 'Case erectors', 'Formadoras de cajas'],
    ['Etiquettes / porte-documents', 'Labels / document pouches', 'Etiquetas / portadocumentos'],
    ['Cercleuses de table', 'Tabletop strapping machines', 'Flejadoras de mesa'],
    ['Cercleuses manuelles à batterie', 'Battery hand strapping tools', 'Flejadoras manuales a batería'],
    ['Banderoleuses', 'Stretch wrappers', 'Enfardadoras'],
    ['Systèmes Hot Melt', 'Hot melt systems', 'Sistemas hot melt'],
    ['Broyeurs de cartons', 'Cardboard shredders', 'Trituradoras de cartón'],
    ['Lignes automatiques', 'Automatic lines', 'Líneas automáticas'],
    ['Boites en carton', 'Cardboard boxes', 'Cajas de cartón'],
  ];
  for (const [fr, en, es] of rows) { D.en[fr] = en; D.es[fr] = es; }

  // Language: ?lang= in the URL, then the visitor's last choice, then the browser language
  function detect() {
    let lang = null;
    try {
      const fromUrl = new URLSearchParams(location.search).get('lang');
      if (LANGS.includes(fromUrl)) { lang = fromUrl; localStorage.setItem(STORE_KEY, lang); }
      if (!lang) lang = localStorage.getItem(STORE_KEY);
    } catch (e) { /* storage blocked */ }
    if (!LANGS.includes(lang)) {
      const nav = (navigator.languages || [navigator.language || '']).map((l) => String(l).slice(0, 2).toLowerCase());
      lang = nav.find((l) => LANGS.includes(l)) || 'fr';
    }
    return lang;
  }
  const lang = detect();
  const dict = D[lang] || {};

  const t = (s) => dict[s] ?? s;
  const tf = (s, vars) => t(s).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

  // Replace the French text of a page (text nodes + a few attributes)
  function apply(root) {
    document.documentElement.lang = lang;
    if (lang === 'fr') return;
    // keep French values for <option>s without a value, so forms still send the French category
    root.querySelectorAll('option:not([value])').forEach((o) => { o.value = o.textContent.trim(); });
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && /^(SCRIPT|STYLE)$/.test(n.parentElement.tagName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
      const key = n.data.trim();
      if (key && dict[key] !== undefined) n.data = n.data.replace(key, dict[key]);
    }
    for (const attr of ['alt', 'placeholder', 'aria-label', 'title']) {
      root.querySelectorAll(`[${attr}]`).forEach((el) => {
        const v = el.getAttribute(attr).trim();
        if (dict[v] !== undefined) el.setAttribute(attr, dict[v]);
      });
    }
    document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((m) => {
      const v = m.getAttribute('content');
      if (dict[v] !== undefined) m.setAttribute('content', dict[v]);
    });
    if (dict[document.title] !== undefined) document.title = dict[document.title];
  }

  // Link to the same page in another language
  function urlFor(code) {
    const u = new URL(location.href);
    u.searchParams.set('lang', code);
    return u.pathname.split('/').pop() + u.search + u.hash;
  }

  window.I18N = { lang, langs: LANGS, t, tf, apply, urlFor };
})();
