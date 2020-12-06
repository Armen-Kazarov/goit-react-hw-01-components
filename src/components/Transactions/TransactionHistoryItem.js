import s from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.transactionHistoryItemRow}>
      <td className={s.transactionHistoryItem}>{type}</td>
      <td className={s.transactionHistoryItem}>{amount}</td>
      <td className={s.transactionHistoryItem}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
