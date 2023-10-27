import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './Friends/FriendList/friends.json';
import {FriendList} from './Friends/FriendList/FriendList';
import { FriendListItem } from './Friends/FriendListItem/FriendListItem';
import transactions from './TransactionHistory/transactions.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile  
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} >
           <FriendListItem   
              key={friends.id}
              avatar={friends.avatar}
              name={friends.name}
              isOnline={friends.isOnline} />
      </FriendList>
      
      <TransactionHistory items={transactions} />;

    </div>
  );
};




