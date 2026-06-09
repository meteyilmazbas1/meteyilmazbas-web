"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "tr" | "en";

const dict = {
  nav: {
    about: { tr: "Hakkımda", en: "About" },
    skills: { tr: "Yetenekler", en: "Skills" },
    projects: { tr: "Projeler", en: "Projects" },
    contact: { tr: "İletişim", en: "Contact" },
  },
  hero: {
    welcome: { tr: "Hoş Geldiniz", en: "Welcome" },
    greeting: { tr: "Merhaba, ben", en: "Hi, I'm" },
    title: {
      tr: "Bilgisayar Mühendisliği Öğrencisi",
      en: "Computer Engineering Student",
    },
    description: {
      tr: "Teknolojiye meraklı, yeni şeyler öğrenmeyi seven biriyim. Kodlama ile ilgili projeler yapmayı seviyorum.",
      en: "I'm passionate about technology and love learning new things. I enjoy working on coding projects.",
    },
    cta1: { tr: "Projelerimi Gör", en: "View My Projects" },
    cta2: { tr: "İletişime Geç", en: "Get in Touch" },
  },
  about: {
    subtitle: { tr: "Hakkımda", en: "About Me" },
    title: { tr: "Ben Kimim?", en: "Who Am I?" },
    educationTitle: { tr: "Eğitim", en: "Education" },
    educationText: {
      tr: "Sabancı Üniversitesi Bilgisayar Mühendisliği bölümünde lisans eğitimime devam ediyorum. Algoritmalar, veri yapıları ve yazılım mühendisliği alanlarında kendimi geliştiriyorum.",
      en: "I'm pursuing my bachelor's degree in Computer Engineering at Sabancı University. I'm improving myself in algorithms, data structures, and software engineering.",
    },
    skillsTitle: { tr: "Yetenekler", en: "Skills" },
    skillsText: {
      tr: "Python, C++, C#, Dart ve HTML dillerinde deneyim sahibiyim. Firebase ile backend geliştirme ve Flutter ile mobil uygulama projeleri üretiyorum.",
      en: "I have experience in Python, C++, C#, Dart, and HTML. I develop backend solutions with Firebase and build mobile apps with Flutter.",
    },
  },
  skills: {
    subtitle: { tr: "Yetenekler", en: "Skills" },
    title: { tr: "Teknolojilerim", en: "My Technologies" },
  },
  projects: {
    subtitle: { tr: "Projeler", en: "Projects" },
    title: { tr: "Son Çalışmalarım", en: "Recent Work" },
  },
  contact: {
    subtitle: { tr: "İletişim", en: "Contact" },
    title: { tr: "Birlikte Çalışalım", en: "Let's Work Together" },
    description: {
      tr: "Bir projeniz mi var ya da sadece merhaba mı demek istiyorsunuz? Bana ulaşmaktan çekinmeyin.",
      en: "Have a project in mind or just want to say hello? Feel free to reach out.",
    },
    github: { tr: "GitHub Profilim", en: "My GitHub Profile" },
  },
  footer: {
    rights: {
      tr: "Mete Yılmazbaş. Tüm hakları saklıdır.",
      en: "Mete Yılmazbaş. All rights reserved.",
    },
  },
};

