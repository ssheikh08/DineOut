import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
import RestaurantHome from './components/RestaurantHome/RestaurantHome';
import Profile from './components/Profile.component';
import UserReservations from './components/Reservations/userReservations'


function App() {
  return (
    <MuiThemeProvider>
  <Router>
    <div className="App">
      

         
          
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path = "/merchant-signin" component ={LoginMerchant}/>
            <Route path = "/merchant-signup" component = {SignUpMerchant}/>
          
            <Route path = "/reservation/:id" component = {AppointmentApp}/>
            <Route path = "/restaurantSignup/:id" component = {RestaurantSignup}/>
            <Route path = "/home" component = {Home}/>
            <Route path = "/restaurant/:id" component = {RestaurantDetails}/>  
            <Route path = "/restaurantHome/:id" component = {RestaurantHome}/>
            <Route path = "/profile" component = {Profile}/>
            <Route path = "/userReservations/:id" component = {UserReservations}/>
            
            
          
          </Switch>
        </div>
        

         

</Router>
     </MuiThemeProvider>
  );
}

export default App;
