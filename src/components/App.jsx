import { GlobalStyle } from './GlobalStyle';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json'
import transactions from './Transactions/transactions.json';
import { Layout } from './Layout';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory'



export const App = () => {
  return (
    <Layout>
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};

