import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';
import ApplyOnline from './components/ApplyOnline';
import Track from './components/Track';
import PickupRequest from './components/PickupRequest';
import Login from './components/Login';

import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { connect } from "react-redux";

import {
  GetUsers
} from "./redux/actions/taskAction";

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.GetUsers();
  }

  render() {
    console.log("this.props.tasksss ", this.props.Loading);

    return (
      <Router>
        <div className="App">
          <Header />
            
            {/* all components */} 
            <div>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/cargo-website'}>
                  <Redirect to={process.env.PUBLIC_URL + '/login'} />
                </Route>
  
                <Route exact path="/">
                  <Redirect to={process.env.PUBLIC_URL + '/login'} />
                </Route>
  
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/home'} component={Home}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/applyOnline'} component={ApplyOnline}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/track'} component={Track}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/pickupRequest'} component={PickupRequest}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}></Route>
              </Switch>
            </div>
  
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  Loading: state.task.loading
});

const mapDispacthToProps = dispatch => {
  return {
    GetUsers: () => dispatch(GetUsers())    
  };

};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);
