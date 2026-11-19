// ============================================================
// Ramzan Jamali — Portfolio v2
// Language switching + email obfuscation + scroll reveal
// ============================================================

/* ---------- Translations ---------- */
const translations = {
    en: {
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.education": "Education",
        "nav.contact": "Contact",

        "hero.eyebrow": "Open to opportunities",
        "hero.title": "Automation and AI Engineer",
        "hero.subtitle": "M.Sc. Electrical & Information Engineering specializing in Applied AI, Web Automation, and Embedded Systems.",
        "hero.cta_primary": "Get in Touch",
        "hero.location": "Freiburg im Breisgau",

        "about.title": "About Me",
        "about.lead": "Analytical and execution-driven engineer bridging hardware, embedded software, and web development with specialized expertise in AI automation.",
        "about.card1_title": "Technical Depth",
        "about.card1_text": "Full-stack system development from embedded firmware to web dashboards, with proven expertise in real-time control systems and precision engineering.",
        "about.card2_title": "AI & Automation",
        "about.card2_text": "Hands-on experience with local LLMs, AI-assisted coding workflows, machine learning model training and evaluation on industrial datasets.",
        "about.card3_title": "Leadership",
        "about.card3_text": "Led research teams, mentored interns, conducted 30+ technical interviews, and delivered structured execution with clear communication.",

        "experience.title": "Experience",
        "exp.thesis_title": "Master's Thesis — Medical System Validation",
        "exp.thesis_company": "Medical Center University Freiburg",
        "exp.thesis_desc": "Developed a pressure-controlled perfusion system for biomechanical characterization of corneal tissue. Built full-stack hardware/software integration with C++ real-time firmware maintaining precision control (±2.72 mmHg accuracy) and Python dashboard for live monitoring of 200,000+ data points per experiment.",
        "exp.intern_title": "Research & Data Analysis Intern (Remote)",
        "exp.intern_company": "SponsorYou",
        "exp.intern_desc": "Developed automated web scraping programs using Python/Selenium for financial, educational, and statistical data collection. Led a team of research interns including technical mentoring and conducted 30+ interviews to build the Data Engineering Internship Program.",
        "exp.frontend_title": "Frontend Developer",
        "exp.frontend_company": "Effordea",
        "exp.frontend_desc": "Conceptualized, developed, and deployed modern websites and landing pages following mobile-first principles. Evaluated UX/UI designs for technical feasibility, performance optimization, and scalability.",

        "skills.title": "Skills",
        "skills.ai_title": "AI & Machine Learning",
        "skills.ai_text": "Local LLMs (LM Studio), AI-assisted coding workflows, neural network fundamentals, model training & evaluation (F1-Score, Overfitting/Underfitting analysis)",
        "skills.data_title": "Data Analysis & Automation",
        "skills.data_text": "Python, Web Scraping & Browser Automation (Selenium), Data Processing & KPI Analysis (Pandas), Python SQL API, Live Dashboards & Visualization",
        "skills.web_title": "Web Development",
        "skills.web_text": "Landing Page Development, Responsive Web Design (Mobile-First), Frontend Development, Performance & Structure Optimization, Git",
        "skills.embedded_title": "Embedded Systems",
        "skills.embedded_text": "Embedded C/C++, Firmware Development, Real-time Control, Microcontrollers (STM32, AVR, ARM Core, Arduino, Raspberry Pi), Unit Testing",
        "skills.hardware_title": "Hardware & CAD",
        "skills.hardware_text": "PCB Design (KiCAD), Analog/Digital Electronics, LTSpice, Sensors & Actuators, Measurement & Control Technology, Siemens TIA Portal (PLC), MATLAB, Fusion 360 CAD/CAM",
        "skills.qa_title": "Quality Assurance & Leadership",
        "skills.qa_text": "System Validation, Test Protocols, Technical Documentation & Reporting, Team Leadership & Mentoring, Recruitment & Candidate Selection",

        "education.title": "Education",
        "education.msc_focus": "Focus: Control & Sensor Technology, Advanced Automation & Programming, Simulation, PLC (TIA Portal), Cyber-Physical Systems",
        "education.bsc_focus": "Focus: Power Electronics, Measurement & Control Technology, Sensor Technology, Microcontrollers",
        "education.languages_title": "Languages",
        "education.lang_english": "English (Fluent)",
        "education.lang_german": "German (B1 / Work-related)",
        "education.lang_urdu": "Urdu (Native)",
        "education.lang_sindhi": "Sindhi (Native)",

        "contact.title": "Contact",
        "contact.lead": "Let's connect and discuss how I can contribute to your project.",
        "contact.linkedin": "LinkedIn"
    },

    de: {
        "nav.about": "Über mich",
        "nav.experience": "Erfahrung",
        "nav.skills": "Fähigkeiten",
        "nav.education": "Ausbildung",
        "nav.contact": "Kontakt",

        "hero.eyebrow": "Für neue Projekte offen",
        "hero.title": "Automation und KI-Ingenieur",
        "hero.subtitle": "M.Sc. Elektro- und Informationstechnik mit Spezialisierung auf Angewandte KI, Web-Automatisierung und Embedded Systems.",
        "hero.cta_primary": "Kontakt aufnehmen",
        "hero.location": "Freiburg im Breisgau",

        "about.title": "Über mich",
        "about.lead": "Analytischer und umsetzungsstarker Ingenieur mit Spezialisierung auf Hardware, Embedded-Software und Webentwicklung sowie Expertise in KI-Automatisierung.",
        "about.card1_title": "Technische Tiefe",
        "about.card1_text": "Full-Stack-Systementwicklung von Embedded-Firmware bis Web-Dashboards mit nachgewiesener Expertise in Echtzeitregelungssystemen und Präzisionsingenieurwesen.",
        "about.card2_title": "KI & Automatisierung",
        "about.card2_text": "Praxiserfahrung mit lokalen LLMs, KI-gestützten Coding-Workflows, Training und Evaluierung von ML-Modellen auf industriellen Datensätzen.",
        "about.card3_title": "Führung",
        "about.card3_text": "Leitung von Forschungsteams, Mentoring von Praktikanten, Durchführung von über 30 technischen Interviews mit strukturierter Ausführung und klarer Kommunikation.",

        "experience.title": "Berufserfahrung",
        "exp.thesis_title": "Masterarbeit — Medizinische Systemvalidierung",
        "exp.thesis_company": "Universitätsklinikum Freiburg",
        "exp.thesis_desc": "Entwicklung eines druckgeregelten Perfusionssystems zur biomechanischen Charakterisierung von Hornhautgewebe. Full-Stack-Hardware-/Softwareintegration mit C++ Echtzeit-Firmware für präzise Regelung (±2,72 mmHg Genauigkeit) und Python-Dashboard zur Live-Überwachung von über 200.000 Datenpunkten pro Experiment.",
        "exp.intern_title": "Praktikant Research & Datenanalyse (Remote)",
        "exp.intern_company": "SponsorYou",
        "exp.intern_desc": "Entwicklung automatisierter Web-Scraping-Programme mit Python/Selenium zur Erfassung von Finanz-, Bildungs- und Statistikdaten. Leitung eines Teams von Research-Praktikanten inklusive technischem Mentoring sowie Durchführung von über 30 Bewerbungsgesprächen.",
        "exp.frontend_title": "Frontend Developer",
        "exp.frontend_company": "Effordea",
        "exp.frontend_desc": "Konzeption, Entwicklung und Deployment moderner Websites und Landingpages nach dem Mobile-First-Prinzip. Bewertung von UX/UI-Designs hinsichtlich technischer Machbarkeit, Ladezeiten und Skalierbarkeit.",

        "skills.title": "Fähigkeiten",
        "skills.ai_title": "KI & Machine Learning",
        "skills.ai_text": "Lokale LLMs (LM Studio), KI-gestützte Coding-Workflows, Grundlagen neuronaler Netze, Modelltraining & Evaluierung (F1-Score, Overfitting/Underfitting Analyse)",
        "skills.data_title": "Datenanalyse & Automatisierung",
        "skills.data_text": "Python, Web Scraping & Browser-Automatisierung (Selenium), Datenaufbereitung & KPI-Analyse (Pandas), Python SQL-API, Live-Dashboards & Datenvisualisierung",
        "skills.web_title": "Webentwicklung",
        "skills.web_text": "Landingpage-Entwicklung, Responsive Web Design (Mobile-First), Frontend-Entwicklung, Performance- & Struktur-Optimierung, Git",
        "skills.embedded_title": "Embedded Systems",
        "skills.embedded_text": "Embedded C/C++, Firmware-Entwicklung, Echtzeitregelung, Mikrocontroller (STM32, AVR, ARM-Core, Arduino, Raspberry Pi), Unit Testing",
        "skills.hardware_title": "Hardware & CAD",
        "skills.hardware_text": "PCB-Design (KiCAD), Analog-/Digitalelektronik, LTSpice, Sensoren & Aktuatoren, Mess- und Regelungstechnik, Siemens TIA Portal (SPS/PLC), MATLAB, Fusion 360 CAD/CAM",
        "skills.qa_title": "Qualitätssicherung & Führung",
        "skills.qa_text": "Systemvalidierung, Prüfprotokolle, Technische Dokumentation & Berichterstellung, Teamleitung & Mentoring, Bewerberauswahl & Recruiting",

        "education.title": "Ausbildung",
        "education.msc_focus": "Schwerpunkte: Regelungs- & Sensortechnik, Fortgeschrittene Automatisierung & Programmierung, Simulation, SPS (TIA Portal), Cyber-Physical Systems",
        "education.bsc_focus": "Schwerpunkte: Leistungselektronik, Mess- und Regelungstechnik, Sensortechnik, Mikrocontroller",
        "education.languages_title": "Sprachen",
        "education.lang_english": "Englisch (Fließend)",
        "education.lang_german": "Deutsch (B1 / Arbeitsbezogen)",
        "education.lang_urdu": "Urdu (Muttersprache)",
        "education.lang_sindhi": "Sindhi (Muttersprache)",

        "contact.title": "Kontakt",
        "contact.lead": "Lassen Sie uns in Kontakt treten und besprechen, wie ich zu Ihrem Projekt beitragen kann.",
        "contact.linkedin": "LinkedIn"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // keep the <html lang> attribute in sync for accessibility
    document.documentElement.lang = lang;

    const enBtn = document.getElementById('lang-en');
    const deBtn = document.getElementById('lang-de');
    if (enBtn) enBtn.classList.toggle('active', lang === 'en');
    if (deBtn) deBtn.classList.toggle('active', lang === 'de');

    try {
        localStorage.setItem('portfolio-lang', lang);
    } catch (e) { /* ignore */ }
}

/* ---------- Obfuscate email to deter scrapers ---------- */
function initEmail() {
    // Built from parts so the full address never appears in the HTML source.
    const local = ['ramzan', 'jamali'].join('');
    const domain = ['gmail', '.com'].join('');
    const email = local + '@' + domain;

    const display = document.getElementById('email-display');
    if (display) display.textContent = email;

    const link = document.getElementById('email-link');
    if (link) link.setAttribute('href', 'mailto:' + email);
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');

    // Fallback: show everything if IntersectionObserver is unavailable
    if (!('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
}

/* ---------- Navbar scroll state ---------- */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ---------- Boot ---------- */
function initLanguage() {
    let savedLang = null;
    try {
        savedLang = localStorage.getItem('portfolio-lang');
    } catch (e) { /* ignore */ }
    setLanguage(savedLang && translations[savedLang] ? savedLang : 'en');

    const enBtn = document.getElementById('lang-en');
    const deBtn = document.getElementById('lang-de');
    if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
    if (deBtn) deBtn.addEventListener('click', () => setLanguage('de'));
}

document.addEventListener('DOMContentLoaded', () => {
    initEmail();
    initReveal();
    initNavbar();
    initLanguage();
});
