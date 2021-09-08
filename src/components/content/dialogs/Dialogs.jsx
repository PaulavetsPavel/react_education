import MessagesContainer from './messages/MessagesContainer';
import UsersContainer from './users/UsersContainer';
import classes from './_Dialogs.module.scss';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.container}>
        <UsersContainer store={props.store} />
        <MessagesContainer store={props.store} />
      </div>
    </div>
  );
};

export default Dialogs;
