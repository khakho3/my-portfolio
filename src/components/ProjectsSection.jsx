import Arrow from './Arrow'

function ProjectsSection({ projects }) {
  return (
    <section className="section" id="projects">
      <div className="section-heading"><p className="label">Selected work</p><h2>Evidence of how I think, build, and learn.</h2></div>
      <div className="project-grid">
        {projects.map((project, index) => <article className="project-card" key={project.title}>
          <div className={`project-visual visual-${index + 1}`}>
            {project.image ? <img src={project.image} alt={`${project.title} project preview`} /> : <span className="project-icon" aria-hidden="true">{project.visualLabel ?? '💼'}</span>}
          </div>
          <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Problem</dt><dd>{project.problem}</dd></div></dl><div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={`/projects/${project.slug}`}>Read project story <Arrow /></a>{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <Arrow /></a> : <span>Details before GitHub</span>}</div></div>
        </article>)}
      </div>
    </section>
  )
}

export default ProjectsSection
