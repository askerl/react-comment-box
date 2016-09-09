import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { deleteComment } from '../constants/actions';

class Comment extends React.Component {

  render(){
    let {author,body} = this.props.comment;
    this._id = this.props.comment.id;
    return(
      <div className="comment">
        <p className="comment-header">{author}</p>
        <p className="comment-body">{body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={this._handleDelete.bind(this)}>
            Delete comment
          </a>
        </div>
      </div>
    )
  }

  _handleDelete(event){
    event.preventDefault();
    this.props.dispatch(deleteComment(this._id));
  }

}

Comment = connect()(Comment);

export default Comment;
