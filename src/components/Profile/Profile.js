import PropTypes from 'prop-types';
import {ProfileWrapper, 
        ProfileInfo,
        ProfileAvatar,
        ProfileName, 
        ProfileEmail,
        ProfileLocation,
        ProfileStats,
        ProfileStat,
        ProfileTitleStat,
        ProfileQuantity} from './Profile.slyled';


export const Profile = ({username, tag, location, avatar, stats})=>{
return (

<ProfileWrapper>
  <ProfileInfo>
    < ProfileAvatar
      src={avatar}
      alt={username}
      className="avatar"
    />
    <ProfileName>{username}</ProfileName>
    <ProfileEmail>@{tag}</ProfileEmail>
    <ProfileLocation>{location}</ProfileLocation>
  </ProfileInfo>

  <ProfileStats>
    <ProfileStat>
      <ProfileTitleStat>Followers</ProfileTitleStat>
      <ProfileQuantity>{stats.followers}</ProfileQuantity>
    </ProfileStat>
    <ProfileStat>
      <ProfileTitleStat>Views</ProfileTitleStat>
      <ProfileQuantity>{stats.views}</ProfileQuantity>
    </ProfileStat>
    <ProfileStat>
      <ProfileTitleStat>Likes</ProfileTitleStat>
      <ProfileQuantity>{stats.likes}</ProfileQuantity>
    </ProfileStat>
  </ProfileStats>
</ProfileWrapper>
)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}

