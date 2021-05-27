import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar sources={[{ url: '/', name: 'Home' }, { url: '/shop', name: 'Shop' }]} />
      <Switch>
        <Route path='/shop' component={Shop} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}
