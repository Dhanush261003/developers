import { stats } from '../../data/company';
import { useInView } from '../../hooks/useInView';
import { useCounter } from '../../hooks/useCounter';
import './About.css';

function StatItem({ stat }) {
  const { ref, isInView } = useInView();
  const value = useCounter(stat.value, isInView);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-value">{value}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <StatItem stat={s} key={s.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
