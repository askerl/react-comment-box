import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';

class CommentBox extends React.Component {

  constructor(){
    super();
    this.state = {
      showComments: true,
      comments: []
    }
  }

  componentWillMount() {
    this._fetchComments();
  }

  _fetchComments(){
    this.setState({
      comments: this.props.initList
    });
  }

  _getComments(){
      let comments = this.state.comments;
      return comments.map( comment => {
          return(
              <Comment key={comment.id} comment={comment} onDelete={this._deleteComment.bind(this)}/>
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

  _getToggleButtonText(){
    if (this.state.showComments) {
      return "Hide comments"
    } else {
      return "Show comments"
    }
  }

  render() {
    const comments = this._getComments();
    let buttonText = this._getToggleButtonText();
    let commentsCount = comments.length;
    let commentsNodes;
    if (this.state.showComments){
      commentsNodes =
        <div className="comment-list">
          {comments}
        </div>;
    }
    let commentButton;
    if (commentsCount > 0) {
      commentButton =
        <div className="toggle-container">
          <button className="comments-toggle" onClick={this._toggleComments.bind(this)}>{buttonText}</button>
        </div>;
    }

    return (
      <div className="comment-box">
        <h3>{this.props.title}</h3>
        <CommentForm addComment={this._addComment.bind(this)}/>
        <div id="wrapper1">
          <div className='comment-count-container'>
            <h4 className="comment-count">{this._getCommentsTitle(commentsCount)}</h4>
          </div>
          {commentButton}
        </div>
        {commentsNodes}
      </div>
    );
  }

  _toggleComments(){
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _addComment(author,body){
    if (author == "" || body == "") {
      alert("You must enter your name and the comment");
      return;
    }
    const newComment = {
      id: this.state.comments.length + 1,
      author,
      body
    }
    this.setState({
      comments: this.state.comments.concat([newComment])
    });
  }

  _deleteComment(comment){
    // use spread operator to clone state comments list
    let newList = [...this.state.comments];
    let cIndex = newList.indexOf(comment);
    // remove the selected comment from the new List
    newList.splice(cIndex,1);
    // set the state comment list to the new list
    this.setState({
       comments: newList
    });

  }

}

CommentBox.defaultProps = {
  title: "React Comment Box",
  initList: []
}

export default CommentBox;
