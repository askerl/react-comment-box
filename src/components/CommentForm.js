import React from 'react';

import { connect } from 'react-redux';
import { addComment } from '../constants/actions';

import Panel from './Panel';

let CommentForm = ( { dispatch } ) => {

    let input,textarea;

    let form =
      <form onSubmit={()=> dispatch(addComment(input.value,textarea.value))}>
        <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="author" placeholder="Name" ref={(elem) => input = elem}></input>
            </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <textarea className="form-control" id="comment" placeholder="Comment" ref={(elem) => textarea = elem}></textarea>
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-sm-1 col-sm-11">
            <button type="submit" className="btn btn-primary">Post comment</button>
          </div>
        </div>
      </form>;

    return (
      <div>
        <Panel title={"Join the discussion"} content={form} />
      </div>
    );

}

CommentForm = connect()(CommentForm);

export default CommentForm;
