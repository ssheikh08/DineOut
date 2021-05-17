import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class LoginMerchant extends Component {   constructor(props) {
    super(props);
    this.state = {
      modifiedData: {
        'email': '',
        'password': ''
      }
    }
}

handleInputChange = ({ target: { name, value } }) => {

    this.setState(prev => ({
      ...prev,
      modifiedData: {
        ...prev.modifiedData,
        [name]: value,
      },
    }));
  };

    handleSubmit = async e => {
      
      e.preventDefault();
        try {
          const response = await axios.get('https://dine-out-syracuse.herokuapp.com/merchants');
          console.log(this.state.modifiedData);
          var result = response.data;
          const merchID = (uName, password) =>
          {
            for (var items in result)
            { 
              
              if(result[items]['email']===uName)
              {
                if (result[items]['password']=== password){
                  
                  //localStorage.setItem('rememberMe', "rememberMe");
                  this.setState({
                    userLoggedIn: true
                  })
                  //localStorage.clear();
                  localStorage.setItem('merchID', result[items]['id']);
                  
                }
                else {
                
                  alert('Login failed. Enter correct password or reset password');
                  
                }
              }
            }
          }
        merchID(this.state.modifiedData.email, this.state.modifiedData.password);
          
        } catch (error) {
          this.setState({ error });
        }
      
      };

        render() {
            const{modifiedData} = this.state;
            
            const merID =  localStorage.getItem('merchID');
            const path = "/restaurantHome/"+ merID;
            if(this.state.userLoggedIn){
              
              return (<Redirect to = {path}/>);
      
            }
              return (
                <div className ="App">
                  
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Dine-Out</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>SignIn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>SignUp</Link>
              </li>
              <li className ="nav-item">
                <Link className = "nav-link" to ={"/merchant-signin"}>Merchant SignIn </Link>
              </li>
              <li className ="nav-item">
                <Link className = "nav-link" to ={"/merchant-signup"}>Merchant SignUp </Link>
              </li>
              <li className ="nav-item">
            <div className = "nav-link" type = "text" > </div> </li>
            </ul>
            
          
        </div>
      </nav>
      
      <div className="outer">
        
        <div className="newinner">
                  <form onSubmit = {this.handleSubmit}>
      
                      <h3>Merchant Log in</h3>
                      <div className="form-group">
                      <div id="mem" >
      
                          <label>Email</label>
                          </div>
                          <div id = "nen" >
                          <input name="email" type="email" className="form-control" placeholder="Enter email" onChange={this.handleInputChange} value={modifiedData.email} />
                          </div>
                          </div>
      
                          <div className="form-group">
                          <div id="mem" >
                          <label>Password   </label>
                          </div>
                          <div id = "nen" >
                          <input name="password" type="password" className="form-control" placeholder="Enter password" onChange = {this.handleInputChange} value={modifiedData.password} />
                          </div>
                          </div>
      
                          <div className="form-group">
                          <div className="custom-control custom-checkbox" style= {{marginRight: 12 + 'em'}}>
                              <input type="checkbox"  className="custom-control-input" id="customCheck1" />
                                   <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                   </div>
                          </div>
                      
                      
                      
                      <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                   
                     <p className="forgot-password text-right">
                          Forgot <a href="#">password?</a>
                      </p>
                      
                  </form>
                  </div>
                  </div>
                  </div>
                  
              );
          }
}
