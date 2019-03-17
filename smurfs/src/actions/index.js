/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const ERROR = 'ERROR';
export const DELETE_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const SAVED_SMURF = 'SAVED_SMURF';
export const SELECT_SMURF = 'SELECT_SMURF';
const theSmurfsURL = 'http://localhost:3333/smurfs';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurf = () => {
  const request = axios.get(theSmurfsURL)
  return (dispatch) => {
      request.then(({data})=> {
          dispatch({type: FETCH_SMURF, payload: data})     //payload is a property that holds data in redux action object
      })
      .then(()=>{
          dispatch({type: FETCHED_SMURF})
      })
      .catch(err=> {
          dispatch({type: ERROR, error: err})            
      });
  };
};

export const addSmurf = smurf => {
  const request = axios.post(theSmurfsURL, smurf)
  return (dispatch) => {
      request.then(({data})=> {
          dispatch({type: ADD_SMURF, payload: data})
      })
      .then(()=>{
          dispatch({type: SAVED_SMURF})
      })
      .catch(err=> {
          dispatch({type: ERROR, error: err})            
      });
  };
};

export const selectSmurf = id => ({
  type: SELECT_SMURF,
  id        
})

export const deleteSmurf = id => {    
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`)
  return (dispatch) => {
      request.then(({data})=> {
          dispatch({type: DELETE_SMURF, payload: data})
      })
      .then(()=>{
          dispatch({type: DELETED_SMURF})
      })
      .catch(err=> {
          dispatch({type: ERROR, error: err})            
      })
  }
}