import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
const loggerMiddleware = createLogger({ collapsed: true });

const middleware = composeWithDevTools(
  applyMiddleware(thunk, loggerMiddleware)
);

const initState = {
  home: { counter: 10 },
  about: { counter: 10 }
};

export default createStore(reducer, initState, middleware);
