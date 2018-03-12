import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './components/Landing';

import '../../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({

});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
