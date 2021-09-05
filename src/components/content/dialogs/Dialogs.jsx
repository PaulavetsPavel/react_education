import Messages from './messages/Messages';
import Users from './users/Users';
import classes from './_Dialogs.module.scss';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.container}>
        <Users usersData={props.state.users} />
        <Messages
          messages={props.state.messages}
          dispatch={props.dispatch}
          newMessageText={props.state.newMessageText}
          buttonActive={props.buttonActive}
        />
      </div>
    </div>
  );
};

export default Dialogs;
