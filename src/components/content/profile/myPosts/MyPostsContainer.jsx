import React from 'react';
import {
  updateNewPostTextCreator,
  addPostCreator,
} from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  //создание нового поста и передача его в стейт
  let addNewPost = () => {
    props.store.dispatch(addPostCreator());
  };

  // обновление текста поста который будет добавлен в стейт
  let onPostChahge = (textPost) => {
    props.store.dispatch(updateNewPostTextCreator(textPost));
  };

  //преобразование массива данных в элементы разметки

  return (
    <MyPosts
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      addPost={addNewPost}
      updateNewPostText={onPostChahge}
    />
  );
};

export default MyPostsContainer;
