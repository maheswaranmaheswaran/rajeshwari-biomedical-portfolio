"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Download,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Mail,
  Medal,
  Palette,
  Settings,
  Users,
  Wrench,
} from "lucide-react";

const themeOptions = [
  { value: "navy", label: "Dark Navy" },
  { value: "medical", label: "Medical White" },
  { value: "neon", label: "Neon Black" },
  { value: "purple", label: "Purple Gradient" },
] as const;

type ThemeName = (typeof themeOptions)[number]["value"];

const skills = [
  "Bio Python",
  "3D Organ Printing",
  "Diagnostic Equipment",
  "Therapeutic Equipment",
  "Hospital Management",
  "Arduino",
  "Proteus",
  "TinkerCAD",
  "GitHub",
];

const training = [
  {
    title: "Application of Ultrasound Machine",
    place: "Cyrix Healthcare, Cochin",
  },
  {
    title: "Latest Technology in Radiological Field",
    place: "GKNM Hospital · 2024",
  },
  {
    title: "Defibrillator, Patient Monitor, Infusion & Syringe Pump",
    place: "Application training",
  },
  {
    title: "Medical Equipment Training",
    place: "Atheenapandiyan Pvt Ltd, Coimbatore",
  },
  {
    title: "Hospital Training",
    place: "CNS Hospital, Avinashi",
  },
];

const education = [
  {
    degree: "B.E. Biomedical Engineering",
    place: "Park College of Engineering and Technology, Coimbatore",
    meta: "Batch of 2025 · CGPA 8.5",
  },
  {
    degree: "Higher Secondary Education",
    place: "Govt Girls Higher Secondary School, Palladam, Tirupur",
    meta: "May 2021 · 85%",
  },
  {
    degree: "Secondary Education",
    place:
      "T T Narasimman Swami Dayananda Hr. Sec. School, Manjakkudi",
    meta: "May 2019 · 82%",
  },
];

