import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Download, Github, Linkedin,
  Mail, Menu, Phone, X, Send, CheckCircle2, Code2, Database,
  ShieldCheck, Container, GraduationCap, BriefcaseBusiness, Server
} from "lucide-react";
import {
  BrowserRouter, Link, NavLink, Outlet, Routes, Route, useLocation, useNavigate, useParams
} from "react-router-dom";
import { gsap } from "gsap";
import "./styles.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://portfolio-1-0hzc.onrender.com";

const profile = {
  name: "Thineshkumar R",
  role: "Software Developer | Backend Engineer",
  email: "thineshkumar.dev@gmail.com",
  phone: "+91 9965379693",
  linkedin: "https://linkedin.com/in/thinesh-kumar-r-3796b926a/",
  summary:
    "Innovative Software Developer specializing in backend development, API design, and database management. Experienced in building scalable, secure systems, optimizing databases, and delivering high-quality solutions in collaborative environments."
};

const projects = [
  {
    slug: "trade-innovation-plus",
    number: "01",
    title: "Trade Innovation Plus",
    displayTitle: "TI PLUS",
    short: "Banking & Trade Finance",
    company: "Bluescope Information Technology",
    role: "Software Engineer | Banking & Trade Finance",
    dates: "Mar 2026 — Present",
    description:
      "Trade Finance and Banking platform supporting LC, BG, Import/Export Trade, NPA Processing and Nostro payment processing with SWIFT message validation, routing and transaction processing.",
    stack: ["Java 8", "Spring Boot", "Oracle", "MySQL", "REST APIs", "SWIFT"],
    responsibilities: [
      "Worked on product configuration and customization.",
      "Developed business and regulatory reports.",
      "Implemented NPA Reverse Feed processing.",
      "Developed Nostro SWIFT message validation, routing, and transaction processing for MT910, MT940, MT950, pacs.008 and pacs.009.",
      "Performed SQL analysis, defect fixing, and production support.",
      "Collaborated with business, QA, and stakeholders during UAT and releases."
    ]
  },
  {
    slug: "ezbuild",
    number: "02",
    title: "EZBUILD",
    displayTitle: "EZBUILD",
    short: "Low-code Workspace Platform",
    company: "Staunch InfoSolutions",
    role: "Software Developer | Backend Engineer",
    dates: "Dec 2024 — Feb 2026",
    description:
      "A low-code workspace platform inspired by Airtable, enabling users to create custom applications, dynamic data layers and flexible views without coding.",
    stack: ["Java 8", "Spring Boot", "PostgreSQL", "MySQL", "REST APIs", "Docker", "RBAC"],
    responsibilities: [
      "Developed backend services using Java 8, Spring Boot, REST APIs, PostgreSQL, and MySQL.",
      "Built Workspace, Application, Data Layer, and View Management modules.",
      "Implemented cloning functionality for applications and data layers.",
      "Developed Role-Based Access Control (RBAC) and audit tracking features.",
      "Designed and optimized database schemas, queries, and REST APIs.",
      "Containerized services using Docker and collaborated with frontend teams for feature delivery."
    ]
  }
];

/*
  IMPORTANT:
  The array is intentionally ordered CURRENT -> SCHOOL.
  CSS renders the timeline as a vertical journey with the current role visually
  at the top and the school foundation at the bottom.
*/
const milestones = [
  {
    year: "Mar 2026 — Present",
    type: "CURRENT ROLE",
    title: "Software Engineer",
    organization: "Bluescope Information Technology",
    context: "Trade Innovation Plus (TI Plus) · Banking & Trade Finance",
    result: "Current",
    icon: BriefcaseBusiness,
    current: true
  },
  {
    year: "Dec 2024 — Feb 2026",
    type: "EXPERIENCE",
    title: "Software Developer · Backend Engineer",
    organization: "Staunch InfoSolutions",
    context: "EZBUILD · Low-code Workspace Platform",
    result: "Experience",
    icon: Server
  },
  {
    year: "2020 — 2024",
    type: "EDUCATION",
    title: "B.Tech in Information Technology",
    organization: "Erode Sengunthar Engineering College",
    context: "Information Technology",
    result: "CGPA 8.10",
    icon: GraduationCap
  },
  {
    year: "2018 — 2020",
    type: "EDUCATION",
    title: "Higher Secondary · HSC",
    organization: "St’Pauls Matriculation Higher Secondary School",
    context: "Higher Secondary",
    result: "65%",
    icon: GraduationCap
  },
  {
    year: "2018",
    type: "FOUNDATION",
    title: "SSLC",
    organization: "St’Pauls Matriculation Higher Secondary School",
    context: "School Education",
    result: "88%",
    icon: GraduationCap
  }
];

