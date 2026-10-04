import Arrow from './Arrow'

function AboutSection({ profile }) {
  return (
    <section className="section two-column" id="about">
      <p className="label">About me</p>
      <div>
        <h2>Curious by nature.<br />Intentional by design.</h2>
        <p className="body-copy">{profile.about}</p>
        <a className="text-link" href={`mailto:${profile.email}`}>Let’s connect <Arrow /></a>
      </div>
    </section>
  )
}

export default AboutSection
