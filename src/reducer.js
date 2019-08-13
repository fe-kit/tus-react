import { combineReducers } from 'redux';
import home from './pages/home/reducer';
import about from './pages/about/reducer';

const appReducers = combineReducers({
  home,
  about,
});
const rootReducers = (state, action) => {
  let newState = state;
  if (action.type === 'root/reset') {
    newState = { ...state, home: { counter: 0 } };
  }
  return appReducers(newState, action);
};

export default rootReducers;
