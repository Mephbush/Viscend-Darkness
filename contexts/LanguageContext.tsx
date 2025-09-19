import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'es' | 'fr' | 'de' | 'zh';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    ar: 'الرئيسية',
    es: 'Inicio',
    fr: 'Accueil',
    de: 'Startseite',
    zh: '首页'
  },
  'nav.studio': {
    en: 'Studio',
    ar: 'الاستوديو',
    es: 'Estudio',
    fr: 'Studio',
    de: 'Studio',
    zh: '工作室'
  },
  'nav.services': {
    en: 'Services',
    ar: 'الخدمات',
    es: 'Servicios',
    fr: 'Services',
    de: 'Dienstleistungen',
    zh: '服务'
  },
  'nav.work': {
    en: 'Work',
    ar: 'الأعمال',
    es: 'Trabajos',
    fr: 'Travaux',
    de: 'Arbeiten',
    zh: '作品'
  },
  'nav.contact': {
    en: 'Contact',
    ar: 'التواصل',
    es: 'Contacto',
    fr: 'Contact',
    de: 'Kontakt',
    zh: '联系'
  },
  
  // Homepage
  'home.hero.title': {
    en: 'Next-Gen Visuals for Visionaries',
    ar: 'مرئيات الجيل القادم لأصحاب الرؤى',
    es: 'Visuales de Nueva Generación para Visionarios',
    fr: 'Visuels Nouvelle Génération pour Visionnaires',
    de: 'Visuals der nächsten Generation für Visionäre',
    zh: '为远见者打造的下一代视觉效果'
  },
  'home.hero.subtitle': {
    en: 'We transform ideas into cinematic experiences through 3D, motion, and design.',
    ar: 'نحوّل الأفكار إلى تجارب سينمائية استثنائية من خلال التصميم ثلاثي الأبعاد والحركة والإبداع البصري.',
    es: 'Transformamos ideas en experiencias cinematográficas a través de 3D, movimiento y diseño.',
    fr: 'Nous transformons les idées en expériences cinématographiques grâce à la 3D, au mouvement et au design.',
    de: 'Wir verwandeln Ideen in kinematographische Erfahrungen durch 3D, Motion und Design.',
    zh: '我们通过3D、动效和设计将创意转化为电影级体验。'
  },
  'home.hero.cta1': {
    en: 'View Our Work',
    ar: 'استكشف أعمالنا',
    es: 'Ver Nuestro Trabajo',
    fr: 'Voir Nos Travaux',
    de: 'Unsere Arbeiten Ansehen',
    zh: '查看我们的作品'
  },
  'home.hero.cta2': {
    en: 'Start a Project',
    ar: 'ابدأ مشروعك',
    es: 'Iniciar Proyecto',
    fr: 'Démarrer un Projet',
    de: 'Projekt Starten',
    zh: '开始项目'
  },
  'home.tagline': {
    en: 'Design to Rise',
    ar: 'نصمّم لنرتقي',
    es: 'Diseño para Elevarse',
    fr: 'Concevoir pour S\'élever',
    de: 'Design zum Aufstieg',
    zh: '设计致远'
  },
  'home.services.title': {
    en: 'Our Arsenal',
    ar: 'ترسانتنا الإبداعية',
    es: 'Nuestro Arsenal',
    fr: 'Notre Arsenal',
    de: 'Unser Arsenal',
    zh: '我们的武器库'
  },
  'home.services.subtitle': {
    en: 'Four core disciplines that power next-generation visual storytelling',
    ar: 'أربعة تخصصات أساسية تدعم السرد البصري للجيل القادم',
    es: 'Cuatro disciplinas fundamentales que impulsan la narrativa visual de próxima generación',
    fr: 'Quatre disciplines fondamentales qui alimentent la narration visuelle de nouvelle génération',
    de: 'Vier Kerndisziplinen, die das visuelle Storytelling der nächsten Generation antreiben',
    zh: '推动下一代视觉叙事的四大核心学科'
  },
  'home.philosophy.title': {
    en: 'Design to Rise',
    ar: 'نصمّم لنرتقي',
    es: 'Diseño para Elevarse',
    fr: 'Concevoir pour S\'élever',
    de: 'Design zum Aufstieg',
    zh: '设计致远'
  },
  'home.philosophy.description': {
    en: 'At VisCend, we believe that exceptional visuals aren\'t just decoration – they\'re architecture for ideas. Every frame, every motion, every pixel serves a purpose in elevating your vision to new heights.',
    ar: 'في VisCend، نؤمن أن المرئيات الاستثنائية ليست مجرد زينة - بل هي هندسة معمارية للأفكار. كل إطار وكل حركة وكل بكسل يخدم هدفًا في رفع رؤيتك إلى آفاق جديدة.',
    es: 'En VisCend, creemos que las imágenes excepcionales no son solo decoración: son arquitectura para las ideas. Cada fotograma, cada movimiento, cada píxel tiene un propósito para elevar tu visión a nuevas alturas.',
    fr: 'Chez VisCend, nous croyons que les visuels exceptionnels ne sont pas que de la décoration – ils sont l\'architecture des idées. Chaque image, chaque mouvement, chaque pixel sert un objectif pour élever votre vision vers de nouveaux sommets.',
    de: 'Bei VisCend glauben wir, dass außergewöhnliche Visuals nicht nur Dekoration sind – sie sind Architektur für Ideen. Jeder Frame, jede Bewegung, jeder Pixel dient einem Zweck, um Ihre Vision zu neuen Höhen zu erheben.',
    zh: '在VisCend，我们相信卓越的视觉效果不仅仅是装饰——它们是思想的建筑。每一帧、每一个动作、每一个像素都有其目的，将您的愿景提升到新的高度。'
  },
  
  // Services
  'services.title': {
    en: 'Services',
    ar: 'خدماتنا',
    es: 'Servicios',
    fr: 'Services',
    de: 'Dienstleistungen',
    zh: '服务'
  },
  'services.subtitle': {
    en: 'Comprehensive visual solutions for forward-thinking brands',
    ar: 'حلول بصرية شاملة للعلامات التجارية الطموحة',
    es: 'Soluciones visuales integrales para marcas visionarias',
    fr: 'Solutions visuelles complètes pour les marques avant-gardistes',
    de: 'Umfassende visuelle Lösungen für zukunftsorientierte Marken',
    zh: '为前瞻性品牌提供全面的视觉解决方案'
  },
  'services.3d.title': {
    en: '3D Production',
    ar: 'الإنتاج ثلاثي الأبعاد',
    es: 'Producción 3D',
    fr: 'Production 3D',
    de: '3D-Produktion',
    zh: '3D制作'
  },
  'services.3d.description': {
    en: 'Cutting-edge CGI and 3D visualization that brings impossible concepts to life with photorealistic precision.',
    ar: 'تقنيات متطورة في الرسوميات الحاسوبية والتصوير ثلاثي الأبعاد تُحوّل المفاهيم المستحيلة إلى واقع بصري بدقة فوتوغرافية مذهلة.',
    es: 'CGI de vanguardia y visualización 3D que da vida a conceptos imposibles con precisión fotorrealista.',
    fr: 'CGI de pointe et visualisation 3D qui donnent vie aux concepts impossibles avec une précision photoréaliste.',
    de: 'Modernste CGI und 3D-Visualisierung, die unmögliche Konzepte mit fotorealistischer Präzision zum Leben erweckt.',
    zh: '尖端CGI和3D可视化技术，以照片级真实感将不可能的概念变为现实。'
  },
  'services.video.title': {
    en: 'Video Advertising',
    ar: 'الإعلان التفاعلي',
    es: 'Publicidad en Video',
    fr: 'Publicité Vidéo',
    de: 'Videowerbung',
    zh: '视频广告'
  },
  'services.video.description': {
    en: 'Compelling video content that captures attention and drives engagement through storytelling and visual excellence.',
    ar: 'محتوى مرئي مُقنع يجذب الانتباه ويحفز التفاعل من خلال السرد والتميز البصري الاستثنائي.',
    es: 'Contenido de video convincente que capta la atención e impulsa el engagement a través de la narrativa y la excelencia visual.',
    fr: 'Contenu vidéo convaincant qui capte l\'attention et stimule l\'engagement grâce à la narration et l\'excellence visuelle.',
    de: 'Überzeugende Videoinhalte, die Aufmerksamkeit erregen und Engagement durch Storytelling und visuelle Exzellenz fördern.',
    zh: '通过叙事和视觉卓越捕获注意力并推动参与的引人注目的视频内容。'
  },
  'services.vfx.title': {
    en: 'Visual Effects',
    ar: 'المؤثرات البصرية',
    es: 'Efectos Visuales',
    fr: 'Effets Visuels',
    de: 'Visuelle Effekte',
    zh: '视觉特效'
  },
  'services.vfx.description': {
    en: 'Seamless visual effects that enhance reality and create immersive experiences beyond imagination.',
    ar: 'مؤثرات بصرية متناغمة تُعزز الواقع وتخلق تجارب غامرة تتجاوز حدود الخيال.',
    es: 'Efectos visuales perfectos que mejoran la realidad y crean experiencias inmersivas más allá de la imaginación.',
    fr: 'Effets visuels transparents qui améliorent la réalité et créent des expériences immersives au-delà de l\'imagination.',
    de: 'Nahtlose visuelle Effekte, die die Realität verbessern und immersive Erfahrungen jenseits der Vorstellungskraft schaffen.',
    zh: '无缝的视觉效果，增强现实并创造超越想象的沉浸式体验。'
  },
  'services.identity.title': {
    en: 'Visual Identity',
    ar: 'الهوية البصرية',
    es: 'Identidad Visual',
    fr: 'Identité Visuelle',
    de: 'Visuelle Identität',
    zh: '视觉识别'
  },
  'services.identity.description': {
    en: 'Distinctive brand identities that communicate values and resonate with audiences through powerful visual language.',
    ar: 'هويات تجارية مميزة تُعبّر عن القيم وتتواصل مع الجمهور من خلال لغة بصرية قوية ومؤثرة.',
    es: 'Identidades de marca distintivas que comunican valores y resuenan con las audiencias a través de un lenguaje visual poderoso.',
    fr: 'Identités de marque distinctives qui communiquent les valeurs et résonnent avec les audiences grâce à un langage visuel puissant.',
    de: 'Unverwechselbare Markenidentitäten, die Werte kommunizieren und durch kraftvolle visuelle Sprache mit dem Publikum in Resonanz stehen.',
    zh: '独特的品牌标识，通过强大的视觉语言传达价值观并与受众产生共鸣。'
  },
  'services.custom_project': {
    en: 'Custom Project',
    ar: 'مشروع مخصص',
    es: 'Proyecto Personalizado',
    fr: 'Projet Personnalisé',
    de: 'Benutzerdefiniertes Projekt',
    zh: '定制项目'
  },
  
  // About Page
  'about.title': {
    en: 'About VisCend',
    ar: 'حول VisCend',
    es: 'Acerca de VisCend',
    fr: 'À propos de VisCend',
    de: 'Über VisCend',
    zh: '关于 VisCend'
  },
  'about.hero.title': {
    en: 'The Studio',
    ar: 'الاستوديو',
    es: 'El Estudio',
    fr: 'Le Studio',
    de: 'Das Studio',
    zh: '工作室'
  },
  'about.hero.subtitle': {
    en: 'Born from the belief that exceptional visuals can transform how the world sees your ideas.',
    ar: 'وُلد من الإيمان بأن المرئيات الاستثنائية يمكنها تغيير كيف يرى العالم أفكارك.',
    es: 'Nacido de la creencia de que las imágenes excepcionales pueden transformar cómo el mundo ve tus ideas.',
    fr: 'Né de la conviction que des visuels exceptionnels peuvent transformer la façon dont le monde voit vos idées.',
    de: 'Geboren aus dem Glauben, dass außergewöhnliche Visuals transformieren können, wie die Welt Ihre Ideen sieht.',
    zh: '源于这样的信念：卓越的视觉效果可以改变世界看待您想法的方式。'
  },
  'about.story.title': {
    en: 'Independent by Design',
    ar: 'مستقل بالتصميم',
    es: 'Independiente por Diseño',
    fr: 'Indépendant par Design',
    de: 'Unabhängig durch Design',
    zh: '设计独立'
  },
  
  // Portfolio
  'portfolio.title': {
    en: 'Our Work',
    ar: 'أعمالنا',
    es: 'Nuestro Trabajo',
    fr: 'Nos Travaux',
    de: 'Unsere Arbeiten',
    zh: '我们的作品'
  },
  'portfolio.subtitle': {
    en: 'Explore our latest projects and creative solutions',
    ar: 'استكشف أحدث مشاريعنا وحلولنا الإبداعية',
    es: 'Explora nuestros últimos proyectos y soluciones creativas',
    fr: 'Explorez nos derniers projets et solutions créatives',
    de: 'Entdecken Sie unsere neuesten Projekte und kreativen Lösungen',
    zh: '探索我们最新的项目和创意解决方案'
  },
  'portfolio.description': {
    en: 'A showcase of breakthrough projects that define the future of visual storytelling',
    ar: 'عرض للمشاريع الرائدة التي تحدد مستقبل السرد البصري',
    es: 'Una muestra de proyectos revolucionarios que definen el futuro de la narrativa visual',
    fr: 'Une vitrine de projets révolutionnaires qui définissent l\'avenir de la narration visuelle',
    de: 'Eine Präsentation bahnbrechender Projekte, die die Zukunft des visuellen Storytellings definieren',
    zh: '展示定义视觉叙事未来的突破性项目'
  },
  
  // Contact
  'contact.title': {
    en: 'Start Your Project',
    ar: 'ابدأ مشروعك معنا',
    es: 'Inicia Tu Proyecto',
    fr: 'Démarrez Votre Projet',
    de: 'Starten Sie Ihr Projekt',
    zh: '开始您的项目'
  },
  'contact.subtitle': {
    en: 'Ready to transform your vision into extraordinary visual experiences? Let\'s create something remarkable together.',
    ar: 'هل أنت مستعد لتحويل رؤيتك إلى تجارب بصرية استثنائية؟ دعنا نبدع معًا شيئًا لا يُنسى.',
    es: '¿Listo para transformar tu visión en experiencias visuales extraordinarias? Creemos algo extraordinario juntos.',
    fr: 'Prêt à transformer votre vision en expériences visuelles extraordinaires ? Créons quelque chose de remarquable ensemble.',
    de: 'Bereit, Ihre Vision in außergewöhnliche visuelle Erfahrungen zu verwandeln? Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen.',
    zh: '准备将您的愿景转化为非凡的视觉体验吗？让我们一起创造非凡的作品。'
  },
  'contact.form.name': {
    en: 'Full Name',
    ar: 'الاسم الكامل',
    es: 'Nombre Completo',
    fr: 'Nom Complet',
    de: 'Vollständiger Name',
    zh: '全名'
  },
  'contact.form.email': {
    en: 'Email Address',
    ar: 'عنوان البريد الإلكتروني',
    es: 'Dirección de Correo',
    fr: 'Adresse E-mail',
    de: 'E-Mail-Adresse',
    zh: '电子邮件地址'
  },
  'contact.form.message': {
    en: 'Tell us about your project',
    ar: 'أخبرنا عن مشروعك',
    es: 'Cuéntanos sobre tu proyecto',
    fr: 'Parlez-nous de votre projet',
    de: 'Erzählen Sie uns von Ihrem Projekt',
    zh: '告诉我们您的项目'
  },
  'contact.form.send': {
    en: 'Send Message',
    ar: 'إرسال الرسالة',
    es: 'Enviar Mensaje',
    fr: 'Envoyer le Message',
    de: 'Nachricht Senden',
    zh: '发送信息'
  },
  'contact.form.tell_us': {
    en: 'Tell Us About Your Vision',
    ar: 'أخبرنا عن رؤيتك',
    es: 'Cuéntanos Sobre Tu Visión',
    fr: 'Parlez-nous de Votre Vision',
    de: 'Erzählen Sie uns von Ihrer Vision',
    zh: '告诉我们您的愿景'
  },
  'contact.not_sure': {
    en: 'Not Sure Yet',
    ar: 'لست متأكدًا بعد',
    es: 'No Estoy Seguro Aún',
    fr: 'Pas Encore Sûr',
    de: 'Noch Nicht Sicher',
    zh: '还没确定'
  },
  'contact.budget.under5k': {
    en: 'Under $5,000',
    ar: 'أقل من 5,000 دولار',
    es: 'Menos de $5,000',
    fr: 'Moins de $5,000',
    de: 'Unter $5,000',
    zh: '5,000美元以下'
  },
  'contact.budget.5k_15k': {
    en: '$5,000 - $15,000',
    ar: '5,000 - 15,000 دولار',
    es: '$5,000 - $15,000',
    fr: '$5,000 - $15,000',
    de: '$5,000 - $15,000',
    zh: '$5,000 - $15,000'
  },
  'contact.budget.15k_50k': {
    en: '$15,000 - $50,000',
    ar: '15,000 - 50,000 دولار',
    es: '$15,000 - $50,000',
    fr: '$15,000 - $50,000',
    de: '$15,000 - $50,000',
    zh: '$15,000 - $50,000'
  },
  'contact.budget.50k_100k': {
    en: '$50,000 - $100,000',
    ar: '50,000 - 100,000 دولار',
    es: '$50,000 - $100,000',
    fr: '$50,000 - $100,000',
    de: '$50,000 - $100,000',
    zh: '$50,000 - $100,000'
  },
  'contact.budget.100k_plus': {
    en: '$100,000+',
    ar: '100,000 دولار فأكثر',
    es: '$100,000+',
    fr: '$100,000+',
    de: '$100,000+',
    zh: '$100,000+'
  },
  'contact.budget.discuss': {
    en: 'Let\'s Discuss',
    ar: 'دعنا نناقش الأمر',
    es: 'Hablemos',
    fr: 'Discutons-en',
    de: 'Lassen Sie uns sprechen',
    zh: '让我们讨论'
  },
  'contact.email_us': {
    en: 'Email Us',
    ar: 'راسلنا',
    es: 'Envíanos un Email',
    fr: 'Nous Envoyer un Email',
    de: 'E-Mail senden',
    zh: '发邮件给我们'
  },
  'contact.call_us': {
    en: 'Call Us',
    ar: 'اتصل بنا',
    es: 'Llámanos',
    fr: 'Appelez-nous',
    de: 'Rufen Sie uns an',
    zh: '致电我们'
  },
  'contact.visit_us': {
    en: 'Visit Us',
    ar: 'زرنا',
    es: 'Visítanos',
    fr: 'Nous Rendre Visite',
    de: 'Besuchen Sie uns',
    zh: '拜访我们'
  },
  'contact.location': {
    en: 'Los Angeles, CA',
    ar: 'لوس أنجلوس، كاليفورنيا',
    es: 'Los Ángeles, CA',
    fr: 'Los Angeles, CA',
    de: 'Los Angeles, CA',
    zh: '洛杉矶，加利福尼亚'
  },

  // Intro and Loading
  'intro.subtitle': {
    en: 'Visual Excellence Studio',
    ar: 'استوديو التميز البصري',
    es: 'Estudio de Excelencia Visual',
    fr: 'Studio d\'Excellence Visuelle',
    de: 'Studio für visuelle Exzellenz',
    zh: '视觉卓越工作室'
  },
  'loading.preparing': {
    en: 'Preparing your experience...',
    ar: 'جاري تحضير تجربتك...',
    es: 'Preparando tu experiencia...',
    fr: 'Préparation de votre expérience...',
    de: 'Bereite dein Erlebnis vor...',
    zh: '正在准备您的体验...'
  },
  'loading.text': {
    en: 'Loading...',
    ar: 'جاري التحميل...',
    es: 'Cargando...',
    fr: 'Chargement...',
    de: 'Lädt...',
    zh: '加载中...'
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved.',
    ar: 'جميع الحقوق محفوظة.',
    es: 'Todos los derechos reservados.',
    fr: 'Tous droits réservés.',
    de: 'Alle Rechte vorbehalten.',
    zh: '版权所有。'
  },
  'footer.studio': {
    en: 'VisCend Studio',
    ar: 'استوديو VisCend',
    es: 'VisCend Studio',
    fr: 'VisCend Studio',
    de: 'VisCend Studio',
    zh: 'VisCend工作室'
  },
  'footer.follow_us': {
    en: 'Follow Us',
    ar: 'تابعونا',
    es: 'Síguenos',
    fr: 'Suivez-nous',
    de: 'Folgen Sie uns',
    zh: '关注我们'
  },
  'footer.navigation': {
    en: 'Navigation',
    ar: 'التنقل',
    es: 'Navegación',
    fr: 'Navigation',
    de: 'Navigation',
    zh: '导航'
  },

  // Common Actions
  'common.view_project': {
    en: 'View Project',
    ar: 'عرض المشروع',
    es: 'Ver Proyecto',
    fr: 'Voir le Projet',
    de: 'Projekt Ansehen',
    zh: '查看项目'
  },
  'common.get_started': {
    en: 'Get Started',
    ar: 'ابدأ الآن',
    es: 'Comenzar',
    fr: 'Commencer',
    de: 'Jetzt Starten',
    zh: '开始'
  },
  'common.learn_more': {
    en: 'Learn More',
    ar: 'اعرف المزيد',
    es: 'Saber Más',
    fr: 'En Savoir Plus',
    de: 'Mehr Erfahren',
    zh: '了解更多'
  },
  'common.get_quote': {
    en: 'Get Quote',
    ar: 'احصل على عرض سعر',
    es: 'Obtener Cotización',
    fr: 'Obtenir un Devis',
    de: 'Angebot Erhalten',
    zh: '获取报价'
  },
  'common.contact_us': {
    en: 'Contact Us',
    ar: 'اتصل بنا',
    es: 'Contáctanos',
    fr: 'Contactez-nous',
    de: 'Kontaktieren Sie uns',
    zh: '联系我们'
  },
  'common.view_all_work': {
    en: 'View All Work',
    ar: 'عرض جميع الأعمال',
    es: 'Ver Todos los Trabajos',
    fr: 'Voir Tous les Travaux',
    de: 'Alle Arbeiten Anzeigen',
    zh: '查看所有作品'
  },

  // Services Page Additional Translations
  'services.key_deliverables': {
    en: 'Key Deliverables',
    ar: 'المخرجات الأساسية',
    es: 'Entregables Clave',
    fr: 'Livrables Clés',
    de: 'Wichtige Lieferungen',
    zh: '关键交付成果'
  },
  'services.starting_at': {
    en: 'Starting at',
    ar: 'يبدأ من',
    es: 'Desde',
    fr: 'À partir de',
    de: 'Ab',
    zh: '起价'
  },
  'services.beyond_categories.title': {
    en: 'Beyond Categories',
    ar: 'خارج حدود التصنيفات',
    es: 'Más Allá de las Categorías',
    fr: 'Au-delà des Catégories',
    de: 'Jenseits der Kategorien',
    zh: '超越分类'
  },
  'services.beyond_categories.description': {
    en: 'Have a vision that doesn\'t fit into traditional categories? We specialize in bringing impossible ideas to life through custom creative solutions and cutting-edge innovation.',
    ar: 'هل لديك رؤية لا تندرج ضمن الفئات التقليدية؟ نحن متخصصون في إحياء الأفكار المستحيلة من خلال الحلول الإبداعية المخصصة والابتكار المتطور.',
    es: '¿Tienes una visión que no encaja en categorías tradicionales? Nos especializamos en dar vida a ideas imposibles através de soluciones creativas personalizadas e innovación de vanguardia.',
    fr: 'Avez-vous une vision qui ne rentre pas dans les catégories traditionnelles? Nous nous spécialisons dans la concrétisation d\'idées impossibles grâce à des solutions créatives sur mesure et une innovation de pointe.',
    de: 'Haben Sie eine Vision, die nicht in traditionelle Kategorien passt? Wir spezialisieren uns darauf, unmögliche Ideen durch maßgeschneiderte kreative Lösungen und hochmoderne Innovation zum Leben zu erwecken.',
    zh: '有不符合传统分类的愿景吗？我们专门通过定制创意解决方案和前沿创新将不可能的想法变为现实。'
  },
  'services.unlimited_possibilities': {
    en: 'Unlimited Possibilities',
    ar: 'إمكانيات لا محدودة',
    es: 'Posibilidades Ilimitadas',
    fr: 'Possibilités Illimitées',
    de: 'Unbegrenzte Möglichkeiten',
    zh: '无限可能'
  },
  'services.no_boundaries': {
    en: 'No creative boundaries',
    ar: 'لا حدود إبداعية',
    es: 'Sin límites creativos',
    fr: 'Aucune limite créative',
    de: 'Keine kreativen Grenzen',
    zh: '无创意边界'
  },
  'services.dedicated_partnership': {
    en: 'Dedicated Partnership',
    ar: 'شراكة مخصصة',
    es: 'Asociación Dedicada',
    fr: 'Partenariat Dédié',
    de: 'Engagierte Partnerschaft',
    zh: '专属合作伙伴关系'
  },
  'services.personal_guidance': {
    en: 'Personal creative guidance',
    ar: 'إرشاد إبداعي شخصي',
    es: 'Orientación creativa personal',
    fr: 'Guidage créatif personnel',
    de: 'Persönliche kreative Beratung',
    zh: '个人创意指导'
  },
  'services.proven_results': {
    en: 'Proven Results',
    ar: 'نتائج مُثبتة',
    es: 'Resultados Probados',
    fr: 'Résultats Prouvés',
    de: 'Bewährte Ergebnisse',
    zh: '成熟结果'
  },
  'services.award_winning': {
    en: 'Award-winning outcomes',
    ar: 'نتائج حائزة على جوائز',
    es: 'Resultados premiados',
    fr: 'Résultats primés',
    de: 'Preisgekrönte Ergebnisse',
    zh: '获奖成果'
  },
  'services.investment_levels': {
    en: 'Investment Levels',
    ar: 'مستويات الاستثمار',
    es: 'Niveles de Inversión',
    fr: 'Niveaux d\'Investissement',
    de: 'Investitionsebenen',
    zh: '投资水平'
  },
  'services.flexible_engagement': {
    en: 'Flexible engagement models designed to match your project scope and ambitions',
    ar: 'نماذج تفاعل مرنة مصممة لتتناسب مع نطاق مشروعك وطموحاتك',
    es: 'Modelos de compromiso flexibles diseñados para coincidir con el alcance y ambiciones de tu proyecto',
    fr: 'Modèles d\'engagement flexibles conçus pour correspondre à la portée et aux ambitions de votre projet',
    de: 'Flexible Engagement-Modelle, die auf den Umfang und die Ambitionen Ihres Projekts zugeschnitten sind',
    zh: '灵活的参与模型，旨在匹配您的项目范围和雄心'
  },
  'services.most_popular': {
    en: 'Most Popular',
    ar: 'الأكثر شيوعًا',
    es: 'Más Popular',
    fr: 'Le Plus Populaire',
    de: 'Beliebteste',
    zh: '最受欢迎'
  },
  'services.how_we_work': {
    en: 'How We Work',
    ar: 'كيف نعمل',
    es: 'Cómo Trabajamos',
    fr: 'Comment Nous Travaillons',
    de: 'Wie Wir Arbeiten',
    zh: '我们的工作方式'
  },
  'services.refined_process': {
    en: 'A refined creative process that ensures exceptional results every time',
    ar: 'عملية إبداعية مُحسّنة تضمن نتائج استثنائية في كل مرة',
    es: 'Un proceso creativo refinado que asegura resultados excepcionales cada vez',
    fr: 'Un processus créatif raffiné qui garantit des résultats exceptionnels à chaque fois',
    de: 'Ein verfeinerter kreativer Prozess, der jedes Mal außergewöhnliche Ergebnisse gewährleistet',
    zh: '精炼的创意流程，每次都能确保卓越成果'
  },
  'services.process.discovery': {
    en: 'Discovery',
    ar: 'الاستكشاف',
    es: 'Descubrimiento',
    fr: 'Découverte',
    de: 'Entdeckung',
    zh: '发现'
  },
  'services.process.discovery_desc': {
    en: 'Deep dive into your vision, goals, and creative requirements',
    ar: 'الغوص العميق في رؤيتك وأهدافك ومتطلباتك الإبداعية',
    es: 'Inmersión profunda en tu visión, objetivos y requisitos creativos',
    fr: 'Plongée profonde dans votre vision, vos objectifs et vos exigences créatives',
    de: 'Tiefes Eintauchen in Ihre Vision, Ziele und kreativen Anforderungen',
    zh: '深入了解您的愿景、目标和创意要求'
  },
  'services.process.strategy': {
    en: 'Strategy',
    ar: 'الاستراتيجية',
    es: 'Estrategia',
    fr: 'Stratégie',
    de: 'Strategie',
    zh: '策略'
  },
  'services.process.strategy_desc': {
    en: 'Develop comprehensive creative strategy and project roadmap',
    ar: 'تطوير استراتيجية إبداعية شاملة وخارطة طريق للمشروع',
    es: 'Desarrollar estrategia creativa integral y hoja de ruta del proyecto',
    fr: 'Développer une stratégie créative complète et une feuille de route de projet',
    de: 'Umfassende kreative Strategie und Projekt-Roadmap entwickeln',
    zh: '制定全面的创意策略和项目路线图'
  },
  'services.process.creation': {
    en: 'Creation',
    ar: 'الإبداع',
    es: 'Creación',
    fr: 'Création',
    de: 'Erstellung',
    zh: '创作'
  },
  'services.process.creation_desc': {
    en: 'Execute with precision using cutting-edge tools and techniques',
    ar: 'التنفيذ بدقة باستخدام أحدث الأدوات والتقنيات',
    es: 'Ejecutar con precisión usando herramientas y técnicas de vanguardia',
    fr: 'Exécuter avec précision en utilisant des outils et techniques de pointe',
    de: 'Präzise Ausführung mit modernsten Tools und Techniken',
    zh: '使用尖端工具和技术精确执行'
  },
  'services.process.delivery': {
    en: 'Delivery',
    ar: 'التسليم',
    es: 'Entrega',
    fr: 'Livraison',
    de: 'Lieferung',
    zh: '交付'
  },
  'services.process.delivery_desc': {
    en: 'Deliver polished results with comprehensive support and documentation',
    ar: 'تسليم نتائج مُصقولة مع الدعم والتوثيق الشاملين',
    es: 'Entregar resultados pulidos con soporte integral y documentación',
    fr: 'Livrer des résultats polis avec un support complet et de la documentation',
    de: 'Polierte Ergebnisse mit umfassendem Support und Dokumentation liefern',
    zh: '提供精致的成果，包含全面的支持和文档'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const isRTL = language === 'ar';
  
  const t = (key: string, fallback?: string): string => {
    const translation = translations[key]?.[language];
    return translation || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div className={`${isRTL ? 'rtl' : 'ltr'} ${language}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}