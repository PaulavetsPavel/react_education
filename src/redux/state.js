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
//=======================================================================

// получение функции для перерисовки страницы
export const subskribe = (observer) => {
  rerenderEntireTree = observer;
};

let rerenderEntireTree = () => {
  console.log('State changed');
};
//===========================================================

//добавление поста в стейт и перерисовка страницы
export const addPost = () => {
  let newPost = {
    id: 4,
    text: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  updateNewPostText('');
};

//получение данных из текстареа и формирование текста нового поста
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};

//========================================================================

//добавление постасообщения в стейт и перерисовка страницы
export const addMessage = () => {
  let newMessage = {
    id: 3,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  console.log(state.dialogsPage.messages);
  updateNewMessageText('');
};

//получение данных из текстареа и формирование текста нового сообщения
export const updateNewMessageText = (newTextMessage) => {
  state.dialogsPage.newMessageText = newTextMessage;
  rerenderEntireTree();
};

export default state;