const skills = [
  ["Programming", "Java 8", Code2],
  ["Backend Framework", "Spring Boot", Code2],
  ["REST", "REST APIs", Server],
  ["Databases", "MySQL · Oracle · PostgreSQL", Database],
  ["API & Testing", "Swagger (OpenAPI) · Postman", CheckCircle2],
  ["Architecture", "LLD · Class Diagram · Sequence Diagram", ShieldCheck],
  ["Version Control", "GitHub · Azure DevOps", Github],
  ["DevOps", "Docker", Container]
];

function usePageIntro() {
  const location = useLocation();
  const layer = useRef(null);

  useEffect(() => {
    if (!layer.current) return;

    const ctx = gsap.context(() => {
      gsap.set(layer.current, { opacity: 1, yPercent: 0 });

      const reveals = layer.current.querySelectorAll(".reveal");
      if (reveals.length) {
        gsap.fromTo(
          reveals,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.05,
            delay: 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity"
          }
        );
      }
    }, layer.current);

    window.scrollTo(0, 0);
    return () => ctx.revert();
  }, [location.pathname]);

  return layer;
}

function Layout() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  useEffect(() => setMenu(false), [location.pathname]);

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/skills", "Skills"],
    ["/experience", "Experience"],
    ["/projects", "Projects"],
    ["/contact", "Contact"]
  ];

  return (
    <div className="app">
      <header className="topbar">
        <Link to="/" className="logo">TK<span>.</span></Link>

        <nav className={menu ? "nav open" : "nav"}>
          {links.map(([path, label]) => (
            <NavLink key={path} to={path} end={path === "/"}>
              {label}
            </NavLink>
          ))}
          <a className="resume-nav" href="/resume.pdf" download>
            Resume <Download size={14}/>
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setMenu(v => !v)} aria-label="Toggle navigation">
          {menu ? <X/> : <Menu/>}
        </button>
      </header>

      <aside className="side-rail">
        <div className="rail-line"/>
        <div className="rail-socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/></a>
          <a href={`mailto:${profile.email}`}><Mail size={17}/></a>
          <a href={`tel:${profile.phone}`}><Phone size={17}/></a>
        </div>
      </aside>

      <main>
        <AnimatedRoute/>
      </main>

      <footer>
        <span>© 2026 Thineshkumar R</span>
        <span>Java · Spring Boot · REST · SQL · Docker</span>
      </footer>
    </div>
  );
}

