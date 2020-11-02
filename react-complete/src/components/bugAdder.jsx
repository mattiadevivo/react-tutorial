import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bugAdded} from '../redux/actions';

class BugAdder extends Component {

    constructor(props){
        super(props);
        this.state = {value: ''};
        // bind this property to current instance
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleClick = () => {
        if(this.state.value.trim().length > 0){
            this.props.bugAdded(this.state.value.trim());
            this.setState({value: ''});
        } 
        else alert('Description cannot be empty!');
    };

    render() {
        return (
            <div className="input-group mb-3 sm">
                <input type="text" className="form-control" placeholder="Bug Description" aria-label="Bug Description" aria-describedby="button-addon2" value={this.state.value} onChange={this.handleChange} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>Add</button>
                </div>
            </div>);
    }
}


// Maps all the dispatcher to the props
const mapDispatchToProps = () => {
    return {
        bugAdded
    }
};

export default connect(null, mapDispatchToProps())(BugAdder);

