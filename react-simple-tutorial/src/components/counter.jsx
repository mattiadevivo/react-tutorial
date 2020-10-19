import React, { Component } from 'react';

class Counter extends Component {

    /*constructor(props) {
        super(props);
        // Since handleIncrement is not called in obje.method way it does not have access to 'this' property
        // or we can assign handleIncrement = () => {...}
        //this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    /* renderTags() {
        if (this.state.tags.length === 0) return <p>There is no tags</p> // null to display nothing
        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    } */

    /// Called after the component has been updated
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.state.counter.value) {
            // Performa AJAX call
        }
    }

    /// Called just before the component is removed from the DOM
    componentWillUnmount() {
        console.log();
    }

    render() {
        return (
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                {/*this.state.tags.length === 0 && 'Please insert a new tag!' JS truthy & falsy */}
            </div>
        );
    }

    /// Returns css classes to be assigned to badge depending on count value
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        // This is called object destructuring, it allows us to extract data from arrays, objects, maps and sets
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    /* handleIncrement(product) {
        this.setState({value: this.state.value + 1});
    } */
}

export default Counter;