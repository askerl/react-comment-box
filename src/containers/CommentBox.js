import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from '../components/CommentList.js';
import CommentForm from '../components/CommentForm.js';

import { connect } from 'react-redux';
import { toggleComments, deleteComment } from '../constants/actions';


const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    showComments: state.showComments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteComment: (id) => dispatch(deleteComment(id)),
    onToggleComment: () => dispatch(toggleComments())
  };
};

const CommentBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);

export default CommentBox;
