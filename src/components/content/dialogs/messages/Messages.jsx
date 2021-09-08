import Message from './messageItem/MessageItem';
import classes from './_Messages.module.scss';
import Button from '../../../elements/buttons/Button';

const Messages = (props) => {
  let messageItem = props.messages.map((message) => {
    return <Message message={message.message} />;
  });

  let addNewMessage = () => {
    props.addMessage();
  };

  // получени данных из текстареа
  let onMessageChange = (e) => {
    let newTextMessage = e.target.value;
    props.updateNewMessageText(newTextMessage);
  };

  return (
    <div className={classes.messages}>
      <div className={classes.messageItems}>{messageItem}</div>
      <div className={classes.new}>
        <textarea onChange={onMessageChange} value={props.newMessageText} />
        <Button buttonText='Send' onClick={addNewMessage} />
      </div>
    </div>
  );
};

export default Messages;
