import React from 'react';
import NavBar from './components/navbar';
import BugList from './components/bugList';
import BugAdder from './components/bugAdder';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BugAdder />
      <BugList />
    </React.Fragment>
  );
}

export default App;
