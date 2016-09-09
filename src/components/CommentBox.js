import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';

import { connect } from 'react-redux';
import { toggleComments } from '../constants/actions';

class CommentBox extends React.Component {

  componentDidMount() {
       const { store } = this.context;
       this.unsubscribe = store.subscribe( () => this.forceUpdate() )
   }

   componentWillUnmount() {
       this.unsubscribe();
   }

  _getComments(comments){
      return comments.map( comment => {
          return(
              <Comment key={comment.id} comment={comment}  />
          );
        }
      );
  }
  _getCommentsTitle(count){
    if (count > 1){
      return `${count} comments`;
    } else if (count === 1) {
      return "1 comment";
    } else {
      return "No comments yet";
    }
  }

  _getToggleButtonText(showComments){
    if (showComments){
      return "HIDE COMMENTS"
    }else{
      return "SHOW COMMENTS"
    }
  }

  _toggleComments(event){
    event.preventDefault();
    this.props.dispatch(toggleComments());
  }

  render() {
    const { comments, showComments } = this.context.store.getState();

    const commentList = this._getComments(comments);
    let buttonText = this._getToggleButtonText(showComments);
    let commentsCount = commentList.length;
    let commentsNodes;
    if (showComments){
      commentsNodes =
        <div className="comment-list">
          {commentList}
        </div>;
    }
    let toggleButton;
    if (commentsCount > 0) {
      toggleButton =
        <div className="toggle-container">
          <button className="comments-toggle" onClick={this._toggleComments.bind(this)}>{buttonText}</button>
        </div>;
    }

    return (
      <div className="comment-box">
        <h3>{this.props.title}</h3>
        <CommentForm addComment={()=>console.log("add comment")}/>
        <div id="wrapper1">
          <div className='comment-count-container'>
            <h4 className="comment-count">{this._getCommentsTitle(commentsCount)}</h4>
          </div>
          {toggleButton}
        </div>
        {commentsNodes}
      </div>
    );
  }

}

CommentBox.contextTypes = {
  store: React.PropTypes.object
}

CommentBox.defaultProps = {
  title: "React Comment Box",
  comments: [],
  showComments: true
}

CommentBox = connect()(CommentBox);

export default CommentBox;
