import classes from './_ProfileInfo.module.scss';

const ProfileInfo = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.user_avatar}>
        <img
          src='https://img2.freepng.ru/20180707/puq/kisspng-computer-icons-avatar-clip-art-5b40601d5c8c75.9330992415309455653791.jpg'
          alt='avatar'
        />
      </div>
      <div className={classes.user_info}>
        <p className={classes.user_name}>Pavel Paulavets</p>
        <p className={classes.user_birth}>Date of Birth: 14.06.1984</p>
        <p className={classes.user_city}>City: Zhodino</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
