import { BUY_TEA } from './teaTypes';

const initialState = {
  numOfTeas: 30,
};

const teaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_TEA:
      return {
        ...state,
        numOfTeas: state.numOfTeas - 1,
      };
    default:
      return state;
  }
};
export default teaReducer;
