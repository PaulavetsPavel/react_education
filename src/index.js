import reportWebVitals from './reportWebVitals';
import state, {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
  subskribe,
} from './redux/state';
import './css/style.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//--------------------------------------------------------

//создание функции для перерисовки страницы
let rerenderEntireTree = () => {
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
//------------------------------------------------

//вызов функции для перерисовки страницы
rerenderEntireTree();
//не передаются как параметры,
//потому что экспортируются в этом файле
// state,
// addPost,
// updateNewPostText,
// addMessage,
// updateNewMessageText
//--------------------------------------------------------

// передача функции для перерисовки страницы в стэйт
subskribe(rerenderEntireTree);
//------------------------------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
