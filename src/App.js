import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  constructor(props) {
    super(props);
    console.log('App - constructor');
    // Place to initialize state - Remember to take props if you want to use them
  }

  componentDidMount() {
    // Place to perform AJAX calls
    console.log('App - mounted');
    // this.setState({});
  }

  render() {
    console.log('App - rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counters={this.state.counters}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
