import * as types from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
export const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = (state, action) => {
  switch (action.types) {
    case types.ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      };

    case types.GET_SMURF:
      return {
        ...state,
        fetchingSmurf: true
      };
      case types.UPDATE_SMURF:
      return {
        ...state,
        updatingSmurf: true
      };
      case types.DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    default:
      return state;
  }
};
