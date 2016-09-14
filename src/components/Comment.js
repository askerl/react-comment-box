import React from 'react';

const Comment = ( {comment, onDelete} ) => (

  <tr>
    <th>{comment.id}</th>
    <th>{comment.author}</th>
    <th>{comment.body}</th>
    <th>
      <div className="pull-right">
        <button type="button" className="close" aria-label="Close" onClick={onDelete} title="Delete comment"><span aria-hidden="true">&times;</span></button>
      </div>
    </th>
  </tr>

);

export default Comment;
