import classes from './_Post.module.scss';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.avatar}>
        <img
          src='https://static.thenounproject.com/png/541486-200.png'
          alt='ava'
        />
      </div>
      <div className={classes.text}>{props.text}</div>
      <div className={classes.likes}>
        <span>{props.likesCount}</span>
        <img
          src='https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/like-512.png'
          alt='like'
        />
      </div>
    </div>
  );
};

export default Post;
