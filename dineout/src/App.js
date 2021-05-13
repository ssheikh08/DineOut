import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import LoginMerchant from "./components/merchantlogin.component";
import SignUpMerchant from "./components/merchantsignup.component";
import AppointmentApp from "./components/reservation.component";
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import RestaurantSignup from './components/registerrestaurant.component';

function App() {
  return (
    <MuiThemeProvider>
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Dine-Out</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className ="nav-item">
                <Link className = "nav-link" to ={"/merchant-signin"}>Merchant Sign in </Link>
              </li>
              <li className ="nav-item">
                <Link className = "nav-link" to ={"/merchant-signup"}>Merchant Sign up </Link>
              </li>
              <li className ="nav-item">
            <div className = "nav-link" type = "text" > </div> </li>
            </ul>
            
          </div>
        </div>
      </nav>
      
      <div className="outer">
        
        <div className="inner">

         
          
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path = "/merchant-signin" component ={LoginMerchant}/>
            <Route path = "/merchant-signup" component = {SignUpMerchant}/>
          
            <Route path = "/reservation/:id" component = {AppointmentApp}/>
            <Route path = "/restaurantSignup" component = {RestaurantSignup}/>
            
            
          
          </Switch>
        </div>
        <div className="newinner">

         
          
<Switch>

<Route path="/restaurant/:id" component={RestaurantDetails}/>
  <Route path="/home" component={Home} />
  

</Switch>
</div>
    
      </div>
    </div></Router>
     </MuiThemeProvider>
  );
}

export default App;
