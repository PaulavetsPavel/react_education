import UserItem from './userItem/UserItem';
import classes from './_Users.module.scss';

const Users = (props) => {
  let userItem = props.usersData.map((user) => {
    return <UserItem name={user.name} id={user.id} img={user.img} />;
  });
  return <div className={classes.users}>{userItem}</div>;
};

export default Users;
