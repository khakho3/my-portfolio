import './App.css'
import Hero from './components/Hero'
import techExpoPhoto from './assets/tech-expo-2026.jpeg'
import ProjectsSection from './components/ProjectsSection'
import ProjectDetail from './components/ProjectDetail'
import { projects } from './data/projects'

const profile = {
  name: 'Hassan Abdul Aziz',
  title: 'Software Developer',
  email: 'hassanaziz7905@gmail.com',
  phone: '+233 539472431',
  github: 'https://github.com/khakho3',
  linkedin: 'https://www.linkedin.com/in/abdul-aziz-hassan-a2127536b?utm_source=share_via&utm_content=profile&utm_medium=member_android', // Replace with your LinkedIn profile URL.
  intro: 'I combine software and hardware to build dependable web, mobile, and IoT systems that turn useful ideas into working products.',
  about: 'I am a software developer who enjoys combining software and hardware to create technology that is useful, understandable, and built to grow. I work across full-stack web development, Flutter applications, UI/UX, and IoT—learning by building and improving with every project.',
}

const skillGroups = [
  { title: 'Programming languages', skills: ['Dart', 'Python', 'C/C++', 'JavaScript'] },
  { title: 'Mobile development', skills: ['Flutter', 'Dart', 'Responsive mobile UI'] },
  { title: 'Web development', skills: ['React', 'HTML', 'CSS', 'Responsive design'] },
  { title: 'UI/UX & design', skills: ['Interface design', 'User flows', 'Prototyping'] },
  { title: 'Databases', skills: ['SQLite'] },
  { title: 'Tools & platforms', skills: ['Git', 'GitHub', 'Arduino', 'MATLAB'] },
]

const skillIcons = {
  Dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'C/C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  SQLite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Arduino: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
  MATLAB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
}

const skillGroupIcons = {
  'Programming languages': skillIcons.Python,
  'Mobile development': skillIcons.Flutter,
  'Web development': skillIcons.React,
  'UI/UX & design': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  Databases: skillIcons.SQLite,
  'Tools & platforms': skillIcons.Git,
}

const skillSymbols = {
  'Responsive mobile UI': '⌁',
  'Responsive design': '↔',
  'Interface design': '✦',
  'User flows': '→',
  Prototyping: '◇',
}

/* Legacy project data retained temporarily during the case-study migration.
const legacyProjects = [
  {
    title: 'Personal Developer Portfolio',
    category: 'Web development',
    description: 'A responsive personal website designed to help hiring teams, clients, and collaborators quickly understand my work, strengths, and ways to get in touch.',
    problem: 'Making a technical profile easy for recruiters, clients, and collaborators to understand.',
    role: 'Design and frontend development',
    tech: ['React', 'CSS', 'Responsive design'],
    image: null,
    visualLabel: '💼',
    github: 'https://github.com/khakho3/my-portfolio',
    demo: null,
  },
  {
    title: 'Campus Resource Tracker',
    category: 'IoT project',
    description: 'An in-progress IoT project exploring clearer ways to track and organise campus resources.',
    problem: 'Making campus resources easier to locate and manage.',
    role: 'IoT project development',
    tech: ['IoT', 'Arduino', 'C/C++'],
    image: campusResourceTracker,
    github: 'https://github.com/khakho3',
    demo: null,
  },
  {
    title: 'ESP32 Blaster',
    category: 'Embedded systems project',
    description: 'An in-progress embedded project built around the ESP32, documenting my hands-on work with connected hardware.',
    problem: 'Exploring reliable interaction between embedded hardware and software.',
    role: 'Embedded systems development',
    tech: ['ESP32', 'C/C++', 'IoT'],
    image: esp32Blaster,
    github: 'https://github.com/khakho3',
    demo: null,
  },
  {
    title: 'CivicVoice',
    category: 'Civic technology project',
    description: 'CivicVoice gives citizens a direct way to report issues to the relevant authorities, helping important community concerns become visible and actionable.',
    problem: 'Making it easier for citizens to communicate local issues to authorities.',
    role: 'Citizen-facing feature development',
    tech: ['Civic technology', 'Product thinking', 'Web'],
    image: civicVoice,
    github: 'https://github.com/khakho3',
    demo: null,
  },
]
*/

