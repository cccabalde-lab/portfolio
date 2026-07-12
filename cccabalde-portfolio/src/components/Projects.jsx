import PROJECTS from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <p className="section-label" style={{ marginBottom: 0, flex: 1 }}>projects</p>
        <a href="#" className="view-all">
          view all
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12,5 19,12 12,19" />
          </svg>
        </a>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <a href={p.href} key={p.title} className="project-card" target="_blank" rel="noopener noreferrer">
            <div className="project-card-header">
              <span className="project-title">{p.title}</span>
              <span className="project-arrow">↗</span>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t, i) => (
                <span key={t} className={`tag ${p.tagColors[i] || ''}`}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