function AnimatedRoute() {
  const layer = usePageIntro();
  return (
    <div ref={layer} className="route-layer">
      <Outlet/>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <section className="page home-page">
      <div className="background-grid"/>
      <div className="hero-glow"/>
      <div className="hero-orbit orbit-1"/>
      <div className="hero-orbit orbit-2"/>

      <div className="home-main">
        <div className="reveal hero-kicker">HELLO, I'M</div>

        {/* One-line name on desktop */}
        <h1 className="hero-name reveal">Thineshkumar R</h1>

        <h2 className="hero-role reveal">{profile.role}</h2>

        <p className="hero-description reveal">
          I build scalable backend systems, secure APIs and database-driven
          applications that solve real-world problems.
        </p>

        <div className="hero-actions reveal">
          <button className="button dark" onClick={() => navigate("/projects")}>
            View My Work <ArrowRight size={17}/>
          </button>
          <a className="button light" href="/resume.pdf" download>
            Download Resume <Download size={17}/>
          </a>
        </div>
      </div>

      <div className="hero-visual reveal" aria-hidden="true">
        <div className="avatar-ring">
          <div className="avatar">
            <div className="avatar-head"/>
            <div className="avatar-body"/>
          </div>
          <i className="orbit-dot dot-top"/>
          <i className="orbit-dot dot-right"/>
          <i className="orbit-dot dot-bottom"/>
        </div>
        <div className="workflow">COMMIT<br/>BUILD<br/>DEPLOY</div>
      </div>

      <div className="home-stats reveal">
        <div><b>1+</b><span>Year Experience</span></div>
        <div><b>API</b><span>Backend Focus</span></div>
        <div><b>∞</b><span>Continuous Learning</span></div>
      </div>

      <div className="scroll-cue">SCROLL <span/></div>
    </section>
  );
}

