import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ children }) => (
  <ul className={css.friendList}>{children}</ul>
);

export const Friend = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    const classNames = [css.status];

    if (isOnline) {
      classNames.push(css.online);
    }

    return (
      <li className={css.item} key={id}>
        <span className={classNames.join(' ')} />
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
