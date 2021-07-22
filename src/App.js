
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, link, NavLink, Switch } from 'react-router-dom';
// import Dass from './Dass';
import Home from './pages/homepage';
import DashBoard from './pages/DashBoard';
import Product from './pages/product';
import Coleader from './pages/coleader';
import reactDom from 'react-dom';
// const routing=(
// <Router>
// <div>
//   <Route path="/" component={Home} />
//   <Route path="/d" component={DashBoard} />
//   <Route path="/p" component={Product} />
//   <Route path="/c" component={Coleader} />
// </div>
// </Router>
// )
// reactDom.render(routing, document.getElementById('root'));

 class Login extends Component {
  render() {
    return (
     <Router>
<div>
  <Route exact path="/" component={Home} />
  <Route path="/d" component={DashBoard} />
  <Route path="/p" component={Product} />
  <Route path="/c" component={Coleader} />
</div>
</Router>
    )
  }
}
export default Login