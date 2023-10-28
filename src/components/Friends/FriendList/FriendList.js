import { FriendListItem } from "../FriendListItem/FriendListItem"
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => {
                return (
                    <li key = {friend.id}>
                        <FriendListItem friend={friend}/> 
                    </li>
                )
            }
            )
            }
           
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    )
  };
    