function About() {
  return (
    <section className="page content-page">
      <PageHeading number="01" title="About Me" subtitle="Get to know the developer behind the code."/>

      <div className="about-layout">
        <div className="about-card reveal">
          <p>
            I’m Thineshkumar R, a Software Developer focused on backend development,
            API design and database management. I enjoy building scalable, secure
            systems and turning product requirements into reliable software.
          </p>
          <p>
            My strongest working areas include Java 8, Spring Boot, PostgreSQL/MySQL,
            Oracle, REST APIs, Docker, Swagger and Postman.
          </p>
          <div className="quote">
            “Code is not just about syntax; it’s about solving real problems.”
          </div>
        </div>

        <div className="what-i-do reveal">
          <h3>What I Do</h3>
          <div className="what-grid">
            <InfoCard icon={Server} title="Backend" text="API & service development"/>
            <InfoCard icon={Code2} title="REST APIs" text="Clean, documented endpoints"/>
            <InfoCard icon={Database} title="Database" text="Schema & query design"/>
            <InfoCard icon={ShieldCheck} title="Security" text="RBAC & secure systems"/>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({icon: Icon, title, text}) {
  return (
    <article className="info-card">
      <Icon size={22}/>
      <b>{title}</b>
      <span>{text}</span>
    </article>
  );
}

function Skills() {
  return (
    <section className="page content-page">
      <PageHeading number="02" title="Skills" subtitle="Technologies and tools I work with to build scalable and secure applications."/>

      <div className="skills-grid">
        {skills.map(([name, value, Icon], i) => (
          <article className="skill-tile reveal" key={name}>
            <span className="tile-no">0{i+1}</span>
            <Icon size={27}/>
            <h3>{name}</h3>
            <p>{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="page content-page experience-page">
      <PageHeading number="03" title="Milestones" subtitle="From school to the role I hold today."/>

      <div className="milestone-wrap">
        <div className="milestone-line"/>
        {milestones.map((m, index) => {
          const Icon = m.icon;
          return (
            <article className={`milestone reveal ${m.current ? "current" : ""}`} key={m.year + m.title}>
              <div className="milestone-year">{m.year}</div>
              <div className="milestone-node"><Icon size={13}/></div>
              <div className="milestone-content">
                <div className="milestone-label">
                  <span>{m.type}</span>
                  {m.current && <b>CURRENT</b>}
                </div>
                <h3>{m.title}</h3>
                <p className="milestone-org">{m.organization}</p>
                <p className="milestone-context">{m.context}</p>
                <strong>{m.result}</strong>

                {m.current && (
                  <Link to="/projects/trade-innovation-plus" className="milestone-link">
                    View current project <ArrowUpRight size={15}/>
                  </Link>
                )}
                {m.title.includes("Software Developer") && (
                  <Link to="/projects/ezbuild" className="milestone-link">
                    View project <ArrowUpRight size={15}/>
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="page content-page projects-page">
      <PageHeading number="04" title="Projects" subtitle="Real-world backend systems I have worked on."/>

      <div className="project-list">
        {projects.map(p => (
          <Link to={`/projects/${p.slug}`} className="project-preview reveal" key={p.slug}>
            <div className="project-bg-word">{p.displayTitle}</div>
            <div className="project-number">{p.number}</div>
            <div className="project-preview-content">
              <span className="eyebrow">{p.short}</span>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div className="tags">
                {p.stack.slice(0, 6).map(s => <span key={s}>{s}</span>)}
              </div>
              <b className="open-project">Open Project <ArrowUpRight size={17}/></b>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const navigate = useNavigate();

  if (!project) {
    return <section className="page content-page"><h1>Project not found.</h1></section>;
  }

  return (
    <section className="project-detail page">
      <div className="detail-bg-word">{project.displayTitle}</div>

      <button className="detail-close" onClick={() => navigate("/projects")} aria-label="Close project">
        <X size={22}/>
      </button>

      <div className="detail-inner">
        <button className="back-projects" onClick={() => navigate("/projects")}>
          <ArrowLeft size={16}/> Back to Projects
        </button>

        <div className="detail-number">{project.number} / 02</div>
        <p className="kicker light-kicker">PROJECT CASE STUDY</p>
        <h1>{project.title}</h1>
        <h2>{project.short}</h2>
        <p className="detail-lead">{project.description}</p>

        <div className="detail-grid">
          <div>
            <h3>My Role & Responsibilities</h3>
            <ul className="responsibility-list">
              {project.responsibilities.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h3>Technology Stack</h3>
            <div className="tags detail-tags">
              {project.stack.map(s => <span key={s}>{s}</span>)}
            </div>

            <div className="detail-meta">
              <div><span>Company</span><b>{project.company}</b></div>
              <div><span>Role</span><b>{project.role}</b></div>
              <div><span>Period</span><b>{project.dates}</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({name:"", email:"", message:""});
  const [status, setStatus] = useState("idle");

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Mail service failed");

      setStatus("sent");
      setForm({name:"", email:"", message:""});
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="page content-page contact-page">
      <PageHeading number="05" title="Let's Connect" subtitle="Send a message and it will arrive in my configured mailbox."/>

      <div className="contact-layout">
        <div className="contact-copy reveal">
          <h2>Let's build<br/><em>something useful.</em></h2>

          <div className="contact-links">
            <a href={`tel:${profile.phone}`}><Phone size={18}/> {profile.phone}</a>
            <a href={`mailto:${profile.email}`}><Mail size={18}/> {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
          </div>

          <a className="resume-card" href="/resume.pdf" download>
            <Download size={20}/>
            <span><b>Download My Resume</b><small>Get a copy of my latest resume.</small></span>
            <ArrowUpRight size={18}/>
          </a>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          <label>Your Name
            <input required maxLength="100" value={form.name}
              onChange={e => setForm({...form, name:e.target.value})}/>
          </label>

          <label>Your Email
            <input required type="email" maxLength="180" value={form.email}
              onChange={e => setForm({...form, email:e.target.value})}/>
          </label>

          <label>Your Message
            <textarea required maxLength="5000" rows="7" value={form.message}
              onChange={e => setForm({...form, message:e.target.value})}/>
          </label>

          <button className="button dark submit-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." :
             status === "sent" ? <>Message Sent <CheckCircle2 size={17}/></> :
             <>Send Message <Send size={17}/></>}
          </button>

          {status === "sent" && <p className="status success">Message sent successfully.</p>}
          {status === "error" && <p className="status error">Could not send the message. Make sure the Spring Boot backend and mail configuration are running.</p>}
        </form>
      </div>
    </section>
  );
}

function PageHeading({number, title, subtitle}) {
  return (
    <div className="page-heading reveal">
      <div>
        <span>{number} /</span>
        <h1>{title}</h1>
      </div>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter  basename="/Portfolio">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
