import state, { addPost } from './redux/state';
import { rerenderApp } from './render';

rerenderApp(state, addPost);
