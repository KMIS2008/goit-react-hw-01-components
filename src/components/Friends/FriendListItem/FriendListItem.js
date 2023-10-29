import PropTypes from 'prop-types';

import {FriendItem,
        FriendStatus,
        FriendName} from './FriendListItem.styled';

export const FriendListItem =  ({ friend: { isOnline, avatar, name, id } }) =>{
        return  (
        <FriendItem >
          <FriendStatus  isOnline={isOnline}></FriendStatus>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem> 
) }


FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  )
};
