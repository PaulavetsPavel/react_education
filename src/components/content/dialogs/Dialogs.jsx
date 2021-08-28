// import state from '../../../redux/state';
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
          newMessageText={props.state.newMessageText}
          addMessage={props.addMessage}
          updateNewMessageText={props.updateNewMessageText}
        />
      </div>
    </div>
  );
};

export default Dialogs;
