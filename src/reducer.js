import { combineReducers } from 'redux';
import home from './pages/home/reducer';
import about from './pages/about/reducer';

export default combineReducers({
  home,
  about
});
