import profilePhoto from '../assets/profile-hassan.jpeg'

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function Hero({ profile }) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1>Hassan<br /><em>Abdul Aziz.</em></h1>
        <div className="hero-stamp" aria-label="Available for collaboration">
          <span>Open to build</span><b>✦</b><span>Open to build</span><b>✦</b>
        </div>
        <div className="hero-actions hero-name-actions">
          <a className="button primary" href="#projects">See selected work <Arrow /></a>
          <a className="button secondary" href={`mailto:${profile.email}`}>Start a conversation <Arrow /></a>
        </div>
        <div className="quick-links hero-name-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        </div>
      </div>
      <div className="hero-intro">
        <div className="hero-photo-wrap">
          <img src={profilePhoto} alt="Hassan Abdul Aziz" />
          <span className="photo-orbit">01 / ENGINEER</span>
        </div>
        <div className="hero-content">
          <p>{profile.intro}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