function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeName>("navy");

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "portfolio-theme"
    ) as ThemeName | null;

    const validTheme = themeOptions.some(
      (item) => item.value === savedTheme
    );

    const selectedTheme: ThemeName =
      savedTheme && validTheme ? savedTheme : "navy";

    setTheme(selectedTheme);
    document.documentElement.dataset.theme = selectedTheme;
  }, []);

  function changeTheme(value: string) {
    const newTheme = value as ThemeName;

    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("portfolio-theme", newTheme);
  }

  return (
    <label className="theme-picker">
      <Palette aria-hidden="true" size={17} />

      <select
        value={theme}
        onChange={(event) => changeTheme(event.target.value)}
        aria-label="Choose portfolio theme"
      >
        {themeOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rajeshwari S home">
          <span className="brand-mark">RS</span>

          <span className="brand-text">
            <strong>Rajeshwari S</strong>
            <small>Biomedical Engineer</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>

        <div className="header-actions">
          <ThemeSwitcher />

          <a
            className="header-cta"
            href="/Rajeshwari_Senthil_Resume.pdf"
            download
          >
            <Download aria-hidden="true" size={17} />
            Resume
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/biomedical-hero.png"
          alt=""
          aria-hidden="true"
        />

        <div className="hero-overlay" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="profile-photo-frame">
          <img
            src="/rajeshwari-profile.jpeg"
            alt="Rajeshwari S - Biomedical Engineer"
          />
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse-dot" />
            Clinical Application Engineer
          </div>

          <h1>
  Hi, I&apos;m
  <span>Rajeshwari</span>
</h1>

          <p>
            Biomedical Engineer with one year of hands-on experience
            supporting laparoscopic surgical systems, medical equipment
            calibration, clinical workflows, and end-user training.
          </p>

          <div className="hero-actions">
            <a
              className="primary-action"
              href="mailto:rajiraji8821@gmail.com"
            >
              <Mail aria-hidden="true" size={19} />
              Get in touch
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>

            <a
              className="secondary-action"
              href="https://linkedin.com/in/rajeshwari-senthil-92a69829a"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink aria-hidden="true" size={18} />
              LinkedIn
            </a>
          </div>

          <div className="hero-metrics" aria-label="Career highlights">
            <div>
              <strong>1 year</strong>
              <span>Clinical experience</span>
            </div>

            <div>
              <strong>99%+</strong>
              <span>System uptime supported</span>
            </div>

            <div>
              <strong>8.5</strong>
              <span>Engineering CGPA</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="intro section-shell"
        aria-labelledby="profile-title"
      >
        <div className="section-kicker">
          <span>01</span>
          Profile
        </div>

        <div className="intro-copy">
          <h2 id="profile-title">
            Engineering confidence at the point of care.
          </h2>

          <p>
            I configure, troubleshoot, and support clinical systems where
            reliability matters most. My work combines biomedical
            fundamentals, operating-room workflow knowledge, equipment
            safety, and clear user training to help healthcare teams adopt
            technology seamlessly.
          </p>
        </div>

        <div className="focus-card">
          <HeartPulse aria-hidden="true" size={26} />

          <div>
            <span>Current focus</span>
            <strong>
              Clinical efficiency and patient-care outcomes
            </strong>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell">
          <div className="section-heading">
            <div className="section-kicker light">
              <span>02</span>
              Experience
            </div>

            <h2>Clinical support that keeps teams moving.</h2>
          </div>

          <article className="experience-card">
            <div className="experience-topline">
              <div>
                <span className="role-label">
                  Clinical Application Engineer
                </span>

                <h3>Sri Ganapathy Healthcare</h3>
              </div>

              <span className="duration">1 year</span>
            </div>

            <div className="experience-body">
              <div className="scope-panel">
                <Activity aria-hidden="true" size={32} />
                <span>Core scope</span>

                <strong>
                  Laparoscopy systems and clinical imaging platforms
                </strong>
              </div>

              <ul>
                <li>
                  <CheckCircle2 aria-hidden="true" size={20} />

                  <span>
                    Configured, calibrated, and maintained advanced
                    medical equipment across high-volume hospital units.
                  </span>
                </li>

                <li>
                  <CheckCircle2 aria-hidden="true" size={20} />

                  <span>
                    Delivered hands-on technical training and live
                    procedural support to clinicians and healthcare staff.
                  </span>
                </li>

                <li>
                  <CheckCircle2 aria-hidden="true" size={20} />

                  <span>
                    Conducted laparoscopy equipment demonstrations for
                    hospital surgical teams, with a focus on safe
                    workflows.
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell projects-section" id="projects">
        <div className="section-heading dark-heading">
          <div className="section-kicker">
            <span>03</span>
            Selected work
          </div>

          <h2>
            Projects at the intersection of healthcare and technology.
          </h2>
        </div>

        <div className="project-grid">
          <article className="project-card featured-project">
            <div className="project-icon">
              <Settings aria-hidden="true" />
            </div>

            <span className="project-label">Final Year Project</span>
            <h3>Automatic Medicine Dispenser</h3>

            <p>
              A biomedical engineering project centered on automating the
              medicine-dispensing workflow through a practical system
              concept.
            </p>

            <div className="tags">
              <span>Biomedical automation</span>
              <span>Product design</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-icon">
              <Activity aria-hidden="true" />
            </div>

            <span className="project-label">IBM Project</span>
            <h3>Product Demand Prediction Model</h3>

            <p>
              Built a prediction model with a focused approach to feature
              engineering and demand-oriented analysis.
            </p>

            <div className="tags">
              <span>Prediction model</span>
              <span>Feature engineering</span>
            </div>
          </article>
        </div>
      </section>

      <section className="skills-band" id="skills">
        <div className="section-shell skills-layout">
          <div>
            <div className="section-kicker light">
              <span>04</span>
              Technical toolkit
            </div>

            <h2>
              Biomedical knowledge, supported by practical tools.
            </h2>
          </div>

          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell training-section" id="training">
        <div className="section-heading dark-heading">
          <div className="section-kicker">
            <span>05</span>
            Workshops and training
          </div>

          <h2>
            Practical exposure across essential medical systems.
          </h2>
        </div>

        <div className="training-list">
          {training.map((item, index) => (
            <article key={item.title}>
              <span className="training-number">
                0{index + 1}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>

              <Wrench aria-hidden="true" size={21} />
            </article>
          ))}
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="section-shell education-grid">
          <div className="section-heading">
            <div className="section-kicker light">
              <span>06</span>
              Education
            </div>

            <h2>
              A strong foundation in biomedical engineering.
            </h2>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <article key={item.degree}>
                <span className="timeline-dot" />

                <div>
                  <span className="education-meta">
                    {item.meta}
                  </span>

                  <h3>{item.degree}</h3>
                  <p>{item.place}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell leadership-section">
        <div className="section-kicker">
          <span>07</span>
          Leadership and achievements
        </div>

        <div className="leadership-grid">
          <article>
            <Users aria-hidden="true" />

            <span>Dec 2023 - May 2025</span>
            <h3>College Cultural Secretary</h3>

            <p>
              Zero-Gravity Inter-College Fest · Coordinated a two-day
              inter-college event.
            </p>
          </article>

          <article>
            <GraduationCap aria-hidden="true" />

            <span>Dec 2024 - May 2025</span>
            <h3>Student Placement Coordinator</h3>

            <p>
              Demonstrated leadership, coordination, and team-management
              skills.
            </p>
          </article>

          <article>
            <Medal aria-hidden="true" />

            <span>NCC and Sport</span>
            <h3>Discipline beyond academics</h3>

            <p>
              NCC 'A' Certificate · District-level winner in Kho-Kho and
              Athletics.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" aria-hidden="true" />

        <div className="section-shell contact-inner">
          <div>
            <span className="contact-label">Let's connect</span>

            <h2>
              Ready to support the next generation of clinical technology.
            </h2>
          </div>

          <div className="contact-links">
            <a href="mailto:rajiraji8821@gmail.com">
              <Mail aria-hidden="true" />
              rajiraji8821@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/rajeshwari-senthil-92a69829a"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink aria-hidden="true" />
              LinkedIn profile
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <span>© 2026 Rajeshwari S</span>

          <span>
            Biomedical Engineer · Clinical Application Engineer
          </span>
        </div>
      </footer>
    </main>
  );
}