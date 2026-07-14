import EXPERIENCE from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="experience">
      <p className="section-label">experience</p>
      <div className="exp-list">
        {EXPERIENCE.map((e) => (
          <div className="exp-item" key={e.role}>
            <div className="exp-dot-line">
              <div className="exp-dot" />
              <div className="exp-line" />
            </div>
            <span className="exp-date">{e.date}</span>
            <div className="exp-body">
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">{e.company}</div>
              <p className="exp-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
