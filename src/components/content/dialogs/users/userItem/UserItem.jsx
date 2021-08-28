import { NavLink } from 'react-router-dom';
import classes from './_UserItem.module.scss';

const UserItem = (props) => {
  return (
    <div className={classes.userItem}>
      <NavLink
        to={'/dialogs/' + props.id}
        className={classes.user_link}
        activeClassName={classes.active}
      >
        <div className={classes.avatar}>
          <img src={props.img} alt='ava' />
        </div>
        <div className={classes.name}>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default UserItem;