const achievements = [
  { name: 'Tech/Expo 2026 Winner — Terra Sense AI', organization: 'Academic City', date: '2026', description: 'Winner at Academic City Tech/Expo 2026 with Terra Sense AI.', link: 'https://www.linkedin.com/posts/abdul-aziz-hassan-a2127536b_techexpo2026-innovation-techforgood-activity-7444361524833591296-w3s5?utm_source=share&utm_medium=member_android&rcm=ACoAAFuypnkBCQ_04hkKTV3LMm6gce5KDxpeet8' },
]

const journey = [
  { label: 'Education', text: 'Computer Engineering student at Ghana Communication Technology University (GCTU).' },
  { label: 'Development journey', text: 'Building across web, mobile, UI/UX, and embedded systems through focused, practical projects.' },
  { label: 'Projects & practice', text: 'Using project work to learn how useful products move from an idea to a clear experience.' },
  { label: 'Tech/Expo 2026', text: 'Won Academic City Tech/Expo 2026 with Terra Sense AI.' },
  { label: 'Now', text: 'Building web, mobile, and IoT projects while growing in embedded systems and AI.' },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)
  if (match) return <div className="site dark"><ProjectDetail project={projects.find((project) => project.slug === match[1])} /></div>
  const initials = profile.name.split(' ').map((word) => word[0]).join('').slice(0, 2)

  return (
    <div className="site dark">
      <main>
        <header className="site-header">
          <a className="brand" href="#home" aria-label={`${profile.name} home`}>{initials}</a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a><a href="#projects">Projects</a><a href="#journey">Journey</a><a href="#contact">Contact</a>
          </nav>
        </header>

        <Hero profile={profile} />

        <div className="signal-bar" aria-label="Areas of practice"><span>Web systems</span><span>Mobile interfaces</span><span>Connected devices</span><span>Human-centered tech</span></div>

        <section className="section two-column" id="about">
          <p className="label">About me</p>
          <div><h2>Curious by nature.<br />Intentional by design.</h2><p className="body-copy">{profile.about}</p><a className="text-link" href={`mailto:${profile.email}`}>Let’s connect <Arrow /></a></div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading"><p className="label">Skills & technologies</p><h2>A practical toolkit for building digital products.</h2></div>
          <div className="skill-grid">
            {skillGroups.map((group) => <article className="skill-group" key={group.title}><img className="skill-watermark" src={skillGroupIcons[group.title]} alt="" aria-hidden="true" /><h3>{group.title}</h3><div>{group.skills.map((skill) => <span key={skill}>{skillIcons[skill] ? <img src={skillIcons[skill]} alt="" aria-hidden="true" /> : <b className="skill-symbol" aria-hidden="true">{skillSymbols[skill]}</b>}{skill}</span>)}</div></article>)}
          </div>
        </section>

        <ProjectsSection projects={projects} />

        <section className="section achievements" id="achievements">
          <div className="section-heading"><p className="label">Recognition</p><h2>Milestones worth documenting.</h2></div>
          <div className="achievement-grid">{achievements.map((item) => <article className="achievement-card" key={item.name}><div className="achievement-photo"><img src={techExpoPhoto} alt="Academic City Tech Expo 2026 winners holding award cheques" /></div><div className="achievement-copy"><p className="achievement-date">{item.date}</p><h3>{item.name}</h3><p className="organization">{item.organization}</p><p>{item.description}</p>{item.link && <a href={item.link} target="_blank" rel="noreferrer">Verify <Arrow /></a>}</div></article>)}</div>
        </section>

        <section className="section two-column" id="journey">
          <p className="label">Learning journey</p>
          <div><h2>Growing through consistent practice.</h2><div className="timeline">{journey.map((item) => <article key={item.label}><h3>{item.label}</h3><p>{item.text}</p></article>)}</div></div>
        </section>

        <section className="github-section" id="github">
          <p className="label">GitHub & development activity</p><div><h2>Code is where the learning becomes visible.</h2><p>Explore my repositories, current work, and the projects that reflect my development journey.</p><a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub profile <Arrow /></a></div>
        </section>

        <section className="contact" id="contact">
          <p className="label">Contact</p><h2>Let’s build something meaningful.</h2><p>Have a project, opportunity, or idea to discuss? I’d be glad to hear from you.</p><a className="email" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a><div className="phone-actions"><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>Call {profile.phone}</a><a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </section>

        <footer><div><strong>{profile.name}</strong><span>{profile.title}</span></div><div><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()}</span></div></footer>
      </main>
    </div>
  )
}

export default App
