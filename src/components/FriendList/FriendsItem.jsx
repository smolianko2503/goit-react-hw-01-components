import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendList.styled';

export const Friends = ({ item: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <Status isActive={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

Friends.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
