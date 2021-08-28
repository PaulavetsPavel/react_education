import { renderEntireTree } from '../render';

const state = {
  profilePage: {
    posts: [
      { id: 1, text: 'Hi, this my first post!', likesCount: 10 },
      { id: 2, text: 'How do you do?', likesCount: 1 },
      { id: 3, text: 'How do?', likesCount: 10 },
    ],
    newPostText: '',
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'Hello!' },
      { id: 3, message: 'How are you?' },
      { id: 4, message: 'Yo ho ho!' },
    ],
    users: [
      {
        id: 1,
        name: 'Pavel',
        img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
      },
      {
        id: 2,
        name: 'Julia',
        img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
      },
      {
        id: 3,
        name: 'Darya',
        img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
      },
      {
        id: 4,
        name: 'Marya',
        img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
      },
      {
        id: 5,
        name: 'Ann',
        img: 'https://dempseydismantlers.com/wp-content/uploads/2020/02/avatar-icon.png',
      },
    ],
    newMessageText: '',
  },
};

//добавление поста в стейт и перерисовка страницы
export let addPost = () => {
  let newPost = {
    id: 4,
    text: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  updateNewPostText('');
};

//получение данных из текстареа и формирование текста нового поста
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(
    state,
    addPost,
    updateNewPostText,
    addMessage,
    updateNewMessageText
  );
};
//========================================================================

//добавление постасообщения в стейт и перерисовка страницы
export let addMessage = () => {
  let newMessage = {
    id: 3,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  console.log(state.dialogsPage.messages);
  updateNewMessageText('');
};

//получение данных из текстареа и формирование текста нового сообщения
export let updateNewMessageText = (newTextMessage) => {
  state.dialogsPage.newMessageText = newTextMessage;
  renderEntireTree(
    state,
    addPost,
    updateNewPostText,
    addMessage,
    updateNewMessageText
  );
};

export default state;
