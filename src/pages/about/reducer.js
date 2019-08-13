import { handleActions } from 'redux-actions';
import { addAction } from './action';

const initialState = {
  counter: 0,
};

export default handleActions({
  [addAction]: (state, { payload: { amount } }) => ({ ...state, counter: state.counter + amount }),
},
initialState);
