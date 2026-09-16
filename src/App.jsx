import './App.css'

const profile = {
  name: 'Hassan Abdul Aziz',
  title: 'Computer Engineer · Full-Stack, Flutter & Embedded Systems Developer',
  location: 'Available for opportunities',
  email: 'hello@aziz.com',
  introduction:
    'I design and build thoughtful digital products across web, mobile, and connected-device projects—combining practical engineering with a strong user experience.',
  about:
    'I am a developer with interests in full-stack web development, Flutter mobile applications, UI/UX, and IoT. I enjoy taking ideas from an early concept through to a useful, well-structured product, while continuing to grow in embedded systems and AI.',
  strengths: [
    'Flutter & Dart development',
    'Full-stack web development',
    'UI/UX design',
    'IoT & embedded systems projects',
  ],
  skills: ['Flutter', 'Dart', 'Python', 'C/C++', 'Arduino', 'MATLAB', 'SQLite', 'Git & GitHub', 'UI/UX', 'IoT'],
  projects: [
    {
      name: 'Personal Portfolio',
      type: 'Frontend development · 2026',
      description:
        'A focused personal website that turns a technical profile into a clear, responsive, and memorable digital experience.',
      tags: ['React', 'CSS', 'Responsive'],
      href: '#contact',
    },
    {
      name: 'IoT Projects',
      type: 'Embedded systems · In progress',
      description:
        'A growing collection of connected-device experiments that bring together hardware, software, sensors, and useful data.',
      tags: ['Arduino', 'C/C++', 'IoT'],
      href: '#contact',
    },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#home" aria-label={`${profile.name} home`}>{initials}</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div>
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="title">{profile.title}</p>
        </div>
        <div className="hero-summary">
          <p>{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-solid" href="#work">View selected work <Arrow /></a>
            <a className="button button-outline" href={`mailto:${profile.email}`}>Contact me <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow">01 — About</p>
        <div className="section-content">
          <h2>Engineering ideas into experiences people can use.</h2>
          <p className="body-copy">{profile.about}</p>
          <div className="strengths">
            {profile.strengths.map((strength) => <span key={strength}>{strength}</span>)}
          </div>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="work-heading">
          <p className="eyebrow">02 — Selected work</p>
          <h2>Built at the meeting point of code, people, and possibility.</h2>
        </div>
        <div className="project-list">
          {profile.projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-details">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a className="project-link" href={project.href} aria-label={`Learn more about ${project.name}`}><Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <div>
          <p className="eyebrow">Tools & skills</p>
          <p>Technologies I use to take an idea from concept to working product.</p>
        </div>
        <div className="skill-list">{profile.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">03 — Contact</p>
        <h2>Have an idea worth building?</h2>
        <a className="email" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
        <div className="socials">
          {profile.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <Arrow /></a>)}
        </div>
      </section>

      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  )
}

export default App
