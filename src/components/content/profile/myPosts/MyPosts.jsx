import Post from './post/Post';
import classes from './_MyPosts.module.scss';
import React from 'react';
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../../../redux/state';

const MyPosts = (props) => {
  //создание ссылки на текстовое поле
  let newPostElement = React.createRef();

  //создание нового поста и передача его в стейт
  let addNewPost = () => {
    props.dispatch(addPostActionCreator());
  };

  // обновление текста поста который будет добавлен в стейт
  let onPostChahge = () => {
    let textPost = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(textPost));
  };

  //преобразование массива данных в элементы разметки
  let postItem = props.state.map((post) => {
    return <Post text={post.text} likesCount={post.likesCount} />;
  });

  return (
    <div className={classes.posts}>
      <div className={classes.heading}>My posts</div>
      <div className={classes.body}>
        <div className={classes.new}>
          <textarea
            onChange={onPostChahge}
            ref={newPostElement}
            value={props.newPostText}
          />
          <button onClick={addNewPost}>Send</button>
        </div>
        <div className={classes.content}>{postItem}</div>
      </div>
    </div>
  );
};

export default MyPosts;
