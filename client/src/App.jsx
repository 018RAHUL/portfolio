import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  Download,
  ExternalLink,
  Mail,
  Menu,
  Send,
  Shield,
  Sparkles,
  X,
} from "lucide-react";

import "./App.css";

/* =========================================================
   BRAND ICONS
   ========================================================= */

function GithubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5a2.49 2.49 0 0 1 4.98 0ZM.5 8h4.9v15H.5V8Zm7.98 0h4.7v2.05h.07c.65-1.24 2.25-2.55 4.63-2.55 4.95 0 5.87 3.26 5.87 7.5V23h-4.9v-7.1c0-1.7-.03-3.89-2.37-3.89-2.38 0-2.74 1.85-2.74 3.77V23h-4.9V8Z" />
    </svg>
  );
}

/* =========================================================
   DATA
   ========================================================= */

const projects = [
  {
    number: "01",
    title: "AI Interview Prep & Analysis Platform",
    description:
      "AI-powered interview preparation platform with automated answer analysis, scoring, feedback, analytics, and secure authentication.",
    tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/018RAHUL",
    featured: false,
    visual: "interview",
  },
  {
    number: "02",
    title: "AI-Tutor",
    description:
      "An AI-powered personalized learning platform exploring RAG, multilingual learning, voice interaction, and intelligent educational experiences.",
    tags: ["MERN", "RAG", "LLM", "GenAI"],
    github: "https://github.com/018RAHUL/AI-Tutor",
    featured: false,
    visual: "tutor",
  },
  {
    number: "03",
    title: "Blockchain & Cryptography",
    description:
      "Hands-on implementations covering cryptographic algorithms, Merkle trees, blockchain concepts, and Solidity smart contracts.",
    tags: ["C++", "Solidity", "Cryptography", "Blockchain"],
    github: "https://github.com/018RAHUL",
    featured: false,
    visual: "blockchain",
  },
];

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript", "SQL", "Solidity"],
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MERN",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Feature Engineering",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      "OWASP Top 10",
      "Cryptography",
      "Mobile Forensics",
      "Network Security",
      "JWT",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Sparkles,
    skills: ["Git", "GitHub", "VS Code", "Linux", "Postman", "Kali Linux"],
  },
];

const certifications = [
  {
    title: "Intermediate-level Projects using C++",
    provider: "CodeChef",
    date: "Jun. 2025",
  },
  {
    title: "Web Development using JavaScript",
    provider: "CodeChef",
    date: "Jul. 2025",
  },
];

const journey = [
  {
    year: "2024 — Present",
    title: "B.Tech — CSE (Cyber Security)",
    place: "IIIT Una",
    description:
      "Building a strong foundation across software engineering, cybersecurity, machine learning, databases, networks, and systems.",
  },
  {
    year: "2026 — Present",
    title: "Secretary — Astral Club",
    place: "IIIT Una",
    description:
      "Led a team of student organizers to execute technical events and workshops across campus.",
  },
  {
    year: "2025 — Present",
    title: "Machine Learning & AI",
    place: "Projects & Self Learning",
    description:
      "Building predictive systems and exploring modern AI workflows through practical projects.",
  },
  {
    year: "2026",
    title: "Open Source & Projects",
    place: "GitHub",
    description:
      "Developing full-stack applications, ML systems, blockchain implementations, and security-focused projects.",
  },
];

/* =========================================================
   PROJECT VISUALS
   ========================================================= */

