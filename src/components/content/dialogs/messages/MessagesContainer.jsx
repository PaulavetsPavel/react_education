import Messages from './Messages';
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from '../../../../redux/dialogs-reducer';

const MessagesContainer = (props) => {
  let state = props.store.getState();

  let addNewMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  // получени данных из текстареа
  let onMessageChange = (newTextMessage) => {
    props.store.dispatch(updateNewMessageTextCreator(newTextMessage));
  };

  return (
    <Messages
      messages={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
      updateNewMessageText={onMessageChange}
      addMessage={addNewMessage}
    />
  );
};

export default MessagesContainer;