const projectsData = [
  {
    title: { tr: "Kişisel Portfolyo Web Sitesi", en: "Personal Portfolio Website" },
    description: {
      tr: "Bu portfolyo sitesini TypeScript dilini kullanarak geliştirdim. Modern web standartlarına uygun, tamamen responsive ve performans odaklı bir yapıya sahiptir.",
      en: "I built this portfolio website using TypeScript. It follows modern web standards and has a fully responsive, performance-oriented structure.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://github.com/meteyilmazbas1/meteyilmazbas-web",
  },
  {
    title: { tr: "Retro Tarzı 2D Oyun", en: "Retro-Style 2D Game" },
    description: {
      tr: "Ekip arkadaşlarımla birlikte C# ve Unity kullanarak geliştirdiğim, Retro tarzı bir oyun.",
      en: "A retro-style game I developed with my teammates using C# and Unity.",
    },
    tags: ["C#", "Unity"],
    link: "https://github.com/meteyilmazbas1/PCGD-Group-10",
  },
  {
    title: { tr: "Data Science Projesi", en: "Data Science Project" },
    description: {
      tr: "Python kullanarak bir data science projesi yaptım.",
      en: "A data science project I built using Python.",
    },
    tags: ["Python"],
    link: "https://github.com/meteyilmazbas1/DSA210-Project",
  },
  {
    title: { tr: "Mobil Uygulama Projesi", en: "Mobile App Project" },
    description: {
      tr: "Ekip arkadaşlarımla birlikte Flutter kullanarak bir mobil aplikasyon yaptık.",
      en: "A mobile application my teammates and I built using Flutter.",
    },
    tags: ["Flutter", "Dart"],
    link: "https://github.com/CemKaya1/cs-310-project",
  },
  {
    title: { tr: "Dream Games Yazılım Mühendisliği Vaka Çalışması", en: "Dream Games Software Engineering Case Study" },
    description: {
      tr: "Unity 6 ve C# ile geliştirilmiş, OOP prensiplerine dayalı seviye tabanlı bir mobil blast puzzle oyunu. JSON tabanlı seviye tasarımıyla 10 seviyeli bir ilerleme sistemi içermektedir.",
      en: "A level-based mobile blast puzzle game in Unity 6 and C# following OOP principles, featuring a 10-level progression system with JSON-driven level design.",
    },
    tags: ["Unity", "C#", "JSON"],
    link: "https://github.com/meteyilmazbas1/Dream-Games-Case-Study",
  },
];

const skillsList = ["Python", "C++", "C#", "Dart", "HTML", "Firebase"];

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "tr",
  toggle: () => {},
});

function useLang() {
  return useContext(LangContext);
}

function t(entry: { tr: string; en: string }, lang: Lang) {
  return entry[lang];
}

function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 rounded-full border border-card-border px-3 py-1.5 text-xs font-semibold transition-all duration-300 hover:border-accent"
    >
      <span className={lang === "tr" ? "text-accent" : "text-muted"}>TR</span>
      <span className="text-card-border">|</span>
      <span className={lang === "en" ? "text-accent" : "text-muted"}>EN</span>
    </button>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();

  const navLinks = [
    { label: t(dict.nav.about, lang), href: "#hakkimda" },
    { label: t(dict.nav.skills, lang), href: "#yetenekler" },
    { label: t(dict.nav.projects, lang), href: "#projeler" },
    { label: t(dict.nav.contact, lang), href: "#iletisim" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Mete Yılmazbaş
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LangToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-card-border bg-background md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const { lang } = useLang();
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          {t(dict.hero.welcome, lang)}
        </p>
        <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
          {t(dict.hero.greeting, lang)}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">
            Mete Yılmazbaş
          </span>
        </h1>
        <p className="mb-3 text-xl font-medium text-blue-400 md:text-2xl">
          {t(dict.hero.title, lang)}
        </p>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {t(dict.hero.description, lang)}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projeler"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {t(dict.hero.cta1, lang)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {t(dict.hero.cta2, lang)}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

function AboutSection() {
  const { lang } = useLang();
  return (
    <section id="hakkimda" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">
          {t(dict.about.subtitle, lang)}
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t(dict.about.title, lang)}
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-card-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-foreground">
              {t(dict.about.educationTitle, lang)}
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              {t(dict.about.educationText, lang)}
            </p>
          </div>
          <div className="rounded-2xl border border-card-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-foreground">
              {t(dict.about.skillsTitle, lang)}
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              {t(dict.about.skillsText, lang)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { lang } = useLang();
  return (
    <section id="yetenekler" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">
          {t(dict.skills.subtitle, lang)}
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t(dict.skills.title, lang)}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {skillsList.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-blue-500/30 bg-gray-800 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { lang } = useLang();
  return (
    <section id="projeler" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">
          {t(dict.projects.subtitle, lang)}
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t(dict.projects.title, lang)}
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted transition-colors group-hover:text-accent"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                {t(project.title, lang)}
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {t(project.description, lang)}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { lang } = useLang();
  return (
    <section id="iletisim" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          {t(dict.contact.subtitle, lang)}
        </h2>
        <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          {t(dict.contact.title, lang)}
        </h3>
        <p className="mb-10 text-muted">
          {t(dict.contact.description, lang)}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:yilmazbasmete1@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-blue-500/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            yilmazbasmete1@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/mete-y%C4%B1lmazba%C5%9F-a388752ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-gray-800 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/meteyilmazbas1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t(dict.contact.github, lang)}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { lang } = useLang();
  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <p className="text-sm text-muted">
          &copy; 2026 {t(dict.footer.rights, lang)}
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const toggle = () => setLang((prev) => (prev === "tr" ? "en" : "tr"));

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
