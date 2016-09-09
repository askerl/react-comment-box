import React from 'react';
import ReactDOM from 'react-dom';
// store
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import commentsReducer from './reducers/reducer.js';

import CommentBox from './components/CommentBox.js';

import { connect } from 'react-redux';

// css
require('../style.css');

// *******************************************

// Generate the Comment Box
let title = "Comment Box (redux version)";
// initial comment list
const comments = [
  {id: 1, author: "John", body: "I'm working with React"},
  {id: 2, author: "Jeff", body: "This is a comment for testing the app"},
  {id: 3, author: "Karl", body: "I don't know what to say"},
  {id: 4, author: "Jerry", body: "I'm really angry right now"}
];

let initialState = {
  comments,
  showComments:true
};

// con lista inicial
let store = createStore(commentsReducer,initialState);
// sin lista inicial
//let store = createStore(commentsReducer);

// Log the initial state
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <CommentBox title={title}/>
  </Provider>,
  document.getElementById('app')
);
