import React,{ Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./home"
import Category from "./category"
import Products from "./Products"
import Login from "./login"
import Admin from './admin'

import { Link, Route, Switch } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

           /* Link components are used for linking to other views */
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Admin area</Link></li>          
          </ul>
         </nav>

          /* Route components are rendered if the path prop matches the current URL */
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>
           <Route path="/login" component={Login}/>
           <Route path="/admin" component={Admin}/>
           </Switch>
      </div>
    )
  }
}

export default App;