function ProjectVisual({ type }) {
  if (type === "github") {
    return (
      <div className="project-visual github-visual">
        <div className="visual-glow" />

        <div className="dashboard-window">
          <div className="window-top">
            <span />
            <span />
            <span />
          </div>

          <div className="dashboard-content">
            <aside>
              <div className="mini-logo">
                <GithubIcon size={18} />
              </div>

              <div className="side-line active" />
              <div className="side-line" />
              <div className="side-line" />
              <div className="side-line" />
            </aside>

            <main>
              <div className="dashboard-header">
                <div>
                  <small>PR INTELLIGENCE</small>
                  <strong>Repository Analytics</strong>
                </div>
                <div className="metric-small">2026</div>
              </div>

              <div className="metrics">
                <div>
                  <small>Pull Requests</small>
                  <strong>2.5K+</strong>
                </div>
                <div>
                  <small>Reviews</small>
                  <strong>18K+</strong>
                </div>
                <div>
                  <small>Contributors</small>
                  <strong>1.2K+</strong>
                </div>
              </div>

              <div className="chart">
                <div className="chart-line" />
                <div className="chart-bars">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (type === "interview") {
    return (
      <div className="project-visual interview-visual">
        <div className="floating-card score-card">
          <span>AI SCORE</span>
          <strong>87</strong>
          <small>/ 100</small>
        </div>

        <div className="interview-screen">
          <div className="screen-header">
            <span>Interview Analysis</span>
            <span>●</span>
          </div>

          <div className="answer-block">
            <small>YOUR ANSWER</small>
            <div className="answer-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="analysis-grid">
            <div>
              <small>Strength</small>
              <strong>Strong</strong>
            </div>
            <div>
              <small>Keywords</small>
              <strong>12/15</strong>
            </div>
          </div>

          <div className="progress-line">
            <span />
          </div>
        </div>
      </div>
    );
  }

  if (type === "tutor") {
    return (
      <div className="project-visual tutor-visual">
        <div className="tutor-orb">
          <div className="robot-face">
            <span />
            <span />
          </div>
        </div>

        <div className="learning-card card-one">
          <small>LEARNING PATH</small>
          <strong>Machine Learning</strong>
          <div className="tiny-progress">
            <span />
          </div>
        </div>

        <div className="learning-card card-two">
          <span>AI</span>
          <strong>Personalized</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual blockchain-visual">
      <div className="cube cube-one" />
      <div className="cube cube-two" />
      <div className="cube cube-three" />

      <div className="chain">
        <span />
        <span />
        <span />
      </div>

      <div className="crypto-label">BLOCK</div>
    </div>
  );
}

/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu}>
        SUJAL
      </a>

      <nav className={open ? "nav-links open" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#journey" onClick={closeMenu}>
          Journey
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <div className="nav-actions">
        <a className="resume-button" href="/resume.pdf" download>
          Resume
          <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-gradient gradient-one" />
        <div className="hero-gradient gradient-two" />
        <div className="hero-grid" />
      </div>

      <div className="hero-copy reveal">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          B.TECH CSE — CYBER SECURITY
          <span className="eyebrow-divider">|</span>
          IIIT UNA
        </div>

        <h1>
          Turning Ideas
          <br />
          Into Real-World
          <br />
          <em>Solutions.</em>
        </h1>

        <p>
          I build intelligent and beautiful digital experiences with code,
          design, machine learning, and a curiosity for solving real problems.
        </p>

        <div className="hero-buttons">
          <a className="button button-primary" href="#projects">
            View My Work
            <ArrowRight size={17} />
          </a>

          <a className="button button-secondary" href="/resume.pdf" download>
            <Download size={17} />
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/018RAHUL"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>

          <a
            href="https://linkedin.com/in/sujalbudhiraja"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          <a href="mailto:budhirajasujal23@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* =====================================================
          NEW HERO DEVELOPER VISUAL
          ===================================================== */}

      <div className="hero-art reveal-delay">
        <div className="art-glow" />

        <div className="hero-code-card">
          <div className="hero-code-toolbar">
            <div className="hero-window-dots">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
            </div>

            <div className="hero-code-title">
              sujal.dev / portfolio
            </div>

            <div className="hero-code-status">
              ● online
            </div>
          </div>

          <div className="hero-code-body">
            <div className="hero-code-line">
              <span className="line-number">01</span>
              <span className="purple">const</span>
              <span className="white">&nbsp;developer</span>
              <span className="pink">&nbsp;=</span>
              <span className="yellow">&nbsp;{"{"}</span>
            </div>

            <div className="hero-code-line indent">
              <span className="line-number">02</span>
              <span className="blue">name:</span>
              <span className="green">&nbsp;"Sujal"</span>
              <span className="white">,</span>
            </div>

            <div className="hero-code-line indent">
              <span className="line-number">03</span>
              <span className="blue">role:</span>
              <span className="green">&nbsp;"Developer"</span>
              <span className="white">,</span>
            </div>

            <div className="hero-code-line indent">
              <span className="line-number">04</span>
              <span className="blue">focus:</span>
              <span className="green">&nbsp;"Build"</span>
              <span className="white">,</span>
            </div>

            <div className="hero-code-line indent">
              <span className="line-number">05</span>
              <span className="blue">stack:</span>
              <span className="green">
                &nbsp;["MERN", "BLOCKCHAIN", "ML", "AI"]
              </span>
              <span className="white">,</span>
            </div>

            <div className="hero-code-line indent">
              <span className="line-number">06</span>
              <span className="blue">mindset:</span>
              <span className="green">
                &nbsp;"Always Learning"
              </span>
            </div>

            <div className="hero-code-line">
              <span className="line-number">07</span>
              <span className="yellow">{"}"}</span>
            </div>

            <div className="hero-terminal-line">
              <span className="terminal-arrow">→</span>
              <span>building something meaningful...</span>
              <span className="cursor" />
            </div>
          </div>
        </div>

        <div className="hero-floating-card floating-top">
          <span>01</span>
          <strong>CREATE</strong>
        </div>

        <div className="hero-floating-card floating-bottom">
          <span>02</span>
          <strong>ITERATE</strong>
        </div>

        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
      </div>

      <a className="scroll-indicator" href="#projects">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

/* =========================================================
   ABOUT
   ========================================================= */

function About() {
  return (
    <section className="about section-light" id="about">
      <div className="section-label">
        <span>02</span>
        ABOUT ME
      </div>

      <div className="about-grid">
        <div className="about-copy reveal">
          <h2>
            A curious builder
            <br />
            with a passion for
            <br />
            <span>technology & design.</span>
          </h2>

          <p>
            I'm a B.Tech student in Computer Science and Engineering with a
            specialization in Cyber Security at IIIT Una. I enjoy turning
            complex problems into simple, elegant, and useful products.
          </p>

          <p>
            My interests span full-stack development, machine learning,
            artificial intelligence, cybersecurity, and blockchain.
          </p>

          <a className="text-link" href="#contact">
            Know More About Me
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="about-visual reveal-delay">
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <div className="portrait-silhouette">
                <div className="head" />
                <div className="body" />
              </div>
            </div>

            <div className="portrait-overlay">
              <span>CURIOUS</span>
              <span>CREATIVE</span>
              <span>BUILDING</span>
            </div>
          </div>

          <div className="about-note">
            Same curiosity.
            <br />
            Different problems.
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div>
          <strong>8.27</strong>
          <span>CGPA</span>
        </div>

        <div>
          <strong>2+</strong>
          <span>Major Projects</span>
        </div>

        <div>
          <strong>500+</strong>
          <span>Problems Solved</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Curiosity</span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
   ========================================================= */

function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "AI / ML", "Web", "Security", "Blockchain"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => {
          if (filter === "AI / ML")
            return ["github", "interview", "tutor"].includes(project.visual);

          if (filter === "Web")
            return ["interview", "tutor"].includes(project.visual);

          if (filter === "Security")
            return ["github", "blockchain"].includes(project.visual);

          if (filter === "Blockchain")
            return project.visual === "blockchain";

          return true;
        });

  return (
    <section className="projects section-dark" id="projects">
      <div className="projects-top">
        <div>
          <div className="section-label dark-label">
            <span>03</span>
            SELECTED WORK
          </div>

          <h2>
            Things I've
            <br />
            <span>Built.</span>
          </h2>

          <p>
            A collection of projects where I explore ideas, learn new
            technologies, and solve meaningful problems.
          </p>
        </div>

        <div className="project-filters">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            className={
              project.featured
                ? "project-card project-card-featured"
                : "project-card"
            }
            key={project.number}
          >
            <div className="project-card-content">
              <div className="project-number">{project.number}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <GithubIcon size={15} />
                </a>

                <a href="#contact">
                  View Project
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <ProjectVisual type={project.visual} />
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   CASE STUDY
   ========================================================= */

function CaseStudy() {
  return (
    <section className="case-study section-light">
      <div className="case-study-heading">
        <div className="section-label">
          <span>04</span>
          FEATURED CASE STUDY
        </div>

        <h2>
          From raw GitHub data
          <br />
          to <span>intelligent decisions.</span>
        </h2>
      </div>

      <div className="case-study-grid">
        <div className="case-study-text">
          <span className="case-kicker">GITHUB PR INTELLIGENCE SYSTEM</span>

          <h3>
            Understanding how
            <br />
            code gets reviewed.
          </h3>

          <p>
            The system collects historical pull-request data from multiple
            open-source repositories and transforms it into machine-learning
            workflows for reviewer recommendation, review-time prediction,
            and bottleneck detection.
          </p>

          <div className="case-points">
            <div>
              <strong>01</strong>
              <span>Data Collection</span>
              <p>GitHub REST API + structured SQLite storage.</p>
            </div>

            <div>
              <strong>02</strong>
              <span>Feature Engineering</span>
              <p>PR activity, discussion, review, and repository signals.</p>
            </div>

            <div>
              <strong>03</strong>
              <span>Machine Learning</span>
              <p>Classification, regression, and recommendation workflows.</p>
            </div>
          </div>

          <a
            className="button button-dark"
            href="https://github.com/018RAHUL/github-pr-intelligence-system"
            target="_blank"
            rel="noreferrer"
          >
            Explore on GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="case-dashboard">
          <ProjectVisual type="github" />

          <div className="case-floating metric-a">
            <span>Repositories</span>
            <strong>10</strong>
          </div>

          <div className="case-floating metric-b">
            <span>ML Tasks</span>
            <strong>03</strong>
          </div>

          <div className="case-floating metric-c">
            <span>Features</span>
            <strong>40+</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SKILLS
   ========================================================= */

function Skills() {
  return (
    <section className="skills section-dark" id="skills">
      <div className="skills-heading">
        <div className="section-label dark-label">
          <span>05</span>
          SKILLS
        </div>

        <h2>
          Tools I
          <br />
          <span>work with.</span>
        </h2>

        <p>
          A practical toolkit built through projects, coursework, and
          continuous experimentation.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-header">
                <div className="skill-icon">
                  <Icon size={20} />
                </div>

                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =========================================================
   JOURNEY
   ========================================================= */

function Journey() {
  return (
    <section className="journey section-light" id="journey">
      <div className="section-label">
        <span>06</span>
        EXPERIENCE & JOURNEY
      </div>

      <div className="journey-heading">
        <h2>
          <span>
            My Journey
            <br />
            so far.
          </span>
        </h2>

        <p>
          A timeline of learning, building, leading, and continuously
          exploring new areas of technology.
        </p>
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {journey.map((item, index) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-dot">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="timeline-card">
              <small>{item.year}</small>
              <h3>{item.title}</h3>
              <strong>{item.place}</strong>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

function Achievements() {
  return (
    <section className="achievements section-dark">
      <div className="section-label dark-label">
        <span>07</span>
        ACHIEVEMENTS
      </div>

      <div className="achievement-grid">
        <div className="achievement-main">
          <span className="achievement-number">500+</span>

          <h2>
            Problems
            <br />
            <span>solved.</span>
          </h2>

          <p>
            Competitive programming practice across platforms such as
            LeetCode and CodeChef, building strong foundations in algorithms,
            data structures, and problem solving.
          </p>

          <div className="achievement-platforms">
            <span>LeetCode</span>
            <span>CodeChef</span>
          </div>
        </div>

        <div className="achievement-side">
          <div className="achievement-card">
            <span className="card-index">01</span>
            <h3>Leadership</h3>
            <p>
              Secretary of Astral Club at IIIT Una, helping coordinate
              technical events and workshops.
            </p>
          </div>

          <div className="achievement-card">
            <span className="card-index">02</span>
            <h3>Hackathons</h3>
            <p>
              Participating in hackathons and coding events to build under
              real-world constraints.
            </p>
          </div>

          <div className="achievement-card">
            <span className="card-index">03</span>
            <h3>Open Source</h3>
            <p>
              Building and sharing projects through GitHub while learning from
              the wider developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

function Certifications() {
  return (
    <section className="certifications section-light">
      <div className="certifications-heading">
        <div className="section-label">
          <span>08</span>
          CERTIFICATIONS
        </div>

        <h2>
          Learning never
          <br />
          <span>stops.</span>
        </h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <article className="certificate-card" key={cert.title}>
            <div className="certificate-top">
              <span>0{index + 1}</span>
              <ExternalLink size={17} />
            </div>

            <div className="certificate-mark">
              <span>{cert.provider.charAt(0)}</span>
            </div>

            <h3>{cert.title}</h3>
            <strong>{cert.provider}</strong>
            <small>{cert.date}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   CURRENTLY EXPLORING
   ========================================================= */

function Exploring() {
  return (
    <section className="exploring section-dark">
      <div className="section-label dark-label">
        <span>09</span>
        CURRENTLY EXPLORING
      </div>

      <div className="exploring-layout">
        <div>
          <h2>
            What's
            <br />
            <span>next?</span>
          </h2>

          <p>
            Technology changes quickly. I'm continuously exploring new
            concepts and finding ways to turn them into useful projects.
          </p>
        </div>

        <div className="exploration-orbit">
          <div className="orbit orbit-large" />
          <div className="orbit orbit-medium" />
          <div className="orbit orbit-small" />

          <div className="orbit-center">
            <Sparkles size={25} />
            <span>LEARN</span>
          </div>

          <div className="orbit-label label-ai">GenAI</div>
          <div className="orbit-label label-dl">Deep Learning</div>
          <div className="orbit-label label-chain">Blockchain</div>
          <div className="orbit-label label-security">Security</div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   GITHUB
   ========================================================= */

function GithubSection() {
  return (
    <section className="github-section section-light">
      <div className="section-label">
        <span>10</span>
        OPEN SOURCE
      </div>

      <div className="github-layout">
        <div>
          <div className="github-heading-icon">
            <GithubIcon size={28} />
          </div>

          <h2>
            Building in
            <br />
            <span>public.</span>
          </h2>

          <p>
            My GitHub is where projects, experiments, code, and learning come
            together.
          </p>

          <a
            className="button button-dark"
            href="https://github.com/018RAHUL"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="github-card">
          <div className="github-card-header">
            <div>
              <GithubIcon size={21} />
              <strong>018RAHUL</strong>
            </div>

            <span>github.com</span>
          </div>

          <div className="contribution-grid">
            {Array.from({ length: 84 }).map((_, index) => (
              <span
                key={index}
                className={`level-${(index * 7) % 5}`}
              />
            ))}
          </div>

          <div className="github-card-footer">
            <span>Less</span>
            <i className="level-0" />
            <i className="level-1" />
            <i className="level-2" />
            <i className="level-3" />
            <i className="level-4" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BEYOND CODE
   ========================================================= */

function BeyondCode() {
  return (
    <section className="beyond section-dark">
      <div className="section-label dark-label">
        <span>11</span>
        BEYOND CODE
      </div>

      <div className="beyond-layout">
        <div>
          <h2>
            More than
            <br />
            <span>just code.</span>
          </h2>

          <p>
            A portfolio should show what I build, but also the curiosity and
            discipline behind it.
          </p>
        </div>

        <div className="beyond-wordcloud">
          <span className="word-main">CURIOUS</span>
          <span className="word-one">DISCIPLINE</span>
          <span className="word-two">MARTIAL ARTS</span>
          <span className="word-three">PROBLEM SOLVING</span>
          <span className="word-four">LEARNING</span>
          <span className="word-five">BUILDING</span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        "Couldn't send through the server. Please email me directly."
      );
    }
  };

  return (
    <section className="contact section-dark" id="contact">
      <div className="contact-background">
        <div className="contact-glow glow-left" />
        <div className="contact-glow glow-right" />
      </div>

      <div className="section-label dark-label">
        <span>12</span>
        LET'S CONNECT
      </div>

      <div className="contact-layout">
        <div className="contact-copy">
          <h2>
            Let's Build
            <br />
            Something <span>Great.</span>
          </h2>

          <p>
            I'm open to internships, collaborations, interesting projects,
            and conversations around technology.
          </p>

          <div className="contact-links">
            <a href="mailto:budhirajasujal23@gmail.com">
              <Mail size={18} />
              <span>Email</span>
            </a>

            <a
              href="https://linkedin.com/in/sujalbudhiraja"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/018RAHUL"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me what you're working on..."
              required
            />
          </div>

          <button className="send-button" type="submit">
            <span>Send Message</span>
            <Send size={17} />
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>

      <footer className="footer">
        <div>
          © {new Date().getFullYear()} Sujal. Built with curiosity.
        </div>

        <div className="footer-links">
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </section>
  );
}

/* =========================================================
   APP
   ========================================================= */

export default function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <CaseStudy />
        <Skills />
        <Journey />
        <Achievements />
        <Certifications />
        <Exploring />
        <GithubSection />
        <BeyondCode />
        <Contact />
      </main>
    </div>
  );
}