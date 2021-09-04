import Post from './post/Post';
import Button from '../../../elements/buttons/Button';
import classes from './_MyPosts.module.scss';
import React from 'react';

const MyPosts = (props) => {
  //создание ссылки на текстовое поле
  let newPostElement = React.createRef();

  //создание нового поста и передача его в стейт
  // let addNewPost = () => {
  //   props.addPost();
  // };

  //преобразование массива данных в элементы разметки
  let postItem = props.state.map((post) => {
    return <Post text={post.text} likesCount={post.likesCount} />;
  });

  // обновление текста поста который будет добавлен в стейт
  let onPostChahge = () => {
    let textPost = newPostElement.current.value;
    props.updateNewPostText(textPost);
  };

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
          <Button buttonText='Send' onClick={props.addPost} />
        </div>
        <div className={classes.content}>{postItem}</div>
      </div>
    </div>
  );
};

export default MyPosts;
