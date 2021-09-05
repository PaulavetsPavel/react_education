import classes from './_Button.module.scss';

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};

export default Button;
