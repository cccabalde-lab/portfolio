import STATS from '../data/stats';

function Stats() {
  return (
    <section className="stats">
      <p className="section-label">by the numbers</p>
      <div className="stats-grid">
        {STATS.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
