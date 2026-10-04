function SkillsSection({ skillGroups, skillIcons, skillGroupIcons, skillSymbols }) {
  return (
    <section className="section" id="skills">
      <div className="section-heading"><p className="label">Skills & technologies</p><h2>A practical toolkit for building digital products.</h2></div>
      <div className="skill-grid">
        {skillGroups.map((group) => <article className="skill-group" key={group.title}><img className="skill-watermark" src={skillGroupIcons[group.title]} alt="" aria-hidden="true" /><h3>{group.title}</h3><div>{group.skills.map((skill) => <span key={skill}>{skillIcons[skill] ? <img src={skillIcons[skill]} alt="" aria-hidden="true" /> : <b className="skill-symbol" aria-hidden="true">{skillSymbols[skill]}</b>}{skill}</span>)}</div></article>)}
      </div>
    </section>
  )
}

export default SkillsSection
