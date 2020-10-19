import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bugRemoved, bugSolved } from '../redux/actions';

class Bug extends Component {

    render() {
        const bug = this.props.data;
        let badgeClass = 'badge badge-' + (bug.resolved ? 'success' : 'danger');
        console.log(badgeClass);

        return (
            <div className="container">
                <div className="row m-2">
                    <span className="badge badge-warning">{bug.id}</span>
                    <p>{bug.description}</p>
                    <span className={badgeClass}>{bug.resolved ? 'Solved' : 'Unsolved'}</span>
                </div>
                <div className="row">
                {bug.resolved === false ? <button className="btn btn-primary" onClick={() => this.props.bugSolved(bug.id)}>Solve</button> : null}
                <button className="btn btn-danger" onClick={() => this.props.bugRemoved(bug.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

// Maps all the data extracted from the state to the props
const mapStateToProps = (state) => {
    return {
        bugs: state.bugReducer
    };
};
// Maps all the dispatcher to the props
const mapDispatchToProps = () => {
    return {
        bugRemoved,
        bugSolved
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(Bug);
