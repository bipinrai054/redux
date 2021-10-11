import { combineReducers } from 'redux';
import cakeReducer from '../cakes/cakeReducer';
import icecreamReducer from './icecreamReducer';
import teaReducer from '../tea/teaReducer';
import userReducer from '../users/userReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  tea: teaReducer,
  user: userReducer,
});

export default rootReducer;
