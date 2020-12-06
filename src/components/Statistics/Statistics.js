import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.length &&
          stats.map(elem => (
            <StatisticsItem
              key={elem.id}
              label={elem.label}
              percentage={elem.percentage}
            />
          ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
