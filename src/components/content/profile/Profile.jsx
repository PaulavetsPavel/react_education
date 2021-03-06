import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';
import classes from './_Profile.module.scss';

const Profile = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img
          src='https://www.ontarioparks.com/images/headers/parks/summer/1200/longpoint.jpg'
          alt='foto'
        />
      </div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
