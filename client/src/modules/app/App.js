import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './reducers';

import Landing from './components/Landing';

import '../../styles/_app.scss';

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadUser() {
    dispatch(fetchUser());
  }
});

const mapStateToProps = state => ({
  user: state.user
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
