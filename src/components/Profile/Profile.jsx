import PropTypes from 'prop-types';
import {
  UserProfile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsiItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => (
  <UserProfile>
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <StatsiItem>
        <Label>Followers </Label>
        <Quantity>{followers}</Quantity>
      </StatsiItem>
      <StatsiItem>
        <Label>Views </Label>
        <Quantity>{views}</Quantity>
      </StatsiItem>
      <StatsiItem>
        <Label>Likes </Label>
        <Quantity>{likes}</Quantity>
      </StatsiItem>
    </Stats>
  </UserProfile>
);

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
