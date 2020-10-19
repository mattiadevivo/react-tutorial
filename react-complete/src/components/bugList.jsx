import React from 'react';
import {useSelector} from 'react-redux';
import Bug from './bug';

const BugList = () => {
    const bugs = useSelector(state => state.bugReducer);
    console.log(bugs);
    return (
        <React.Fragment>
            {bugs.map(bug => (<Bug key={bug.id} data={bug}/>))}
        </React.Fragment>
    );
};

export default BugList;