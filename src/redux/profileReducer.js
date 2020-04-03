const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      {
        const newPost = {
          id: state.posts.length + 1,
          post: state.newPostText,
          likesCount: 0
        };

        state.posts.push(newPost);
        state.newPostText = '';
      }
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = text => ({
  type: UPDATE_POST_TEXT,
  newText: text
});

export default profileReducer;
