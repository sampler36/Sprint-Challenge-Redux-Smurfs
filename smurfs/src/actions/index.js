
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURF = "GET_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const ERROR = "ERROR";


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


const theSmurfsURL = 'http://localhost:3333/smurfs';

// export const addSmurf = smurf => {
//   const request = axios.post(theSmurfsURL, smurf)
//   return (dispatch) => {
//       request.then(({data})=> {
//           dispatch({type: ADD_SMURF, payload: data})
//       })
//       .catch(err=> {
//           dispatch({type: ERROR, error: err})            
//       });
//   };
// };

export const fetchSmurf = () => dispatch => {
  // implement
    fetch(theSmurfsURL)
      .then(res => res.json())
      .then(smurf => {
        dispatch({ type: GET_SMURF, payload: smurf });
      });
  };
  
  export const addSmurf = smurf => dispatch => {
  // implement
    fetch(theSmurfsURL, { method: 'POST', body: JSON.stringify(smurf) })
      .then(res => res.json())
      .then(smurf => {
        dispatch({ type: ADD_SMURF, payload: smurf });
      });
  };
  export const deleteSmurf = smurf => dispatch => {
    // implement
      fetch(theSmurfsURL, { method: 'GET', body: JSON.stringify(smurf) })
        .then(res => res.json())
        .then(smurf => {
          dispatch({ type: DELETE_SMURF, payload: smurf });
        });
    };

    export const updateSmurf = smurf => dispatch => {
      // implement
        fetch(theSmurfsURL, { method: 'POST', body: JSON.stringify(smurf) })
          .then(res => res.json())
          .then(smurf => {
            dispatch({ type: UPDATE_SMURF, payload: smurf });
          });
      };

      // export function deleteSmurf(id) {
      //   return {
      //     type: types.DELETE_SMURF,
      //     payload: id,
      //   };
      // }
      
      // export function addSmurf(name, age, height) {
      //   return {
      //     type: types.ADD_SMURF,
      //     payload: {
      //       id: uuid(),
      //       name,
      //       age,
      //       height,
      //     },
      //   };
      // }
      
 