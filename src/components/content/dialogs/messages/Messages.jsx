import Message from './messageItem/MessageItem';
import classes from './_Messages.module.scss';
import React from 'react';

const Messages = (props) => {
  let messageItem = props.messages.map((message) => {
    return <Message message={message.message} />;
  });

  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let newTextMessage = newMessageElement.current.value;
    props.updateNewMessageText(newTextMessage);
  };

  return (
    <div className={classes.messages}>
      <div className={classes.messageItems}>{messageItem}</div>
      <div className={classes.new}>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText}
        />
        <button onClick={props.addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
