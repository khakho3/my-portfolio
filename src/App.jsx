import './App.css'
import profilePhoto from './assets/profile-hassan.jpeg'
import campusResourceTracker from './assets/projects/campus-resource-tracker.jpeg'
import civicVoice from './assets/projects/civicvoice.jpeg'
import esp32Blaster from './assets/projects/esp32-blaster.jpeg'

const profile = {
  name: 'Hassan Abdul Aziz',
  title: 'Software Developer',
  email: 'hassanaziz7905@gmail.com',
  phone: '+233 539472431',
  github: 'https://github.com/khakho3',
  linkedin: 'https://www.linkedin.com/in/abdul-aziz-hassan-a2127536b?utm_source=share_via&utm_content=profile&utm_medium=member_android', // Replace with your LinkedIn profile URL.
  intro: 'I build practical web, mobile, and connected-device experiences with a focus on clean engineering and thoughtful user experience.',
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

const projects = [
  {
    title: 'Personal Developer Portfolio',
    category: 'Web development',
    description: 'A responsive personal website designed to communicate my work, skills, learning journey, and contact details clearly.',
    problem: 'Making a technical profile easy for recruiters, clients, and collaborators to understand.',
    role: 'Design and frontend development',
    tech: ['React', 'CSS', 'Responsive design'],
    image: profilePhoto,
    visualLabel: 'HA',
    github: 'https://github.com/khakho3/my-portfolio',
    demo: null,
  },
  {
    title: 'Campus Resource Tracker',
    category: 'IoT project',
    description: 'A campus-focused resource tracking project. Add your final project summary, screenshots, and key outcomes here as the work develops.',
    problem: 'Tracking and organising campus resources.',
    role: 'IoT project development',
    tech: ['IoT', 'Arduino', 'C/C++'],
    image: campusResourceTracker,
    github: 'https://github.com/khakho3',
    demo: null,
  },
  {
    title: 'ESP32 Blaster',
    category: 'Embedded systems project',
    description: 'An ESP32-based project in your IoT portfolio. Add its technical goal, hardware setup, and the result you achieved here.',
    problem: 'Add the project problem statement.',
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
    tech: ['Technology details to add'],
    image: civicVoice,
    github: 'https://github.com/khakho3',
    demo: null,
  },
]

const achievements = [
  { name: 'Tech/Expo 2026 Winner — Terra Sense AI', organization: 'Academic City', date: '2026', description: 'Winner at Academic City Tech/Expo 2026 with Terra Sense AI.', link: 'https://www.linkedin.com/posts/abdul-aziz-hassan-a2127536b_techexpo2026-innovation-techforgood-activity-7444361524833591296-w3s5?utm_source=share&utm_medium=member_android&rcm=ACoAAFuypnkBCQ_04hkKTV3LMm6gce5KDxpeet8' },
  { name: 'Add a certificate or award', organization: 'Organization name', date: 'Date earned', description: 'Replace this with the achievement, what it recognises, and a verification link if available.', link: null },
  { name: 'Add a learning badge', organization: 'Platform or organization', date: 'Date earned', description: 'Use this space for a course completion, technical badge, competition, or professional milestone.', link: null },
]

const journey = [
  { label: 'Education', text: 'Computer Engineering student at Ghana Communication Technology University (GCTU).' },
  { label: 'Development journey', text: 'Add the moment you started building software or a key milestone in your growth.' },
  { label: 'Projects & practice', text: 'Add a project, collaboration, competition, or tech expo that shaped your experience.' },
  { label: 'Tech/Expo 2026', text: 'Won Academic City Tech/Expo 2026 with Terra Sense AI.' },
  { label: 'Now', text: 'Building web, mobile, and IoT projects while growing in embedded systems and AI.' },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
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

        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="label">{profile.title}</p>
            <h1>Hassan Abdul<br /><em>Aziz.</em></h1>
          </div>
          <div className="hero-intro">
            <p>{profile.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my projects <Arrow /></a>
              <a className="button secondary" href={`mailto:${profile.email}`}>Contact me <Arrow /></a>
            </div>
            <div className="quick-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
          </div>
        </section>

        <section className="section two-column" id="about">
          <p className="label">About me</p>
          <div><h2>Curious by nature.<br />Intentional by design.</h2><p className="body-copy">{profile.about}</p><a className="text-link" href={`mailto:${profile.email}`}>Let’s connect <Arrow /></a></div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading"><p className="label">Skills & technologies</p><h2>A practical toolkit for building digital products.</h2></div>
          <div className="skill-grid">
            {skillGroups.map((group) => <article className="skill-group" key={group.title}><h3>{group.title}</h3><div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><p className="label">Featured projects</p><h2>Evidence of how I think, build, and learn.</h2></div>
          <div className="project-grid">
            {projects.map((project, index) => <article className="project-card" key={project.title}>
              <div className={`project-visual visual-${index + 1}`}>
                {project.image ? <>{<img src={project.image} alt={`${project.title} project preview`} />}{project.visualLabel && <span>{project.visualLabel}</span>}{project.visualLabel && <small>Project preview</small>}</> : <><span>{project.visualLabel ?? (index === 0 ? 'HA' : 'ESP')}</span><small>Project preview</small></>}
              </div>
              <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Problem</dt><dd>{project.problem}</dd></div></dl><div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">View on GitHub <Arrow /></a>}{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <Arrow /></a> : <span>Demo coming soon</span>}</div></div>
            </article>)}
          </div>
        </section>

        <section className="section achievements" id="achievements">
          <div className="section-heading"><p className="label">Achievements & badges</p><h2>Milestones worth documenting.</h2></div>
          <div className="achievement-grid">{achievements.map((item) => <article className="achievement-card" key={item.name}><div className="badge-placeholder" aria-hidden="true">✦</div><p className="achievement-date">{item.date}</p><h3>{item.name}</h3><p className="organization">{item.organization}</p><p>{item.description}</p>{item.link ? <a href={item.link} target="_blank" rel="noreferrer">Verify <Arrow /></a> : <span className="placeholder-link">Add verification link</span>}</article>)}</div>
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
