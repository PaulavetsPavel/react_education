import React from 'react';
import ReactDOM from 'react-dom';
// import './css/style.min.css';
import App from './App';

export let renderEntireTree = (
  state,
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText
) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
    />,
    document.getElementById('root')
  );
};
