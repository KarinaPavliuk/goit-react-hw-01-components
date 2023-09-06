import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
