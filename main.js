import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

import CommentBox from './CommentBox.js';

//require('bootstrap-webpack');
require('./style.css');

// Generate the Comment Box
let title = "Comment Box";
// const commentList = [
//   {id: 1, author: "John", body: "I'm working with React", angerLevel: 21},
//   {id: 2, author: "Jeff", body: "This is a comment for testing the app", angerLevel: 44},
//   {id: 3, author: "Karl", body: "I'm retired from basketball", angerLevel: 65},
//   {id: 4, author: "Jerry", body: "I used to coach the Jazz", angerLevel: 79}
// ];
// console.log(JSON.stringify(commentList));

var $ = require('jquery');

$.getJSON('./comments.json', (json) => { success(json) });

function success(commentList) {

  // con lista inicial
  //ReactDOM.render(<CommentBox title={title} initList={commentList}/>,document.getElementById('app'));
  // sin lista inicial
  ReactDOM.render(<CommentBox title={title} />,document.getElementById('app'));

  // render the component
  //ReactDOM.render(<App />, document.getElementById('app'));
}
