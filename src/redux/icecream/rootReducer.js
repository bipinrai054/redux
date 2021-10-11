import { combineReducers } from 'redux';
import cakeReducer from '../cakes/cakeReducer';
import icecreamReducer from './icecreamReducer';
import teaReducer from '../tea/teaReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  tea: teaReducer,
});

export default rootReducer;
