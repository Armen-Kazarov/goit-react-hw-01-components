import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendsList/FriendsList';
import TransactionHistory from 'components/Transactions/TransactionHistory';
import user from './jsonData/user';
import statisticalData from './jsonData/statistical-data';
import friends from './jsonData/friends.json';
import transactions from './jsonData/transactions';
import './App.css';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
