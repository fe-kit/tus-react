import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

const { devToolsExtension } = window;
const loggerMiddleware = createLogger({ collapsed: true });

let middleware;

if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(thunk, loggerMiddleware);
} else if (devToolsExtension) {
  middleware = compose(
    applyMiddleware(thunk, loggerMiddleware),
    devToolsExtension(),
  );
}


export default createStore(reducer, {}, middleware);
