import classes from './_logo.module.scss';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img
        className={classes.logo_image}
        src='https://cdn.pixabay.com/photo/2020/08/05/22/16/owl-5466568_1280.png'
        alt='logo'
      />
    </div>
  );
};

export default Logo;
