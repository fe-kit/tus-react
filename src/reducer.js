import { combineReducers } from 'redux';
import home from './pages/home/reducer';
import about from './pages/about/reducer';

const appReducers = combineReducers({
  home,
  about
});
const rootReducers = (state, action) => {
  if (action.type === 'root/reset') {
    state = { ...state, home: { counter: 0 } };
  }
  return appReducers(state, action);
};

export default rootReducers;
