import PropTypes from 'prop-types';
import { Friends } from './FriendsItem';
import { FriendItems } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendItems>
      {friends.map(friend => (
        <div key={friend.id}>
          <Friends item={friend} />
        </div>
      ))}
    </FriendItems>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
