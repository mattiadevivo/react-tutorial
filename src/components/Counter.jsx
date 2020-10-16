import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.state.count}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    /// Returns css classes to be assigned to badge depending on count value
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {count} = this.count;
        count === 0 ? 'Zero' : count;
    }
}

export default Counter;