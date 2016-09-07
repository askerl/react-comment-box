import React from 'react';
import ReactDOM from 'react-dom';

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
    let autor = this._author.value;
    let comentario = this._body.value;
    this.props.addComment(autor,comentario);
  }

}

export default CommentForm;
