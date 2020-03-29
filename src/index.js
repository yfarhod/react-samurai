import state, {
  addPost,
  updatePostText,
  addNewMessage,
  updateMessageText
} from './redux/state';
import { rerenderApp } from './render';

rerenderApp(state, addPost, updatePostText, addNewMessage, updateMessageText);
