import reportWebVitals from './reportWebVitals';
import state, {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
} from './redux/state';
import { renderEntireTree } from './render';
import './css/style.min.css';

renderEntireTree(
  state,
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
