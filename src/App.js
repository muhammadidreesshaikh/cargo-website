import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';
import Apply from './components/Apply';
import Track from './components/Track';
import Login from './components/Login';

import { 
  BrowserRouter as Router, 
  Route,
  Switch   
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          
          {/* all components */} 
          <div>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/apply' component={Apply}></Route>
              <Route exact path='/track' component={Track}></Route>
              <Route exact path='/login' component={Login}></Route>
            </Switch>
          </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
