import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.transactionHistoryHeader}>
          <th className={s.transactionHistoryTitle}>Type</th>
          <th className={s.transactionHistoryTitle}>Amount</th>
          <th className={s.transactionHistoryTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.length &&
          items.map(item => (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
