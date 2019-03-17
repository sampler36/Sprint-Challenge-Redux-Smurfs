import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions";
import { selectSmurf } from "../actions";
import { deleteSmurf  } from "../actions";

class Smurfs extends Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }
  handleDelete = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.props.id)
}

  render() {
    return (
      <div className="Smurfs">
      
        <ul>
          {this.props.smurfs.map((smurf) => {
            return (
              <div
                className={smurf.selected ? "selected-smurf smurf" : "smurf"}
                onClick={() => this.props.selectSmurf(smurf.id)}
                key={smurf.name}
              >
                <h3>{smurf.name}</h3>
                <strong>{smurf.height} cm</strong>
                <p>{smurf.age} smurf years old</p>
              </div>
            );
          })}
        </ul>
{/* the button in smurfs not yet operational so i have to select from smurfs then delete in smurf form */}
        {/* <form>
        <button className="smurform" onClick={this.handleDelete}>Delete Smurf</button>
        </form> */}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStatetoProps,
  { fetchSmurf, selectSmurf, deleteSmurf }
)(Smurfs);
