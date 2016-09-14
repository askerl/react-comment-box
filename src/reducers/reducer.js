
// import actions
import { ADD_COMMENT, DELETE_COMMENT, TOGGLE_COMMENTS } from '../constants/actions';

const initialState = {
  comments : [],
  showComments: true
};

const commentsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_COMMENT:

      let {author,body} = action;
      if (author == "" || body == "") {
        alert("You must enter name and comment");
        return state;
      }
      const newComment = {
        id: state.comments.length + 1,
        author,
        body
      }
      return Object.assign({},state,{ comments: [...state.comments, newComment]});

    case DELETE_COMMENT:

      if (confirm("Are you sure?")) {

        // use spread operator to clone state comments list
        let newList = state.comments.filter(item => item.id !== action.id);
        // set the state comment list to the new list
        return Object.assign({},state,{ comments: newList })

      } else {
        return state
      }

    case TOGGLE_COMMENTS:

      return Object.assign({},state,{ showComments: !state.showComments })

    default:
      return state
  }
}

export default commentsReducer;
