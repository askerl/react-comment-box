
// import actions
import { ADD_COMMENT, DELETE_COMMENT, TOGGLE_COMMENTS } from '../constants/actions';

const initialState = {
  comments : [],
  showComments: true
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:

      console.log("Adding comment", action);

      let {author,body,id } = action;
      if (author == "" || body == "") {
        alert("You must enter name and comment");
        return state;
      }
      const newComment = {
        id,
        author,
        body
      }
      return Object.assign({},state,{ comments: state.comments.concat([newComment])});

    case DELETE_COMMENT:

      console.log("Deleting comment", action);
      console.log("before delete:",state.comments);
      // use spread operator to clone state comments list
      let newList = state.comments.filter(item => item.id !== action.id);
      console.log("after delete:",newList);
      // set the state comment list to the new list
      return Object.assign({},state,{ comments: newList })

    case TOGGLE_COMMENTS:

      console.log("Toggling comments", action);

      let show = !state.showComments;
      return Object.assign({},state,{ showComments: show })

    default:
      return state
  }
}

export default commentsReducer;
