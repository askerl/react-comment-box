/*
 * action types
 */

let nextId = 0;

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const TOGGLE_COMMENTS = 'TOGGLE_COMMENTS';
/*
 * action creators
 */

export function addComment(author,body) {
  return {
    type: ADD_COMMENT,
    id: ++nextId,
    author,
    body
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function toggleComments() {
  return {
    type: TOGGLE_COMMENTS
  }
}
