import classes from './_logo.module.scss';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img
        className={classes.logo_image}
        src='https://openconnectivity.org/wp-content/uploads/2018/01/SIoT-logo-PNG.png'
        alt='logo'
      />
    </div>
  );
};

export default Logo;
