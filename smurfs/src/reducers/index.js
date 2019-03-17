/*
  Be sure to import in all of the action types from `../actions`
*/
import * as types from "../actions"

//Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState =
{
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  selectedId: null,
  error: null
}

/*
  You"ll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for "combineReducers" in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const reducer = (state = initialState,  action) => {
  switch (action.type) {
    case types.FETCH_SMURF:
      return (
        { ...state, fetchingSmurfs: true, smurfs: action.payload })

    case types.FETCHED_SMURF:
      return (
        { ...state, fetchingSmurfs: false })

    case types.ADD_SMURF:
      return (
        { ...state, addingSmurf: true, smurfs: action.payload })

    case types.SAVED_SMURF:
      return (
        {  ...state, addingSmurf: false })

    case types.DELETE_SMURF:
      return (
        { ...state, deletingSmurf: true, smurfs: action.payload })

    case types.DELETED_SMURF:
      return (
        { ...state, deletingSmurf: false })

// select action to delete the smurf off the list
    case types.SELECT_SMURF:
      return (
        {
          ...state, selectedId: action.id,
          smurfs: state.smurfs.map(smurf =>
            (smurf.selected || smurf.id === action.id)
              ? { ...smurf, selected: !smurf.selected }
              : smurf
          )
        }
      )

    case types.ERROR:
      return (
        {
          ...state,
          error: action.error
        }
      )

    default:
      return state;
  }
};