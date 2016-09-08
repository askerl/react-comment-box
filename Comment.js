import React from 'react';
import ReactDOM from 'react-dom';

import NumInput from './NumInput.js';

class Comment extends React.Component {

  constructor(){
    super();
    this.state = {
      angerLevel: 0,
    }
  }

  componentWillMount() {
    this.setState({
      angerLevel: this.props.comment.angerLevel
    });
  }

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
        <NumInput
          ref="anger"
          min={0}
          max={100}
          step={1}
          val={+this.state.angerLevel}
          label="Anger level"
          type="range"
          onUpdate={this._updateAngerLevel.bind(this)}/>
      </div>
    );
  }

  _handleDelete(event){
    event.preventDefault();
    if (confirm('Are you sure?')) {
      this.props.onDelete(this.props.comment);
    }
  }

  _updateAngerLevel(event){
    event.preventDefault();
    let val = ReactDOM.findDOMNode(this.refs.anger.refs.num).value;
    this.setState({
       angerLevel: val
    });
    this.props.onAngerUpdate(this.props.comment, val);
  }


}

const Button = (props) => {
  let author = props.name;
  return(
     <button type="button" onClick={() => alert(`Thanks ${author}`)}>{`${props.text} ${author}`}</button>
  )
}


export default Comment;
