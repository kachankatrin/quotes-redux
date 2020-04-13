import React from 'react';
import {Route, Switch,Link} from 'react-router-dom';
import AllQuotes from './containers/AllQuotes';
import Nav from './components/Nav'
import './App.css';
import RandomQuotes from './containers/RandomQuotes';

function App() {
  return (
    <div>
    <Nav>
    <Link to='/'>All Quotes</Link>
    <Link to='/random'>Random Quotes</Link>
    </Nav>
    <Switch>
      <Route path='/' exact component={AllQuotes}>
      </Route>
      <Route path='/random' component={RandomQuotes}></Route>
    </Switch>
    </div>
  );
}
export default App;
