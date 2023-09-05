import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Item } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Friend } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Transaction } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics>
        <Item stats={data} />
      </Statistics>
      <FriendList>
        <Friend friends={friends} />
      </FriendList>
      <TransactionHistory>
        <Transaction transactions={transactions} />
      </TransactionHistory>
    </div>
  );
};
