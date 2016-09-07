import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component {

  render() {
    let comment = this.props.comment;
    return (
      <div className="comment">
        <p className="comment-header">{comment.author}</p>
        <p className="comment-body">{comment.body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={this._handleDelete.bind(this)}>
            Delete comment
          </a>
        </div>
        {/* <Button text="Click me" name={comment.author}/> */}
      </div>
    );
  }

  _handleDelete(event){
    event.preventDefault();
    if (confirm('Are you sure?')) {
      this.props.onDelete(this.props.comment);
    }
  }

}

const Button = (props) => {
  let author = props.name;
  return(
     <button type="button" onClick={() => alert(`Thanks ${author}`)}>{`${props.text} ${author}`}</button>
  )
}


export default Comment;
