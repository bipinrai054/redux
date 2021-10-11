import { createStore } from 'redux';
import rootReducer from './icecream/rootReducer';

const store = createStore(rootReducer);

export default store;
