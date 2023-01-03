import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import middleware from './middleware';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, middleware())));
export default store;
