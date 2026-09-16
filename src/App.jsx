import './App.css'

// Replace these fields with your personal details to update the whole portfolio.
const profile = {
  name: 'Hassan Abdul Aziz', role: 'Creative developer & problem solver', location: 'Based wherever ideas take me', email: 'hello@aziz.com',
  bio: 'I turn thoughtful ideas into useful, memorable digital experiences. I care about clear design, clean code, and work that makes a genuine difference.',
  about: 'My work sits at the intersection of curiosity and craft. I enjoy learning quickly, solving real problems, and turning an early concept into something people can use with confidence.',
  skills: ['React', 'JavaScript', 'HTML & CSS', 'Responsive design', 'UI/UX', 'Problem solving'],
  projects: [
    { title: 'Featured project', description: 'A short description of a project you are proud of—what you made, who it helped, and the result.', tags: ['React', 'Design'], link: '#contact' },
    { title: 'Next big idea', description: 'Use this space to show another product, website, case study, or meaningful collaboration.', tags: ['Web', 'Creative'], link: '#contact' },
  ],
  socials: [{ label: 'GitHub', href: 'https://github.com/' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/' }],
}

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation"><a className="brand" href="#home">{profile.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</a><div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div></nav>
      <section className="hero" id="home"><div className="hero-name"><p className="eyebrow">{profile.location}</p><h1>Hassan<br /><span>Abdul Aziz</span></h1><p className="hero-role">{profile.role}</p></div><div className="hero-intro"><p className="section-label">A little about me</p><p className="hero-copy">{profile.bio}</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore my work</a><a className="button button-secondary" href={`mailto:${profile.email}`}>Get in touch ↗</a></div></div></section>
      <section className="about section" id="about"><p className="section-label">01 / About me</p><div><h2>A little more about my journey.</h2><p>{profile.about}</p><div className="skills">{profile.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>
      <section className="section work" id="work"><div className="section-heading"><p className="section-label">02 / Selected work</p><h2>Things I’ve brought to life.</h2></div><div className="project-grid">{profile.projects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-art project-art-${index + 1}`}><span>0{index + 1}</span></div><div className="project-content"><div className="project-title"><h3>{project.title}</h3><a href={project.link} aria-label={`View ${project.title}`}>↗</a></div><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
      <section className="contact" id="contact"><p className="section-label">03 / Contact</p><h2>Let’s make something<br />meaningful together.</h2><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} ↗</a><div className="social-links">{profile.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div></section>
      <footer>© {new Date().getFullYear()} {profile.name}. Built with intention.</footer>
    </main>
  )
}

export default App
