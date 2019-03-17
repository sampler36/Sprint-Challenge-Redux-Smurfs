// import React, { Component } from "react";
// import "./App.css";
// import SmurfForm from "./SmurfForm";
// import Smurfs from "./Smurfs";
// import Nav from './Nav'
// import Home from './Home'
// import { BrowserRouter as Router, Route } from "react-router-dom";

// /*
//  to wire this component up you're going to need a few things.
//  I'll let you do this part on your own. 
//  Just remember, `how do I `connect` my components to redux?`
//  `How do I ensure that my component links the state to props?`
//  */

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//         <Nav />
//         <Route path='/'component={Home} />
//         <Route exact path='/smurfs' component={Smurfs} />
//         <Route className="form" path='/smurf-form' component={SmurfForm} />
//         </div>
//       </Router>

//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import SmurfForm from './SmurfForm'
import Smurfs from "./Smurfs"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
        <SmurfForm />
      </div>
    );
  }
}

export default App;