import { FriendListItem } from "../FriendListItem/FriendListItem"
import PropTypes from 'prop-types';
import {FriendContainer,
        FriendListContainer} from './FriendList.styled'

export const FriendList = ({friends}) => {
    return (
        <FriendContainer>
            {friends.map(friend => {
                return (
                    <FriendListContainer  key = {friend.id}>
                        <FriendListItem isOnline={friend.isOnline} friend={friend}/> 
                    </FriendListContainer>
                )})
            }
           
        </FriendContainer>
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
    