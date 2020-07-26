import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <>
          <Route path='/home' exact component={Form} />
          <Route path='/next' component={Form} />
          <Route path='/last' component={Form} />
      </>
    );
  }
}

export default App;