import classes from './_MessageItem.module.scss';

const Message = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.message}>{props.message}</div>
    </div>
  );
};

export default Message;
