import s from './FriendsList.module.css';

const classStyleOnline = s.colorIsOnline + ' ' + s.status;
const classStyleOffline = s.colorIsOffline + ' ' + s.status;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={classStyleOnline}> </span>
      ) : (
        <span className={classStyleOffline}> </span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
