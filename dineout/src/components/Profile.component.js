/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
    
    constructor(props) {
    super(props);
   
    this.state = {
      
      modifiedData: {
        'username':'',
        'password': '',
        'firstName': '',
        'lastName': '',
        'email': ''
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
          const response = await axios.post('https://dine-out-syracuse.herokuapp.com/signups',this.state.modifiedData);
          console.log(response);
        } catch (error) {
          this.setState({ error });
        }
        this.setState({
          userLoggedIn: true
        })
      };

     componentDidMount(){
       this.getUserDetails();
       
     }

    getUserDetails = async () => {
      const id = localStorage.getItem('userID');
      const url = "https://dine-out-syracuse.herokuapp.com/signups/" +id;
      const usersData = await axios.get(url);
      console.log(usersData.data.username);
     
      this.setState({
        modifiedData:{
        username: [usersData.data.username],
        password: [usersData.data.password],
        firstName: [usersData.data.firstName],
        lastName: [usersData.data.lastName],
        email: [usersData.data.email],
        
        }
    })
    
    
    }
     

    render() {
      const {modifiedData} = this.state;
      console.log(modifiedData);
      if(this.state.userLoggedIn){
        return (<Redirect to="/sign-in" />);

      }
        return (
            <div className="App">
              
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Dine-Out</Link>
          
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Logout</Link>
              </li>
              </ul>
              
              

              </div>
      </nav>
      
      <div className="outer">
        
        <div className="newinner">
        <form onSubmit = {this.handleSubmit}>
                    <h3>Profile</h3>
                    
                    
                    <div className="form-group">
                    <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>User name</label>
                        </div>
                        <input name="username" className="form-control" type="text" placeholder="Enter your User Name" onChange = {this.handleInputChange} value={modifiedData.username}/>
                       </div>


                       <div className="form-group">
                       <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>First Name</label>
                        </div>
                        <input name="firstName" className="form-control" type="text" placeholder="Enter Your First Name"onChange = {this.handleInputChange} value={modifiedData.firstName}/>
                        </div>
                    
                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>Last name</label>
                        </div>
                        <input name="lastName" className="form-control" type="text"  onChange = {this.handleInputChange} value={modifiedData.lastName}/>
                        </div>

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 18 + 'em'}}>
                        <label>Email</label>
                        </div>
                        <input name="email" className="form-control" type="email" placeholder="Enter email address" onChange = {this.handleInputChange} value={modifiedData.email}/>
                        </div>

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>Password</label>
                        </div>
                        <input name="password" className="form-control" type="password" placeholder="Enter Your Password" onChange = {this.handleInputChange} value={modifiedData.password}/>
                        </div>
                        
                        
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button> 
                        
                    
                </form>
            </div>
            </div>
            </div>
            
          
        );
    }
}