import classes from './_Button.module.scss';

const Button = (props) => {
  return props.buttonActive === false ? (
    <button className={classes.button} onClick={props.onClick}>
      {props.buttonText}
    </button>
  ) : (
    <button className={classes.button_active} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};

export default Button;
