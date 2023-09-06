import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classNames = [css.status];

  if (isOnline) {
    classNames.push(css.online);
  }

  return (
    <li className={css.item}>
      <span className={classNames.join(' ')} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };
