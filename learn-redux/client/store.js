import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// creat object for defoult data
const defoultState = {
    posts,
    comments,
};

const store = createStore(rootReducer, defoultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
