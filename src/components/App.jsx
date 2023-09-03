import user from '../data/user';
import data from '../data/data';
//import friends from '../data/friends';
//import transactions from '../data/transactions';

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { Item } from './Statistics';
//import { FriendList } from './FriendList';
//import { TransactionHistory } from './TransactionHistory';

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

      <Statistics title="Upload stats">
        <Item stats={data} />
      </Statistics>
    </div>
  );
};
