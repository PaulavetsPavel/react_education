const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;
      return state;
    }

    case ADD_POST: {
      let newPost = {
        id: 4,
        text: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    }
    default:
      return state;
  }
};

// функции для создания action которые передаются в dispatch
export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (textPost) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: textPost,
});

export default profileReducer;
