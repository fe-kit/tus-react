import { combineReducers } from 'redux'
import home from './pages/home/reducer'
import detail from './pages/detail/reducer'

export default combineReducers({
    home,
    detail
})