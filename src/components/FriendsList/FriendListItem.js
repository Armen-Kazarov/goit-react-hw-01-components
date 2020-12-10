import classNames from 'classnames';
import s from './FriendsList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classStatus = classNames(s.status, isOnline ? s.online : s.offline);
  return (
    <li className={s.item}>
      <span className={classStatus}> </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
