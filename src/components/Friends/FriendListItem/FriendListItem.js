// import PropTypes from 'prop-types';

export const FriendListItem =  ({ friend: { isOnline, avatar, name, id } }) =>{
        return  (
        <div>
          <span className="status"></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </div> 
) }

// FriendListItem.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//   };

