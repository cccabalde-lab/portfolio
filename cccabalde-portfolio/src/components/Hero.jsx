import avatar from '../assets/ccpicture.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-avatar-wrap">
        <img src={avatar} alt="CC Cabalde" className="hero-avatar" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">available for work</div>
        <h1 className="hero-name">Christian Carl C. Cabalde</h1>
        <p className="hero-title">
          Full Stack Developer
        </p>
        <p className="hero-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Philippines
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in touch
          </a>
          <a href="#projects" className="btn-ghost">
            View projects
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
