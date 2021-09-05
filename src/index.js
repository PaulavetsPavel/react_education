import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import './css/style.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//--------------------------------------------------------

//создание функции для перерисовки страницы
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
};

//------------------------------------------------

//вызов функции для перерисовки страницы
rerenderEntireTree(store.getState());

//--------------------------------------------------------

// передача функции для перерисовки страницы в стэйт
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

//------------------------------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
