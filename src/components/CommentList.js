import React from 'react';

import Comment from './Comment';

const CommentList = ( {comments, showComments, onDeleteComment, onToggleComment} ) => {

  let commentsCount = comments.length;
  let buttonText = showComments ? "HIDE COMMENTS" : "SHOW COMMENTS";

  let toggleButton, commentsTitle;
  if (commentsCount > 0) {
    toggleButton =
      <div className="pull-right">
        <button className="btn btn-default btn-xs" onClick={()=> onToggleComment()}>{buttonText}</button>
      </div>;

      if (commentsCount > 1){
        commentsTitle = `${commentsCount} comments`;
      } else {
        commentsTitle =  "1 comment";
      }

  } else {
    commentsTitle = "No comments yet";
  }

  let commentNodes;
  if (showComments){
    commentNodes =
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Comment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {comments.map( comment =>
            <Comment key={comment.id} comment={comment} onDelete={() => onDeleteComment(comment.id)} />
          )}
        </tbody>
      </table>
    </div>;

  }

  return(

    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          {commentsTitle}
          {toggleButton}
        </h3>        
      </div>
      {commentNodes}
    </div>
  );

}

export default CommentList;
