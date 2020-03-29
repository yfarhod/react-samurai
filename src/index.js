import state, { addPost, updatePostText } from './redux/state';
import { rerenderApp } from './render';

rerenderApp(state, addPost, updatePostText);
