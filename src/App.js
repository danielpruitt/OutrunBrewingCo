import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing';
import NotOldEnough from './Pages/NotOldEnough';

function App() {
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/notoldenough'component={NotOldEnough}/>
          <Route component={NotOldEnough}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
