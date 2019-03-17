import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, deleteSmurf } from '../actions'

class SmurfForm extends Component {
    constructor(props) {
    super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAdd = e => {
        e.preventDefault();

        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        };

        this.props.addSmurf(smurf);
        this.setState({ name: '', age: '', height: '' })
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteSmurf(this.props.id)
    }

    render() {
        return (
            <div className="smurform">
                <form>
                    <input
                        className="smurform"
                        onChange={this.handleInputChange}
                        placeholder="Name"
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        className="smurform"
                        onChange={this.handleInputChange}
                        placeholder="Age"
                        value={this.state.age}
                        name="age"
                    />
                    <input
                        className="smurform"
                        onChange={this.handleInputChange}
                        placeholder="Height"
                        value={this.state.height}
                        name="height"
                    />
                    <button className="smurform" onClick={this.handleAdd}>Add Smurf</button>
                    <button className="smurform" onClick={this.handleDelete}>Delete Smurf</button>
                </form>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        id: state.selectedId
    }
}
export default connect(mapStatetoProps, { addSmurf, deleteSmurf })(SmurfForm)
