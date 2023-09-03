import PropTypes from 'prop-types';

export const Statistics = ({ children }) => {
  return (
    <section className="statistics">
      <h2 class="title">Upload stats</h2>
      <ul className="stat-list">{children}</ul>
    </section>
  );
};

export const Item = ({ stats }) =>
  stats.map(({ id, label, percentage }) => (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  ));

Item.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
