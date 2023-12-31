import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <div className={css.transactionsContainer}>
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHeader}>TYPE</th>
          <th className={css.tableHeader}>AMOUNT</th>
          <th className={css.tableHeader}>CURRENCY</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => {
          function capitalizeFLetter() {
            return type[0].toUpperCase() + type.slice(1);
          }
          return (
            <tr className={css.tableRow} key={id}>
              <td className={css.tableData}>{capitalizeFLetter()}</td>
              <td className={css.tableData}>{amount}</td>
              <td className={css.tableData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

TransactionHistory.protoTypes = {
  items: PropTypes.array.isRequired,
};
