import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../constants/actions';

class CommentForm extends React.Component {

  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={(elem) => this._author = elem}/>
          <textarea placeholder="Comment:" ref={(elem) => this._body = elem}></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post comment</button>
        </div>
      </form>
    );
  }

  _handleSubmit(event){
    event.preventDefault();
    let author = this._author.value;
    let body = this._body.value;
    this.props.dispatch(addComment(author,body));
  }

}

CommentForm = connect()(CommentForm);

export default CommentForm;
