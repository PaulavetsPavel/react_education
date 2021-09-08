import Post from './post/Post';
import Button from '../../../elements/buttons/Button';
import classes from './_MyPosts.module.scss';
import React from 'react';

const MyPosts = (props) => {
  //создание нового поста и передача его в стейт
  let addNewPost = () => {
    props.addPost();
  };

  // обновление текста поста который будет добавлен в стейт
  let onPostChahge = (e) => {
    // обращение к текстареа
    let textPost = e.target.value;
    props.updateNewPostText(textPost);
  };

  //преобразование массива данных в элементы разметки
  let postItem = props.posts.map((post) => {
    return <Post text={post.text} likesCount={post.likesCount} />;
  });

  return (
    <div className={classes.posts}>
      <div className={classes.heading}>My posts</div>
      <div className={classes.body}>
        <div className={classes.new}>
          <textarea onChange={onPostChahge} value={props.newPostText} />
          <Button buttonText='Send' onClick={addNewPost} />
        </div>
        <div className={classes.content}>{postItem}</div>
      </div>
    </div>
  );
};

export default MyPosts;
