import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function createColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const Statistics = ({ children }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>UPLOAD STATS</h2>
      <ul className={css.statList}>{children}</ul>
    </section>
  );
};

export const Item = ({ stats }) =>
  stats.map(({ id, label, percentage }) => {
    return (
      <li
        className={css.item}
        key={id}
        style={{ backgroundColor: createColor() }}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
      </li>
    );
  });

Item.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
