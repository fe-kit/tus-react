import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
const loggerMiddleware = createLogger({ collapsed: true });

const middleware = composeWithDevTools(
  applyMiddleware(thunk, loggerMiddleware)
);

export default createStore(reducer, middleware);
