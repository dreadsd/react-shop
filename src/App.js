import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';

export default function App() {
  return (
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
      </ul>
      <Switch>
        <Route path='/shop' component={Shop} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}
