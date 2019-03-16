import React, { Component } from "react";
import { connect } from 'react-redux';


class Smurfs extends Component {

    render() {
        return (
            <div className="">
                <ul>
                    {this.props.smurfs.map((smurf) => {
                        return (
                         <div 
>
                                <h3>{smurf.name}</h3>
                                <strong>{smurf.height} tall</strong>
                                <p>{smurf.age} smurf years old</p>                
                            </div >  
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        smurfs: state.smursf
    }
}

export default connect(mapStatetoProps(Smurfs));
