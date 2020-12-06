import s from './Statistics.module.css';

const createBg = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={s.item} style={{ backgroundColor: createBg() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
