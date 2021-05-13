/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

export default class SignUp extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      modifiedData: {
        'username': '',
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

    render() {
      const {modifiedData} = this.state;
      if(this.state.userLoggedIn){
        return (<Redirect to="/sign-in" />);

      }
        return (
            <div className="App">
        <form onSubmit = {this.handleSubmit}>
                    <h3>Register</h3>
                    
                    
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
                        <input name="lastName" className="form-control" type="text" placeholder="Enter Your Last Name" onChange = {this.handleInputChange} value={modifiedData.lastName}/>
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
        );
    }
}