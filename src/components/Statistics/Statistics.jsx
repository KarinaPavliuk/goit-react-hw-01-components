import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function createColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <div>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: createColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>{' '}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
