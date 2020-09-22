import React from 'react';
import Home from './Screen/Home/Home';
import Contact from './Screen/Contact/Contact';
import './App.css';
import Navigation from './Screen/Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path='/Home' component={Home} exact />
        <Route path='/Contact' component={Contact} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
