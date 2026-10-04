import Arrow from './Arrow'

function ProjectDetail({ project }) {
  if (!project) return <main className="project-detail missing"><p className="label">Project not found</p><h1>That case study is not available.</h1><a className="button secondary" href="/#projects">Back to projects</a></main>
  return <main className="project-detail">
    <header className="detail-header"><a className="brand" href="/" aria-label="Back to home">HA</a><a className="back-link" href="/#projects">← All projects</a></header>
    <section className="detail-hero"><div><p className="label">{project.category}</p><h1>{project.title}</h1><p className="detail-lead">{project.overview}</p></div><div className="detail-visual">{project.image ? <img src={project.image} alt={`${project.title} preview`} /> : <span aria-hidden="true">{project.visualLabel}</span>}</div></section>
    <section className="detail-section detail-summary"><div><p className="label">The brief</p><h2>Solving a useful problem with a clear point of view.</h2></div><dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Challenge</dt><dd>{project.problem}</dd></div></dl></section>
    <section className="detail-section"><p className="label">How I approached it</p><div className="approach-list">{project.approach.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></section>
    <section className="detail-section detail-outcome"><p className="label">Project direction</p><div><h2>{project.outcome}</h2><div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><a className="button primary" href={project.github} target="_blank" rel="noreferrer">View source on GitHub <Arrow /></a></div></section>
  </main>
}
export default ProjectDetail
