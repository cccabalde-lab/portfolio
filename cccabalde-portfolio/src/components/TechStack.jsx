import TECH from '../data/tech';

function TechStack() {
  return (
    <section id="tech" className="tech">
      <p className="section-label">tech stack</p>
      <div className="tech-grid">
        {TECH.map((t) => (
          <div className="tech-item" key={t.name}>
            <span className="tech-icon">{t.icon}</span>
            <span className="tech-name">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
