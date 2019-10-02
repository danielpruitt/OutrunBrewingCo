import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Age from './Pages/Age';
import Landing from './Pages/Landing';
import NotOldEnough from './Pages/NotOldEnough';
function App() {
  return (

    <HashRouter basename='/'>
      <div>

        <Switch>
          <Route exact path='/' component={Age}/>
          <Route exact path='/Home' component={Landing}/>
          <Route exact path='/notoldenough'component={NotOldEnough}/>
          <Route component={NotOldEnough}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
